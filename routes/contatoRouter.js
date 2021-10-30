const contatoRouter = require("express").Router();
const nodemailer = require("nodemailer");
const Contato = require("../models/contato.js");
const { body, validationResult } = require('express-validator');

contatoRouter.post("/", [
  body('nome').isLength({ min: 5, max: 50 }).withMessage("Campo nome deve ter entre 5 à 50 caracteres").not().isEmpty().trim().escape(),
  body('email', "Campo Email Invalido").isEmail().normalizeEmail(),
  body('assunto').isLength({ min: 5, max: 25 }).withMessage("Campo assunto deve ter entre 5 à 25 caracteres").not().isEmpty().trim().escape(),
  body('mensagem').isLength({ min: 10, max: 250 }).withMessage("Campo mensagem deve ter entre 10 à 250 caracteres").not().isEmpty().trim().escape()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send({
      mensagem: {
        tipo: "error",
        conteudo: errors.array()
      }
    })
  }

  const { nome, email, assunto, mensagem } = req.body;
  try {
    // Envia o e-mail
    const output = `
      <h1>Pedido para contato Recebido</h1>
      <p><strong>${nome}</strong> deseja falar com você sobre <strong>${assunto}</strong>, seu e-mail para contato é: ${email}</p>
      <p>${mensagem}</p>
    `

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_ADDRESS,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACESS_TOKEN
      }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `Portfolio <devdiegomatos.com.br>`, // sender address
      to: `${process.env.EMAIL_RECEIVER}`, // list of receivers
      subject: assunto, // Subject line
      text: "E-mail enviado pelo Portfolio", // plain text body
      html: output, // html body
    });

    // Caso de tudo certo, Salva o email no banco de dados
    const novoContato = new Contato({
      _id: info.messageId, // Id da mensagem, assim podemos presquisar por esse id unico futuramente
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem,
    });

    const contatoSalvo = await novoContato.save();

    res.status(201).send({
      mensagem: {
        tipo: "sucesso",
        conteudo: ["E-mail enviado com sucesso !", `ID da mensagem: ${info.messageId}`]
      }
    });

  } catch (error) {
    res.status(500).send({
      mensagem: {
        tipo: "error",
        conteudo: [`Ocorreu um error: ${error}`],
      },
    })
  }
});

module.exports = contatoRouter;

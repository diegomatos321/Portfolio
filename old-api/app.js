// MODULES
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require('helmet');
const app = express();

// MIDDLEWARES
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA BASE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('error', error => console.log("Ocorreu um erro ao conectar na base de dados: ", error));
mongoose.connection.once('open', () => console.log("Conectado na base de dados"));

// ROUTES
const trabalhosRouter = require("./routes/trabalhosRouter");
const contatoRouter = require("./routes/contatoRouter");

// Arquivos
app.use(express.static(path.join(__dirname, "public")));

// ROTAS
app.use("/trabalhos", trabalhosRouter);
app.use("/contato", contatoRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor Ligado !")
});
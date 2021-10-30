const mongoose = require("mongoose");

const ContatoScheme = mongoose.Schema({
    _id: {
        type: String,
        trim: true,
        required: true
    },
    nome: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    assunto: {
        type: String,
        trim: true,
        required: true
    },
    mensagem: {
        type: String,
        trim: true,
        required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
},
{
    _id: false,
    collection: "Contatos"
})

module.exports = mongoose.model("Contato", ContatoScheme)
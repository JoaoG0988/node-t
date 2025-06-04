const mongoose = require("mongoose"); // Importando o mongoose // O mongoose é uma biblioteca do Node.js que fornece uma solução baseada em esquemas para modelar os dados do aplicativo. Ele é usado para interagir com o MongoDB, um banco de dados NoSQL orientado a documentos.

const userSchema = new mongoose.Schema({ // Criando o schema do usuário
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required:true,
        minlength:7,
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
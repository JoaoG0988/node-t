const mongoose = require('mongoose'); // Importando o mongoose

const userSchema = new mongoose.Schema({ // Criando o schema do usuário
    firstname: {
        type:String,
        required:true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type:String,
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
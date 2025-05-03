const express = require('express');
const UserModel = require('../src/database/models/user.model.js'); // Importando o model do usuário

const app = express();

app.use(express.json()); // Middleware para converter o body da requisição em JSON

const port = 8080;

app.get('/home', (req,res) => { // Rota para o caminho /home // Método GET: Pega informações do servidor
    res.contentType("text/html");
    res.status(200).send("<h1>Hello World</h1>"); // enviando um HTML
});


app.get('/users/:id', async (req,res) => { // Método GET: Pega informações do servidor
    try{
        const id = req.params.id; // Pegando o id da requisição

        const user = await UserModel.findById(id); // Método findById: busca o usuário pelo id
        return res.status(200).json(user); // Enviando um JSON
    }catch(error){
        return res.status(500).send(error.message); // Enviando um erro
    }
});


app.get('/users', async (req,res) => {
    try{
        const users = await UserModel.find(); // Método find: busca todos os usuários
        res.status(200).json(users); // Enviando um JSON
    }catch(error){
        return res.status(500).send(error.message); // Enviando um erro
    }
});


app.post('/users', async (req,res) => {
    try{
        const user = await UserModel.create(req.body);
        res.status(201).json(user); // Enviando um JSON
    }catch(error){
        res.status(500).send(error.message); // Enviando um erro
    }

});

app.listen(port, ()=> console.log(`Rodando com express na porta ${port}!`)); // Método listen: escutando a porta 8080
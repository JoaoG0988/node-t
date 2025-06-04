const express = require('express');
const UserModel = require('../src/database/models/user.model.js'); // Importando o model do usuário

const app = express();

app.use(express.json()); // Middleware para converter o body da requisição em JSON

app.use((req,res,next) => {
    console.log(`Request type: ${req.method}`);
    console.log(`Content type: ${req.headers["content-type"]}`);
    console.log(`Date:${new Date()}`); // Pegando o método da requisição

    next();
});

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

app.patch('/users/:id', async (req,res) => { // Método PATCH: Atualiza informações do servidor
    try{
        const id = req.params.id; // Pegando o id da requisição
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true}); // Método findByIdAndUpdate: atualiza o usuário pelo id
        res.status(200).json(user); // Enviando um JSON
    }catch(error){
        res.status(500).send(error.message); // Enviando um erro
    }
});


app.delete('/users/:id', async (req,res) => {
    try{
        const id = req.params.id; // Pegando o id da requisição
        const user = await UserModel.findByIdAndDelete(id); // Método findByIdAndDelete: deleta o usuário pelo id
        res.status(200).json(user); // Enviando um JSON
    }catch(error){
        res.status(500).send(error.message); // Enviando um erro
    }
})


app.post('/users', async (req,res) => { // Método POST: Envia informações para o servidor
    try{
        const user = await UserModel.create(req.body);
        res.status(201).json(user); // Enviando um JSON
    }catch(error){
        res.status(500).send(error.message); // Enviando um erro
    }

});

app.listen(port, ()=> console.log(`Rodando com express na porta ${port}!`)); // Método listen: escutando a porta 8080
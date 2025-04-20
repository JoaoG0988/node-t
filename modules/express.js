const express = require('express');
const app = express();

const port = 8080;

app.get('/home', (req,res) => { // Rota para o caminho /home // Método GET: Pega informações do servidor
    res.contentType("text/html");
    res.status(200).send("<h1>Hello World</h1>"); // enviando um HTML

});

app.get('/users', (req,res) => {
    const users = [
        {
            name:"João",
            email:"joao@gmail.com",
        },
        {
            name:"Matheus",
            email:"matheus@gmail.com",
        }
    ];

    res.status(200).json(users); // Enviando um JSON
});

app.listen(port, ()=> console.log(`Rodando com express na porta ${port}!`)); // Método listen: escutando a porta 8080
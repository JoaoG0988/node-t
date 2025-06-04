const http = require('http'); // Importando o módulo http nativo do Node.js para criar um servidor HTTP
// O módulo http permite que você crie um servidor web, manipule requisições e respostas HTTP, e muito mais.

const port = 8080;

const server = http.createServer((req,res) => {
    if(req.url == '/home'){
        res.writeHead(200,{"Content-Type":"text/html"}) // enviando um HTML
        res.end("<h1>home page</h1>");
    }

    if(req.url == '/users'){
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

        res.writeHead(200,{"Content-Type":"application/json"}); // Enviando um JSON
        res.end(JSON.stringify(users));//strinfy: converte o objeto JavaScript em uma string JSON
    }
});

server.listen(port, () => console.log(`Rodando http na porta ${port}!`));

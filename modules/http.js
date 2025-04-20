const http = require('http');

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
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando http na porta ${port}!`));

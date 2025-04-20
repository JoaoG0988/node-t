
// Módulo File System (fs) - Módulo nativo do Node.js para manipulação de arquivos e pastas



const fs = require('fs');
const path = require('path');


// Criar uma pasta

fs.mkdir(path.join(__dirname, '/teste'),(error) => {
    if(error){
        console.log("Erro",error)
    }

    console.log("Pasta criada com sucesso.");
});


// Criar um arquivo --> Um writefile sobscreve o outro, vamos usar outro metodo para adicionar arquivos

fs.writeFile(path.join(__dirname,'/teste','teste.html'),'hello Node!',(error)=>{
    if(error){
        return console.log('Erro: ', error)
    }

    console.log("Arquivo criado com sucesso!");

    // Adiconar a um conteúdo de um aquivo

    fs.appendFile(path.join(__dirname,'/teste','teste.html'),'Hello World!',(error)=>{
        if(error){
            return console.log("Erro: ", error)
        }
    
        console.log("Arquivo modificado com sucesso!");
    });

    // Ler arquivo

    fs.readFile(path.join(__dirname,'/teste','teste.html'),'utf8',(error,data)=>{
        if(error){
            return console.log("Erro: ",error)
        }
    
        console.log(data);
    });
});










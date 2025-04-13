const fs = require('fs');

const path = require('path');


// Criar uma pasta

fs.mkdir(path.join(__dirname, '/teste'),(error) => {
    if(error){
        console.log("Erro",error)
    }

    console.log("Pasta criada com sucesso.")
});


// Criar um arquivo --> Um writefile sobscreve o outro, vms usar outro metodo para adicionar arquivos

fs.writeFile(path.join(__dirname,'/teste','teste.html'),'hello Node!',(error)=>{
    if(error){
        return console.log('Erro: ', error)
    }

    console.log("Arquivo criado com sucesso!");
});


// Adiconar a um conteúdo de um aquivo

fs.appendFile(path.join(__dirname,'/teste','teste.html'),'Hello World!',(error)=>{
    if(error){
        return console.log("Erro: ", error)
    }

    console.log("Arquivo modificado com sucesso!")
});

//



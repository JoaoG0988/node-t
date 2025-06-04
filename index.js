//const {Person} = require("./person.js");

//require('./modules/path.js'); // Apenas o nome do arquivo atual
//require("./modules/fs.js")
//console.log(person.saymyname());
//require('./modules/http.js');
//const person = new Person("João");


const dotenv = require('dotenv'); // Importando o dotenv, que é uma biblioteca para carregar variáveis de ambiente de um arquivo .env para process.env
const connectToDatabase = require("./src/database/connect.js"); // Importando a função connectToDatabase do arquivo connect.js, que é responsável por conectar ao banco de dados MongoDB
dotenv.config(); // Carregando as variáveis de ambiente do arquivo .env para process.env, permitindo que você acesse as variáveis de ambiente definidas no arquivo .env


connectToDatabase(); // Chamando a função connectToDatabase para estabelecer a conexão com o banco de dados MongoDB

require('./modules/express.js'); // 












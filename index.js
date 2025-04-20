//const {Person} = require("./person.js");

//require('./modules/path.js'); // Apenas o nome do arquivo atual
//require("./modules/fs.js")
//console.log(person.saymyname());
//require('./modules/http.js');
//const person = new Person("João");


const dotenv = require('dotenv');
const connectToDatabase = require("./src/database/connect.js");
dotenv.config();


connectToDatabase(); 

require('./modules/express.js');












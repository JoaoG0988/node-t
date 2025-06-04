const mongoose = require("mongoose"); // Importando o mongoose, que é uma biblioteca do Node.js para modelar dados e interagir com o MongoDB.

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.9vdogqq.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJS`
    );
    console.log("Conexão com banco de dados feita com sucesso!");
  } catch (error) {
    console.error("Ocorreu um erro ao se conectar ao banco de dados:", error);
    throw error; // Lança o erro para que ele possa ser tratado em outro lugar
  }
};

module.exports = connectToDatabase;

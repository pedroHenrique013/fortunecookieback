module.exports = () => {
  const express = require("express");

  const app = express();
  const PORT = 8080;

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  const Phrases = require("../src/domain/phrases/routes");
  app.use("/phrases", Phrases);

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
};

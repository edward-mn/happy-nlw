// importar dependencia/pacote
const express = require("express");

//importanto o page criado
const pages = require("./pages.js");

// Utiliziando biblioteca do node para routes
const path = require("path");

// iniciando express
const server = express();

server
  // Utilizar body do req
  .use(express.urlencoded({ extended: true }))

  // Utilizando os arquivos estáticos(css, html e js) da pasta public
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // criar rotas da aplicação
  .get("/", pages.index)
  .get("/orphanages", pages.orphanages)
  .get("/orphanage", pages.orphanage)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// ligar o servidor
server.listen(5500);

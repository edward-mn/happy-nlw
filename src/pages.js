// const orphanages = require("./database/fakedata.js");
const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanages(req, res) {
    try {
      const db = await Database; // async await
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },

  async orphanage(req, res) {
    // Pegando o id na rota
    const id = req.query.id;
    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE id=${id}`);
      const orphanage = results[0];

      // Transformando o .toString() para array onde houver ,
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends == "0"
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return res.render("orphanage", { orphanage: orphanage });
    } catch (error) {
      console.log(error);
      res.send("Erro no banco de dados");
    }
  },

  saveAnOrphanage(req, res) {
    return res.render("save-orphanage");
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    try {
      // Salvar um orphanato
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirencionamento
      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },
};

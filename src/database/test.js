const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // Inserir dados na tabela

  await saveOrphanage(db, {
    lat: "-22.73384",
    lng: "-47.4111377",
    name: "Casa da criança",
    about:
      "Presta assistência a crianças de 05 a 15 anos que sencontra em situações de reisco e/ou vulnerabilidade social.",
    whatsapp: "987456321",
    images: [
      "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1600711725615-d7dfb2215244?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha nos visitar trazendo muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 07h até 17h",
    open_on_weekends: "1",
  });

  // Consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  /*
  // Consultar apenas 1 orphanage, pelo ID
  const selectOneOrphanage = await db.all('SELECT * FROM orphanages WHERE id="3"');
  console.log(selectOneOrphanage);
  */

  // Deletar dado da específico da tablea - Caso queria tudo (DELETE FROM orphanages)
  // await db.run('DELETE FROM orphanages WHERE id = "4"');
});

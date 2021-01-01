const descripcion = {
    demandCommand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer",
};

const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente el TODO",
};

const argv = require("yargs")
  .command("crear", "Crea un TODO", {completado})
  .command("actualizar", "Actualiza el estado de un TODO", {descripcion, completado})
  .command("borrar", "Borra una tarea", {descripcion})
  .help().argv;

module.exports = {
  argv,
};
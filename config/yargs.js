const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad de cual desea obtener el clima.",
        demand: true,
    },
}).argv;

module.exports = {
    argv,
};

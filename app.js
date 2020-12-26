const { argv } = require("./config/yargs");
const lugar = require("./clima/clima");

lugar.getTemperatura(argv.direccion).then(console.log);

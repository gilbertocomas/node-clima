const { argv } = require("./config/yargs");
const lugar = require("./lugar/clima");

lugar.getTemperatura(argv.direccion).then(console.log);

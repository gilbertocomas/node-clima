const axios = require("axios");

const getTemperatura = async (direccion) => {
    const apiKey = "f10db5d6c317f0938650d87f27eb8528";
    const encodeUrl = encodeURI(direccion);

    const resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=${apiKey}&units=metric`
    );

    if (resp.data.main.length === 0) {
        throw `No existe resultado para ${direccion}`;
    }

    const data = resp.data;
    const ciudad = data.name;
    const id = data.id;
    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;
    const pais = data.sys.country;
    const latitud = data.coord.lat;
    const longitud = data.coord.lon;

    return {
        Pais: pais,
        Ciudad: ciudad,
        Id: id,
        Temp_Minima: tempMin,
        Temp_Maxima: tempMax,
        Latitud: latitud,
        Longitud: longitud,
    };
};

module.exports = {
    getTemperatura,
};

/* 
Esta es una llamada axios sin async
const axios = require("axios");
const apiKey = "1d81399f0003976acb064965d92c2014";
axios
    .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${argv.direccion}&appid=${apiKey}`
    )
    .then((response) => console.log(response.data.main.temp_max))
    .catch((e) => console.log(e));
 */

const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir); //Para escapar los caracteres especiales de la url

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '3f667712bamsh436ef922e5b3daep108dd9jsn2de95dc118ab' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    } else {
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;
        return {
            direccion,
            lat,
            lng
        }
    }

}

module.exports = {
    getLugarLatLng
}
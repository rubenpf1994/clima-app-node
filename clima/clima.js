const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0935bc4fb3fd71cc28eab7c9621dd401&units=metric`);
    console.log(resp.data.main.temp);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
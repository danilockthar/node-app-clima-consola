const axios = require('axios');

const getClima = async(lat, lng) => {

  const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eae5117f7dbf0c4f5e59b99753ffc078&units=metric`);

  return resp.data.main.temp;
}


module.exports = {
  getClima
}

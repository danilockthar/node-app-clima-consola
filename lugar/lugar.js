
const axios = require('axios');


const getPlace = async(dir) => {

  const encodedURI = encodeURI(dir);

  console.log(encodedURI);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
    headers: {'X-RapidAPI-Key': '8846319d08mshf6c487d2511bd45p14c43bjsn62cbd109f6b1'}
  });

const resp = await instance.get()

    if(resp.data.Results.length === 0){
      throw new Error(`No se pudo encontrar ${dir}`);
    }

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

module.exports = {
  getPlace
}

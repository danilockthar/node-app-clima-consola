const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: "d",
    desc: 'Direccion de la ciudad ',
    demand: true
}}).argv;





const getInfo = async(direccion) => {

  try {

    const coord = await lugar.getPlace(direccion);
    console.log(coord);
    const temp = await clima.getClima(coord.lat, coord.lng);

    return `El clima de ${direccion} es de ${temp}`;

  } catch (e) {
    
    return `No se pudo determinar el clima de ${direccion}`;

  }

}

getInfo(argv.direccion)
      .then(console.log)
      .catch(console.log);

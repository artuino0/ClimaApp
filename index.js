import {
  inquirerMenu,
  leerInput,
  pausa,
  showCitiesList,
} from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

//Created By Arturo Muñoz

const main = async () => {
  let opt;
  const buscador = new Busquedas();

  buscador.readHistory();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const busqueda = await leerInput();
        const places = await buscador.getCities(busqueda);

        const id = await showCitiesList(places);

        if (id === 0) break;

        const placeSelected = places.find((place) => id === place.id);
        const placeWeather = await buscador.getWeather(placeSelected);

        console.log("\n==========================".green);
        console.log("Place weather information:".green);
        console.log("==========================\n".green);
        console.log("Place : ".green, placeSelected.place_name);
        console.log("Lat   : ".green, placeSelected.lat);
        console.log("Lng   : ".green, placeSelected.lng);
        console.log("Desc  : ".green, placeWeather.desc);
        console.log("Temp  : ".green, placeWeather.temp);
        console.log("Min   : ".green, placeWeather.temp_min);
        console.log("Max   : ".green, placeWeather.temp_max);

        await buscador.addToHistory(placeSelected);
        break;
      case 2:
        await buscador.readHistory();
        const idHistory = await showCitiesList(buscador.historial);
        if (idHistory === 0) break;
        const placeHistorySelected = buscador.historial.find(
          (place) => idHistory === place.id
        );
        const placeHistoryWeather = await buscador.getWeather(
          placeHistorySelected
        );

        console.log("\n==========================".green);
        console.log("Place weather information:".green);
        console.log("==========================\n".green);
        console.log("Place : ".green, placeHistorySelected.place_name);
        console.log("Lat   : ".green, placeHistorySelected.lat);
        console.log("Lng   : ".green, placeHistorySelected.lng);
        console.log("Desc  : ".green, placeHistoryWeather.desc);
        console.log("Temp  : ".green, placeHistoryWeather.temp);
        console.log("Min   : ".green, placeHistoryWeather.temp_min);
        console.log("Max   : ".green, placeHistoryWeather.temp_max);
        break;
    }

    if (opt !== 0) {
      await pausa();
    }
  } while (opt !== 0);
};

main();

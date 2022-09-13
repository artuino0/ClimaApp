import {
  inquirerMenu,
  leerInput,
  pausa,
  showCitiesList,
} from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

const main = async () => {
  let opt;
  const buscador = new Busquedas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const busqueda = await leerInput();
        const places = await buscador.getCities(busqueda);

        const id = await showCitiesList(places);

        break;
    }

    await pausa();
  } while (opt !== 0);
};

main();

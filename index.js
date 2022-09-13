import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

const main = async () => {
  let opt;
  const buscador = new Busquedas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const busqueda = await leerInput();
        await buscador.getCities(busqueda);
        break;
    }

    await pausa();
  } while (opt !== 0);
};

main();

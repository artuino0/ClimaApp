import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";

const main = async () => {
  let opcion;

  do {
    opcion = await inquirerMenu();
    switch (opcion) {
      case 1:
        const busqueda = await leerInput();
        console.log(busqueda);
        await pausa();
        break;
    }

    console.log(opcion);
  } while (opcion != 0);
};

main();

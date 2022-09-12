import { inquirerMenu } from "./helpers/inquirer.js";

const main = async () => {
  let opcion;

  do {
    opcion = await inquirerMenu();

    console.log(opcion);
  } while (opcion != 0);
};

main();

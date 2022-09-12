import inquirer from "inquirer";

import color from "colors";

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "Select an option",
    choices: [
      {
        value: 1,
        name: `${"1.".green}Get weather by city`,
      },
      {
        value: 2,
        name: `${"2.".green}Search history`,
      },
      {
        value: 0,
        name: `${"0.".green}Exit`,
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("========================".green);
  console.log(" Seleccione una opcion ".green);
  console.log("========================".green);
  const { option } = await inquirer.prompt(preguntas);
  return option;
};

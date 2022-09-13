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
        name: `${"1.".green} Get weather by city`,
      },
      {
        value: 2,
        name: `${"2.".green} Search history`,
      },
      {
        value: 0,
        name: `${"0.".green} Exit`,
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

export const leerInput = async (menssage) => {
  const question = [
    {
      type: "input",
      name: "Keyword",
      menssage,
      validate(value) {
        if (value.length === 0) {
          return "Please introduce a value.";
        }
        return true;
      },
    },
  ];

  const { Keyword } = await inquirer.prompt(question);
  return Keyword;
};

export const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"enter".green} to continue...`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

export const showCitiesList = async (places = []) => {
  const choices = places.map((place, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: place.id,
      name: `${idx} ${place.place_name}`,
    };
  });
  choices.unshift({
    value: 0,
    name: `${"0.".green} Exit`,
  });

  const question = [
    {
      type: "list",
      name: "city",
      message: "what city are you looking for?",
      choices,
    },
  ];

  const { city } = await inquirer.prompt(question);
  return city;
};

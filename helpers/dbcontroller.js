import fs from "fs";

const path = "./db/data.json";

export const writeDB = (data) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

export const readDB = () => {
  if (!fs.existsSync(path)) return [];

  const info = fs.readFileSync(path, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};

import axios from "axios";
export class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: read DB if exists
  }

  getParamsMapbox() {
    return {
      access_token: "",
      limit: 5,
      language: "en",
    };
  }

  async getCities(city = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
        params: this.getParamsMapbox(),
      });

      const resp = await instance.get();
      console.log(resp.data.features);
    } catch (error) {
      return [];
    }
    return []; //return matching cities
  }
}

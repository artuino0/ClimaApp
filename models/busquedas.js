import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: read DB if exists
  }

  getParamsMapbox() {
    console.log();
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "en",
      types: "place",
    };
  }

  async getCities(city = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
        params: this.getParamsMapbox(),
      });

      const resp = await instance.get();
      return resp.data.features.map((place) => ({
        id: place.id,
        place_name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return [];
    }
    return []; //return matching cities
  }
}

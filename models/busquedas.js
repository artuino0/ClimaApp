import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: read DB if exists
  }

  getParamsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "en",
      types: "place",
    };
  }

  getParamsOpenWeather(latitud, longitud) {
    return {
      lat: latitud,
      lon: longitud,
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
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

  async getWeather(place) {
    try {
      const instance = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/weather?",
        params: this.getParamsOpenWeather(place.lat, place.lng),
      });

      const resp = await (await instance.get()).data;
      const weather = resp.weather[0];

      return {
        temp: resp.main.temp,
        temp_min: resp.main.temp_min,
        temp_max: resp.main.temp_max,
        desc: weather.description,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

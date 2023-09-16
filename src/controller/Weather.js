import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';
import getGeolocation from '../model/search/geoLocation';

export default class WeatherDataController {
  constructor(config) {
    this.config = config;
  }

  getWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      const cleanData = filterWeatherData(rawData, this.config.isMetric);

      console.log(cleanData);
      return cleanData;
    } catch (err) {
      throw new Error(err);
    }
  };

  getLocalWeather = async () => {
    try {
      const geolocation = await getGeolocation();
      return this.getWeather(geolocation);
    } catch (err) {
      throw new Error(err);
    }
  };
}

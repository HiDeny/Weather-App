import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';
import getGeolocation from '../model/search/geoLocation';

export default class WeatherDataController {
  constructor(config) {
    this.config = config;
  }

  getSearchWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      const cleanData = filterWeatherData(rawData, this.config.isMetric);

      console.log(cleanData);
      return cleanData;
    } catch (err) {
      throw new Error(err);
    }
  };

  getGeolocationWeather = async () => {
    try {
      const geolocation = await getGeolocation();
      this.config.geolocation = geolocation;

      const rawData = await getWeatherData(geolocation);
      const cleanData = filterWeatherData(rawData, this.config.isMetric);

      console.log(cleanData);
      return cleanData;
    } catch (err) {
      throw new Error(err);
    }
  };
}

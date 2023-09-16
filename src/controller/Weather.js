import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';

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
}

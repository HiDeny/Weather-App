import { getWeatherData } from '../model/service/weatherAPI';
import filterWeatherData from '../model/filter/filterWeatherData';

export default class WeatherDataController {
  constructor(userConfig, appConfig) {
    this.user = userConfig;
    this.app = appConfig;
  }

  getWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      console.log(rawData);
      this.app.lastData = rawData;
      this.app.conditionsText = rawData.current.condition.text;
      console.log(this.app.conditionsText);
      const cleanData = filterWeatherData(rawData, this.user.isMetric);

      return cleanData;
    } catch (err) {
      throw new Error(err);
    }
  };

  altUnitsWeather = () =>
    filterWeatherData(this.app.lastData, this.user.isMetric);
}

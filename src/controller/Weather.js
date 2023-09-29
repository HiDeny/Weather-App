import { getWeatherData } from '../model/service/weatherAPI';
import filterWeatherData from '../model/filter/filterWeatherData';
import getGeolocation from '../model/geoLocation';

export default class WeatherDataController {
  constructor(userConfig, appConfig) {
    this.user = userConfig;
    this.app = appConfig;
  }

  getWeather = async (location) => {
    try {
      const rawData = await getWeatherData(location);
      this.app.lastData = rawData;
      this.app.conditionsText = rawData.current.condition.text;
      const cleanData = filterWeatherData(
        rawData,
        this.user.isMetric,
        this.user.format24H
      );

      return cleanData;
    } catch (err) {
      throw new Error(err);
    }
  };

  altUnitsWeather = () =>
    filterWeatherData(
      this.app.lastData,
      this.user.isMetric,
      this.user.format24H
    );
}

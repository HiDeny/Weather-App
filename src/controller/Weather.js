import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';
import getGeolocation from '../model/geoLocation';

export default class WeatherDataController {
  constructor(userConfig, appConfig) {
    this.user = userConfig;
    this.app = appConfig;
  }

  getWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      this.app.lastData = rawData;
      const cleanData = filterWeatherData(rawData, this.user.isMetric);

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

  altUnitsWeather = () => {
    const cleanData = filterWeatherData(this.app.lastData, this.user.isMetric);
    return cleanData;
  };
}

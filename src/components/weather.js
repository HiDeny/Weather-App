import getWeatherData from '../services/weatherapi';
import filterWeatherData from '../services/filterData';

const getWeather = async (location) => {
  const weatherData = await getWeatherData(location);
  const cleanData = await filterWeatherData(weatherData);
  return cleanData;
};

export default getWeather;

import getWeatherData from './getData';
import filterWeatherData from './filterData';

const getWeather = async (location) => {
  const weatherData = await getWeatherData(location);
  const cleanData = await filterWeatherData(weatherData);
  console.log(cleanData);
  return cleanData;
};

// getWeather('Cape Town');

export default getWeather;

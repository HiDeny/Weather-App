import getWeatherData from '../model/data/getWeatherData';

// import filterWeatherData from '../services/filterData';
export default class MainController {
  alternativeUnits = false;

  defaultLocation = 'Cape Town';

  getWeather = async (search = this.defaultLocation) => {
    const rawData = await getWeatherData(search);
    console.log(rawData);
  };
}

// const getWeather = async (location) => {
//   const weatherData = await getWeatherData(location);
//   const cleanData = await filterWeatherData(weatherData);
//   return cleanData;
// };

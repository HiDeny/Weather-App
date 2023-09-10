import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filterWeatherData';

import createSearchBar from '../view/searchBar/searchElement';

export default class MainController {
  isMetric = true;

  defaultLocation = 'Cape Town';

  geolocation = false;

  searchLocation = '';

  launch = () => {
    const searchBar = createSearchBar();
    searchBar.addEventListener('submit', (event) => {
      event.preventDefault;
    });
    document.body.append();
  };

  getWeather = async (search = this.defaultLocation) => {
    try {
      const rawData = await getWeatherData(search);
      const cleanData = filterWeatherData(rawData, this.isMetric);
      console.log(cleanData);
    } catch (err) {
      throw new Error(err);
    }
  };
}

// const getWeather = async (location) => {
//   const weatherData = await getWeatherData(location);
//   const cleanData = await filterWeatherData(weatherData);
//   return cleanData;
// };

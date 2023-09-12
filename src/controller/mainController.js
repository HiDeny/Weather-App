import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filterWeatherData';

import createSearchElement from '../view/elements/searchElement';
import getGeoLocation from '../model/search/geoLocation';

export default class MainController {
  isMetric = true;

  defaultLocation = 'Cape Town';

  geolocation = false;

  searchLocation = '';

  initSearchBar = () => {
    createSearchElement();

    const geoLocationBtn = document.getElementById('geoLocationBtn');
    geoLocationBtn.addEventListener('click', async () => {
      const geoLocation = await getGeoLocation();
      this.getWeather(geoLocation);
    });

    const searchField = document.getElementById('searchField');
    searchField.addEventListener('input', (event) => {
      this.searchLocation = event.target.value;
    });

    const searchBar = document.querySelector('.searchBarElement');
    searchBar.addEventListener('submit', (event) => {
      event.preventDefault();
      this.getWeather(this.searchLocation);
    });
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

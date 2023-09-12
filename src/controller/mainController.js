import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filterWeatherData';

import createSearchElement from '../view/elements/searchElement';
import getGeoLocation from '../model/search/geoLocation';

import createSettings from '../view/elements/userSettings';

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

  initSettings = () => {
    createSettings(this.defaultLocation, this.isMetric);

    // const showSettingsBtn = document.getElementById('.showSettingsBtn');
    // const saveBtn = document.getElementById('saveBtn');
    // const settingsMenu = document.getElementById('settings');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    setDefaultLocation.addEventListener('input', (event) => {
      this.defaultLocation = event.target.value;
    });

    metricBtn.addEventListener('click', () => {
      this.isMetric = true;
      imperialBtn.classList.remove('unitsActive');
      metricBtn.classList.add('unitsActive');
    });

    imperialBtn.addEventListener('click', () => {
      this.isMetric = false;
      metricBtn.classList.remove('unitsActive');
      imperialBtn.classList.add('unitsActive');
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

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
      console.log(geoLocation);
      this.getWeather(await geoLocation);
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

    // if (this.defaultLocation) this.getWeather(this.defaultLocation);
  };

  initSettings = () => {
    createSettings(this.defaultLocation, this.isMetric);

    const settingsMenu = document.getElementById('settings');
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    showSettingsBtn.addEventListener('click', () => {
      settingsMenu.classList.remove('hide');
    });

    saveBtn.addEventListener('click', () => {
      settingsMenu.classList.add('hide');
    });

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

  getWeather = async (search) => {
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

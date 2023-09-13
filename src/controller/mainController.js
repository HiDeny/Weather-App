import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filterWeatherData';

import createSearchElement from '../view/elements/searchElement';
import getGeolocation from '../model/search/geoLocation';

import createSettings from '../view/elements/userSettings';
import createCurrentInfo from '../view/currentInfo';

export default class MainController {
  config = {
    isMetric: true,
    defaultLocation: 'Cape Town',
    geolocation: false,
  };

  searchLocation = '';

  initSettings = () => {
    createSettings(this.config);

    const settingsMenu = document.getElementById('settings');
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    showSettingsBtn.addEventListener('click', () => {
      const isVisible = settingsMenu.classList[1] === 'showSettings';
      if (isVisible) settingsMenu.classList.remove('showSettings');
      if (!isVisible) settingsMenu.classList.add('showSettings');
    });

    saveBtn.addEventListener('click', () => {
      settingsMenu.classList.remove('showSettings');
    });

    setDefaultLocation.addEventListener('input', (event) => {
      this.config.defaultLocation = event.target.value;
    });

    metricBtn.addEventListener('click', () => {
      this.config.isMetric = true;
      imperialBtn.classList.remove('unitsActive');
      metricBtn.classList.add('unitsActive');
    });

    imperialBtn.addEventListener('click', () => {
      this.config.isMetric = false;
      metricBtn.classList.remove('unitsActive');
      imperialBtn.classList.add('unitsActive');
    });
  };

  initSearchBar = () => {
    const completeSearchBar = createSearchElement();
    document.body.append(completeSearchBar);

    const geoLocationBtn = document.getElementById('geoLocationBtn');
    geoLocationBtn.addEventListener('click', async () => {
      const geolocation = await getGeolocation();
      this.getWeather(geolocation);
    });

    const searchField = document.getElementById('searchField');
    searchField.addEventListener('input', (event) => {
      this.searchLocation = event.target.value;
    });

    const searchBar = document.querySelector('.searchElement');
    searchBar.addEventListener('submit', (event) => {
      event.preventDefault();
      this.getWeather(this.searchLocation);
    });

    // if (this.defaultLocation) this.getWeather(this.defaultLocation);
  };

  getWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      const cleanData = filterWeatherData(rawData, this.config.isMetric);
      const currentInfo = createCurrentInfo(cleanData.currentInfo);
      document.body.append(currentInfo);
      console.log(cleanData);
    } catch (err) {
      throw new Error(err);
    }
  };
}

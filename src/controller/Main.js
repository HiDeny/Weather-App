import ViewController from './View';
import WeatherDataController from './Weather';

import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';

import getGeolocation from '../model/search/geoLocation';

export default class MainController {
  config = {
    isMetric: true,
    defaultLocation: 'Cape Town',
    lastSearch: false,
  };

  constructor() {
    this.view = ViewController(this.config);
    this.weather = WeatherDataController(this.config);
  }

  searchLocation = '';

  initSettings = () => {
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.classList.add('hideSettings');

    showSettingsBtn.addEventListener('click', () => {
      showSettingsBtn.disabled = true;
      const isVisible = settingsMenu.classList[1] === 'showSettings';
      // Update the logic here
      if (isVisible) {
        settingsMenu.classList.remove('showSettings');
        setTimeout(() => {
          settingsMenu.classList.add('hideSettings');
          showSettingsBtn.disabled = false;
        }, 1000);
      }
      if (!isVisible) {
        settingsMenu.classList.remove('hideSettings');
        setTimeout(() => {
          settingsMenu.classList.add('showSettings');
          showSettingsBtn.disabled = false;
        }, 500);
      }
    });

    saveBtn.addEventListener('click', () => {
      settingsMenu.classList.remove('showSettings');
      setTimeout(() => {
        settingsMenu.classList.add('hideSettings');
        showSettingsBtn.disabled = false;
      }, 1000);
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
      console.log('now');
      // const skeletonCard = createSkeletonCard();
      // const currentWeatherCard = document.querySelector('.weatherCard');
      // const currentErrorCard = document.querySelector('.errorCard');
      // const currentSkeletonCard = document.querySelector('.skeleton');

      // if (currentWeatherCard) currentWeatherCard.replaceWith(skeletonCard);
      // if (currentErrorCard) currentErrorCard.replaceWith(skeletonCard);
      // if (currentSkeletonCard) currentSkeletonCard.replaceWith(skeletonCard);
      // if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
      //   document.body.append(skeletonCard);

      this.getWeather(this.searchLocation);
      this.config.lastSearch = this.searchLocation;
      searchField.value = '';
    });

    // if (this.defaultLocation) this.getWeather(this.defaultLocation);
  };

  getWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      const cleanData = filterWeatherData(rawData, this.config.isMetric);

      this.displayWeather(cleanData);
      console.log(cleanData);
    } catch (err) {
      console.error(err);
      this.displayError(err);
    }
  };
}

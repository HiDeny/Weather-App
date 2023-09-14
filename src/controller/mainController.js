import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';

import createSearchElement from '../view/cardSections/searchElement';
import getGeolocation from '../model/search/geoLocation';
import createSettings from '../view/cardSections/userSettings';

import createWeatherCard from '../view/weatherCard';
import createCurrentInfo from '../view/cardSections/currentInfo';
import createForecasts from '../view/cardSections/forecasts/forecasts';

export default class MainController {
  config = {
    isMetric: true,
    defaultLocation: 'Cape Town',
    geolocation: false,
  };

  searchLocation = '';

  initSettings = () => {
    const settings = createSettings(this.config);
    document.body.append(settings);

    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.classList.add('hideSettings');
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    showSettingsBtn.addEventListener('click', () => {
      const isVisible = settingsMenu.classList[1] === 'showSettings';
      if (isVisible) {
        showSettingsBtn.disabled = true;
        settingsMenu.classList.remove('showSettings');
        setTimeout(() => {
          settingsMenu.classList.add('hideSettings');
          showSettingsBtn.disabled = false;
        }, 1500);
      }
      if (!isVisible) {
        showSettingsBtn.disabled = true;
        settingsMenu.classList.remove('hideSettings');
        setTimeout(() => {
          settingsMenu.classList.add('showSettings');
          showSettingsBtn.disabled = false;
        }, 500);
      }
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

  displayWeather = async (cleanData) => {
    const currentWeatherCard = document.querySelector('.weatherCard');
    const weatherCard = await createWeatherCard(
      cleanData,
      this.config.isMetric
    );

    if (currentWeatherCard) currentWeatherCard.replaceWith(weatherCard);
    if (!currentWeatherCard) document.body.append(weatherCard);
  };

  getWeather = async (search) => {
    try {
      const rawData = await getWeatherData(search);
      const cleanData = filterWeatherData(rawData, this.config.isMetric);

      this.displayWeather(cleanData);
      console.log(cleanData);
    } catch (err) {
      throw new Error(err);
    }
  };
}

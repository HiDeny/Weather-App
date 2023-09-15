import getWeatherData from '../model/data/getWeatherData';
import filterWeatherData from '../model/data/filter/filterWeatherData';

import createSearchElement from '../view/cardSections/searchElement';
import getGeolocation from '../model/search/geoLocation';
import createSettings from '../view/cardSections/userSettings';

import createWeatherCard from '../view/weatherCard';
import createSkeletonCard from '../view/cardSections/loadingCard';
import createErrorCard from '../view/cardSections/errorCard';

export default class MainController {
  config = {
    isMetric: true,
    defaultLocation: 'Cape Town',
    lastSearch: false,
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
      console.log('now');
      const skeletonCard = createSkeletonCard();
      const currentWeatherCard = document.querySelector('.weatherCard');
      const currentErrorCard = document.querySelector('.errorCard');
      const currentSkeletonCard = document.querySelector('.skeleton');

      if (currentWeatherCard) currentWeatherCard.replaceWith(skeletonCard);
      if (currentErrorCard) currentErrorCard.replaceWith(skeletonCard);
      if (currentSkeletonCard) currentSkeletonCard.replaceWith(skeletonCard);
      if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
        document.body.append(skeletonCard);
      }
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

  displayWeather = async (cleanData) => {
    const currentWeatherCard = document.querySelector('.weatherCard');
    const currentErrorCard = document.querySelector('.errorCard');
    const currentSkeletonCard = document.querySelector('.skeleton');

    const weatherCard = await createWeatherCard(
      cleanData,
      this.config.isMetric
    );

    if (currentWeatherCard) currentWeatherCard.replaceWith(weatherCard);
    if (currentErrorCard) currentErrorCard.replaceWith(weatherCard);
    if (currentSkeletonCard) currentSkeletonCard.replaceWith(weatherCard);
    if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
      document.body.append(weatherCard);
    }
  };

  displayError = (error) => {
    const errorMessage = error.message;
    const currentWeatherCard = document.querySelector('.weatherCard');
    const currentErrorCard = document.querySelector('.errorCard');
    const currentSkeletonCard = document.querySelector('.skeleton');
    const errorCard = createErrorCard(errorMessage);

    if (currentWeatherCard) currentWeatherCard.replaceWith(errorCard);
    if (currentErrorCard) currentErrorCard.replaceWith(errorCard);
    if (currentSkeletonCard) currentSkeletonCard.replaceWith(errorCard);
    if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
      document.body.append(errorCard);
    }
  };
}

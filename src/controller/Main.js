import ViewController from './View';
import WeatherDataController from './Weather';

import {
  formatChangeListener,
  defaultLocationChangeListener,
  toggleSettingsVisibility,
} from '../view/cardSections/header/controlSettings';

export default class MainController {
  config = {
    format24H: true,
    isMetric: true,
    defaultLocation: 'Cape Town',
    geolocation: null,
    lastSearch: null,
    lastData: null,
  };

  constructor() {
    this.view = new ViewController(this.config);
    this.weather = new WeatherDataController(this.config);
  }

  searchLocation = null;

  init = () => {
    this.view.initUI();
    this.initEventListeners();

    // if (this.config.defaultLocation) {
    //   this.view.displaySkeleton();
    //   const weatherData = await this.weather.getWeather(
    //     this.searchLocation
    //   );
    //   this.view.displayWeather(weatherData);
    // };
  };

  initEventListeners = () => {
    this.unitsChangeListener();
    this.initSearch();
    formatChangeListener(this.config);
    defaultLocationChangeListener(this.config);
    toggleSettingsVisibility();
  };

  initSearch = () => {
    const searchField = document.getElementById('searchField');
    const geoLocationBtn = document.getElementById('geoLocationBtn');
    const searchBar = document.querySelector('.searchElement');

    geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);
    searchField.addEventListener('input', this.handleSearchInput);
    searchBar.addEventListener('submit', this.handleSearchSubmit);
  };

  unitsChangeListener = () => {
    const unitButtons = document.querySelectorAll('.unitBtn');
    unitButtons.forEach((unitBtn) => {
      unitBtn.addEventListener('click', this.handleUnitClick);
    });
  };

  handleGeolocationSearch = async () => {
    try {
      ViewController.displaySkeleton();
      const weatherData = await this.weather.getLocalWeather();
      this.view.displayWeather(weatherData);
    } catch (error) {
      ViewController.displayError(error);
    }
  };

  handleSearchInput = (event) => {
    this.searchLocation = event.target.value;
  };

  handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      // Set what location to find when there is no searchLoc
      ViewController.displaySkeleton();
      const weatherData = await this.weather.getWeather(this.searchLocation);
      this.view.displayWeather(weatherData);
      this.updateSearchField();
    } catch (error) {
      ViewController.displayError(error);
      throw new Error(error);
    }
  };

  updateSearchField = () => {
    const newPlaceholder = this.searchLocation || this.config.defaultLocation;
    const searchField = document.getElementById('searchField');
    searchField.placeholder = newPlaceholder;
    searchField.value = '';
  };

  handleUnitClick = () => {
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    this.config.isMetric = !this.config.isMetric;
    imperialBtn.classList.toggle('unitsActive');
    metricBtn.classList.toggle('unitsActive');

    if (this.config.lastData) {
      const newUnitsWeather = this.weather.altUnitsWeather();
      this.view.displayWeather(newUnitsWeather);
    }
  };
}

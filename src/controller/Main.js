import ViewController from './View';
import WeatherDataController from './Weather';
import SearchFieldController from './Search';

import {
  formatChangeListener,
  defaultLocationChangeListener,
  settingsMenuControl,
} from '../view/cardSections/header/controlSettings';
import { setUserConfig } from '../model/localStorage';

export default class MainController {
  appConfig = {
    geolocation: null,
    lastSearch: null,
    lastData: null,
    searchValue: null,
  };

  constructor() {
    this.userConfig = setUserConfig();
    this.weather = new WeatherDataController(this.userConfig, this.appConfig);
    this.view = new ViewController(this.userConfig);
    this.searchField = new SearchFieldController(
      this.userConfig,
      this.appConfig
    );
  }

  searchLocation = null;

  init = () => {
    this.view.initUI();
    this.initEventListeners();
    this.searchField.init();

    // if (this.userConfig.defaultLocation) {
    //   this.view.displaySkeleton();
    //   const weatherData = await this.weather.getWeather(
    //     this.searchLocation
    //   );
    //   this.view.displayWeather(weatherData);
    // };
  };

  initEventListeners = () => {
    this.initSearch();
    this.unitsChangeListener();
    formatChangeListener(this.userConfig);
    defaultLocationChangeListener(this.userConfig);
    settingsMenuControl(this.userConfig);
  };

  initSearch = () => {
    const geoLocationBtn = document.getElementById('geoLocationBtn');
    const searchBar = document.querySelector('.searchElement');

    geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);
    searchBar.addEventListener('submit', this.handleSearchSubmit);
  };

  unitsChangeListener = () => {
    const unitButtons = document.querySelectorAll('.unitBtn');
    unitButtons.forEach((unitBtn) => {
      unitBtn.addEventListener('click', () => {
        this.toggleUnitsMetricSystem();
        unitButtons.forEach((button) => button.classList.toggle('unitsActive'));
      });
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

  handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      // Set what location to find when there is no searchLoc
      ViewController.displaySkeleton();
      const weatherData = await this.weather.getWeather(
        this.appConfig.searchValue
      );
      this.view.displayWeather(weatherData);
      this.searchField.updatePlaceholder();
    } catch (error) {
      ViewController.displayError(error);
      throw new Error(error);
    }
  };

  toggleUnitsMetricSystem = () => {
    this.userConfig.isMetric = !this.userConfig.isMetric;

    if (this.appConfig.lastData) {
      const newUnitsWeather = this.weather.altUnitsWeather();
      this.view.displayWeather(newUnitsWeather);
    }
  };
}

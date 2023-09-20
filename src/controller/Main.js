import ViewController from './View';
import WeatherDataController from './Weather';
import SearchFieldController from './SearchField';

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
    this.searchLocation = null;
    this.refreshInterval = null;
    this.weather = new WeatherDataController(this.userConfig, this.appConfig);
    this.searchField = new SearchFieldController(
      this.userConfig,
      this.appConfig
    );
  }

  init = () => {
    ViewController.initUI(this.userConfig);
    this.initEventListeners();
    this.loadDefaultLocation();
  };

  initEventListeners = () => {
    this.initSearch();
    this.initSettingsListeners();
  };

  loadDefaultLocation = async () => {
    if (this.userConfig.defaultLocation) {
      await ViewController.displayWeather(
        this.weather.getWeather(this.userConfig.defaultLocation),
        this.userConfig.isMetric
      );
    }
  };

  initSearch = () => {
    const geoLocationBtn = document.getElementById('geoLocationBtn');
    const searchElement = document.querySelector('.searchElement');

    geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);
    searchElement.addEventListener('submit', this.handleSearchSubmit);
    this.searchField.initEventListeners();
  };

  initSettingsListeners = () => {
    this.unitsChangeListener();
    formatChangeListener(this.userConfig);
    defaultLocationChangeListener(this.userConfig);
    settingsMenuControl(this.userConfig);
  };

  handleGeolocationSearch = async () => {
    await ViewController.displayWeather(this.weather.getLocalWeather());
  };

  handleSearchSubmit = async (event) => {
    event.preventDefault();

    await ViewController.displayWeather(
      this.weather.getWeather(
        this.appConfig.searchValue || this.userConfig.defaultLocation
      ),
      this.userConfig.isMetric
    );
  };

  unitsChangeListener = () => {
    const unitButtons = document.querySelectorAll('.unitBtn');
    unitButtons.forEach((unitBtn) => {
      unitBtn.addEventListener('click', async () => {
        this.userConfig.isMetric = !this.userConfig.isMetric;
        if (this.appConfig.lastData) {
          await ViewController.displayWeather(this.weather.altUnitsWeather());
        }
        unitButtons.forEach((button) => button.classList.toggle('unitsActive'));
      });
    });
  };
}

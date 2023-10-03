import ViewController from './View';
import WeatherDataController from './Weather';
import SearchController from './Search';
import SettingsController from './Settings';

import { initUserConfig } from '../model/localStorage';

export default class MainController {
  appConfig = {
    geolocation: null,
    lastSearch: null,
    lastData: null,
  };

  constructor() {
    this.userConfig = initUserConfig();

    this.weather = new WeatherDataController(this.userConfig, this.appConfig);
    this.view = new ViewController(this.userConfig);
    this.search = new SearchController(
      this.userConfig,
      this.appConfig,
      this.view,
      this.weather
    );
    this.settings = new SettingsController(
      this.userConfig,
      this.appConfig,
      this.view,
      this.weather
    );
  }

  init = () => {
    this.view.initUI(this.userConfig);
    this.initEventListeners();
    if (this.userConfig.defaultLocation) this.loadDefaultLocation();
  };

  initEventListeners = () => {
    this.search.initListeners();
    this.settings.initListeners();
    this.initHomeButton();
    this.introListeners();
  };

  introListeners = () => {
    this.search.introListeners();
    this.initIntroDefaultLocation();
  };

  initIntroDefaultLocation = () => {
    document.querySelector('.introDefault').addEventListener('click', () => {
      this.settings.toggleVisibility();
      document.querySelector('.setDefaultLocation').focus();
    });
  };

  initHomeButton = () => {
    document.querySelector('.homeButton').addEventListener('click', () => {
      ViewController.welcomeScreen();
      const searchField = document.querySelector('.searchField');

      searchField.placeholder = 'City';
      searchField.value = null;
      this.appConfig.lastData = null;

      this.introListeners();
    });
  };

  loadDefaultLocation = async () => {
    ViewController.loadingScreen();
    const location = this.userConfig.defaultLocation;
    const weatherData = await this.weather.getWeather(location);
    await this.view.displayWeather(weatherData);
  };
}

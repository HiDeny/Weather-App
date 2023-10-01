import ViewController from './View';
import WeatherDataController from './Weather';
import SearchController from './Search';
import SettingsController from './Settings';

import { initUserConfig } from '../model/localStorage';

const handleIntroDefaultClick = () => {
  SettingsController.toggleVisibility();
  document.querySelector('.setDefaultLocation').focus();
};

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
    document
      .querySelector('.introDefault')
      .addEventListener('click', handleIntroDefaultClick);
  };

  handleHomeButtonClick = () => {
    ViewController.welcomeScreen();
    this.introListeners();
  };

  initHomeButton = () => {
    document
      .querySelector('.homeButton')
      .addEventListener('click', this.handleHomeButtonClick);
  };

  loadDefaultLocation = async () => {
    ViewController.loadingScreen();
    const location = this.userConfig.defaultLocation;
    const weatherData = await this.weather.getWeather(location);
    await this.view.displayWeather(weatherData);
  };
}

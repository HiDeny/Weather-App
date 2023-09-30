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
    // const error = { message: 'Something Went terrible wrong!' };
    // ViewController.errorScreen(error);
  };

  initEventListeners = () => {
    this.search.initListeners();
    this.settings.initListeners();
  };

  loadDefaultLocation = async () => {
    ViewController.loadingScreen();
    const location = this.userConfig.defaultLocation;
    const weatherData = await this.weather.getWeather(location);
    await this.view.displayWeather(weatherData);
  };
}

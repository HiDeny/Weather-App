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
  };

  loadDefaultLocation = async () => {
    await this.view.displayWeather(
      this.weather.getWeather(this.userConfig.defaultLocation)
    );
  };

  // initSearchListeners = () => {
  //   const geoLocationBtn = document.getElementById('geoLocationBtn');
  //   const searchElement = document.querySelector('.searchElement');

  //   geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);
  //   searchElement.addEventListener('submit', this.handleSearchSubmit);
  //   this.searchField.initEventListeners();
  // };

  // handleGeolocationSearch = async () => {
  //   await this.view.displayWeather(this.weather.getLocalWeather());
  // };

  // handleSearchSubmit = async (event) => {
  //   event.preventDefault();

  //   await this.view.displayWeather(
  //     this.weather.getWeather(
  //       this.appConfig.searchValue || this.userConfig.defaultLocation
  //     )
  //   );
  // };
}

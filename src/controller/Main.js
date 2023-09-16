import ViewController from './View';
import WeatherDataController from './Weather';

export default class MainController {
  config = {
    clock24H: true,
    isMetric: true,
    defaultLocation: 'Cape Town',
    geolocation: null,
    lastData: null,
  };

  constructor() {
    this.view = new ViewController(this.config);
    this.weather = new WeatherDataController(this.config);
  }

  searchLocation = null;

  init = () => {
    this.view.initView();
    this.initSearch();
    // if (this.config.defaultLocation) {
    //   this.view.displaySkeleton();
    //   const weatherData = await this.weather.getWeather(
    //     this.searchLocation
    //   );
    //   this.view.displayWeather(weatherData);
    // };
  };

  initSearch = () => {
    const searchField = document.getElementById('searchField');
    const geoLocationBtn = document.getElementById('geoLocationBtn');
    const searchBar = document.querySelector('.searchElement');

    geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);

    searchField.addEventListener('input', this.handleSearchInput);

    searchBar.addEventListener('submit', this.handleSearchSubmit);
  };

  handleGeolocationSearch = async () => {
    try {
      this.view.displaySkeleton();
      const weatherData = await this.weather.getLocalWeather();
      this.config.lastData = weatherData;
      this.view.displayWeather(weatherData);
    } catch (error) {
      this.view.displayError(error);
    }
  };

  handleSearchInput = (event) => {
    this.searchLocation = event.target.value;
  };

  handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      this.view.displaySkeleton();
      const weatherData = await this.weather.getWeather(this.searchLocation);
      this.view.displayWeather(weatherData);

      this.config.lastData = weatherData;
      document.getElementById('searchField').value = '';
    } catch (error) {
      this.view.displayError(error);
      throw new Error(error);
    }
  };
}

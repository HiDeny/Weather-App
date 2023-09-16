import ViewController from './View';
import WeatherDataController from './Weather';

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
      ViewController.displaySkeleton();
      const weatherData = await this.weather.getLocalWeather();
      this.config.lastData = weatherData;
      console.log(this.config.lastData);
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
      ViewController.displaySkeleton();
      const weatherData = await this.weather.getWeather(this.searchLocation);
      this.view.displayWeather(weatherData);
      this.updateSearchField();
      this.config.lastData = weatherData;
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
}

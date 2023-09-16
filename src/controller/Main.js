import ViewController from './View';
import WeatherDataController from './Weather';

export default class MainController {
  config = {
    clock24H: true,
    isMetric: true,
    defaultLocation: 'Cape Town',
    geolocation: null,
    searchLocation: null,
  };

  constructor() {
    this.view = new ViewController(this.config);
    this.weather = new WeatherDataController(this.config);
  }

  init = () => {
    this.view.initView();
    this.initSearchBar();
    // if (this.config.defaultLocation) {
    //   this.view.displaySkeleton();
    //   const weatherData = await this.weather.getWeather(
    //     this.config.searchLocation
    //   );
    //   this.view.displayWeather(weatherData);
    // };
  };

  initSearchBar = () => {
    const searchField = document.getElementById('searchField');
    const geoLocationBtn = document.getElementById('geoLocationBtn');
    const searchBar = document.querySelector('.searchElement');

    geoLocationBtn.addEventListener('click', async () => {
      try {
        this.view.displaySkeleton();
        const weatherData = await this.weather.getGeolocationWeather();
        this.view.displayWeather(weatherData);
      } catch (error) {
        console.error(error);
        this.view.displayError(error);
      }
    });

    searchBar.addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        this.view.displaySkeleton();
        searchField.value = '';
        const weatherData = await this.weather.getSearchWeather(
          this.config.searchLocation
        );
        this.view.displayWeather(weatherData);
      } catch (error) {
        console.error(error);
        this.view.displayError(error);
      }
    });
  };
}

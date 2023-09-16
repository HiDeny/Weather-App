import ViewController from './View';
import WeatherDataController from './Weather';

import getGeolocation from '../model/search/geoLocation';

export default class MainController {
  config = {
    isMetric: true,
    defaultLocation: 'Cape Town',
    geolocation: null,
    searchLocation: null,
  };

  constructor() {
    this.view = new ViewController(this.config);
    this.weather = new WeatherDataController(this.config);
  }

  // initEventListeners = () => {
  //   document.body.addEventListener('click', (event) => {
  //     const target = event.target;
  //     console.log(target);
  //   });
  // };

  init = () => {
    this.view.initView();
    this.initSearchBar();
    // if (this.defaultLocation) {
    //   this.view.displaySkeleton();
    //   const weatherData = await this.weather.getWeather(
    //     this.config.searchLocation
    //   );
    //   this.view.displayWeather(weatherData);
    // };
  };

  initSearchBar = () => {
    const geoLocationBtn = document.getElementById('geoLocationBtn');
    geoLocationBtn.addEventListener('click', async () => {
      try {
        this.view.displaySkeleton();

        const geolocation = await getGeolocation();
        this.config.geolocation = geolocation;

        const weatherData = await this.weather.getWeather(geolocation);
        this.view.displayWeather(weatherData);
      } catch (error) {
        console.error(error);
        this.view.displayError(error);
      }
    });

    const searchField = document.getElementById('searchField');
    searchField.addEventListener('input', (event) => {
      this.config.searchLocation = event.target.value;
    });

    const searchBar = document.querySelector('.searchElement');
    searchBar.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('now');
      try {
        this.view.displaySkeleton();

        const weatherData = await this.weather.getWeather(
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

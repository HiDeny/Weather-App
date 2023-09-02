import './style.css';
import 'normalize.css';

import createSearchForm from './components/display/elements/searchForm';
// import formController from './components/controlSearchForm';
import getWeather from './services/weatherapi';
import createWeatherCard from './components/display/weatherCard';

// Credit
// Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
// <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

const body = document.querySelector('body');

const displayWeather = async (searchResult) => {
  const weatherData = await getWeather(searchResult);
  const weatherCard = await createWeatherCard(weatherData);

  body.append(weatherCard);
};

const successCallback = (position) => {
  const { latitude, longitude } = position.coords;
  const searchVal = `${latitude},${longitude}`;
  displayWeather(searchVal);
};

const errorCallback = (error) => error;

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

const search = () => {
  const searchForm = createSearchForm();
  body.append(searchForm);

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { searchBar } = searchForm;
    displayWeather(searchBar.value);
  });
  // formController(searchForm);
  // return searchForm;
};

search();

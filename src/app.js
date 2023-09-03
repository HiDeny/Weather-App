import './style.css';
import 'normalize.css';

import { searchBar } from './components/searchBar/searchBar';
import getWeather from './components/weather';
import createWeatherCard from './components/display/weatherCard';
import { getGeolocation } from './components/geolocation';

const body = document.querySelector('body');

const displayWeather = async (searchResult) => {
  const weatherData = await getWeather(searchResult);
  const weatherCard = await createWeatherCard(weatherData);

  const currentWeatherCard = document.querySelector('.weatherCard');
  if (currentWeatherCard) currentWeatherCard.replaceWith(weatherCard);
  if (!currentWeatherCard) body.append(weatherCard);
};

getGeolocation(displayWeather);
searchBar(displayWeather);

import './style.css';
import 'normalize.css';

import { searchBar } from './components/searchBar/searchBar';
import getWeather from './components/weather';
import createWeatherCard from './components/display/weatherCard';
import { getGeolocation } from './components/geolocation';
import { createLoadingCard } from './components/display/cardSections/loadingCard';

const body = document.querySelector('body');

const displayWeather = async (searchResult) => {
  const currentWeatherCard = document.querySelector('.weatherCard');
  const currentLoadingCard = document.querySelector('.loader');

  const loadingCard = createLoadingCard();
  if (currentLoadingCard) currentLoadingCard.replaceWith(loadingCard);
  if (currentWeatherCard) currentWeatherCard.replaceWith(loadingCard);
  if (!currentWeatherCard && !currentLoadingCard) body.append(loadingCard);

  const weatherData = await getWeather(searchResult);
  const weatherCard = await createWeatherCard(weatherData);

  loadingCard.replaceWith(weatherCard);
};

getGeolocation(displayWeather);

searchBar(displayWeather);

import './view/style.css';
import 'normalize.css';
import MainController from './controller/mainController';

const mainController = new MainController();
mainController.initSearchBar();
mainController.initSettings();

// import { searchBar } from './components/searchBar/searchBar';
// import getWeather from './components/weather';
// import createWeatherCard from './components/display/weatherCard';
// import getGeoLocation from './components/geoLocation';
// import createLoadingCard from './components/display/cardSections/loadingCard';
// import selectUnits from './components/display/elements/unitSelect';

// const body = document.querySelector('body');

// const displayWeather = async (searchResult) => {
//   const currentWeatherCard = document.querySelector('.weatherCard');
//   const currentLoadingCard = document.querySelector('.loader');

//   const loadingCard = createLoadingCard();
//   if (currentLoadingCard) currentLoadingCard.replaceWith(loadingCard);
//   if (currentWeatherCard) currentWeatherCard.replaceWith(loadingCard);
//   if (!currentWeatherCard && !currentLoadingCard) body.append(loadingCard);

//   const weatherData = await getWeather(searchResult);
//   const weatherCard = await createWeatherCard(weatherData);

//   loadingCard.replaceWith(weatherCard);
// };

// selectUnits();
// searchBar(displayWeather);
// getGeoLocation(displayWeather);

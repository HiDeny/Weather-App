import './style.css';
import 'normalize.css';

import createSearchForm from './components/searchForm';
// import formController from './components/controlSearchForm';
import getWeather from './services/weatherapi';
import createWeatherCard from './components/display/weatherCard';

const body = document.querySelector('body');

const displayWeather = async (searchResult) => {
  const weatherData = await getWeather(searchResult);
  const weatherCard = await createWeatherCard(weatherData);

  body.append(weatherCard);
};

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

import './style.css';
import 'normalize.css';

import { createElementWithClass } from './helperFunc';

import createCurrentInfo from './cardSections/currentInfo';
import createForecasts from './cardSections/forecasts/forecasts';
// Credit
// Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
// <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

const createWeatherCard = async (weatherData, isMetric) => {
  const { currentInfo, forecasts, detailsInfo } = weatherData;

  const weatherCard = createElementWithClass('div', 'weatherCard');

  const showCurrentInfo = createCurrentInfo(currentInfo, isMetric);
  weatherCard.append(showCurrentInfo);

  const showForecasts = await createForecasts(forecasts, isMetric);
  weatherCard.append(showForecasts);

  const showDetailsInfo = createDetailsInfo(detailsInfo, isMetric);
  weatherCard.append(showDetailsInfo);

  return weatherCard;
};

export default createWeatherCard;

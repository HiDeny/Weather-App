import createInfoSection from './cardSections/locationInfo';
import createTodaySection from './cardSections/todayWeather';
import createForecastSection from './cardSections/forecasts';
import createDetailsSection from './cardSections/detailCards';

// Credit
// Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
// <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

const createWeatherCard = async (weatherData) => {
  const { info, today, forecast, details } = weatherData;
  console.log(forecast);
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');

  const infoSec = createInfoSection(info);
  weatherCard.append(infoSec);

  const todaySec = createTodaySection(today);
  weatherCard.append(todaySec);

  const forecastSec = await createForecastSection(forecast);
  weatherCard.append(forecastSec);

  const detailsSec = createDetailsSection(details);
  weatherCard.append(detailsSec);

  return weatherCard;
};

export default createWeatherCard;

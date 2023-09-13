import './style.css';
import 'normalize.css';

// import createInfoSection from './cardSections/locationInfo';
// import createTodaySection from './cardSections/todayWeather';
// import createForecastSection from './cardSections/forecasts';
// import createDetailsSection from './cardSections/detailCards';
import createCurrentInfo from './currentInfo';
// Credit
// Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
// <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

const createWeatherCard = (weatherData) => {
  const { currentInfo, forecasts, detailsInfo } = weatherData;

  const currentInfo = createCurrentInfo(currentInfo);

  const forecastSection = createForecastSection(forecasts);

  return { currentInfo };
};

export default createWeatherCard;

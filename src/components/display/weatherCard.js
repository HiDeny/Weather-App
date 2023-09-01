import createInfoSection from './cardSections/locationInfo';
import createTodaySection from './cardSections/todayWeather';
import createForecastSection from './cardSections/forecasts';
import createDetailsSection from './cardSections/detailCards';

const createWeatherCard = (weatherData) => {
  const { info, today, forecast, details } = weatherData;
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');

  const infoSec = createInfoSection(info);
  weatherCard.append(infoSec);

  const todaySec = createTodaySection(today);
  weatherCard.append(todaySec);

  const forecastSec = createForecastSection(forecast);
  weatherCard.append(forecastSec);

  const detailsSec = createDetailsSection(details);
  weatherCard.append(detailsSec);

  return weatherCard;
};

export default createWeatherCard;

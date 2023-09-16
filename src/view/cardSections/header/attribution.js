import { createElementWithClass, pElementWithClass } from '../helperFunc';

const createAttribution = () => {
  // Credit
  const weatherApiDiv = createElementWithClass('div', 'attWeatherApi');

  const weatherApiTextClick = createElementWithClass('a', 'weatherApiClick');
  weatherApiTextClick.href = 'https://www.weatherapi.com/';
  weatherApiTextClick.title = 'Free Weather API';

  const weatherApiIcon = createElementWithClass('img', 'weatherApiIcon');
  weatherApiIcon.src =
    'https://cdn.weatherapi.com/v4/images/weatherapi_logo.png';
  weatherApiIcon.alt = 'Weather data by WeatherAPI.com';
  weatherApiIcon.border = '0';

  const weatherApiContent = pElementWithClass(
    'content',
    'Powered by WeatherAPI.com'
  );
  weatherApiTextClick.append(weatherApiContent);

  const weatherApiIconClick = createElementWithClass('a', 'weatherApiIcon');
  weatherApiIconClick.href = 'https://www.weatherapi.com/';
  weatherApiIconClick.title = 'Free Weather API';
  weatherApiIconClick.append(weatherApiIcon);

  const weatherApiAtt = [weatherApiTextClick, weatherApiIconClick];
  weatherApiDiv.append(...weatherApiAtt);

  return weatherApiDiv;
};

export default createAttribution;

// Credit
// Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
// <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

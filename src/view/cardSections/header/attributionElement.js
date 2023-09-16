import { createElementWithClass, pElementWithClass } from '../helperFunc';

const textWeatherAPI = () => {
  const LINK = 'https://www.weatherapi.com/';

  const weatherApiHrefText = createElementWithClass('a', 'weatherApiClick');
  weatherApiHrefText.href = LINK;
  weatherApiHrefText.title = 'Free Weather API';
  weatherApiHrefText.textContent = 'WeatherAPI.com';

  const completeText = pElementWithClass('content');
  completeText.innerHTML = `Powered by ${weatherApiHrefText.outerHTML}`;

  return completeText;
};

const iconWeatherAPI = () => {
  const LINK = 'https://www.weatherapi.com/';
  const IMG_LINK = 'https://cdn.weatherapi.com/v4/images/weatherapi_logo.png';

  const icon = createElementWithClass('img', 'weatherApiIcon');
  icon.src = IMG_LINK;
  icon.alt = 'Weather data by WeatherAPI.com';
  icon.border = '0';

  const completeIcon = createElementWithClass('a', 'weatherApiIcon');
  completeIcon.href = LINK;
  completeIcon.title = 'Free Weather API';
  completeIcon.append(icon);

  return completeIcon;
};

const createAttributionElement = () => {
  // Credit
  const weatherApiDiv = createElementWithClass('div', 'attWeatherApi');
  const textContent = textWeatherAPI();
  const icon = iconWeatherAPI();

  const weatherApiElements = [textContent, icon];
  weatherApiDiv.append(...weatherApiElements);

  return weatherApiDiv;
};

export default createAttributionElement;
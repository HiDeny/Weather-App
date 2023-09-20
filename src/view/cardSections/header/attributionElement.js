import { createElementWithClass, pElementWithClass } from '../helperFunc';

const createTextLinkWeatherAPI = () => {
  const HREF_LINK = 'https://www.weatherapi.com/';

  const weatherApiHrefText = createElementWithClass('a', 'weatherApiClick');
  weatherApiHrefText.href = HREF_LINK;
  weatherApiHrefText.title = 'Free Weather API';
  weatherApiHrefText.textContent = 'WeatherAPI.com';

  const completeText = pElementWithClass('content');
  completeText.innerHTML = `Powered by ${weatherApiHrefText.outerHTML}`;

  return completeText;
};

const createAttributionElement = () => {
  // Credit
  const weatherApiDiv = createElementWithClass('div', 'attWeatherApi');
  weatherApiDiv.append(createTextLinkWeatherAPI());

  return weatherApiDiv;
};

export default createAttributionElement;

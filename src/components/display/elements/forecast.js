import {
  createCurrentTempElement,
  createMaxTempElement,
  createMinTempElement,
} from './temperature';

import { createConIconElement } from './conditions';

const createWeatherNode = async (weatherData, isHourly) => {
  const { temp, condition } = weatherData;

  const nodeClass = isHourly ? 'hourWeather' : 'dayWeather';
  const nodeTitle = isHourly ? weatherData.hour : weatherData.date;

  const weatherNode = document.createElement('div');
  weatherNode.classList.add(nodeClass);

  const weatherTitle = document.createElement('p');
  weatherTitle.classList.add('nodeTitle');
  weatherTitle.textContent = nodeTitle;
  weatherNode.append(weatherTitle);

  const conditionIcon = await createConIconElement(condition);
  weatherNode.append(conditionIcon);

  if (isHourly) {
    const currentTemp = createCurrentTempElement(temp.c);
    weatherNode.append(currentTemp);
  } else {
    const avgTemp = createCurrentTempElement(temp.c.avg);
    weatherNode.append(avgTemp);

    const maxTemp = createMaxTempElement(temp.c.max);
    weatherNode.append(maxTemp);

    const minTemp = createMinTempElement(temp.c.min);
    weatherNode.append(minTemp);
  }

  return weatherNode;
};

const createForecast = async (weatherDataArr, isHourly) => {
  const forecastClass = isHourly ? 'hourForecast' : 'daysForecast';

  const forecast = document.createElement('div');
  forecast.classList.add(forecastClass);

  const weatherNodes = await Promise.all(
    weatherDataArr.map(async (weatherData) =>
      createWeatherNode(weatherData, isHourly)
    )
  );

  weatherNodes.forEach((weatherNode) => {
    forecast.append(weatherNode);
  });

  return forecast;
};

export default createForecast;

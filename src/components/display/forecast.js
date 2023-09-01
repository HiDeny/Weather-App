import {
  createCurrentElement,
  createMaxTempElement,
  createMinTempElement,
} from './temperature';
import { createConIconElement } from './conditions';

const forecastClassName = 'forecast';

const createHourNode = (hourWeather) => {
  const hourNode = document.createElement('div');
  hourNode.classList.add('hourWeather');

  const hourTitle = document.createElement('p');
  hourTitle.classList.add('hourTitle');
  hourTitle.textContent = hourWeather.hour;
  hourNode.append(hourTitle);

  const conditionIcon = createConIconElement(hourWeather.condition.icon);
  hourNode.append(conditionIcon);

  const temp = createCurrentElement(hourWeather.c);
  hourNode.append(temp);

  return hourNode;
};

const createHourForecast = (hourlyForecastArr) => {
  const hourForecast = document.createElement('h2');
  hourForecast.classList.add(forecastClassName);
  hourForecast.classList.add('hourForecast');

  hourlyForecastArr.forEach((hourWeather) => {
    const hourNode = createHourNode(hourWeather);
    hourForecast.append(hourNode);
  });

  return hourForecast;
};

const createDayNode = (dayWeather) => {
  const dayNode = document.createElement('div');
  dayNode.classList.add('dayWeather');

  const dayTitle = document.createElement('p');
  dayTitle.classList.add('dayTitle');
  dayTitle.textContent = dayWeather.date;
  dayNode.append(dayTitle);

  const conditionIcon = createConIconElement(dayWeather.condition.icon);
  dayNode.append(conditionIcon);

  const avgTemp = createCurrentElement(dayWeather.c.avg);
  dayNode.append(avgTemp);

  const maxTemp = createMaxTempElement(dayWeather.c.max);
  dayNode.append(maxTemp);

  const minTemp = createMinTempElement(dayWeather.c.min);
  dayNode.append(minTemp);

  return dayNode;
};

const createDaysForecast = (daysForecastArr) => {
  const daysForecast = document.createElement('h2');
  daysForecast.classList.add(forecastClassName);
  daysForecast.classList.add('daysForecast');

  daysForecastArr.forEach((dayWeather) => {
    const dayNode = createDayNode(dayWeather);
    daysForecast.append(dayNode);
  });

  return daysForecast;
};

export { createHourForecast, createDaysForecast };

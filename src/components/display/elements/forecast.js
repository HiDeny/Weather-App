import {
  createCurrentTempElement,
  createMaxTempElement,
  createMinTempElement,
} from './temperature';
import { createConIconElement } from './conditions';

const forecastClassName = 'forecast';

const createHourNode = async (hourWeather) => {
  const { temp, condition } = hourWeather;

  const hourNode = document.createElement('div');
  hourNode.classList.add('hourWeather');

  const hourTitle = document.createElement('p');
  hourTitle.classList.add('hourTitle');
  hourTitle.textContent = hourWeather.hour;
  hourNode.append(hourTitle);

  const conditionIcon = await createConIconElement(condition);
  hourNode.append(conditionIcon);

  const currentTemp = createCurrentTempElement(temp.c);
  hourNode.append(currentTemp);

  return hourNode;
};

const createHourForecast = (hourlyArr) => {
  const hourForecast = document.createElement('div');
  hourForecast.classList.add(forecastClassName);
  hourForecast.classList.add('hourForecast');

  hourlyArr.forEach(async (hourWeather) => {
    const hourNode = await createHourNode(hourWeather);
    hourForecast.append(hourNode);
  });

  return hourForecast;
};

const createDayNode = async (dayWeather) => {
  const { temp, condition } = dayWeather;

  const dayNode = document.createElement('div');
  dayNode.classList.add('dayWeather');

  const dayTitle = document.createElement('p');
  dayTitle.classList.add('dayTitle');
  dayTitle.textContent = dayWeather.date;
  dayNode.append(dayTitle);

  const conditionIcon = await createConIconElement(condition);
  dayNode.append(conditionIcon);

  const avgTemp = createCurrentTempElement(temp.c.avg);
  dayNode.append(avgTemp);

  const maxTemp = createMaxTempElement(temp.c.max);
  dayNode.append(maxTemp);

  const minTemp = createMinTempElement(temp.c.min);
  dayNode.append(minTemp);

  return dayNode;
};

const createDaysForecast = (daysArr) => {
  const daysForecast = document.createElement('div');
  daysForecast.classList.add(forecastClassName);
  daysForecast.classList.add('daysForecast');

  daysArr.forEach(async (dayWeather) => {
    const dayNode = await createDayNode(dayWeather);
    daysForecast.append(dayNode);
  });

  return daysForecast;
};

export { createHourForecast, createDaysForecast };

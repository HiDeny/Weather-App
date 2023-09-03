import { isToday, format } from 'date-fns';

import {
  createElementWithClass,
  createConIconElement,
  setContent,
} from './helperFunc';

const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = format(date, 'EEEE');
  return isToday(date) ? 'Today' : formattedDate;
};

const createWeatherNode = async (weatherData, isHourly) => {
  const { temp, condition } = weatherData;

  let nodeTitle = isHourly
    ? weatherData.hour
    : getFormattedDate(weatherData.date);
  const nodeClass = isHourly ? 'hourWeather' : 'dayWeather';

  const weatherNode = document.createElement('div');
  weatherNode.classList.add(nodeClass);

  weatherNode.append(createElementWithClass('h4', 'nodeTitle', nodeTitle));

  const conditionIcon = await createConIconElement(condition);
  weatherNode.append(conditionIcon);

  if (isHourly) {
    weatherNode.append(setContent('currentTemp', `${temp.c}°C`));
  } else {
    weatherNode.append(setContent('avgTemp', `Avg: ${temp.c.avg}°C`));
    weatherNode.append(setContent('maxTemp', `Max: ${temp.c.max}°C`));
    weatherNode.append(setContent('minTemp', `Min: ${temp.c.min}°C`));
  }

  return weatherNode;
};

const createForecast = async (weatherDataArr, isHourly) => {
  const forecastClass = isHourly ? 'hourForecast' : 'daysForecast';

  const forecast = document.createElement('div');
  forecast.classList.add(forecastClass);

  try {
    const weatherNodes = await Promise.all(
      weatherDataArr.map(async (weatherData) =>
        createWeatherNode(weatherData, isHourly)
      )
    );

    weatherNodes.forEach((weatherNode) => {
      forecast.append(weatherNode);
    });
  } catch (err) {
    throw new Error('Error creating weather nodes:', err);
  }

  return forecast;
};

export default createForecast;

import { setContent, createConIconElement } from './helperFunc';

const createWeatherNode = async (weatherData, isHourly) => {
  const { temp, condition } = weatherData;

  const nodeClass = isHourly ? 'hourWeather' : 'dayWeather';
  const nodeTitle = isHourly ? weatherData.hour : weatherData.date;

  const weatherNode = document.createElement('div');
  weatherNode.classList.add(nodeClass);

  weatherNode.append(setContent('nodeTitle', nodeTitle));

  const conditionIcon = await createConIconElement(condition);
  weatherNode.append(conditionIcon);

  if (isHourly) {
    weatherNode.append(setContent('currentTemp', `${temp.c}°C`));
  } else {
    weatherNode.append(setContent('avgTemp', `${temp.c.avg}°C`));
    weatherNode.append(setContent('maxTemp', `${temp.c.max}°C`));
    weatherNode.append(setContent('minTemp', `${temp.c.min}°C`));
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

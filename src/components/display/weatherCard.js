import { createNameElement, createRegionElement } from './info';
import {
  createCurrentElement,
  createFeelsLikeElement,
  createUVIElement,
} from './temperature';
import createConditionsElement from './conditions';
import {
  createSpeedElement,
  createGustElement,
  createDirectionElement,
} from './wind';

const createComponent = (classGroup, className) => {
  const component = document.createElement('div');
  component.classList.add(classGroup);
  component.classList.add(className);

  return component;
};

const createDetailsSection = (feelsLikeTemp, uv, wind) => {
  const details = document.createElement('div');
  details.classList.add('detailsSection');

  const componentGroup = 'detailComp';

  const feelComp = createComponent(componentGroup, 'feelsLike');
  feelComp.append(createFeelsLikeElement(feelsLikeTemp));
  details.append(feelComp);

  // const sunComp = createComponent(componentGroup, 'sun');
  // createSunElement(sunCond);
  // details.append(sunComp);

  const uvComp = createComponent(componentGroup, 'uv');
  uvComp.append(createUVIElement(uv));
  details.append(uvComp);

  const windComp = createComponent(componentGroup, 'wind');
  windComp.append(createSpeedElement(wind.speed.kph));
  windComp.append(createGustElement(wind.gust.kph));
  windComp.append(createDirectionElement(wind.dir));
  details.append(windComp);

  return details;
};

const createForecastSection = () => {
  // Hour forecast
  // Day forecast
};

const createTodaySection = ({}) => {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const componentGroup = 'mainComp';

  const infoComp = createComponent(componentGroup, 'info');
  infoComp.append(createNameElement(location.name));
  infoComp.append(createRegionElement(location.region));
  mainDiv.append(infoComp);

  const currentComp = createComponent(componentGroup, 'current');
  currentComp.append(createCurrentElement(currentTemp));
  currentComp.append(createConditionsElement(conditions));
  mainDiv.append(currentComp);

  return mainDiv;
};

const createInfoSection = ({ name, region }) => {
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');

  const componentGroup = 'infoComp';

  const infoComp = createComponent(componentGroup, 'info');
  infoComp.append(createNameElement(name));
  infoComp.append(createRegionElement(region));
  infoDiv.append(infoComp);

  const currentComp = createComponent(componentGroup, 'current');
  infoDiv.append(currentComp);

  return infoDiv;
};

const createWeatherCard = async (weatherData) => {
  const { location, temp, wind, condition } = weatherData;
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');

  const info = createTodaySection(location);
  weatherCard.append(info);

  const today = createTodaySection(location, temp.current.c, condition);
  weatherCard.append(today);

  // const forecast = createForecastSection(day, week);
  // weatherCard.append(forecast);

  const details = createDetailsSection(temp.feel.c, temp.uv, wind);
  weatherCard.append(details);

  return weatherCard;
};

export default createWeatherCard;

import {
  createFeelsLikeElement,
  createUVIElement,
} from '../elements/temperature';

import {
  createSpeedElement,
  createGustElement,
  createDirectionElement,
  createMaxSpeedElement,
} from '../elements/wind';

import {
  createSunriseElement,
  createSunsetElement,
  createMoonriseElement,
  createMoonsetElement,
  createMoonIllElement,
} from '../elements/astro';

const createMoonCard = ({ rise, set, illumination }) => {
  const card = document.createElement('div');
  card.classList.add('moon');

  const moonriseInfo = createMoonriseElement(rise);
  card.append(moonriseInfo);

  const moonsetInfo = createMoonsetElement(set);
  card.append(moonsetInfo);

  const moonIllInfo = createMoonIllElement(illumination);
  card.append(moonIllInfo);

  return card;
};

const createSunCard = ({ rise, set }) => {
  const card = document.createElement('div');
  card.classList.add('sun');

  const sunriseInfo = createSunriseElement(rise);
  card.append(sunriseInfo);

  const sunsetInfo = createSunsetElement(set);
  card.append(sunsetInfo);

  return card;
};

const createWindCard = (wind) => {
  const { speed, gust, max } = wind.kph;
  const { dir } = wind;
  const card = document.createElement('div');
  card.classList.add('wind');

  const speedInfo = createSpeedElement(speed);
  card.append(speedInfo);

  const gustInfo = createGustElement(gust);
  card.append(gustInfo);

  const maxInfo = createMaxSpeedElement(max);
  card.append(maxInfo);

  const dirInfo = createDirectionElement(dir);
  card.append(dirInfo);

  return card;
};

const createUVICard = (uvVal) => {
  const card = document.createElement('div');
  card.classList.add('uv');

  const element = createUVIElement(uvVal);
  card.append(element);

  return card;
};

const createFeelsLikeCard = (feelsLikeTemp) => {
  const card = document.createElement('div');
  card.classList.add('feelsLike');

  const element = createFeelsLikeElement(feelsLikeTemp);
  card.append(element);

  return card;
};

const createDetailsSection = ({ temp, wind, astro }) => {
  const { feel, uv } = temp;
  const { sun, moon } = astro;

  const detailsSection = document.createElement('section');
  detailsSection.classList.add('detailsSection');

  const feelCard = createFeelsLikeCard(feel.c);
  detailsSection.append(feelCard);

  const uvCard = createUVICard(uv);
  detailsSection.append(uvCard);

  const windCard = createWindCard(wind);
  detailsSection.append(windCard);

  const sunCard = createSunCard(sun);
  detailsSection.append(sunCard);

  const moonCard = createMoonCard(moon);
  detailsSection.append(moonCard);

  return detailsSection;
};

export default createDetailsSection;

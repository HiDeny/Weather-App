import { createElementWithClass, pElementWithClass } from '../helperFunc';

const createCard = (className, title) => {
  const card = document.createElement('div');
  card.classList.add('detailCard');
  card.classList.add(`${className}Info`);

  const titleElement = createElementWithClass('h4', `title`, title);
  card.append(titleElement);

  return card;
};

const createRainCard = (rain, isMetric) => {
  const { chance, precip, total } = rain;

  const card = createCard('rain', 'Rain');

  // Set stuff by isMetric
  card.append(pElementWithClass('precip', precip));
  card.append(pElementWithClass('chance', chance));
  card.append(pElementWithClass('total', total));

  return card;
};

const createAstroCard = (astroData, isMoon) => {
  const { rise, set, illumination } = astroData;

  const cardName = isMoon ? 'Moon' : 'Sun';
  const cardClass = isMoon ? 'moon' : 'sun';

  const card = createCard(cardClass, cardName);

  card.append(pElementWithClass('astroRise', `Rise: ${rise}`));
  card.append(pElementWithClass('astroSet', `Set: ${set}`));

  if (isMoon) {
    card.append(pElementWithClass('astroIll', `Illumination: ${illumination}`));
  }

  return card;
};

const createWindCard = (wind) => {
  const { speed, gust, max } = wind.kph;
  const { dir } = wind;

  const card = createCard('wind', 'Wind');

  card.append(pElementWithClass('speed', `Speed: ${speed}`));
  card.append(pElementWithClass('gust', `Gust: ${gust}`));
  card.append(pElementWithClass('max', `Max Speed: ${max}`));
  card.append(pElementWithClass('dir', `Direction: ${dir}`));

  return card;
};

const createDetailsInfo = (detailsInfoData, isMetric) => {
  const { feelsLike, uv, wind, sun, moon, rain, humidity, cloud, visibility } =
    detailsInfoData;

  const detailsSection = document.createElement('section');
  detailsSection.classList.add('detailsInfo');

  const feelCard = createCard('feelsLike', 'Feels Like');
  feelCard.append(pElementWithClass('feelsLikeTemp', feelsLike));

  const uvCard = createCard('uv', 'UV');
  uvCard.append(pElementWithClass('uvIndex', uv));

  const windCard = createWindCard(wind);

  const rainCard = createRainCard(rain);

  const sunCard = createAstroCard(sun);
  const moonCard = createAstroCard(moon, true);

  const detailCards = [feelCard, uvCard, windCard, rainCard, sunCard, moonCard];
  detailsSection.append(...detailCards);

  return detailsSection;
};

export default createDetailsInfo;

import { createElementWithClass, setContent } from '../elements/helperFunc';

const createCard = (title, className, content) => {
  const card = document.createElement('div');
  card.classList.add('detailCard');
  card.classList.add(`${className}Card`);

  const titleElement = createElementWithClass('h4', `${className}Title`, title);
  card.append(titleElement);

  if (content) {
    const contentElement = setContent(`${className}Content`, content);
    card.append(contentElement);
  }

  return card;
};

const createAstroCard = (astroData, isMoon) => {
  const { rise, set, illumination } = astroData;

  const cardName = isMoon ? 'Moon' : 'Sun';
  const cardClass = isMoon ? 'moon' : 'sun';

  const card = createCard(cardName, cardClass);

  card.append(setContent('astroRise', `Rise: ${rise}`));
  card.append(setContent('astroSet', `Set: ${set}`));

  if (isMoon) {
    card.append(setContent('astroIll', `Illumination: ${illumination}`));
  }

  return card;
};

const createWindCard = (wind) => {
  const { speed, gust, max } = wind.kph;
  const { dir } = wind;

  const card = createCard('Wind', 'wind');

  card.append(setContent('windSpeed', `Speed: ${speed}`));
  card.append(setContent('windGust', `Gust: ${gust}`));
  card.append(setContent('windMax', `Max Speed: ${max}`));
  card.append(setContent('windDir', `Direction: ${dir}`));

  return card;
};

const createDetailsSection = ({ temp, wind, astro }) => {
  const { feel, uv } = temp;
  const { sun, moon } = astro;

  const detailsSection = document.createElement('section');
  detailsSection.classList.add('detailsSection');

  const feelCard = createCard('Feels Like', 'feelsLike', feel.c);
  const uvCard = createCard('UV', 'uv', uv);
  const windCard = createWindCard(wind);
  const sunCard = createAstroCard(sun);
  const moonCard = createAstroCard(moon, true);

  const detailCards = [feelCard, uvCard, windCard, sunCard, moonCard];
  detailsSection.append(...detailCards);

  return detailsSection;
};

export default createDetailsSection;

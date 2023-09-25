import '../css/detailsInfo.css';
import { createElementWithClass, pElementWithClass } from './helperFunc';

const createCard = (className, title) => {
  const card = createElementWithClass('div', 'detailCard');
  card.classList.add(`${className}Info`);

  const titleDiv = createElementWithClass('div', `titleDiv`);
  titleDiv.append(createElementWithClass('i', `icon`));
  titleDiv.append(createElementWithClass('h4', `title`, title));
  card.append(titleDiv);

  return card;
};

const createFeelCard = (feelsLikeTemp) => {
  const card = createCard('feelsLike', 'Feels Like');
  card.append(pElementWithClass('feelsLikeVal', `${feelsLikeTemp}°`));

  return card;
};

const createRainCard = (rain, isMetric) => {
  const { chance, precip, total } = rain;
  const correctVal = isMetric ? 'mm' : 'in';

  const card = createCard('rain', 'Rain');
  card.append(pElementWithClass('precip', `Precip: ${precip} ${correctVal}`));
  card.append(pElementWithClass('chance', `Chance of rain: ${chance}%`));
  card.append(pElementWithClass('total', `Total: ${total} ${correctVal}`));

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
    card.append(
      pElementWithClass('astroIll', `Illumination: ${illumination}%`)
    );
  }

  return card;
};

const createWindCard = (wind, isMetric) => {
  const { speed, gust, max, dir, degree } = wind;
  const correctVal = isMetric ? 'km/h' : 'm/h';

  const card = createCard('wind', 'Wind');
  card.append(pElementWithClass('speed', `Speed: ${speed} ${correctVal}`));
  card.append(pElementWithClass('gust', `Gust: ${gust} ${correctVal}`));
  card.append(pElementWithClass('max', `Max Speed: ${max} ${correctVal}`));
  card.append(pElementWithClass('dir', `Direction: ${dir}`));
  card.append(pElementWithClass('dir', `Degree: ${degree}`));

  return card;
};

const createVisibilityCard = (visibility, isMetric) => {
  const correctVal = isMetric ? 'km' : 'mi';

  const card = createCard('visibility', 'Visibility');
  card.append(
    pElementWithClass('visibilityVal', `${visibility} ${correctVal}`)
  );

  return card;
};

const createDetailsInfo = (detailsInfoData, isMetric) => {
  const { feelsLike, uv, wind, sun, moon, rain, humidity, cloud, visibility } =
    detailsInfoData;

  const detailsSection = document.createElement('section');
  detailsSection.classList.add('detailsInfo');
  detailsSection.append(createFeelCard(feelsLike, isMetric));
  detailsSection.append(createWindCard(wind, isMetric));
  detailsSection.append(createRainCard(rain, isMetric));
  detailsSection.append(createAstroCard(sun));
  detailsSection.append(createAstroCard(moon, true));
  detailsSection.append(createVisibilityCard(visibility, isMetric));

  const uvCard = createCard('uv', 'UV');
  uvCard.append(pElementWithClass('uvVal', uv));

  const humidityCard = createCard('humidity', 'Humidity');
  humidityCard.append(pElementWithClass('humidityVal', `${humidity.current}%`));

  const cloudCard = createCard('clouds', 'Clouds');
  cloudCard.append(pElementWithClass('cloudsVal', `${cloud}%`));

  const detailCards = [uvCard, humidityCard, cloudCard];
  detailsSection.append(...detailCards);

  return detailsSection;
};

export default createDetailsInfo;

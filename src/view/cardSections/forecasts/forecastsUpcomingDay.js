import {
  createElementWithClass,
  pElementWithClass,
  createConditionsIcon,
} from '../helperFunc';

const createSubCardTitle = (name) => {
  const subCardTitle = createElementWithClass('div', 'subCardTitle');
  subCardTitle.append(createElementWithClass('i', 'icon'));
  subCardTitle.append(pElementWithClass('text', name));

  return subCardTitle;
};

const createCardTitle = (date) => {
  const { weekDayName, number } = date;
  const cardTitle = createElementWithClass('div', 'title');
  cardTitle.append(pElementWithClass('date', number));
  cardTitle.append(pElementWithClass('day', weekDayName));

  return cardTitle;
};

const createCardTemp = (temp) => {
  const { avg, max, min } = temp;

  const container = createElementWithClass('div', 'tempContainer');
  container.append(createSubCardTitle('Temp'));
  container.append(pElementWithClass('avgTemp', `${avg}°`));
  container.append(pElementWithClass('maxTemp', `H: ${max}°`));
  container.append(pElementWithClass('minTemp', `L: ${min}°`));

  return container;
};

const createCardWind = (wind, isMetric) => {
  const { max } = wind;
  const correctVal = isMetric ? 'k/h' : 'm/h';

  const container = createElementWithClass('div', 'windContainer');
  container.append(createSubCardTitle('Wind'));
  container.append(pElementWithClass('wind', `${max} ${correctVal}`));

  return container;
};

const createCardRain = (rain, isMetric) => {
  const { chance, total } = rain;
  const correctVal = isMetric ? 'mm' : 'in';

  const container = createElementWithClass('div', 'rainContainer');
  container.append(createSubCardTitle('Rain'));
  container.append(pElementWithClass('chance', `Chance: ${chance}%`));
  container.append(pElementWithClass('total', `Total: ${total} ${correctVal}`));

  return container;
};

const createCardHumidity = (humidity) => {
  const container = createElementWithClass('div', 'humidityContainer');
  container.append(createSubCardTitle('Humidity'));
  container.append(pElementWithClass('avg', ` ${humidity}%`));

  return container;
};

const createUpcomingCard = async (upcomingDay, isMetric) => {
  const { date, condition, humidity, rain, temp, wind } = upcomingDay;

  const card = createElementWithClass('div', 'upcomingCard');
  // Title - Date
  card.append(createCardTitle(date));
  // Conditions - icon
  card.append(await createConditionsIcon(condition));
  // Temp - Avg, Max, Min
  card.append(createCardTemp(temp, isMetric));
  // Wind
  card.append(createCardWind(wind, isMetric));
  // Rain - Chance, Total
  card.append(createCardRain(rain, isMetric));
  // Humidity
  card.append(createCardHumidity(humidity));

  return card;
};

export default createUpcomingCard;

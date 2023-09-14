import {
  createElementWithClass,
  pElementWithClass,
  createConIconElement,
} from '../helperFunc';

const createCardTitle = (date) => {
  const { weekDayName, number } = date;
  const cardTitleDiv = createElementWithClass('div', 'title');

  const cardTitleDate = pElementWithClass('date', number);
  cardTitleDiv.append(cardTitleDate);

  const cardTitleDay = pElementWithClass('day', weekDayName);
  cardTitleDiv.append(cardTitleDay);

  return cardTitleDiv;
};

const createCardTemp = (temp, isMetric) => {
  const { avg, max, min } = temp;
  const correctVal = isMetric ? '°C' : '°F';

  const container = createElementWithClass('div', 'tempContainer');

  const title = pElementWithClass('title', 'Temperature');
  container.append(title);

  const avgTemp = pElementWithClass('avgTemp', `${avg}${correctVal}`);
  container.append(avgTemp);

  const maxTemp = pElementWithClass('maxTemp', `H: ${max}${correctVal}`);
  container.append(maxTemp);

  const minTemp = pElementWithClass('minTemp', `L: ${min}${correctVal}`);
  container.append(minTemp);

  return container;
};

const createCardWind = (wind, isMetric) => {
  const { max } = wind;
  const correctVal = isMetric ? 'km/h' : 'm/h';

  const container = createElementWithClass('div', 'windContainer');

  const title = pElementWithClass('title', 'Wind');
  container.append(title);

  const maxWind = pElementWithClass('wind', `${max} ${correctVal}`);
  container.append(maxWind);

  return container;
};

const createCardRain = (rain, isMetric) => {
  const { chance, total } = rain;
  const correctVal = isMetric ? 'mm' : 'in';

  const container = createElementWithClass('div', 'rainContainer');

  const title = pElementWithClass('title', 'Rain');
  container.append(title);

  const chanceRain = pElementWithClass('chance', `Chance: ${chance}%`);
  container.append(chanceRain);

  const totalRain = pElementWithClass(
    'total',
    `Total Pcpn: ${total} ${correctVal}`
  );
  container.append(totalRain);

  return container;
};

const createCardHumidity = (humidity) => {
  const container = createElementWithClass('div', 'humidityContainer');

  const title = createElementWithClass('p', 'title', 'Humidity');
  container.append(title);

  const chanceRain = createElementWithClass('p', 'avg', ` ${humidity}%`);
  container.append(chanceRain);

  return container;
};

const createUpcomingCard = async (upcomingDay, isMetric) => {
  const { date, condition, humidity, rain, temp, wind } = upcomingDay;

  const card = createElementWithClass('div', 'upcomingCard');

  // Title - Date
  const cardTitle = createCardTitle(date);
  card.append(cardTitle);

  // Conditions - icon
  const conditionIcon = await createConIconElement(condition);
  card.append(conditionIcon);

  // Temp - Avg, Max, Min
  const cardTemp = createCardTemp(temp, isMetric);
  card.append(cardTemp);

  // Wind
  const cardWind = createCardWind(wind, isMetric);
  card.append(cardWind);

  // Rain - Chance, Total
  const cardRain = createCardRain(rain, isMetric);
  card.append(cardRain);

  // Humidity
  const cardHumidity = createCardHumidity(humidity);
  card.append(cardHumidity);

  return card;
};

export default createUpcomingCard;

import {
  createElementWithClass,
  pElementWithClass,
  createConditionsIcon,
} from '../helperFunc';

// createElementWithClass(element, class, content)
// pElementWithClass(class, content)

const createCardTitle = (date) => {
  const { weekDayName, number } = date;
  const cardTitle = createElementWithClass('div', 'title');
  cardTitle.append(pElementWithClass('date', number));
  cardTitle.append(pElementWithClass('day', weekDayName));

  return cardTitle;
};

const createCardTemp = (temp, isMetric) => {
  const { avg, max, min } = temp;
  const correctVal = isMetric ? '°C' : '°F';

  const container = createElementWithClass('div', 'tempContainer');

  const titleDiv = createElementWithClass('div', 'titleDiv');
  titleDiv.append(createElementWithClass('i', 'icon'));
  titleDiv.append(pElementWithClass('title', 'Temperature'));

  container.append(titleDiv);
  container.append(pElementWithClass('avgTemp', `${avg}${correctVal}`));
  container.append(pElementWithClass('maxTemp', `H: ${max}${correctVal}`));
  container.append(pElementWithClass('minTemp', `L: ${min}${correctVal}`));

  return container;
};

const createCardWind = (wind, isMetric) => {
  const { max } = wind;
  const correctVal = isMetric ? 'km/h' : 'm/h';

  const container = createElementWithClass('div', 'windContainer');

  const titleDiv = createElementWithClass('div', 'titleDiv');
  titleDiv.append(createElementWithClass('i', 'icon'));
  titleDiv.append(pElementWithClass('title', 'Wind'));

  container.append(titleDiv);
  container.append(pElementWithClass('wind', `${max} ${correctVal}`));

  return container;
};

const createCardRain = (rain, isMetric) => {
  const { chance, total } = rain;
  const correctVal = isMetric ? 'mm' : 'in';

  const container = createElementWithClass('div', 'rainContainer');

  const titleDiv = createElementWithClass('div', 'titleDiv');
  titleDiv.append(createElementWithClass('i', 'icon'));
  titleDiv.append(pElementWithClass('title', 'Rain'));

  container.append(titleDiv);
  container.append(pElementWithClass('chance', `Chance: ${chance}%`));
  container.append(
    pElementWithClass('total', `Total Pcpn: ${total} ${correctVal}`)
  );

  return container;
};

const createCardHumidity = (humidity) => {
  const container = createElementWithClass('div', 'humidityContainer');

  const titleDiv = createElementWithClass('div', 'titleDiv');
  titleDiv.append(createElementWithClass('i', 'icon'));
  titleDiv.append(pElementWithClass('title', 'Humidity'));

  container.append(titleDiv);
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

// import createForecast from '../elements/forecast';
import { createConIconElement, createElementWithClass } from '../helperFunc';
import createForecastHourly from './forecastHourly';

const createCardTitle = (date) => {
  const { weekDayName, number } = date;
  const cardTitle = createElementWithClass('p', 'title', weekDayName);
  return cardTitle;
};

const createCardTemp = (temp) => {
  const { avg, max, min } = temp;

  const container = createElementWithClass('div', 'tempContainer');

  const title = createElementWithClass('p', 'title', 'Temperature');
  container.append(title);

  const avgTemp = createElementWithClass('p', 'avgTemp', `${avg}`);
  container.append(avgTemp);

  const maxTemp = createElementWithClass('p', 'maxTemp', `H: ${max}`);
  container.append(maxTemp);

  const minTemp = createElementWithClass('p', 'minTemp', `L: ${min}`);
  container.append(minTemp);

  return container;
};

const createCardWind = (wind) => {
  const { max } = wind;

  const container = createElementWithClass('div', 'windContainer');

  const title = createElementWithClass('p', 'title', 'Wind');
  container.append(title);

  const maxWind = createElementWithClass('p', 'wind', `${max}`);
  container.append(maxWind);

  return container;
};

const createCardRain = (rain) => {
  const { chance, total } = rain;

  const container = createElementWithClass('div', 'rainContainer');

  const title = createElementWithClass('p', 'title', 'Rain');
  container.append(title);

  const chanceRain = createElementWithClass(
    'p',
    'chance',
    `Chance of rain: ${chance}%`
  );
  container.append(chanceRain);

  const totalRain = createElementWithClass(
    'p',
    'total',
    `Total Precipitation: ${total}`
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

const createUpcomingCard = async (upcomingDay) => {
  const { date, condition, humidity, rain, temp, wind } = upcomingDay;

  const card = createElementWithClass('div', 'upcomingCard');

  // Title - Date
  const cardTitle = createCardTitle(date);
  card.append(cardTitle);

  // Conditions - icon
  const conditionIcon = await createConIconElement(condition);
  card.append(conditionIcon);

  // Temp - Avg, Max, Min
  const cardTemp = createCardTemp(temp);
  card.append(cardTemp);

  // Wind
  const cardWind = createCardWind(wind);
  card.append(cardWind);

  // Rain - Chance, Total
  const cardRain = createCardRain(rain);
  card.append(cardRain);

  // Humidity
  const cardHumidity = createCardHumidity(humidity);
  card.append(cardHumidity);

  return card;
};

const createForecasts = async (forecastsData, isMetric) => {
  const { today, upcoming } = forecastsData;

  const forecastSection = document.createElement('section');
  forecastSection.classList.add('forecasts');

  const forecastHourlyDiv = createElementWithClass('div', 'todayForecast');
  forecastSection.append(forecastHourlyDiv);

  const forecastHourly = createForecastHourly(today, isMetric);
  forecastHourlyDiv.append(forecastHourly);

  const upcomingDiv = createElementWithClass('div', 'upcoming');
  forecastSection.append(upcomingDiv);

  const upcomingDay1 = await createUpcomingCard(upcoming.firstDay);
  upcomingDiv.append(upcomingDay1);

  const upcomingDay2 = await createUpcomingCard(upcoming.secondDay);
  upcomingDiv.append(upcomingDay2);

  return forecastSection;
};

export default createForecasts;

// import createForecast from '../elements/forecast';
import { createElementWithClass } from '../helperFunc';

import createForecastHourly from './forecastHourly';
import createUpcomingCard from './forecastsUpcomingDay';

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

  const upcomingDay1 = await createUpcomingCard(upcoming.firstDay, isMetric);
  upcomingDiv.append(upcomingDay1);

  const upcomingDay2 = await createUpcomingCard(upcoming.secondDay, isMetric);
  upcomingDiv.append(upcomingDay2);

  return forecastSection;
};

export default createForecasts;

import '../../css/forecast.css';
import { createElementWithClass } from '../helperFunc';

import createForecastHourly from './forecastHourly';
import createUpcomingCard from './forecastsUpcomingDay';

const createForecasts = async (forecastsData, isMetric) => {
  const { today, upcoming } = forecastsData;
  const { firstDay, secondDay } = upcoming;

  const forecastSection = createElementWithClass('section', 'forecasts');

  const forecastHourly = createElementWithClass('div', 'todayForecast');
  forecastHourly.append(createForecastHourly(today));

  const upcomingDays = createElementWithClass('div', 'upcoming');
  upcomingDays.append(await createUpcomingCard(firstDay, isMetric));
  upcomingDays.append(await createUpcomingCard(secondDay, isMetric));

  const forecastElements = [forecastHourly, upcomingDays];
  forecastSection.append(...forecastElements);

  return forecastSection;
};

export default createForecasts;

import { createHourForecast, createDaysForecast } from '../elements/forecast';

const createForecastSection = async ({ hour, days }) => {
  const forecastSection = document.createElement('section');
  forecastSection.classList.add('forecast');

  const hourForecast = await createHourForecast(hour);
  forecastSection.append(hourForecast);

  const daysForecast = createDaysForecast(days);
  forecastSection.append(daysForecast);

  return forecastSection;
};

export default createForecastSection;

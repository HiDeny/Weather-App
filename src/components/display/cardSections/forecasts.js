import createForecast from '../elements/forecast';
import createChart from './chartCard';

const createForecastSection = async ({ hour, days }) => {
  const forecastSection = document.createElement('section');
  forecastSection.classList.add('forecast');

  try {
    if (hour) {
      const hourForecast = await createForecast(hour, true);
      forecastSection.append(hourForecast);

      const hourCart = createChart(hour);
      forecastSection.append(hourCart);
    }

    if (days) {
      const daysForecast = await createForecast(days);
      forecastSection.append(daysForecast);
    }
  } catch (err) {
    throw new Error('Error crating forecast section:', err);
  }

  return forecastSection;
};

export default createForecastSection;

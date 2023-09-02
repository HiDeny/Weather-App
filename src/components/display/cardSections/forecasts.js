import createForecast from '../elements/forecast';

const createForecastSection = async ({ hour, days }) => {
  const forecastSection = document.createElement('section');
  forecastSection.classList.add('forecast');

  try {
    if (hour) {
      const hourForecast = await createForecast(hour, true);
      forecastSection.append(hourForecast);
    }

    if (days) {
      const daysForecast = await createForecast(days);
      forecastSection.append(daysForecast);
    }
  } catch (err) {
    console.error('Error crating forecast section:', err);
  }

  return forecastSection;
};

export default createForecastSection;

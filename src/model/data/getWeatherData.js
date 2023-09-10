const API_KEY = '0ef9234ffd8140e0bcf145942232508';
const BASE_URL = 'https://api.weatherapi.com/v1';

const CURRENT_WEATHER = '/current.json';
const FORECAST_WEATHER = '/forecast.json';
const forecastDays = 'days=3';

const getWeatherData = async (location) => {
  const current = `${BASE_URL}${CURRENT_WEATHER}?key=${API_KEY}&q=${location}`;
  const forecast = `${BASE_URL}${FORECAST_WEATHER}?key=${API_KEY}&q=${location}&${forecastDays}`;

  const urls = [current, forecast];
  try {
    const weatherData = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url);
        const respJSON = await resp.json();

        if (respJSON.error)
          throw new Error(`API Error: ${respJSON.error.message}`);

        return respJSON;
      })
    );

    return weatherData;
  } catch (err) {
    throw new Error(err);
  }
};

export default getWeatherData;

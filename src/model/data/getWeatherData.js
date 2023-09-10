const API_KEY = '0ef9234ffd8140e0bcf145942232508';
const BASE_URL = 'https://api.weatherapi.com/v1';

const FORECAST_WEATHER = '/forecast.json';
const forecastDays = 'days=3';

const getWeatherData = async (location) => {
  // Getting forecast only because current weather is already with it
  const forecast = `${BASE_URL}${FORECAST_WEATHER}?key=${API_KEY}&q=${location}&${forecastDays}`;

  try {
    const forecastResponse = await fetch(forecast);
    const weatherData = await forecastResponse.json();

    if (weatherData.error)
      throw new Error(`API Error: ${weatherData.error.message}`);

    return weatherData;
  } catch (err) {
    throw new Error(err);
  }
};

export default getWeatherData;

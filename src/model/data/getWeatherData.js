const API_KEY = '0ef9234ffd8140e0bcf145942232508';
const BASE_URL = 'https://api.weatherapi.com/v1';

const FORECAST_WEATHER = '/forecast.json';
const FORECAST_DAYS = 'days=3';

const getWeatherData = async (location) => {
  // Getting forecast only because current weather is already with it
  const weatherData = `${BASE_URL}${FORECAST_WEATHER}?key=${API_KEY}&q=${location}&${FORECAST_DAYS}`;

  const response = await fetch(weatherData, { mode: 'cors' });
  const responseJSON = await response.json();

  if (responseJSON.error) {
    throw new Error(`API Error: ${responseJSON.error.code}`);
  }

  return responseJSON;
};

export default getWeatherData;

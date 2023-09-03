const apiKey = 'key=0ef9234ffd8140e0bcf145942232508';
const baseURL = 'https://api.weatherapi.com/v1';

const forecastWeather = '/forecast.json';
const forecastDays = 'days=7';

const getWeatherData = async (location) => {
  const weatherURL = `${baseURL}${forecastWeather}?${apiKey}&q=${location}&${forecastDays}`;

  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    return weatherData;
  } catch (err) {
    throw new Error(err);
  }
};

export default getWeatherData;

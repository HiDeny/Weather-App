const apiKey = 'key=0ef9234ffd8140e0bcf145942232508';
const baseURL = 'https://api.weatherapi.com/v1';

const forecastWeather = '/forecast.json';
const forecastDays = 'days=7';

// const testLocation = 'Prague';

const getWeatherData = async (location) => {
  const weatherURL = `${baseURL}${forecastWeather}?${apiKey}&q=${location}&${forecastDays}`;
  // const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=0ef9234ffd8140e0bcf145942232508&q=London&days=3`;

  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    console.log(weatherData);

    return weatherData;
  } catch (err) {
    throw new Error(err);
  }
};

// getWeatherData('Cape Town').then(async (result) => {
//   console.log(result);
// });

export default getWeatherData;

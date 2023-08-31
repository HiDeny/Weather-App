const apiKey = 'key=0ef9234ffd8140e0bcf145942232508';
const baseURL = 'https://api.weatherapi.com/v1';

const forecastWeather = '/forecast.json';
const forecastDays = 'days=3';

// const currentWeather = '/current.json';
// const testLocation = 'Prague';

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

getWeatherData('Pringle bay').then((response) => {
  // console.log(response);
  console.log(response.forecast);
  console.log(response.forecast.forecastday);
  // console.log(response.forecast.forecastday[0].day);
  // console.log(response.forecast.forecastday[0].hour);
});

// export default getWeatherData;

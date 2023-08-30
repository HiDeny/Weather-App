/* eslint-disable camelcase */
const apiKey = 'key=0ef9234ffd8140e0bcf145942232508';

const baseURL = 'https://api.weatherapi.com/v1';
const currentWeather = '/current.json';
// const forecast = '/forecast.json';
// const testLocation = 'Prague';

const getWeatherData = async (location) => {
  const completeURL = `${baseURL}${currentWeather}?${apiKey}&q=${location}`;
  try {
    const response = await fetch(completeURL);
    const responseJSON = await response.json();

    return responseJSON;
  } catch (err) {
    throw new Error(err);
  }
};

const filterWeatherData = async (weatherData) => {
  console.log(weatherData);
  const locationData = await weatherData;
  const { name, region, country } = locationData.location;

  const { temp_c, temp_f, uv } = locationData.current;
  const { feelslike_c, feelslike_f } = locationData.current;

  const { wind_kph, wind_mph, wind_dir } = locationData.current;
  const { gust_kph, gust_mph } = locationData.current;

  const condition = locationData.current.condition.text;

  return {
    location: {
      name,
      region,
      country,
    },
    temp: {
      current: {
        c: temp_c,
        f: temp_f,
      },
      feel: {
        c: feelslike_c,
        f: feelslike_f,
      },
      uv,
    },
    wind: {
      speed: {
        kph: wind_kph,
        mph: wind_mph,
      },
      gust: {
        kph: gust_kph,
        mph: gust_mph,
      },
      dir: wind_dir,
    },
    condition,
  };
};

const getWeather = async (location) => {
  const weatherData = await getWeatherData(location);
  const cleanData = await filterWeatherData(weatherData);
  console.log(cleanData);
  return cleanData;
};

// getWeather(testLocation);

export default getWeather;

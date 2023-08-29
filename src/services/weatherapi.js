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
  const locationData = await weatherData;
  const { name, region, country } = locationData.location;

  const { temp_c, temp_f, uv } = locationData.current;
  const { feelslike_c, feelslike_f } = locationData.current;

  const { wind_kph, wind_mph, wind_dir } = locationData.current;
  const { gust_kph, gust_mph } = locationData.current;

  const { text, icon } = locationData.current.condition;

  // const messageHead = `${name} - ${country}`;
  // const messageTemp = `Temp: ${temp_c}C Feels like: ${feelslike_c}C UV: ${uv}`;
  // const messageWind = `Wind: ${wind_kph}K/H Gust: ${gust_kph}K/H Direction: ${wind_dir}`;
  // const messageText = `It's ${text}`;

  // console.log(messageHead);
  // console.log(messageTemp);
  // console.log(messageWind);
  // console.log(messageText);

  return {
    location: {
      name,
      region,
      country,
    },
    temp: {
      c: {
        current: temp_c,
        feel: feelslike_c,
      },
      f: {
        current: temp_f,
        feel: feelslike_f,
      },
      uv,
    },
    wind: {
      kph: {
        speed: wind_kph,
        gust: gust_kph,
      },
      mph: {
        speed: wind_mph,
        gust: gust_mph,
      },
      dir: wind_dir,
    },
    condition: {
      text,
      icon: `https:${icon}`,
    },
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

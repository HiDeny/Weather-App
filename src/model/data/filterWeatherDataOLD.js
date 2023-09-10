/* eslint-disable camelcase */

const getTodayWeather = (weatherData) => {
  const { temp_c, temp_f } = weatherData.current;
  const { maxtemp_c, maxtemp_f } = weatherData.forecast.forecastday[0].day;
  const { mintemp_c, mintemp_f } = weatherData.forecast.forecastday[0].day;
  const { condition } = weatherData.current;
  const time = weatherData.current.last_updated.split(' ')[1];
  return {
    time,
    temp: {
      c: { current: temp_c, max: maxtemp_c, min: mintemp_c },
      f: { current: temp_f, max: maxtemp_f, min: mintemp_f },
    },
    condition,
  };
};

const getTemp = (weatherData) => {
  const { feelslike_c, feelslike_f, uv } = weatherData.current;
  return { feel: { c: feelslike_c, f: feelslike_f }, uv };
};

const getWind = (weatherData) => {
  const { wind_kph, wind_mph, wind_dir } = weatherData.current;
  const { gust_kph, gust_mph } = weatherData.current;
  const { maxwind_kph, maxwind_mph } = weatherData.forecast.forecastday[0].day;
  return {
    kph: { speed: wind_kph, gust: gust_kph, max: maxwind_kph },
    mph: { speed: wind_mph, gust: gust_mph, max: maxwind_mph },
    dir: wind_dir,
  };
};
const getAstro = (weatherData) => {
  const { sunrise, sunset } = weatherData.forecast.forecastday[0].astro;
  const { moonrise, moonset } = weatherData.forecast.forecastday[0].astro;
  const { moon_illumination } = weatherData.forecast.forecastday[0].astro;
  return {
    sun: { rise: sunrise, set: sunset },
    moon: { rise: moonrise, set: moonset, illumination: moon_illumination },
  };
};

const getDetails = (weatherData) => {
  const temp = getTemp(weatherData);
  const wind = getWind(weatherData);
  const astro = getAstro(weatherData);
  const { humidity } = weatherData.current;

  return { temp, wind, astro, humidity };
};

const parseHourlyForecast = (weatherData) => {
  const forecastDataHours = weatherData.forecast.forecastday[0].hour;
  const forecastHourly = [];

  forecastDataHours.forEach((hourData) => {
    const { time, temp_c, temp_f, condition } = hourData;
    const hour = time.split(' ')[1];

    const hourWeather = {
      hour,
      condition,
      temp: { c: temp_c, f: temp_f },
    };

    forecastHourly.push(hourWeather);
  });

  return forecastHourly;
};
const parseDailyForecast = (weatherData) => {
  const forecastDaysData = weatherData.forecast.forecastday;
  const forecastDays = [];

  forecastDaysData.forEach((forecastDay) => {
    const { date } = forecastDay;
    const { maxtemp_c, maxtemp_f } = forecastDay.day;
    const { mintemp_c, mintemp_f } = forecastDay.day;
    const { avgtemp_c, avgtemp_f } = forecastDay.day;
    const { condition } = forecastDay.hour[12];

    const weatherDay = {
      date,
      condition,
      temp: {
        c: { avg: avgtemp_c, max: maxtemp_c, min: mintemp_c },
        f: { avg: avgtemp_f, max: maxtemp_f, min: mintemp_f },
      },
    };

    forecastDays.push(weatherDay);
  });

  return forecastDays;
};

const getForecast = (weatherData) => {
  const forecastHourly = parseHourlyForecast(weatherData);
  const forecastDays = parseDailyForecast(weatherData);

  return { hour: forecastHourly, days: forecastDays };
};

const filterWeatherData = async (weatherData) => {
  console.log(weatherData);
  const { location } = weatherData;

  const info = { name: location.name, region: location.region };
  const today = getTodayWeather(weatherData);
  const forecast = getForecast(weatherData);
  const details = getDetails(weatherData);

  return {
    info,
    today,
    forecast,
    details,
  };
};

export default filterWeatherData;
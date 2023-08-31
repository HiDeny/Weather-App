/* eslint-disable camelcase */
const getLocation = (weatherData) => {
  const { name, region } = weatherData.location;
  return { name, region };
};

const getTodayWeather = (weatherData) => {
  const { temp_c, temp_f } = weatherData.current;
  const { maxtemp_c, maxtemp_f } = weatherData.forecast.forecastday[0].day;
  const { mintemp_c, mintemp_f } = weatherData.forecast.forecastday[0].day;
  const { condition } = weatherData.current;
  return {
    c: { current: temp_c, max: maxtemp_c, min: mintemp_c },
    f: { current: temp_f, max: maxtemp_f, min: mintemp_f },
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
    wind_dir,
  };
};
const getAstro = (weatherData) => {
  const { sunrise, sunset } = weatherData.forecast.forecastday[0].astro;
  const { moonrise, moonset } = weatherData.forecast.forecastday[0].astro;
  const { moon_illumination } = weatherData.forecast.forecastday[0].astro;
  return { sunrise, sunset, moonrise, moonset, moon_illumination };
};

const getDetails = (weatherData) => {
  const temp = getTemp(weatherData);
  const wind = getWind(weatherData);
  const astro = getAstro(weatherData);

  return { temp, wind, astro };
};
const getForecastHour = (weatherData) => {
  const forecastDataHours = weatherData.forecast.forecastday[0].hour;
  const forecastHourly = {};

  forecastDataHours.forEach((hourData) => {
    const { time, temp_c, temp_f, condition } = hourData;
    const hour = time.split(' ')[1];

    const hourWeather = {
      temp: { c: temp_c, f: temp_f },
      icon: condition.icon,
    };

    forecastHourly[hour] = hourWeather;
  });

  console.log(forecastHourly);
  return forecastHourly;
};
const getForecastDays = (weatherData) => {
  const forecastDaysData = weatherData.forecast.forecastday;
  const forecastDays = {};

  forecastDaysData.forEach((forecastDay) => {
    const { date } = forecastDay;
    const { maxtemp_c, maxtemp_f } = forecastDay.day;
    const { mintemp_c, mintemp_f } = forecastDay.day;
    const { averagetemp_c, averagetemp_f } = forecastDay.day;

    const weatherDay = {
      date,
      temp: {
        c: { averagetemp_c, maxtemp_c, mintemp_c },
        f: { averagetemp_f, maxtemp_f, mintemp_f },
      },
    };

    forecastDays[date] = weatherDay;
  });

  console.log(forecastDays);
  return forecastDays;
};

const filterWeatherData = async (weatherData) => {
  console.log(weatherData);
  // const locationData = await weatherData;

  const location = getLocation(weatherData);
  const weatherToday = getTodayWeather(weatherData);
  const details = getDetails(weatherData);
  const forecastHourly = getForecastHour(weatherData);
  const forecastDays = getForecastDays(weatherData);

  return {
    location,
    weatherToday,
    details,
    forecastHourly,
    forecastDays,
  };
};

export default filterWeatherData;

/* eslint-disable camelcase */
import { parse, format } from 'date-fns';
import parseForecastHour from './parseForecastHour';

const getTodayData = (rawData, isMetric, format24H) => {
  const { current, forecast } = rawData;
  const forecastToday = forecast.forecastday[0];

  const {
    last_updated,
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    condition,
    uv,
    wind_kph,
    wind_mph,
    gust_kph,
    gust_mph,
    wind_dir,
    cloud,
    humidity,
    precip_mm,
    precip_in,
    vis_km,
    vis_miles,
  } = current;

  const lastUpdateFormatted12 = format(
    new Date(last_updated),
    'h:mm aa d LLLL yyyy'
  );

  const lastUpdateFormatted24 = format(
    new Date(last_updated),
    'HH:mm d LLLL yyyy'
  );

  const {
    avgtemp_c,
    avgtemp_f,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    maxwind_kph,
    maxwind_mph,
    avghumidity,
    totalprecip_mm,
    totalprecip_in,
    daily_chance_of_rain,
  } = forecastToday.day;

  const { sunrise, sunset, moonrise, moonset, moon_illumination, moon_phase } =
    forecastToday.astro;


  // Make it dry
  const parseSunrise = parse(sunrise, 'hh:mm a', new Date());
  const sunrise24 = format(parseSunrise, 'HH:mm');

  const parseSunset = parse(sunset, 'hh:mm a', new Date());
  const sunset24 = format(parseSunset, 'HH:mm');

  const parseMoonrise = parse(moonrise, 'hh:mm a', new Date());
  const moonrise24 = format(parseMoonrise, 'HH:mm');

  const parseMoonset = parse(moonset, 'hh:mm a', new Date());
  const moonset24 = format(parseMoonset, 'HH:mm');

  const forecastHourly = parseForecastHour(forecastToday.hour, isMetric);

  return {
    lastUpdate: format24H ? lastUpdateFormatted24 : lastUpdateFormatted12,
    temp: {
      current: isMetric ? temp_c : temp_f,
      avg: isMetric ? avgtemp_c : avgtemp_f,
      max: isMetric ? maxtemp_c : maxtemp_f,
      min: isMetric ? mintemp_c : mintemp_f,
      feelsLike: isMetric ? feelslike_c : feelslike_f,
    },
    condition: {
      text: condition.text,
      icon: `https:${condition.icon}`,
    },
    uv,
    wind: {
      speed: isMetric ? wind_kph : wind_mph,
      gust: isMetric ? gust_kph : gust_mph,
      max: isMetric ? maxwind_kph : maxwind_mph,
      dir: wind_dir,
    },
    humidity: {
      current: humidity,
      avg: avghumidity,
    },
    rain: {
      precip: isMetric ? precip_mm : precip_in,
      total: isMetric ? totalprecip_mm : totalprecip_in,
      chance: daily_chance_of_rain,
    },
    cloud,
    sun: {
      rise: format24H ? sunrise24 : sunrise,
      set: format24H ? sunset24 : sunset,
    },
    moon: {
      rise: format24H ? moonrise24 : moonrise,
      set: format24H ? moonset24 : moonset,
      phase: moon_phase,
      illumination: moon_illumination,
    },
    visibility: isMetric ? vis_km : vis_miles,
    forecastHourly,
  };
};

export default getTodayData;

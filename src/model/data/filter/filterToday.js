/* eslint-disable camelcase */
import parseForecastHour from './parseForecastHour';

const getTodayData = (rawData, isMetric) => {
  const { current, forecast } = rawData;
  const forecastToday = forecast[0];

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
    wind_degree,
    cloud,
    humidity,
    precip_mm,
    precip_in,
    vis_km,
    vis_miles,
  } = current;

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

  const forecastHourly = parseForecastHour(forecastToday.hour, isMetric);

  return {
    updateTime: last_updated,
    temp: {
      current: isMetric ? temp_c : temp_f,
      avg: isMetric ? avgtemp_c : avgtemp_f,
      max: isMetric ? maxtemp_c : maxtemp_f,
      min: isMetric ? mintemp_c : mintemp_f,
      feel: isMetric ? feelslike_c : feelslike_f,
    },
    condition,
    uv,
    wind: {
      speed: isMetric ? wind_kph : wind_mph,
      gust: isMetric ? gust_kph : gust_mph,
      max: isMetric ? maxwind_kph : maxwind_mph,
      dir: wind_dir,
      degree: wind_degree,
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
      rise: sunrise,
      set: sunset,
    },
    moon: {
      rise: moonrise,
      set: moonset,
      phase: moon_phase,
      illumination: moon_illumination,
    },
    visibility: isMetric ? vis_km : vis_miles,
    forecastHourly,
  };
};

export default getTodayData;
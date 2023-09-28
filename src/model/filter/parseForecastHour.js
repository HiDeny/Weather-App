/* eslint-disable camelcase */

import { format } from 'date-fns';

const parseForecastHour = (hourlyForecastRaw, isMetric, format24H) =>
  hourlyForecastRaw.map((hourData) => {
    const { time } = hourData;
    const hour12 = format(new Date(time), 'h:mm');
    const hour24 = format(new Date(time), 'HH:mm');

    const {
      is_day,
      temp_c,
      temp_f,
      uv,
      condition,
      wind_kph,
      wind_mph,
      gust_kph,
      gust_mph,
      wind_dir,
      precip_mm,
      precip_in,
    } = hourData;

    const hourWeather = {
      hour: format24H ? hour24 : hour12,
      isDay: is_day,
      temp: isMetric ? temp_c : temp_f,
      condition: {
        text: condition.text,
        icon: `https:${condition.icon}`,
      },
      wind: {
        speed: isMetric ? wind_kph : wind_mph,
        gust: isMetric ? gust_kph : gust_mph,
        wind_dir,
      },
      rain: isMetric ? precip_mm : precip_in,
      uv,
    };

    return hourWeather;
  });

export default parseForecastHour;

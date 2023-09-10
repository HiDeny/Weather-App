/* eslint-disable camelcase */
import { format } from 'date-fns';

const getUpcomingData = (rawData, isMetric) => {
  const { forecast } = rawData;

  const upcomingWeather = forecast.map((forecastData) => {
    const { date } = forecastData;
    const nameOfDay = format(new Date(date), 'EEEE');
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
      daily_chance_of_rain,
      totalprecip_mm,
      totalprecip_in,
    } = forecastData.day;
    const { icon } = forecastData.day.condition;

    const dayWeather = {
      date: { number: date, weekDayName: nameOfDay },
      temp: {
        avg: isMetric ? avgtemp_c : avgtemp_f,
        max: isMetric ? maxtemp_c : maxtemp_f,
        min: isMetric ? mintemp_c : mintemp_f,
      },
      wind: {
        max: isMetric ? maxwind_kph : maxwind_mph,
      },
      rain: {
        chance: daily_chance_of_rain,
        total: isMetric ? totalprecip_mm : totalprecip_in,
      },
      humidity: avghumidity,
      conditionIcon: icon,
    };

    return dayWeather;
  });

  return upcomingWeather;
};

export default getUpcomingData;

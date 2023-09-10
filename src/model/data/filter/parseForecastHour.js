/* eslint-disable camelcase */
const parseForecastHour = (hourlyForecastRaw, isMetric) =>
  hourlyForecastRaw.map((hourData) => {
    const { time } = hourData;
    const hour = time.split(' ')[1];
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
      hour,
      isDay: is_day,
      temp: isMetric ? temp_c : temp_f,
      condition,
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

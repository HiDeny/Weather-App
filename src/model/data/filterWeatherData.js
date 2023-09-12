/* eslint-disable camelcase */
import getTodayData from './filter/filterToday';
import getUpcomingData from './filter/filterUpcoming';

const getLocationData = (rawData) => {
  const { name, country } = rawData.location;
  return { name, country };
};

const getCurrentInfo = (locationData, todayData) => {
  const { name, country } = locationData;
  const { current, min, max } = todayData.temp;
  const { condition } = todayData;

  return {
    location: { name, country },
    temp: { current, min, max },
    condition,
  };
};

const getForecasts = (todayData, upcomingData) => {
  const { forecastHourly } = todayData;
  const firstDay = upcomingData[1];
  const secondDay = upcomingData[2];

  return {
    today: { forecastHourly },
    upcoming: { firstDay, secondDay },
  };
};

const getDetails = (todayData) => {
  const { feelsLike } = todayData.temp;
  const { wind, uv, cloud, rain, moon, sun, humidity, visibility } = todayData;
  return { feelsLike, uv, wind, rain, sun, moon, visibility, humidity, cloud };
};

const filterWeatherData = (rawData, isMetric = true) => {
  const locationData = getLocationData(rawData);
  const todayData = getTodayData(rawData, isMetric);
  const upcomingData = getUpcomingData(rawData, isMetric);

  const currentInfo = getCurrentInfo(locationData, todayData);
  const forecasts = getForecasts(todayData, upcomingData);
  const detailsInfo = getDetails(todayData);

  try {
    return { currentInfo, forecasts, detailsInfo };
  } catch (err) {
    throw new Error(err);
  }
};

export default filterWeatherData;

/* eslint-disable camelcase */
import getTodayData from './filterToday';
import getUpcomingData from './filterUpcoming';

const getLocationData = (rawData) => {
  const { name, country } = rawData.location;
  return { name, country };
};

const filterWeatherData = (rawData, isMetric = true) => {
  const location = getLocationData(rawData);
  const today = getTodayData(rawData, isMetric);
  const upcoming = getUpcomingData(rawData, isMetric);

  return { location, today, upcoming };
};

export default filterWeatherData;
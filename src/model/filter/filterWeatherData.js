/* eslint-disable camelcase */
import getTodayData from './filterToday';
import getUpcomingData from './filterUpcoming';

const getCompleteUV = (uv) => {
  const uvScale = {
    backLight: null,
    description: null,
  };

  if (uv > 10) {
    uvScale.backLight = 'inset #9E46CD 0px 15px 35px 30px';
    uvScale.description = 'Extreme';
  }
  if (uv < 11) {
    uvScale.backLight = 'inset #F62E24 0px 10px 30px 20px';
    uvScale.description = 'Very High';
  }
  if (uv < 8) {
    uvScale.backLight = 'inset #FF9002 0px 10px 25px 15px';
    uvScale.description = 'High';
  }
  if (uv < 6) {
    uvScale.backLight = 'inset #FFBB04 0px 0px 15px 10px';
    uvScale.description = 'Moderate';
  }
  if (uv < 3) {
    uvScale.backLight = 'inset #9DC602 0px 0px 5px 5px';
    uvScale.description = 'Low';
  }
  if (uv < 1) {
    uvScale.backLight = 'rgba(0, 0, 0, 0.08) 0px 4px 12px';
    uvScale.description = 'Night';
  }

  return {
    backLight: uvScale.backLight,
    description: uvScale.description,
    value: uv,
  };
};

const getBackgroundData = (rawData) => {
  const { condition, is_day } = rawData.current;
  const { text } = condition;

  return { weather: text, isDay: is_day };
};

const getLocationData = (rawData) => {
  const { name, country } = rawData.location;
  return { name, country };
};

const getCurrentInfo = (locationData, todayData) => {
  const { name, country } = locationData;
  const { current, min, max } = todayData.temp;
  const { condition, lastUpdate } = todayData;

  return {
    location: { name, country },
    temp: { current, min, max },
    condition,
    lastUpdate,
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
  const completeUV = getCompleteUV(uv);
  return {
    feelsLike,
    uv: completeUV,
    wind,
    rain,
    sun,
    moon,
    visibility,
    humidity,
    cloud,
  };
};

const filterWeatherData = (rawData, isMetric = true) => {
  const backgroundData = getBackgroundData(rawData);
  const locationData = getLocationData(rawData);
  const todayData = getTodayData(rawData, isMetric);
  const upcomingData = getUpcomingData(rawData, isMetric);

  const currentInfo = getCurrentInfo(locationData, todayData);
  const forecasts = getForecasts(todayData, upcomingData);
  const detailsInfo = getDetails(todayData);

  try {
    return { backgroundData, currentInfo, forecasts, detailsInfo };
  } catch (err) {
    throw new Error(err);
  }
};

export default filterWeatherData;

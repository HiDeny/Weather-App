import './style.css';
import 'normalize.css';

import { createElementWithClass } from './cardSections/helperFunc';

import createCurrentInfo from './cardSections/currentInfo';
import createForecasts from './cardSections/forecasts/forecasts';
import createDetailsInfo from './cardSections/detailsInfo';

const createWeatherCard = async (weatherData, isMetric) => {
  try {
    const { currentInfo, forecasts, detailsInfo } = weatherData;

    const weatherCard = createElementWithClass('div', 'weatherCard');

    const showCurrentInfo = createCurrentInfo(currentInfo, isMetric);
    weatherCard.append(showCurrentInfo);

    const showForecasts = await createForecasts(forecasts, isMetric);
    weatherCard.append(showForecasts);

    const showDetailsInfo = createDetailsInfo(detailsInfo, isMetric);
    weatherCard.append(showDetailsInfo);

    return weatherCard;
  } catch (err) {
    throw new Error(err);
  }
};

export default createWeatherCard;

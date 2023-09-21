import './css/cards.css';
import { createElementWithClass } from './cardSections/helperFunc';

import createCurrentInfo from './cardSections/currentInfo';
import createForecasts from './cardSections/forecasts/forecasts';
import createDetailsInfo from './cardSections/detailsInfo';

const createWeatherCard = async (weatherData, isMetric) => {
  try {
    const { currentInfo, forecasts, detailsInfo } = weatherData;

    const weatherCard = createElementWithClass('div', 'weatherCard');
    weatherCard.append(createCurrentInfo(currentInfo, isMetric));
    weatherCard.append(await createForecasts(forecasts, isMetric));
    weatherCard.append(createDetailsInfo(detailsInfo, isMetric));

    return weatherCard;
  } catch (err) {
    throw new Error(err);
  }
};

export default createWeatherCard;

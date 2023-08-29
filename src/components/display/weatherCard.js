import createLocationInfo from './info';
import createTempInfo from './temperature';
import createConditionsInfo from './conditions';
import createWindInfo from './wind';

const createWeatherCard = async (weatherData) => {
  const { location, temp, wind, condition } = weatherData;
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');

  const locationInfo = createLocationInfo(location);
  weatherCard.append(locationInfo);

  const tempInfo = createTempInfo(temp);
  weatherCard.append(tempInfo);

  const conditionInfo = await createConditionsInfo(condition);
  weatherCard.append(conditionInfo);

  const windInfo = createWindInfo(wind);
  weatherCard.append(windInfo);

  return weatherCard;
};

export default createWeatherCard;

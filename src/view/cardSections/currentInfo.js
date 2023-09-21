import '../css/currentInfo.css';
import { createElementWithClass, pElementWithClass } from './helperFunc';

const createLocationInfo = ({ location }) => {
  const { name, country } = location;

  const div = createElementWithClass('div', 'locationInfo');

  div.append(createElementWithClass('h2', 'locationName', name));
  div.append(pElementWithClass('locationCountry', country));

  return div;
};

const createTempDiv = ({ temp, condition }, isMetric) => {
  const { current } = temp;
  const { text } = condition;
  const units = isMetric ? '°C' : '°F';

  const div = createElementWithClass('div', 'temp');

  div.append(createElementWithClass('h2', 'currentTemp', `${current}${units}`));
  div.append(pElementWithClass('currentCondition', text));

  return div;
};

const createMinMaxDiv = ({ temp }, isMetric) => {
  const { min, max } = temp;
  const units = isMetric ? '°C' : '°F';

  const div = createElementWithClass('div', 'minmax');

  div.append(pElementWithClass('tempMax', `H: ${max}${units}`));
  div.append(pElementWithClass('tempMin', `L: ${min}${units}`));

  return div;
};

const createLastUpdateDiv = ({ lastUpdate }) => {
  const div = createElementWithClass('div', 'lastUpdatedDiv');

  div.append(pElementWithClass('lastUpdatedLabel', 'Last Updated'));
  div.append(pElementWithClass('lastUpdated', lastUpdate));

  return div;
};

const createCurrentInfo = (currentInfoData, isMetric) => {
  const currentInfo = createElementWithClass('section', 'currentInfo');
  currentInfo.append(createLocationInfo(currentInfoData));
  currentInfo.append(createTempDiv(currentInfoData, isMetric));
  currentInfo.append(createMinMaxDiv(currentInfoData, isMetric));
  currentInfo.append(createLastUpdateDiv(currentInfoData));

  return currentInfo;
};

export default createCurrentInfo;

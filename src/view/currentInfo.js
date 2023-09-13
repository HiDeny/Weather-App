import { createElementWithClass } from './helperFunc';

const createLocationInfo = ({ location }) => {
  const locationInfo = document.createElement('div');
  locationInfo.classList.add('locationInfo');

  const locationName = createElementWithClass(
    'h2',
    'locationName',
    location.name
  );
  locationInfo.append(locationName);

  const locationRegion = createElementWithClass(
    'p',
    'locationCountry',
    location.country
  );
  locationInfo.append(locationRegion);

  return locationInfo;
};

const createTempDiv = ({ temp, condition }, isMetric) => {
  const { current } = temp;
  const { text } = condition;
  const correctTemp = isMetric ? `${current}°C` : `${current}°F`;

  const tempDiv = createElementWithClass('div', 'temp');

  const currentTemp = createElementWithClass('h2', 'currentTemp', correctTemp);
  tempDiv.append(currentTemp);

  const currentCondition = createElementWithClass(
    'p',
    'currentCondition',
    text
  );
  tempDiv.append(currentCondition);

  return tempDiv;
};

const createMinMaxDiv = ({ temp }, isMetric) => {
  const { min, max } = temp;
  const correctMax = isMetric ? `H: ${max}°C` : `H: ${max}°F`;
  const correctMin = isMetric ? `L: ${min}°C` : `L: ${min}°F`;

  const tempMinMaxDiv = createElementWithClass('div', 'minmax');

  const tempMax = createElementWithClass('p', 'tempMin', correctMax);
  tempMinMaxDiv.append(tempMax);

  const tempMin = createElementWithClass('p', 'tempMax', correctMin);
  tempMinMaxDiv.append(tempMin);

  return tempMinMaxDiv;
};

const createLastUpdateDiv = ({ lastUpdate }) => {
  const lastUpdatedDiv = createElementWithClass('div', 'lastUpdatedDiv');

  const lastUpdatedLabel = createElementWithClass(
    'p',
    'lastUpdatedLabel',
    'Last Updated'
  );
  lastUpdatedDiv.append(lastUpdatedLabel);

  const lastUpdateContent = createElementWithClass(
    'p',
    'lastUpdated',
    lastUpdate
  );
  lastUpdatedDiv.append(lastUpdateContent);

  return lastUpdatedDiv;
};

const createCurrentInfo = (currentInfoData, isMetric) => {
  const currentInfo = createElementWithClass('section', 'currentInfo');

  const locationInfo = createLocationInfo(currentInfoData);
  currentInfo.append(locationInfo);

  const tempInfo = createTempDiv(currentInfoData, isMetric);
  currentInfo.append(tempInfo);

  const tempMinMax = createMinMaxDiv(currentInfoData, isMetric);
  currentInfo.append(tempMinMax);

  const lastUpdated = createLastUpdateDiv(currentInfoData);
  currentInfo.append(lastUpdated);

  return currentInfo;
};

export default createCurrentInfo;

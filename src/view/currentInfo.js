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

const createTempDiv = ({ temp, condition }) => {
  const { current } = temp;
  const { text } = condition;

  const tempDiv = createElementWithClass('div', 'temp');

  const currentTemp = createElementWithClass('h2', 'currentTemp', current);
  tempDiv.append(currentTemp);

  const currentCondition = createElementWithClass(
    'p',
    'currentCondition',
    text
  );
  tempDiv.append(currentCondition);

  return tempDiv;
};

const createMinMaxDiv = ({ temp }) => {
  console.log(temp);
  const { min, max } = temp;
  const tempMinMaxDiv = createElementWithClass('div', 'minmax');

  const tempMax = createElementWithClass('p', 'tempMin', max);
  tempMinMaxDiv.append(tempMax);

  const tempMin = createElementWithClass('p', 'tempMax', min);
  tempMinMaxDiv.append(tempMin);

  return tempMinMaxDiv;
};

const createLastUpdateDiv = ({ lastUpdate }) => {
  console.log(lastUpdate);
  const lastUpdatedDiv = createElementWithClass('div', 'lastUpdated');

  const lastUpdateContent = createElementWithClass(
    'p',
    'lastUpdated',
    lastUpdate
  );
  lastUpdatedDiv.append(lastUpdateContent);

  return lastUpdatedDiv;
};

const createCurrentInfo = (currentInfoData) => {
  const currentInfo = createElementWithClass('section', 'currentInfo');

  const locationInfo = createLocationInfo(currentInfoData);
  currentInfo.append(locationInfo);

  const tempInfo = createTempDiv(currentInfoData);
  currentInfo.append(tempInfo);

  const tempMinMax = createMinMaxDiv(currentInfoData);
  currentInfo.append(tempMinMax);

  const lastUpdated = createLastUpdateDiv(currentInfoData);
  currentInfo.append(lastUpdated);

  return currentInfo;
};

export default createCurrentInfo;

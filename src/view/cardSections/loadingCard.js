import { createElementWithClass, pElementWithClass } from './helperFunc';

const createLocationInfo = () => {
  const locationInfo = document.createElement('div');
  locationInfo.classList.add('locationInfo');

  const locationName = createElementWithClass('h2', 'locationName', 'City');
  locationInfo.append(locationName);

  const locationRegion = pElementWithClass('locationCountry', 'Country');
  locationInfo.append(locationRegion);

  return locationInfo;
};

const createTempDiv = () => {
  const tempDiv = createElementWithClass('div', 'temp');

  const currentTemp = createElementWithClass('h2', 'currentTemp', 'Temp');
  tempDiv.append(currentTemp);

  const currentCondition = pElementWithClass('currentCondition', 'Conditions');
  tempDiv.append(currentCondition);

  return tempDiv;
};

const createMinMaxDiv = () => {
  const tempMinMaxDiv = createElementWithClass('div', 'minmax');

  const tempMax = createElementWithClass('p', 'tempMin', 'Min');
  tempMinMaxDiv.append(tempMax);

  const tempMin = createElementWithClass('p', 'tempMax', 'Max');
  tempMinMaxDiv.append(tempMin);

  return tempMinMaxDiv;
};

const createLastUpdateDiv = () => {
  const lastUpdatedDiv = createElementWithClass('div', 'lastUpdatedDiv');

  const lastUpdatedLabel = pElementWithClass(
    'lastUpdatedLabel',
    'Last Updated'
  );
  lastUpdatedDiv.append(lastUpdatedLabel);

  const lastUpdateContent = pElementWithClass('lastUpdated', 'Time, Date');
  lastUpdatedDiv.append(lastUpdateContent);

  return lastUpdatedDiv;
};

const createSkeletonCard = () => {
  const skeleton = createElementWithClass('section', 'currentInfo');
  skeleton.classList.add('skeleton');

  const locationInfo = createLocationInfo();
  const tempInfo = createTempDiv();
  const tempMinMax = createMinMaxDiv();
  const lastUpdated = createLastUpdateDiv();

  const skeletonCards = [locationInfo, tempInfo, tempMinMax, lastUpdated];
  skeleton.append(...skeletonCards);

  return skeleton;
};

export default createSkeletonCard;

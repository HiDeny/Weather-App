import { createElementWithClass, pElementWithClass } from './helperFunc';

const createLocationInfo = () => {
  const locationInfo = document.createElement('div');
  locationInfo.classList.add('locationInfo');

  const locationName = createElementWithClass('h2', 'locationName', 'City');
  locationName.classList.add('skeleton');
  locationInfo.append(locationName);

  const locationRegion = pElementWithClass('locationCountry', 'Country');
  locationRegion.classList.add('skeleton');
  locationInfo.append(locationRegion);

  return locationInfo;
};

const createTempDiv = () => {
  const tempDiv = createElementWithClass('div', 'temp');

  const currentTemp = createElementWithClass('h2', 'currentTemp', 'Temp');
  currentTemp.classList.add('skeleton');
  tempDiv.append(currentTemp);

  const currentCondition = pElementWithClass('currentCondition', 'Conditions');
  currentCondition.classList.add('skeleton');
  tempDiv.append(currentCondition);

  return tempDiv;
};

const createMinMaxDiv = () => {
  const tempMinMaxDiv = createElementWithClass('div', 'minmax');

  const tempMax = createElementWithClass('p', 'tempMin', 'Min');
  tempMax.classList.add('skeleton');
  tempMinMaxDiv.append(tempMax);

  const tempMin = createElementWithClass('p', 'tempMax', 'Max');
  tempMin.classList.add('skeleton');
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
  lastUpdateContent.classList.add('skeleton');

  return lastUpdatedDiv;
};

const createSkeletonCard = () => {
  const skeleton = createElementWithClass('section', 'currentInfo');

  const locationInfo = createLocationInfo();
  const tempInfo = createTempDiv();
  const tempMinMax = createMinMaxDiv();
  const lastUpdated = createLastUpdateDiv();

  const skeletonCards = [locationInfo, tempInfo, tempMinMax, lastUpdated];
  skeleton.append(...skeletonCards);

  return skeleton;
};

export default createSkeletonCard;

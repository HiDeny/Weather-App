import { createElementWithClass, pContent } from './helperFunc';

const createCurrentInfo = (todayData) => {
  const 
  try {
    const infoSection = document.createElement('section');
    infoSection.classList.add('info');

    if (name) {
      const locationName = createElementWithClass('h2', 'locationName', name);
      infoSection.append(locationName);
    }

    if (region) {
      const locationRegion = setContent('locationRegion', region);
      infoSection.append(locationRegion);
    }

    return infoSection;
  } catch (error) {
    throw new Error(error);
  }
};

export default createInfoSection;

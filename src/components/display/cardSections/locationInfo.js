import { createNameElement, createRegionElement } from '../elements/info';

const createInfoSection = ({ name, region }) => {
  const infoSection = document.createElement('section');
  infoSection.classList.add('info');

  infoSection.append(createNameElement(name));
  infoSection.append(createRegionElement(region));

  return infoSection;
};

export default createInfoSection;

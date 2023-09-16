import { createElementWithClass } from '../helperFunc';

import createSearchElement from './searchElement';
import createSettingsElement from './settingsElement';
import createAttributionElement from './attributionElement';

const createHeaderElement = (config) => {
  const header = createElementWithClass('header', 'header');

  const searchElement = createSearchElement();
  const settingsElement = createSettingsElement(config);
  const attributionElement = createAttributionElement();

  const headerElements = [searchElement, settingsElement, attributionElement];
  header.append(...headerElements);

  return header;
};

export default createHeaderElement;

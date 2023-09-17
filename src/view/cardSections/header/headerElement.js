import { createElementWithClass } from '../helperFunc';

import createClockElement from './clockElement';
import createSearchElement from './searchElement';
import createSettingsElement from './settingsElement';
import createAttributionElement from './attributionElement';

const createHeaderElement = (userConfig) => {
  const header = createElementWithClass('header', 'header');

  const clockElement = createClockElement(userConfig.format24H);
  const searchElement = createSearchElement();
  const settingsElement = createSettingsElement(userConfig);
  const attributionElement = createAttributionElement();

  const headerElements = [
    clockElement,
    searchElement,
    settingsElement,
    attributionElement,
  ];
  header.append(...headerElements);

  return header;
};

export default createHeaderElement;

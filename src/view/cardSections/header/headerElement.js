import { createElementWithClass } from '../helperFunc';

import createClockElement from './clockElement';
import createSearchElement from './searchElement';
import createSettingsElement from './settingsElement';
import createAttributionElement from './attributionElement';

const createHeaderElement = (userConfig) => {
  const header = createElementWithClass('header', 'header');
  header.append(createClockElement(userConfig.format24H));
  header.append(createSearchElement());
  header.append(createSettingsElement(userConfig));
  header.append(createAttributionElement());

  return header;
};

export default createHeaderElement;

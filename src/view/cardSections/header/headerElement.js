import '../../css/header.css';
import { createElementWithClass } from '../helperFunc';

import createClockElement from './clockElement';
import createSearchElement from './searchElement';
import createHomeButton from './homeElement';
import createSettingsElement from './settingsElement';

const createHeaderElement = (userConfig) => {
  const header = createElementWithClass('header', 'header');
  header.append(createClockElement(userConfig.format24H));
  header.append(createSearchElement());
  header.append(createHomeButton());
  header.append(createSettingsElement(userConfig));

  return header;
};

export default createHeaderElement;

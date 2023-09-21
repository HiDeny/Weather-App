import '../../css/settings.css';
import { createElementWithClass, pElementWithClass } from '../helperFunc';

const createBtn = (className, content) => {
  const unitBtn = document.createElement('button');
  unitBtn.classList.add(className);
  unitBtn.textContent = content;

  return unitBtn;
};

const createSelectUnits = (isMetric) => {
  const BUTTON_CLASS_NAME = 'unitBtn';
  // Metric (°C, Kilometers, Milliliters)
  const METRIC = 'Metric (°C, kM, mL)';
  // Imperial (°F, Miles, Inches)
  const IMPERIAL = 'Imperial (°F, mi, in)';

  const selectUnits = createElementWithClass('div', 'selectUnits');
  const split = pElementWithClass('unitsSplit', 'OR');

  const metricBtn = createBtn(BUTTON_CLASS_NAME, METRIC);
  metricBtn.classList.add('metricUnits');
  metricBtn.classList.add('active');

  const imperialBtn = createBtn(BUTTON_CLASS_NAME, IMPERIAL);
  imperialBtn.classList.add('imperialUnits');

  if (!isMetric) {
    metricBtn.classList.remove('active');
    imperialBtn.classList.add('active');
  }

  const unitsElements = [metricBtn, split, imperialBtn];
  selectUnits.append(...unitsElements);

  return selectUnits;
};
const createSelectTimeFormat = (format24H) => {
  const BUTTON_CLASS_NAME = 'formatBtn';
  const FORMAT12 = '12H';
  const FORMAT24 = '24H';

  const selectFormat = createElementWithClass('div', 'selectFormat');

  const format24Btn = createBtn(BUTTON_CLASS_NAME, FORMAT24);
  format24Btn.classList.add('format24');
  format24Btn.classList.add('active');

  const format12Btn = createBtn(BUTTON_CLASS_NAME, FORMAT12);
  format12Btn.classList.add('format12');

  if (!format24H) {
    format12Btn.classList.add('active');
    format24Btn.classList.remove('active');
  }

  const formatElements = [format24Btn, format12Btn];
  selectFormat.append(...formatElements);

  return selectFormat;
};

const createSelectDefaultLocation = (currentDefaultLocation) => {
  const label = document.createElement('label');
  label.for = 'setDefaultLocation';
  label.textContent = 'Default Location';
  label.className = 'defaultLocationLabel';

  const setDefaultLocation = document.createElement('input');
  setDefaultLocation.type = 'text';
  setDefaultLocation.placeholder = 'City';
  setDefaultLocation.value = currentDefaultLocation;
  setDefaultLocation.name = 'setDefaultLocation';
  setDefaultLocation.id = 'setDefaultLocation';
  setDefaultLocation.className = 'setDefaultLocation';

  label.append(setDefaultLocation);
  return label;
};

const createSettingsElement = ({ defaultLocation, isMetric, format24H }) => {
  const settingsElement = createElementWithClass('div', 'settingsElement');
  settingsElement.append(createBtn('showSettingsBtn', '⚙️'));

  const settingsMenu = createElementWithClass('div', 'settingsMenu');
  settingsMenu.append(createSelectDefaultLocation(defaultLocation));
  settingsMenu.append(createSelectUnits(isMetric));
  settingsMenu.append(createSelectTimeFormat(format24H));
  settingsMenu.append(createBtn('saveBtn', 'SAVE'));

  settingsElement.append(settingsMenu);

  return settingsElement;
};

export default createSettingsElement;

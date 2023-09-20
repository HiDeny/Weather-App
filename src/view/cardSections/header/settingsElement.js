import { createElementWithClass } from '../helperFunc';

const createSaveBtn = () => {
  const saveBtn = document.createElement('button');
  saveBtn.classList.add('saveSettingsBtn');
  saveBtn.id = 'saveBtn';
  saveBtn.textContent = 'Save!';

  return saveBtn;
};

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
  const split = createElementWithClass('p', 'unitsSplit', 'OR');

  const metricBtn = createBtn(BUTTON_CLASS_NAME, METRIC);
  metricBtn.classList.add('metricUnits');
  metricBtn.classList.add('active');

  const imperialBtn = createBtn(BUTTON_CLASS_NAME, IMPERIAL);
  imperialBtn.classList.add('imperialUnits');

  if (!isMetric) {
    imperialBtn.classList.add('active');
    metricBtn.classList.remove('active');
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

  label.append(setDefaultLocation);
  return label;
};

const createShowSettingsBtn = () => {
  const showSettingsBtn = document.createElement('button');
  showSettingsBtn.id = 'showSettingsBtn';
  showSettingsBtn.textContent = '⚙️';

  return showSettingsBtn;
};

const createSettingsElement = ({ defaultLocation, isMetric, format24H }) => {
  const settingsElement = createElementWithClass('div', 'settingsElement');

  const showSettingsBtn = createShowSettingsBtn();
  settingsElement.append(showSettingsBtn);

  const settingsMenu = document.createElement('div');
  settingsMenu.classList.add('settingsMenu');
  settingsMenu.id = 'settingsMenu';
  settingsElement.append(settingsMenu);

  const selectDefaultLocation = createSelectDefaultLocation(defaultLocation);
  const selectUnits = createSelectUnits(isMetric);
  const selectFormat = createSelectTimeFormat(format24H);
  const saveBtn = createSaveBtn();

  const menuElements = [
    selectDefaultLocation,
    selectUnits,
    selectFormat,
    saveBtn,
  ];

  settingsMenu.append(...menuElements);

  return settingsElement;
};

export default createSettingsElement;

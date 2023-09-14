import { createElementWithClass } from '../helperFunc';

const createSubmitBtn = () => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('saveSettingsBtn');
  submitBtn.id = 'saveBtn';
  submitBtn.textContent = 'Save!';

  return submitBtn;
};

const createUnitBtn = (unitsName) => {
  const unitBtn = document.createElement('button');
  unitBtn.classList.add('unitBtn');
  unitBtn.textContent = unitsName;

  return unitBtn;
};

const createSelectUnits = (isMetric) => {
  const selectUnits = document.createElement('div');
  selectUnits.classList.add('selectUnits');

  // Metric (°C, Kilometers, Milliliters)
  const metricBtn = createUnitBtn('Metric (°C, kM, mL)');
  metricBtn.classList.add('metricUnits');
  selectUnits.append(metricBtn);

  const split = createElementWithClass('p', 'unitsSplit', 'OR');
  selectUnits.append(split);

  // Imperial (°F, Miles, Inches)
  const imperialBtn = createUnitBtn('Imperial (°F, mi, in)');
  imperialBtn.classList.add('imperialUnits');
  selectUnits.append(imperialBtn);

  if (isMetric) {
    imperialBtn.classList.remove('unitsActive');
    metricBtn.classList.add('unitsActive');
  }

  if (!isMetric) {
    metricBtn.classList.remove('unitsActive');
    imperialBtn.classList.add('unitsActive');
  }

  return selectUnits;
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

const createSettings = ({ defaultLocation, isMetric }) => {
  const settingsElement = createElementWithClass('div', 'settingsElement');

  const showSettingsBtn = createShowSettingsBtn();
  settingsElement.append(showSettingsBtn);

  const settingsMenu = document.createElement('div');
  settingsMenu.classList.add('settingsMenu');
  settingsMenu.id = 'settingsMenu';
  settingsElement.append(settingsMenu);

  const selectDefaultLocation = createSelectDefaultLocation(defaultLocation);
  settingsMenu.append(selectDefaultLocation);

  const selectUnits = createSelectUnits(isMetric);
  settingsMenu.append(selectUnits);

  const submitBtn = createSubmitBtn();
  settingsMenu.append(submitBtn);

  return settingsElement;
};

export default createSettings;

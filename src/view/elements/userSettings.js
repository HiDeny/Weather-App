const createSubmitBtn = () => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('settingsBtn');
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
  const selectUnitsDiv = document.createElement('div');
  selectUnitsDiv.classList.add('selectUnits');

  // Metric (°C, Kilometers, Milliliters)
  const metricBtn = createUnitBtn('Metric (°C, kM, mL)');
  metricBtn.classList.add('metricUnits');
  selectUnitsDiv.append(metricBtn);

  // Imperial (°F, Miles, Inches)
  const imperialBtn = createUnitBtn('Imperial (°F, mi, in)');
  imperialBtn.classList.add('imperialUnits');
  selectUnitsDiv.append(imperialBtn);

  if (isMetric) {
    imperialBtn.classList.remove('unitsActive');
    metricBtn.classList.add('unitsActive');
  }

  if (!isMetric) {
    metricBtn.classList.remove('unitsActive');
    imperialBtn.classList.add('unitsActive');
  }

  return selectUnitsDiv;
};

const createSelectDefaultLocation = (currentDefaultLocation) => {
  const label = document.createElement('label');
  label.for = 'setDefaultLocation';

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

const createSettings = (defaultLocation, isMetric) => {
  const showSettingsBtn = createShowSettingsBtn();
  document.body.append(showSettingsBtn);

  const settings = document.createElement('div');
  settings.classList.add('settingsMenu');
  settings.id = 'settings';

  const selectDefaultLocation = createSelectDefaultLocation(defaultLocation);
  settings.append(selectDefaultLocation);

  const selectUnits = createSelectUnits(isMetric);
  settings.append(selectUnits);

  const submitBtn = createSubmitBtn();
  settings.append(submitBtn);

  document.body.append(settings);
};

export default createSettings;

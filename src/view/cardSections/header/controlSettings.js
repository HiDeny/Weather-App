/* eslint-disable no-param-reassign */
export const formatChangeListener = (config) => {
  const format24Btn = document.querySelector('.format24');
  const format12Btn = document.querySelector('.format12');

  format24Btn.addEventListener('click', () => {
    config.format24H = true;
    format24Btn.classList.toggle('formatActive');
    format12Btn.classList.toggle('formatActive');
  });

  format12Btn.addEventListener('click', () => {
    config.format24H = false;
    format12Btn.classList.toggle('formatActive');
    format24Btn.classList.toggle('formatActive');
  });
};

export const unitsChangeListener = (config) => {
  const metricBtn = document.querySelector('.metricUnits');
  const imperialBtn = document.querySelector('.imperialUnits');

  metricBtn.addEventListener('click', () => {
    config.isMetric = true;
    imperialBtn.classList.toggle('unitsActive');
    metricBtn.classList.toggle('unitsActive');
  });

  imperialBtn.addEventListener('click', () => {
    config.isMetric = false;
    imperialBtn.classList.toggle('unitsActive');
    metricBtn.classList.toggle('unitsActive');
  });
};

export const defaultLocationChangeListener = (config) => {
  const setDefaultLocation = document.getElementById('setDefaultLocation');

  setDefaultLocation.addEventListener('input', (event) => {
    config.defaultLocation = event.target.value;
  });
};

export const toggleSettingsVisibility = () => {
  const showSettingsBtn = document.getElementById('showSettingsBtn');
  const settingsMenu = document.getElementById('settingsMenu');
  const saveBtn = document.getElementById('saveBtn');

  showSettingsBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('showSettings');
  });

  saveBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('showSettings');
  });
};

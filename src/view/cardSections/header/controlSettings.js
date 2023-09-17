import { startClock } from './clockElement';

/* eslint-disable no-param-reassign */
export const formatChangeListener = (config) => {
  const formatButtons = document.querySelectorAll('.formatBtn');

  formatButtons.forEach((formatBtn) => {
    formatBtn.addEventListener('click', () => {
      config.format24H = !config.format24H;
      startClock(config.format24H);

      formatButtons.forEach((button) =>
        button.classList.toggle('formatActive')
      );
    });
  });

  startClock(config.format24H);
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

  const toggleVisibility = () => {
    settingsMenu.classList.toggle('showSettings');
  };

  showSettingsBtn.addEventListener('click', toggleVisibility);
  saveBtn.addEventListener('click', toggleVisibility);
};

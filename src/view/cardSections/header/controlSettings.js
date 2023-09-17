import { startClock } from './clockElement';
import { saveUserConfig } from '../../../model/localStorage';

/* eslint-disable no-param-reassign */
export const formatChangeListener = (userConfig) => {
  const formatButtons = document.querySelectorAll('.formatBtn');

  formatButtons.forEach((formatBtn) => {
    formatBtn.addEventListener('click', () => {
      userConfig.format24H = !userConfig.format24H;
      startClock(userConfig.format24H);

      formatButtons.forEach((button) =>
        button.classList.toggle('formatActive')
      );
    });
  });

  startClock(userConfig.format24H);
};

export const defaultLocationChangeListener = (userConfig) => {
  const setDefaultLocation = document.getElementById('setDefaultLocation');

  setDefaultLocation.addEventListener('input', (event) => {
    userConfig.defaultLocation = event.target.value;
  });
};

export const settingsMenuControl = (userConfig) => {
  const showSettingsBtn = document.getElementById('showSettingsBtn');
  const settingsMenu = document.getElementById('settingsMenu');
  const saveBtn = document.getElementById('saveBtn');

  const toggleVisibility = () => {
    settingsMenu.classList.toggle('showSettings');
  };

  showSettingsBtn.addEventListener('click', () => {
    saveUserConfig(userConfig);
    toggleVisibility();
  });

  saveBtn.addEventListener('click', () => {
    saveUserConfig(userConfig);
    toggleVisibility();
  });
};

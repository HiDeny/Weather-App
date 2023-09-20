import { startClock } from '../view/cardSections/header/clockElement';
import { saveUserConfig } from '../model/localStorage';

const toggleVisibility = () => {
  const settingsMenu = document.getElementById('settingsMenu');
  settingsMenu.classList.toggle('showSettings');
};

export default class SettingsController {
  constructor(userConfig, appConfig, viewController, weatherController) {
    this.app = appConfig;
    this.user = userConfig;
    this.view = viewController;
    this.weather = weatherController;
  }

  initListeners() {
    this.saveSettingsListener();
    this.defaultLocationListener();
    this.clockFormatListener();
    this.unitsListener();
  }

  unitsListener = () => {
    const unitButtons = document.querySelectorAll('.unitBtn');

    unitButtons.forEach((unitBtn) => {
      unitBtn.addEventListener('click', async () => {
        this.user.isMetric = !this.user.isMetric;
        if (this.app.lastData) {
          await this.view.displayWeather(this.weather.altUnitsWeather());
        }
        unitButtons.forEach((button) => button.classList.toggle('unitsActive'));
      });
    });
  };

  clockFormatListener = () => {
    const formatButtons = document.querySelectorAll('.formatBtn');

    formatButtons.forEach((formatBtn) => {
      formatBtn.addEventListener('click', () => {
        this.user.format24H = !this.user.format24H;
        startClock(this.user.format24H);

        formatButtons.forEach((button) =>
          button.classList.toggle('formatActive')
        );
      });
    });

    startClock(this.user.format24H);
  };

  defaultLocationListener = () => {
    const setDefaultLocation = document.getElementById('setDefaultLocation');

    setDefaultLocation.addEventListener('input', (event) => {
      this.user.defaultLocation = event.target.value;
    });
  };

  saveSettingsListener = () => {
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');

    const handleClick = () => {
      saveUserConfig(this.user);
      toggleVisibility();
    };

    showSettingsBtn.addEventListener('click', handleClick);
    saveBtn.addEventListener('click', handleClick);
  };
}

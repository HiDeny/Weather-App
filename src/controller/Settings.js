import { startClock } from '../view/cardSections/header/clockElement';
import { saveUserConfig } from '../model/localStorage';

const toggleVisibility = () => {
  const settingsMenu = document.querySelector('.settingsMenu');
  settingsMenu.classList.toggle('showSettings');
};

const toggleActive = (buttons) => {
  buttons.forEach((button) => button.classList.toggle('active'));
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
    startClock(this.user.format24H);
  }

  unitsListener = () => {
    const unitButtons = document.querySelectorAll('.unitBtn');

    unitButtons.forEach((unitBtn) => {
      unitBtn.addEventListener('click', async () => {
        toggleActive(unitButtons);
        this.user.isMetric = !this.user.isMetric;

        if (this.app.lastData) {
          await this.view.displayWeather(this.weather.altUnitsWeather());
        }
      });
    });
  };

  clockFormatListener = () => {
    const formatButtons = document.querySelectorAll('.formatBtn');

    formatButtons.forEach((formatBtn) => {
      formatBtn.addEventListener('click', async () => {
        toggleActive(formatButtons);
        this.user.format24H = !this.user.format24H;

        if (this.app.lastData) {
          await this.view.displayWeather(this.weather.altUnitsWeather());
        }
        startClock(this.user.format24H);
      });
    });
  };

  defaultLocationListener = () => {
    const setDefaultLocation = document.querySelector('.setDefaultLocation');

    setDefaultLocation.addEventListener('input', (event) => {
      this.user.defaultLocation = event.target.value;
    });
  };

  saveSettingsListener = () => {
    const showSettingsBtn = document.querySelector('.showSettingsBtn');
    const saveBtn = document.querySelector('.saveBtn');

    const handleClick = () => {
      saveUserConfig(this.user);
      toggleVisibility();
    };

    showSettingsBtn.addEventListener('click', handleClick);
    saveBtn.addEventListener('click', handleClick);
  };
}

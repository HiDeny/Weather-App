import { startClock } from '../view/cardSections/header/clockElement';
import { saveUserConfig } from '../model/localStorage';
import {
  displaySuggestions,
  hideSuggestions,
} from '../view/cardSections/header/suggestionResults';
import { autocompleteData } from '../model/service/weatherAPI';

const toggleVisibility = () => {
  const settingsMenu = document.querySelector('.settingsMenu');
  settingsMenu.classList.toggle('showSettings');
};

const toggleActive = (buttons) => {
  buttons.forEach((button) => button.classList.toggle('active'));
};

const handleIntroDefaultClick = () => {
  toggleVisibility();
  document.querySelector('.setDefaultLocation').focus();
};

export default class SettingsController {
  constructor(userConfig, appConfig, viewController, weatherController) {
    this.app = appConfig;
    this.user = userConfig;
    this.view = viewController;
    this.weather = weatherController;

    this.inputValue = null;
    this.suggestedItems = null;

    this.currentInterval = null;
    this.currentTimeout = null;
    this.focusedItemIndex = -1;
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
    const introDefaultLocation = document.querySelector('.introDefault');
    const defaultLocation = document.querySelector('.setDefaultLocation');

    introDefaultLocation.addEventListener('click', handleIntroDefaultClick);
    defaultLocation.addEventListener('input', this.handleInput);
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

  // Same as Search, make it DRY
  handleInput = (event) => {
    const container = document.querySelector('.defaultLocationLabel');
    this.inputValue = event.target.value;

    if (this.inputValue === '') this.user.defaultLocation = this.inputValue;
    if (!this.inputValue || this.inputValue.length < 3) {
      this.focusedItemIndex = -1;
      hideSuggestions();
      return;
    }

    if (this.currentTimeout) clearTimeout(this.currentTimeout);

    this.currentTimeout = setTimeout(async () => {
      this.currentTimeout = null;

      this.suggestedItems = await autocompleteData(this.inputValue);
      if (this.suggestedItems.length < 1) return;

      displaySuggestions(
        container,
        this.suggestedItems,
        this.setDefaultLocation
      );
    }, 300);
  };

  setDefaultLocation = (newSelectedItem) => {
    const defaultLocation = document.querySelector('.setDefaultLocation');
    defaultLocation.value = `${newSelectedItem.name}, ${newSelectedItem.country}`;
    this.user.defaultLocation = `${newSelectedItem.name}, ${newSelectedItem.country}`;
  };
}

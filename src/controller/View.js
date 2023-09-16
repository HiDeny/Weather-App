import createHeaderElement from '../view/cardSections/header/headerElement';
import createWelcomeCard from '../view/cardSections/welcomeCard';

import createWeatherCard from '../view/weatherCard';

import createErrorCard from '../view/cardSections/errorCard';
import createSkeletonCard from '../view/cardSections/loadingCard';

import { startClock } from '../view/cardSections/header/clockElement';

const displayComponent = (newComponent) => {
  const currentWelcome = document.querySelector('.welcomeCard');
  const currentWeather = document.querySelector('.weatherCard');
  const currentSkeleton = document.querySelector('.skeletonCard');
  const currentError = document.querySelector('.errorCard');

  if (!currentWeather && !currentError && !currentSkeleton && !currentWelcome) {
    document.body.append(newComponent);
    return;
  }
  if (currentWelcome) currentWelcome.replaceWith(newComponent);
  if (currentWeather) currentWeather.replaceWith(newComponent);
  if (currentError) currentError.replaceWith(newComponent);
  if (currentSkeleton) currentSkeleton.replaceWith(newComponent);
};
export default class ViewController {
  constructor(config) {
    this.config = config;
  }

  initView = () => {
    this.initUI();
    this.initEventListeners();
  };

  initUI = () => {
    const headerElement = createHeaderElement(this.config);
    const welcomeCard = createWelcomeCard();

    const startingPage = [headerElement, welcomeCard];

    document.body.append(...startingPage);
  };

  initEventListeners = () => {
    const settingsMenu = document.getElementById('settingsMenu');
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    showSettingsBtn.addEventListener('click', () => {
      settingsMenu.classList.toggle('showSettings');
    });

    saveBtn.addEventListener('click', () => {
      settingsMenu.classList.toggle('showSettings');
    });

    setDefaultLocation.addEventListener('input', (event) => {
      this.config.defaultLocation = event.target.value;
    });

    metricBtn.addEventListener('click', () => {
      this.config.isMetric = true;
      imperialBtn.classList.toggle('unitsActive');
      metricBtn.classList.toggle('unitsActive');
    });

    imperialBtn.addEventListener('click', () => {
      this.config.isMetric = false;
      imperialBtn.classList.toggle('unitsActive');
      metricBtn.classList.toggle('unitsActive');
    });

    startClock();
  };

  displayWeather = async (cleanData) => {
    const weatherCard = await createWeatherCard(
      cleanData,
      this.config.isMetric
    );

    displayComponent(weatherCard);
  };

  static displayError = (error) => {
    const errorMessage = error.message;
    const errorCard = createErrorCard(errorMessage);

    displayComponent(errorCard);
  };

  static displaySkeleton = () => {
    const skeletonCard = createSkeletonCard();
    displayComponent(skeletonCard);
  };
}

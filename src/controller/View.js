import createSearchElement from '../view/cardSections/header/searchElement';
import createWelcomeCard from '../view/cardSections/welcomeCard';
import createSettings from '../view/cardSections/header/userSettings';
import createAttribution from '../view/cardSections/header/attribution';

import createWeatherCard from '../view/weatherCard';

import createErrorCard from '../view/cardSections/errorCard';
import createSkeletonCard from '../view/cardSections/loadingCard';

import { startClock } from '../view/cardSections/header/dateAtime';

const displayComponent = (newComponent) => {
  const currentWelcomeCard = document.querySelector('.welcomeCard');
  const currentWeatherCard = document.querySelector('.weatherCard');
  const currentSkeletonCard = document.querySelector('.skeletonCard');
  const currentErrorCard = document.querySelector('.errorCard');

  if (currentWelcomeCard) currentWelcomeCard.replaceWith(newComponent);
  if (currentWeatherCard) currentWeatherCard.replaceWith(newComponent);
  if (currentErrorCard) currentErrorCard.replaceWith(newComponent);
  if (currentSkeletonCard) currentSkeletonCard.replaceWith(newComponent);
  if (
    !currentWeatherCard &&
    !currentErrorCard &&
    !currentSkeletonCard &&
    !currentWelcomeCard
  ) {
    document.body.append(newComponent);
  }
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
    const searchElement = createSearchElement();
    const welcomeCard = createWelcomeCard();
    const settingsElement = createSettings(this.config);
    const attributionElement = createAttribution();

    const startingPage = [
      searchElement,
      welcomeCard,
      settingsElement,
      attributionElement,
    ];

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

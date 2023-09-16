import createSearchElement from '../view/cardSections/searchElement';
import createWelcomeCard from '../view/cardSections/welcomeCard';
import createSettings from '../view/cardSections/userSettings';
import createAttribution from '../view/cardSections/attribution';

import createWeatherCard from '../view/weatherCard';

import createErrorCard from '../view/cardSections/errorCard';
import createSkeletonCard from '../view/cardSections/loadingCard';

export default class ViewController {
  constructor(config) {
    this.config = config;
  }

  init = () => {
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

  displayWeather = async (cleanData) => {
    const currentWeatherCard = document.querySelector('.weatherCard');
    const currentErrorCard = document.querySelector('.errorCard');
    const currentSkeletonCard = document.querySelector('.skeleton');

    const weatherCard = await createWeatherCard(
      cleanData,
      this.config.isMetric
    );

    if (currentWeatherCard) currentWeatherCard.replaceWith(weatherCard);
    if (currentErrorCard) currentErrorCard.replaceWith(weatherCard);
    if (currentSkeletonCard) currentSkeletonCard.replaceWith(weatherCard);
    if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
      document.body.append(weatherCard);
    }
  };

  displayError = (error) => {
    const errorMessage = error.message;
    const currentWeatherCard = document.querySelector('.weatherCard');
    const currentErrorCard = document.querySelector('.errorCard');
    const currentSkeletonCard = document.querySelector('.skeleton');
    const errorCard = createErrorCard(errorMessage);

    if (currentWeatherCard) currentWeatherCard.replaceWith(errorCard);
    if (currentErrorCard) currentErrorCard.replaceWith(errorCard);
    if (currentSkeletonCard) currentSkeletonCard.replaceWith(errorCard);
    if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
      document.body.append(errorCard);
    }
  };

  initSettings = () => {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.classList.add('hideSettings');
    const showSettingsBtn = document.getElementById('showSettingsBtn');
    const saveBtn = document.getElementById('saveBtn');
    const setDefaultLocation = document.getElementById('setDefaultLocation');
    const metricBtn = document.querySelector('.metricUnits');
    const imperialBtn = document.querySelector('.imperialUnits');

    showSettingsBtn.addEventListener('click', () => {
      showSettingsBtn.disabled = true;
      const isVisible = settingsMenu.classList[1] === 'showSettings';
      // Update the logic here
      if (isVisible) {
        settingsMenu.classList.remove('showSettings');
        setTimeout(() => {
          settingsMenu.classList.add('hideSettings');
          showSettingsBtn.disabled = false;
        }, 1000);
      }
      if (!isVisible) {
        settingsMenu.classList.remove('hideSettings');
        setTimeout(() => {
          settingsMenu.classList.add('showSettings');
          showSettingsBtn.disabled = false;
        }, 500);
      }
    });

    saveBtn.addEventListener('click', () => {
      settingsMenu.classList.remove('showSettings');
      setTimeout(() => {
        settingsMenu.classList.add('hideSettings');
        showSettingsBtn.disabled = false;
      }, 1000);
    });

    setDefaultLocation.addEventListener('input', (event) => {
      this.config.defaultLocation = event.target.value;
    });

    metricBtn.addEventListener('click', () => {
      this.config.isMetric = true;
      imperialBtn.classList.remove('unitsActive');
      metricBtn.classList.add('unitsActive');
    });

    imperialBtn.addEventListener('click', () => {
      this.config.isMetric = false;
      metricBtn.classList.remove('unitsActive');
      imperialBtn.classList.add('unitsActive');
    });
  };

  displaySkeleton = () => {
    const currentWeatherCard = document.querySelector('.weatherCard');
    const currentErrorCard = document.querySelector('.errorCard');
    const currentSkeletonCard = document.querySelector('.skeleton');

    const skeletonCard = createSkeletonCard();

    if (currentWeatherCard) currentWeatherCard.replaceWith(skeletonCard);
    if (currentErrorCard) currentErrorCard.replaceWith(skeletonCard);
    if (currentSkeletonCard) currentSkeletonCard.replaceWith(skeletonCard);
    if (!currentWeatherCard && !currentErrorCard && !currentSkeletonCard) {
      document.body.append(skeletonCard);
    }
  };
}

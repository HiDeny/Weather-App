import createHeaderElement from '../view/cardSections/header/headerElement';
import createWelcomeCard from '../view/cardSections/welcomeCard';

import createWeatherCard from '../view/weatherCard';
import createErrorCard from '../view/cardSections/errorCard';
import createSkeletonCard from '../view/cardSections/loadingCard';

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
  constructor(userConfig) {
    this.userConfig = userConfig;
  }

  initUI = () => {
    const headerElement = createHeaderElement(this.userConfig);
    const welcomeCard = createWelcomeCard();

    const startingPage = [headerElement, welcomeCard];
    document.body.append(...startingPage);
  };

  displayWeather = async (cleanData) => {
    const weatherCard = await createWeatherCard(
      cleanData,
      this.userConfig.isMetric
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

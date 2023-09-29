import createAttributionElement from '../view/cardSections/attributionElement';
import createHeaderElement from '../view/cardSections/header/headerElement';
import createWelcomeCard from '../view/cardSections/welcomeCard';

import createWeatherCard from '../view/weatherCard';
import createErrorCard from '../view/cardSections/errorCard';
import createSkeletonCard from '../view/cardSections/skeletonCard';

import selectBackground from '../model/selectBackground';

const displayComponent = (newComponent) => {
  const currentWelcome = document.querySelector('.welcomeCard');
  const currentWeather = document.querySelector('.weatherCard');
  const currentSkeleton = document.getElementById('skeletonCard');
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
    this.currentInterval = null;
  }

  initUI = () => {
    document.body.append(createAttributionElement());
    document.body.append(createHeaderElement(this.userConfig));
    displayComponent(createWelcomeCard());
  };

  displayWeather = async (weatherData) => {
    try {
      const weatherCard = await createWeatherCard(
        weatherData,
        this.userConfig.isMetric
      );
      displayComponent(weatherCard);
      selectBackground(weatherData.backgroundData);

      // this.refreshData(getWeatherCall);
    } catch (error) {
      displayComponent(createErrorCard(error.message));
      throw new Error(error);
    }
  };

  static loadingScreen = () => {
    displayComponent(createSkeletonCard());
  };

  refreshData = async (getWeatherCall) => {
    if (this.currentInterval) clearInterval(this.currentInterval);
    this.currentInterval = setInterval(async () => {
      const weatherData = await getWeatherCall;
      const weatherCard = await createWeatherCard(
        weatherData,
        this.userConfig.isMetric
      );
      displayComponent(weatherCard);
    }, 1800000);
  };
}

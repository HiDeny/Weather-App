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

const handleWeatherCardBehavior = ({ locationSearched }) => {
  const scrollBtn = document.querySelector('.scrollBtn');
  const currentWeather = document.querySelector('.weatherCard');

  if (locationSearched <= 3) {
    setTimeout(() => {
      scrollBtn.classList.add('hint');
    }, 2000);
  }

  currentWeather.addEventListener('scroll', () => {
    if (currentWeather.scrollTop >= 100) scrollBtn.classList.add('rotateUp');
    if (currentWeather.scrollTop < 100) scrollBtn.classList.remove('rotateUp');
  });

  scrollBtn.addEventListener('click', () => {
    if (currentWeather.scrollTop >= 100) {
      currentWeather.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (currentWeather.scrollTop < 100) {
      currentWeather.scrollTo({
        top: currentWeather.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
};

export default class ViewController {
  constructor(userConfig) {
    this.userConfig = userConfig;
    this.currentInterval = null;
  }

  initUI = () => {
    document.body.append(createAttributionElement());
    document.body.append(createHeaderElement(this.userConfig));
    ViewController.welcomeScreen();
  };

  displayWeather = async (weatherData) => {
    try {
      const weatherCard = await createWeatherCard(
        weatherData,
        this.userConfig.isMetric
      );
      displayComponent(weatherCard);
      selectBackground(weatherData.backgroundData);
      handleWeatherCardBehavior(this.userConfig);

      // this.refreshData(getWeatherCall);
    } catch (error) {
      ViewController.errorScreen(error);
      throw new Error(error);
    }
  };

  static loadingScreen = () => {
    displayComponent(createSkeletonCard());
  };

  static errorScreen = (error) => {
    selectBackground({ weather: 'Error', isDay: 1 });
    displayComponent(createErrorCard(error.message));
  };

  static welcomeScreen = () => {
    displayComponent(createWelcomeCard());
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

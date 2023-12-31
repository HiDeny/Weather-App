import getGeolocation from '../model/geoLocation';
import { saveUserConfig } from '../model/localStorage';
import { autocompleteData } from '../model/service/weatherAPI';

import {
  displaySuggestions,
  setActive,
  hideSuggestions,
} from '../view/cardSections/header/suggestionResults';
import ViewController from './View';

const MIN_ADDRESS_LENGTH = 3;
const DEBOUNCE_DELAY = 300;

const handleIntroSearchClick = () => {
  document.querySelector('.searchField').focus();
};

export default class SearchController {
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

  initListeners = () => {
    const searchElement = document.querySelector('.searchElement');
    const searchFieldElement = searchElement.querySelector('.searchField');
    const geoLocationBtn = searchElement.querySelector('.geoLocationBtn');

    searchFieldElement.addEventListener('keydown', this.handleKeyDown);
    searchFieldElement.addEventListener('input', this.handleInput);
    searchElement.addEventListener('submit', this.handleSubmit);
    geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);
  };

  introListeners = () => {
    const introSearch = document.querySelector('.introSearch');
    const introGeo = document.querySelector('.introGeo');

    introGeo.addEventListener('click', this.handleGeolocationSearch);
    introSearch.addEventListener('click', handleIntroSearchClick);
  };

  renderWeather = async (location) => {
    this.user.locationSearched += 1;
    saveUserConfig(this.user);
    try {
      const weatherData = await this.weather.getWeather(location);
      await this.view.displayWeather(weatherData);
      this.updatePlaceholder();
    } catch (error) {
      ViewController.errorScreen(error);
      throw new Error(error);
    }
  };

  displaySelectedItem = (newSelectedItem) => {
    ViewController.loadingScreen();
    this.renderWeather(`${newSelectedItem.lat}, ${newSelectedItem.lon}`);
  };

  handleGeolocationSearch = async () => {
    ViewController.loadingScreen();
    this.renderWeather(await getGeolocation());
  };

  handleSubmit = (event) => {
    event.preventDefault();
    ViewController.loadingScreen();
    this.renderWeather(this.inputValue);
  };

  handleInput = (event) => {
    const container = document.querySelector('.searchElement');

    this.inputValue = event.target.value;

    if (!this.inputValue || this.inputValue.length < MIN_ADDRESS_LENGTH) {
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
        this.displaySelectedItem
      );
    }, DEBOUNCE_DELAY);
  };

  handleKeyDown = (event) => {
    const suggestionsItems = document.querySelector('.suggestions-items');

    if (suggestionsItems) {
      const items = suggestionsItems.getElementsByTagName('p');
      if (event.key === 'ArrowDown') this.handleArrowDown(event, items);
      if (event.key === 'ArrowUp') this.handleArrowUp(event, items);
      if (event.key === 'Enter') this.handleEnter(event, items);
    }
  };

  handleArrowDown = (event, suggestionItems) => {
    event.preventDefault();
    const { length } = suggestionItems;

    this.focusedItemIndex = (this.focusedItemIndex + 1) % length;
    setActive(suggestionItems, this.focusedItemIndex);
  };

  handleArrowUp = (event, suggestionItems) => {
    event.preventDefault();
    const { length } = suggestionItems;

    this.focusedItemIndex = (this.focusedItemIndex - 1 + length) % length;
    setActive(suggestionItems, this.focusedItemIndex);
  };

  handleEnter = async (event) => {
    event.preventDefault();

    if (this.focusedItemIndex > -1) {
      const newSelectedItem = this.suggestedItems[this.focusedItemIndex];
      this.displaySelectedItem(newSelectedItem);
    }
  };

  updatePlaceholder = () => {
    hideSuggestions();
    const searchField = document.querySelector('.searchField');
    const { name } = this.app.lastData.location;

    const placeholderContent = name ? `${name}` : 'City';
    searchField.placeholder = placeholderContent;
    searchField.value = '';
  };
}

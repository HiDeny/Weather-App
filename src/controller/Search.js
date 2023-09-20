import { autocompleteData } from '../model/service/weatherAPI';
import getGeolocation from '../model/geoLocation';

import {
  displaySuggestions,
  setActive,
  hideSuggestions,
} from '../view/cardSections/header/suggestionResults';

const MIN_ADDRESS_LENGTH = 3;
const DEBOUNCE_DELAY = 300;

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
    const geoLocationBtn = searchElement.querySelector('.geoLocationBtn');
    const searchFieldElement = searchElement.querySelector('.searchField');

    searchElement.addEventListener('submit', this.handleSubmit);
    searchFieldElement.addEventListener('input', this.handleInput);
    searchFieldElement.addEventListener('keydown', this.handleKeyDown);
    geoLocationBtn.addEventListener('click', this.handleGeolocationSearch);
  };

  renderWeather = async () => {
    try {
      await this.view.displayWeather(this.weather.getWeather(this.inputValue));
    } catch (error) {
      throw new Error(error);
    }
  };

  displaySelectedItem = async (newSelectedItem) => {
    this.inputValue = `${newSelectedItem.lat}, ${newSelectedItem.lon}`;
    await this.renderWeather();
    this.updatePlaceholder();
  };

  handleGeolocationSearch = async () => {
    // ? Display Loading when waiting for geolocation
    this.inputValue = await getGeolocation();
    await this.renderWeather();
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.renderWeather();
  };

  handleInput = (event) => {
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

      displaySuggestions(this.suggestedItems, this.displaySelectedItem);
    }, DEBOUNCE_DELAY);
  };

  handleKeyDown = (event) => {
    const suggestionsItems = document.querySelector('.suggestions-items');

    if (suggestionsItems) {
      const items = suggestionsItems.getElementsByTagName('div');
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
      await this.displaySelectedItem(newSelectedItem);
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

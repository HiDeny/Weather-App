import { autocompleteData } from '../model/service/weatherAPI';
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
    this.selectedItem = null;

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

  handleGeolocationSearch = async () => {
    await this.view.displayWeather(this.weather.getLocalWeather());
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await this.view.displayWeather(
      this.weather.getWeather(this.inputValue || this.user.defaultLocation)
    );
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

      const suggestionsData = await autocompleteData(this.inputValue);
      if (suggestionsData.length < 1) return;

      this.suggestedItems = suggestionsData;
      displaySuggestions(suggestionsData, this.handleSuggestionItemClick);
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

    this.focusedItemIndex =
      (this.focusedItemIndex + 1) % suggestionItems.length;
    setActive(suggestionItems, this.focusedItemIndex);
  };

  handleArrowUp = (event, suggestionItems) => {
    event.preventDefault();

    this.focusedItemIndex =
      (this.focusedItemIndex - 1 + suggestionItems.length) %
      suggestionItems.length;

    setActive(suggestionItems, this.focusedItemIndex);
  };

  handleEnter = async (event) => {
    event.preventDefault();

    if (this.focusedItemIndex > -1) {
      this.selectedItem = this.suggestedItems[this.focusedItemIndex];

      await this.displaySelectedItem();
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

  handleSuggestionItemClick = async (index) => {
    this.selectedItem = this.suggestedItems[index];
    await this.displaySelectedItem();
  };

  displaySelectedItem = async () => {
    this.inputValue = `${this.selectedItem.lat}, ${this.selectedItem.lon}`;
    await this.view.displayWeather(this.weather.getWeather(this.inputValue));
    this.updatePlaceholder();
  };
}

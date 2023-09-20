import { autocompleteData } from '../model/service/weatherAPI';
import {
  displaySuggestions,
  setActive,
  hideSuggestions,
} from '../view/cardSections/header/suggestionResults';

const MIN_ADDRESS_LENGTH = 3;
const DEBOUNCE_DELAY = 300;

export default class SearchFieldController {
  constructor(userConfig, appConfig) {
    this.userConfig = userConfig;
    this.appConfig = appConfig;
    this.currentTimeout = null;
    this.focusedItemIndex = -1;
  }

  initEventListeners = () => {
    const searchFieldElement = document.getElementById('searchField');
    searchFieldElement.addEventListener('input', this.handleInput);
    searchFieldElement.addEventListener('keydown', this.handleKeyDown);
  };

  handleInput = (event) => {
    this.appConfig.searchValue = event.target.value;

    if (
      !this.appConfig.searchValue ||
      this.appConfig.searchValue.length < MIN_ADDRESS_LENGTH
    ) {
      hideSuggestions();
      this.focusedItemIndex = -1;
      return;
    }
    if (this.currentTimeout) clearTimeout(this.currentTimeout);

    this.currentTimeout = setTimeout(async () => {
      this.currentTimeout = null;

      const suggestionsData = await autocompleteData(
        this.appConfig.searchValue
      );
      if (suggestionsData.length < 1) return;

      displaySuggestions(suggestionsData, this.updateSearchField);
    }, DEBOUNCE_DELAY);
  };

  handleKeyDown = (event) => {
    const currentSuggestions = document.querySelector('.suggestions-items');

    if (currentSuggestions) {
      const suggestionItems = currentSuggestions.getElementsByTagName('div');

      if (event.key === 'ArrowDown')
        this.handleArrowDown(event, suggestionItems);
      if (event.key === 'ArrowUp') this.handleArrowUp(event, suggestionItems);

      if (event.key === 'Enter') this.handleEnter(event, suggestionItems);
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

  handleEnter = (event, suggestionItems) => {
    event.preventDefault();

    const searchFieldElement = document.getElementById('searchField');
    const currentSuggestions = document.querySelector('.suggestions-items');

    if (this.focusedItemIndex > -1) {
      this.updateSearchField(
        suggestionItems[this.focusedItemIndex].textContent
      );
      this.appConfig.searchValue =
        suggestionItems[this.focusedItemIndex].textContent;
      searchFieldElement.value = this.appConfig.searchValue;
      currentSuggestions.remove();
      this.updatePlaceholder();
    }
  };

  updateSearchField = (searchResult) => {
    const searchFieldElement = document.getElementById('searchField');
    this.appConfig.searchValue = `${searchResult.lat}, ${searchResult.lon}`;
    searchFieldElement.value = `${searchResult.name}, ${searchResult.region}, ${searchResult.country}`;
  };

  updatePlaceholder = () => {
    hideSuggestions();
    const searchField = document.getElementById('searchField');
    const { name } = this.appConfig.lastData.location;

    const placeholderContent = name ? `${name}` : 'City';
    searchField.placeholder = placeholderContent;
    searchField.value = '';
  };
}

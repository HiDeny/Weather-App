import { autocompleteData } from '../model/service/weatherAPI';
import {
  displaySuggestions,
  setActive,
  hideSuggestions,
} from '../view/cardSections/header/suggestionResults';

const searchFieldElement = document.getElementById('searchField');

export const initSearchField = (userConfig, appConfig) => {};

export default class SearchField {
  constructor(userConfig, appConfig) {
    this.userConfig = userConfig;
    this.appConfig = appConfig;
  }

  init = () => {
    searchFieldElement.addEventListener('input', this.handleInput);
    searchFieldElement.addEventListener('input', this.handleKeyDown);
  };

  handleInput = (event) => {
    const MIN_ADDRESS_LENGTH = 3;
    const DEBOUNCE_DELAY = 300;
    let currentTimeout;

    this.appConfig.searchValue = event.target.value;

    if (
      !this.appConfig.searchValue ||
      this.appConfig.searchValue.length < MIN_ADDRESS_LENGTH
    ) {
      hideSuggestions();
      return false;
    }
    if (currentTimeout) clearTimeout(currentTimeout);

    currentTimeout = setTimeout(async () => {
      currentTimeout = null;

      const suggestionsData = await autocompleteData(
        this.appConfig.searchValue
      );
      if (suggestionsData.length < 1) return false;

      displaySuggestions(suggestionsData);
    }, DEBOUNCE_DELAY);
  };

  handleKeyDown = (event) => {
    let focusedItemIndex = 0;

    const currentSuggestions = document.querySelector('.suggestions-items');
    if (currentSuggestions) {
      const suggestionItems = currentSuggestions.getElementsByTagName('div');

      if (event.key === 'ArrowDown') {
        event.preventDefault();

        focusedItemIndex = (focusedItemIndex + 1) % suggestionItems.length;
        setActive(suggestionItems, focusedItemIndex);
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();

        focusedItemIndex =
          (focusedItemIndex - 1 + suggestionItems.length) %
          suggestionItems.length;

        setActive(suggestionItems, focusedItemIndex);
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        if (focusedItemIndex > -1) {
          this.appConfig.searchValue =
            suggestionItems[focusedItemIndex].textContent;
          searchFieldElement.value = this.appConfig.searchValue;
          currentSuggestions.remove();
        }
      }
    }
  };
}

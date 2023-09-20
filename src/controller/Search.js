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

      displaySuggestions(suggestionsData, this.appConfig);
    }, DEBOUNCE_DELAY);
  };

  handleKeyDown = (event) => {
    const searchFieldElement = document.getElementById('searchField');
    const currentSuggestions = document.querySelector('.suggestions-items');

    if (currentSuggestions) {
      const suggestionItems = currentSuggestions.getElementsByTagName('div');

      if (event.key === 'ArrowDown') {
        event.preventDefault();

        this.focusedItemIndex =
          (this.focusedItemIndex + 1) % suggestionItems.length;
        setActive(suggestionItems, this.focusedItemIndex);
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();

        this.focusedItemIndex =
          (this.focusedItemIndex - 1 + suggestionItems.length) %
          suggestionItems.length;

        setActive(suggestionItems, this.focusedItemIndex);
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        if (this.focusedItemIndex > -1) {
          this.appConfig.searchValue =
            suggestionItems[this.focusedItemIndex].textContent;
          searchFieldElement.value = this.appConfig.searchValue;
          currentSuggestions.remove();
        }
      }
    }
  };

  updatePlaceholder = () => {
    const searchField = document.getElementById('searchField');
    const { name } = this.appConfig.lastData.location;

    const placeholderContent = name ? `${name}` : 'City';
    searchField.placeholder = placeholderContent;
    searchField.value = '';
  };
}

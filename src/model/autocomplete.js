import {
  displaySuggestions,
  setActive,
} from '../view/cardSections/header/suggestionResults';
import { autocompleteData } from './service/weatherAPI';

export const suggestionsKeyboardControl = () => {
  const searchField = document.getElementById('searchField');

  let focusedItemIndex = 0;

  searchField.addEventListener('keydown', (event) => {
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
          searchField.value = suggestionItems[focusedItemIndex].textContent;
          currentSuggestions.remove();
        }
      }
    }
  });
};

export const addressAutocomplete = () => {
  const MIN_ADDRESS_LENGTH = 3;
  const DEBOUNCE_DELAY = 300;

  const searchField = document.getElementById('searchField');
  let currentTimeout;

  searchField.addEventListener('input', (event) => {
    const currentValue = event.target.value;

    if (!currentValue || currentValue.length < MIN_ADDRESS_LENGTH) {
      const currentSuggestions = document.querySelector('.suggestions-items');
      if (currentSuggestions) currentSuggestions.remove();
      return false;
    }
    if (currentTimeout) clearTimeout(currentTimeout);

    currentTimeout = setTimeout(async () => {
      currentTimeout = null;
      const suggestionsData = await autocompleteData(currentValue);
      console.log(suggestionsData);
      if (suggestionsData.length < 1) return false;
      const showData = displaySuggestions(suggestionsData);
      const currentSuggestions = document.querySelector('.suggestions-items');
      if (currentSuggestions) currentSuggestions.remove();
      document.querySelector('.searchElement').append(showData);
    }, DEBOUNCE_DELAY);
  });
};

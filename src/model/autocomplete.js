import displaySuggestions from '../view/cardSections/header/suggestionResults';

const fetchSuggestions = async (userInput) => {
  const API_KEY = '0ef9234ffd8140e0bcf145942232508';
  const BASE_URL = 'https://api.weatherapi.com/v1';

  const searchURL = `${BASE_URL}/search.json?key=${API_KEY}&q=${userInput}`;

  try {
    const response = await fetch(searchURL, { mode: 'cors' });
    const responseJSON = await response.json();

    return responseJSON;
  } catch (error) {
    throw new Error(error);
  }
};

const setActive = (suggestions, index) => {
  console.log(suggestions);
  const searchField = document.getElementById('searchField');

  if (!suggestions || index < 0) return false;

  Object.values(suggestions).forEach((suggestion) => {
    suggestion.classList.remove('suggestion-active');
  });

  suggestions[index].classList.add('suggestion-active');

  searchField.value = suggestions[index].textContent;
};

export const suggestionsKeyboardControl = () => {
  const searchField = document.getElementById('searchField');

  let focusedItemIndex = -1;

  searchField.addEventListener('keydown', (event) => {
    const currentSuggestions = document.querySelector('.suggestions-items');
    if (currentSuggestions) {
      const suggestionItems = currentSuggestions.getElementsByTagName('div');
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const check = focusedItemIndex !== suggestionItems.length - 1;
        focusedItemIndex = check ? (focusedItemIndex += 1) : 0;

        console.log(focusedItemIndex);
        setActive(suggestionItems, focusedItemIndex);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusedItemIndex =
          focusedItemIndex > 0
            ? focusedItemIndex - 1
            : (focusedItemIndex = suggestionItems.length - 1);

        console.log(focusedItemIndex);
        setActive(suggestionItems, focusedItemIndex);
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        if (focusedItemIndex > -1) currentSuggestions.remove();
      }
    }

    if (!currentSuggestions) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const evt = new Event('input', true, true);
        document.dispatchEvent(evt);
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
      const suggestionsData = await fetchSuggestions(currentValue);
      console.log(suggestionsData);
      if (suggestionsData.length < 1) return false;
      const showData = displaySuggestions(suggestionsData);
      const currentSuggestions = document.querySelector('.suggestions-items');
      if (currentSuggestions) currentSuggestions.remove();
      document.querySelector('.searchElement').append(showData);
    }, DEBOUNCE_DELAY);
  });
};

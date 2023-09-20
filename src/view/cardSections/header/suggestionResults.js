import { createElementWithClass } from '../helperFunc';

export const hideSuggestions = () => {
  const currentSuggestions = document.querySelector('.suggestions-items');
  if (currentSuggestions) currentSuggestions.remove();
};

const createSuggestionsElement = (suggestionsData, callback) => {
  const autocompleteDiv = createElementWithClass('div', 'suggestions-items');

  suggestionsData.forEach((result, index) => {
    const suggestionElement = createElementWithClass(
      'div',
      'suggestionElement',
      `${result.name}, ${result.region}, ${result.country}`
    );

    suggestionElement.addEventListener('click', () => {
      // Lookup locations weather
      console.log(suggestionsData[index]);
      console.log(suggestionsData);
      callback(suggestionsData[index]);
      hideSuggestions();
    });
    autocompleteDiv.append(suggestionElement);
  });

  return autocompleteDiv;
};

export const displaySuggestions = (suggestionsData, callback) => {
  const searchElement = document.querySelector('.searchElement');
  hideSuggestions();
  searchElement.append(createSuggestionsElement(suggestionsData, callback));
};

export const setActive = (suggestions, index) => {
  if (!suggestions || index < 0) return;

  Object.values(suggestions).forEach((suggestion) => {
    suggestion.classList.remove('suggestion-active');
  });

  suggestions[index].classList.add('suggestion-active');
};

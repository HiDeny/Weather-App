import { createElementWithClass } from '../helperFunc';

export const hideSuggestions = () => {
  const currentSuggestions = document.querySelector('.suggestions-items');
  if (currentSuggestions) currentSuggestions.remove();
};

const updateSearch = (appConfig, searchResult) => {
  const searchFieldElement = document.getElementById('searchField');
  appConfig.searchValue = `${searchResult.lat}, ${searchResult.lon}`;
  searchFieldElement.value = `${searchResult.name}, ${searchResult.region}, ${searchResult.country}`;
};

const createSuggestionsElement = (suggestionsData, appConfig) => {
  const autocompleteDiv = createElementWithClass('div', 'suggestions-items');

  suggestionsData.forEach((result, index) => {
    const suggestionElement = createElementWithClass(
      'div',
      'suggestionElement',
      `${result.name}, ${result.region}, ${result.country}`
    );

    suggestionElement.addEventListener('click', () => {
      // Lookup locations weather
      const searchResult = suggestionsData[index];
      console.log(searchResult);
      console.log(suggestionsData);
      updateSearch(appConfig, searchResult);
      hideSuggestions();
    });
    autocompleteDiv.append(suggestionElement);
  });

  return autocompleteDiv;
};

export const displaySuggestions = (suggestionsData, searchValue) => {
  const searchElement = document.querySelector('.searchElement');
  hideSuggestions();
  searchElement.append(createSuggestionsElement(suggestionsData, searchValue));
};

export const setActive = (suggestions, index) => {
  if (!suggestions || index < 0) return;

  Object.values(suggestions).forEach((suggestion) => {
    suggestion.classList.remove('suggestion-active');
  });

  suggestions[index].classList.add('suggestion-active');
};

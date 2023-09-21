import { createElementWithClass, pElementWithClass } from '../helperFunc';

export const hideSuggestions = () => {
  const currentSuggestions = document.querySelector('.suggestions-items');
  if (currentSuggestions) currentSuggestions.remove();
};

const createSuggestionsElement = (suggestedItems, displaySelectedItem) => {
  const autocompleteDiv = createElementWithClass('div', 'suggestions-items');

  suggestedItems.forEach((result, index) => {
    const content = `${result.name}, ${result.region}, ${result.country}`;
    const suggestionElement = pElementWithClass('suggestionElement', content);

    suggestionElement.addEventListener('click', async () => {
      await displaySelectedItem(suggestedItems[index]);
    });
    autocompleteDiv.append(suggestionElement);
  });

  return autocompleteDiv;
};

// Move this to view controller
export const displaySuggestions = (suggestedItems, displaySelectedItem) => {
  const searchElement = document.querySelector('.searchElement');
  hideSuggestions();
  searchElement.append(
    createSuggestionsElement(suggestedItems, displaySelectedItem)
  );
};

// Move this to view controller
export const setActive = (suggestions, index) => {
  if (!suggestions || index < 0) return;

  Object.values(suggestions).forEach((suggestion) => {
    suggestion.classList.remove('suggestion-active');
  });

  suggestions[index].classList.add('suggestion-active');
};

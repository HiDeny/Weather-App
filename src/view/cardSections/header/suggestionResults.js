import { createElementWithClass, pElementWithClass } from '../helperFunc';

export const hideSuggestions = () => {
  const currentSuggestions = document.querySelector('.suggestions-items');
  setTimeout(() => {
    if (currentSuggestions) currentSuggestions.remove();
  }, 10);
};

const createSuggestionsElement = (suggestedItems, displaySelectedItem) => {
  const autocompleteDiv = createElementWithClass('div', 'suggestions-items');

  suggestedItems.forEach((result, index) => {
    const content = `${result.name}, ${result.region}, ${result.country}`;
    const suggestionElement = pElementWithClass('suggestionElement', content);

    suggestionElement.addEventListener('click', async () => {
      displaySelectedItem(suggestedItems[index]);
      hideSuggestions();
    });
    autocompleteDiv.append(suggestionElement);
  });

  return autocompleteDiv;
};

// Move this to view controller
export const displaySuggestions = (
  container,
  suggestedItems,
  displaySelectedItem
) => {
  hideSuggestions();
  container.append(
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

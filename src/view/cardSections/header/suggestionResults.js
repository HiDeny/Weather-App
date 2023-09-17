import { createElementWithClass } from '../helperFunc';

const hideSuggestions = () => {
  const currentSuggestions = document.querySelector('.suggestions-items');
  if (currentSuggestions) currentSuggestions.remove();
};

const displaySuggestions = (suggestionsData) => {
  const autocompleteDiv = createElementWithClass('div', 'suggestions-items');

  suggestionsData.results.forEach((result, index) => {
    const suggestionElement = createElementWithClass(
      'div',
      'suggestionElement',
      result.formatted
    );

    suggestionElement.addEventListener('click', () => {
      // Lookup locations weather
      console.log(suggestionsData);
      console.log(suggestionsData.results[index].formatted);
      hideSuggestions();
    });
    autocompleteDiv.append(suggestionElement);
  });

  return autocompleteDiv;
};

export default displaySuggestions;

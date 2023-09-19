import { createElementWithClass } from '../helperFunc';

const hideSuggestions = () => {
  const currentSuggestions = document.querySelector('.suggestions-items');
  if (currentSuggestions) currentSuggestions.remove();
};

const displaySuggestions = (suggestionsData) => {
  const autocompleteDiv = createElementWithClass('div', 'suggestions-items');

  suggestionsData.forEach((result, index) => {
    const suggestionElement = createElementWithClass(
      'div',
      'suggestionElement',
      `${result.name}, ${result.region}, ${result.country}`
    );

    suggestionElement.addEventListener('click', () => {
      // Lookup locations weather
      console.log(suggestionsData);
      console.log(suggestionsData[index]);
      hideSuggestions();
    });
    autocompleteDiv.append(suggestionElement);
  });

  return autocompleteDiv;
};

export default displaySuggestions;

import displaySuggestions from '../view/cardSections/header/suggestionResults';

const fetchSuggestions = async (value) => {
  const API_KEY = '70a08f7e1b564372a773e30edf51afe3';
  const BASE_URL = 'https://api.geoapify.com/v1/';
  const requestOptions = { method: 'GET' };

  const completeSearchValue = encodeURIComponent(value);
  const completeURL = `${BASE_URL}geocode/autocomplete?text=${completeSearchValue}&format=json&limit=5&apiKey=${API_KEY}`;

  try {
    const response = await fetch(completeURL, requestOptions);
    const responseJSON = await response.json();

    return responseJSON;
  } catch (error) {
    throw new Error(error);
  }
};

const addressAutocomplete = () => {
  const MIN_ADDRESS_LENGTH = 3;
  const DEBOUNCE_DELAY = 300;

  const searchField = document.getElementById('searchField');
  let currentTimeout;

  searchField.addEventListener('input', (event) => {
    const currentValue = event.target.value;

    if (!currentValue || currentValue.length < MIN_ADDRESS_LENGTH) return false;
    if (currentTimeout) clearTimeout(currentTimeout);

    currentTimeout = setTimeout(async () => {
      currentTimeout = null;
      const suggestionsData = await fetchSuggestions(currentValue);
      console.log(suggestionsData);
      const showData = displaySuggestions(suggestionsData);
      document.querySelector('.searchElement').append(showData);
    }, DEBOUNCE_DELAY);
  });
};

export default addressAutocomplete;

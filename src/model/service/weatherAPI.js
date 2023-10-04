const API_KEY = '0ef9234ffd8140e0bcf145942232508';
const BASE_URL = 'https://api.weatherapi.com/v1';

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  const responseJSON = await response.json();

  if (responseJSON.error) {
    throw new Error(`API Error: ${responseJSON.error.code}`);
  }

  return responseJSON;
};

export const getWeatherData = async (location) => {
  // Getting forecast only because current weather is already with it
  const weatherURL = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=3`;
  const data = await fetchData(weatherURL, { mode: 'cors' });
  return data;
};
export const autocompleteData = async (userSearch) => {
  const searchURL = `${BASE_URL}/search.json?key=${API_KEY}&q=${userSearch}`;
  const data = await fetchData(searchURL);
  return data;
};

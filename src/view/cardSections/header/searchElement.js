const createGeoLocationBtn = () => {
  const geoLocationBtn = document.createElement('button');
  geoLocationBtn.classList.add('searchBtn');
  geoLocationBtn.classList.add('geoLocationBtn');
  geoLocationBtn.type = 'button';
  geoLocationBtn.textContent = '🧭';

  return geoLocationBtn;
};

const createSubmitBtn = () => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('searchBtn');
  submitBtn.classList.add('submitBtn');
  submitBtn.type = 'submit';
  submitBtn.textContent = '🔍';

  return submitBtn;
};

const createSearchField = () => {
  const searchField = document.createElement('input');
  searchField.className = 'searchField';
  searchField.autocomplete = 'off';
  searchField.placeholder = 'City';
  searchField.type = 'text';

  return searchField;
};

const createSearchElement = () => {
  const completeSearchBar = document.createElement('form');
  completeSearchBar.classList.add('searchElement');

  completeSearchBar.append(createGeoLocationBtn());
  completeSearchBar.append(createSearchField());
  completeSearchBar.append(createSubmitBtn());

  return completeSearchBar;
};

export default createSearchElement;

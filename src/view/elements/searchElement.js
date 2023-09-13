const createGeoLocationBtn = () => {
  const geoLocationBtn = document.createElement('button');
  geoLocationBtn.classList.add('searchBtn');
  geoLocationBtn.type = 'button';
  geoLocationBtn.id = 'geoLocationBtn';
  geoLocationBtn.textContent = '🧭';

  return geoLocationBtn;
};

const createSubmitBtn = () => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('searchBtn');
  submitBtn.type = 'submit';
  submitBtn.id = 'submitBtn';
  submitBtn.textContent = '🔍';

  return submitBtn;
};

const createSearchField = () => {
  const label = document.createElement('label');
  label.for = 'searchField';

  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.placeholder = 'City';
  searchBar.name = 'searchField';
  searchBar.id = 'searchField';

  label.append(searchBar);
  return label;
};

const createSearchElement = () => {
  const completeSearchBar = document.createElement('form');
  completeSearchBar.classList.add('searchElement');

  const geoLocationBtn = createGeoLocationBtn();
  completeSearchBar.append(geoLocationBtn);

  const searchField = createSearchField();
  completeSearchBar.append(searchField);

  const submitBtn = createSubmitBtn();
  completeSearchBar.append(submitBtn);

  return completeSearchBar;
};

export default createSearchElement;

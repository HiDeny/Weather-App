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

const createSearchBar = () => {
  const label = document.createElement('label');
  label.for = 'searchBar';

  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.placeholder = 'City';
  searchBar.name = 'searchBar';
  searchBar.id = 'searchBar';

  label.append(searchBar);
  return label;
};

const createSearch = () => {
  const searchForm = document.createElement('form');
  searchForm.classList.add('searchForm');

  const geoLocationBtn = createGeoLocationBtn();
  searchForm.append(geoLocationBtn);

  const searchBar = createSearchBar();
  searchForm.append(searchBar);

  const submitBtn = createSubmitBtn();
  searchForm.append(submitBtn);

  return searchForm;
};

export default createSearch;

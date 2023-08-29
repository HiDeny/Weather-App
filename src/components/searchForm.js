const createSubmitBtn = () => {
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.id = 'submitBtn';
  submitBtn.textContent = 'Search!';

  return submitBtn;
};

const createSearchBar = () => {
  const label = document.createElement('label');
  label.for = 'searchBar';

  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.placeholder = 'City/Zip/Post';
  searchBar.name = 'searchBar';
  searchBar.id = 'searchBar';

  label.append(searchBar);
  return label;
};

const createSearchForm = () => {
  const searchForm = document.createElement('form');

  const searchBar = createSearchBar();
  searchForm.append(searchBar);

  const submitBtn = createSubmitBtn();
  searchForm.append(submitBtn);

  return searchForm;
};

export default createSearchForm;

import createSearchForm from './searchBarElement';

export const searchBar = async (callback) => {
  const searchForm = createSearchForm();
  document.body.append(searchForm);

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { searchBar } = searchForm;
    const searchResult = searchBar.value;
    searchBar.value = '';

    callback(searchResult);
  });
};

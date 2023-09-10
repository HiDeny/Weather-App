const searchControl = async (searchBar) => {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { searchBar } = searchForm;
    const searchResult = searchBar.value;
    searchBar.value = '';

    callback(searchResult);
  });
};

export default searchControl;

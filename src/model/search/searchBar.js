const getSearchResult = (searchBarElement) => {
  const { searchBar } = searchBarElement;
  const searchResult = searchBar.value;
  searchBar.value = '';

  return Promise.resolve(searchResult);
};

const searchController = async (searchBarElement) => {
  searchBarElement.addEventListener('submit', (event) => {
    event.preventDefault();
    getSearchResult(searchBarElement);
  });
};

export default searchController;

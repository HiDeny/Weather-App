import getWeather from '../services/weatherapi';

const formController = (searchForm) => {
  const { searchBar } = searchForm;

  try {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const locationToFind = searchBar.value;
      getWeather(locationToFind);
    });
  } catch (err) {
    console.log(err);
  }
};

export default formController;

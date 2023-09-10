import createLoadingCard from './display/cardSections/loadingCard';

const getGeoLocation = async (callback) => {
  createLoadingCard();

  const errorCallback = (error) => {
    const loader = document.querySelector('.loader');
    if (loader) loader.remove();
    console.error(error);
  };

  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    const searchResult = `${latitude},${longitude}`;
    callback(searchResult);
    return Promise.resolve(searchResult);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

export default getGeoLocation;

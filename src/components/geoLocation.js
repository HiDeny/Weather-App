import createLoadingCard from './display/cardSections/loadingCard';

export const getGeolocation = async (callback) => {
  createLoadingCard();
  const errorCallback = (error) => console.error(error);

  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    const searchResult = `${latitude},${longitude}`;
    callback(searchResult);
    return Promise.resolve(searchResult);
  };

  navigator.geolocation
    .getCurrentPosition(successCallback, errorCallback)
    .then((response) => console.log(response));
};

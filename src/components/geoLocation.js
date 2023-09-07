export const getGeolocation = async (callback) => {
  const errorCallback = (error) => console.error(error);

  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    const searchResult = `${latitude},${longitude}`;
    callback(searchResult);
    return searchResult;
  };

  navigator.geolocation
    .getCurrentPosition(successCallback, errorCallback)
    .then((response) => console.log(response));
};

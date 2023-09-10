const getGeoLocation = async () =>
  new Promise((resolve, reject) => {
    const errorCallback = (error) => {
      reject(new Error(error));
    };

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      const searchResult = `${latitude},${longitude}`;
      resolve(searchResult);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
  
export default getGeoLocation;

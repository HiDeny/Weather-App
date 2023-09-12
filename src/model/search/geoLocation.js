const getGeolocation = async () =>
  new Promise((resolve, reject) => {
    const errorCallback = (error) => {
      reject(new Error(error));
    };

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      resolve(`${latitude},${longitude}`);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });

export default getGeolocation;

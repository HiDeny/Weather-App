const successCallback = (position) => {
  const { latitude, longitude } = position.coords;
  const searchVal = `${latitude},${longitude}`;
  displayWeather(searchVal);
};

const errorCallback = (error) => error;

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

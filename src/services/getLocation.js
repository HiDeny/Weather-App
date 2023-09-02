const successCallback = (position) => position;

const errorCallback = (error) => error;

const getLocation = () => {
  const location = navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback
  );

  return location;
};

const testLocation = getLocation();
console.log(testLocation);

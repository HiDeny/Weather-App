const tempClassName = 'temp';

const createCurrentElement = (currentTemp) => {
  const current = document.createElement('p');
  current.classList.add('current');
  current.classList.add(tempClassName);
  current.textContent = `${currentTemp}°C`;

  return current;
};

const createFeelsLikeElement = (feelsLikeTemp) => {
  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feelsLike');
  feelsLike.classList.add(tempClassName);
  feelsLike.textContent = `Feels Like: ${feelsLikeTemp}°C`;

  return feelsLike;
};

const createMinTempElement = (minTempValue) => {
  const minTemp = document.createElement('p');
  minTemp.classList.add('minTemp');
  minTemp.classList.add(tempClassName);
  minTemp.textContent = `Min.: ${minTempValue}°C`;

  return minTemp;
};

const createMaxTempElement = (maxTempValue) => {
  const maxTemp = document.createElement('p');
  maxTemp.classList.add('maxTemp');
  maxTemp.classList.add(tempClassName);
  maxTemp.textContent = `Feels Like: ${maxTempValue}°C`;

  return maxTemp;
};

const createUVIElement = (UVIndex) => {
  const uvIndex = document.createElement('p');
  uvIndex.classList.add('uv');
  uvIndex.classList.add(tempClassName);
  uvIndex.textContent = `UV: ${UVIndex}`;

  return uvIndex;
};

export {
  createCurrentElement,
  createMaxTempElement,
  createMinTempElement,
  createFeelsLikeElement,
  createUVIElement,
};

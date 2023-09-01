const windClassName = 'wind';

const createSpeedElement = (windSpeed) => {
  const speed = document.createElement('p');
  speed.classList.add('speed');
  speed.classList.add(windClassName);
  speed.textContent = `Wind: ${windSpeed}`;

  return speed;
};

const createGustElement = (windGust) => {
  const gust = document.createElement('p');
  gust.classList.add('gust');
  gust.classList.add(windClassName);
  gust.textContent = `Gusts: ${windGust}`;

  return gust;
};

const createMaxSpeedElement = (maxSpeed) => {
  const maxWind = document.createElement('p');
  maxWind.classList.add('maxWind');
  maxWind.classList.add(windClassName);
  maxWind.textContent = `Max Speed: ${maxSpeed}`;

  return maxWind;
};

const createMinSpeedElement = (minSpeed) => {
  const minWind = document.createElement('p');
  minWind.classList.add('minWind');
  minWind.classList.add(windClassName);
  minWind.textContent = `Min Speed: ${minSpeed}`;

  return minWind;
};

const createDirectionElement = (windDirection) => {
  const direction = document.createElement('p');
  direction.classList.add('direction');
  direction.classList.add(windClassName);
  direction.textContent = `Direction: ${windDirection}`;

  return direction;
};

export {
  createDirectionElement,
  createSpeedElement,
  createGustElement,
  createMaxSpeedElement,
  createMinSpeedElement,
};

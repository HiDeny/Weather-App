// const createTitle = () => {
//   const title = document.createElement('h3');
//   title.classList.add('title');
//   title.classList.add('wind');
//   title.textContent = 'Wind';

//   return title;
// };

const createSpeedElement = (windSpeed) => {
  const speed = document.createElement('p');
  speed.classList.add('speed');
  speed.classList.add('wind');
  speed.textContent = `Wind: ${windSpeed}`;

  return speed;
};
const createGustElement = (windGust) => {
  const gust = document.createElement('p');
  gust.classList.add('gust');
  gust.classList.add('wind');
  gust.textContent = `Gusts: ${windGust}`;

  return gust;
};
const createDirectionElement = (windDirection) => {
  const direction = document.createElement('p');
  direction.classList.add('direction');
  direction.classList.add('wind');
  direction.textContent = `Direction: ${windDirection}`;

  return direction;
};

// eslint-disable-next-line camelcase
// const createWindInfo = (wind) => {
//   const { speed, gust } = wind.kph;
//   const { dir } = wind;

// const windInfo = document.createElement('div');
// windInfo.classList.add('info');
// windInfo.classList.add('location');

// windInfo.append(createTitle());
//   windInfo.append(createSpeedElement(speed));
//   windInfo.append(createGustElement(gust));
//   windInfo.append(createDirectionElement(dir));

//   return windInfo;
// };

export { createDirectionElement, createSpeedElement, createGustElement };

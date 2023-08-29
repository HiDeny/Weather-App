const createTitleElement = () => {
  const title = document.createElement('h3');
  title.classList.add('title');
  title.classList.add('temp');
  title.textContent = 'Temperature';
};

const createCurrentElement = (currentTemp) => {
  const current = document.createElement('h2');
  current.classList.add('current');
  current.classList.add('temp');
  current.textContent = currentTemp;

  return current;
};
const createFeelsLikeElement = (feelsLikeTemp) => {
  const gust = document.createElement('p');
  gust.classList.add('feelsLike');
  gust.classList.add('temp');
  gust.textContent = feelsLikeTemp;

  return gust;
};
const createUVIElement = (UVIndex) => {
  const uvIndex = document.createElement('p');
  uvIndex.classList.add('uv');
  uvIndex.classList.add('temp');
  uvIndex.textContent = UVIndex;

  return uvIndex;
};

const createTempInfo = ({ temp }) => {
  const { current, feel } = temp.c;
  const { uv } = temp;

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('tempDiv');

  tempInfo.append(createTitleElement());
  tempInfo.append(createCurrentElement(current));
  tempInfo.append(createFeelsLikeElement(feel));
  tempInfo.append(createUVIElement(uv));

  return tempInfo;
};

export default createTempInfo;

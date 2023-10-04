/* eslint-disable camelcase */
const sunny = {
  background: '/src/view/assets/background/Sunny.jpg',
  fontColor: '#fff',
};
const cloudy = {
  background:
    '/src/view/assets/background/Cloudy-artem-anokhin-V4qjYCac7y8.jpg',
  fontColor: '#fff',
};

const overcast = {
  background:
    '/src/view/assets/background/Overcast-felipe-palacio-mK-LBRSG1rA.jpg',
  fontColor: '#fff',
};

const storm = {
  background: '/src/view/assets/background/Storm-johannes-plenio.jpg',
  fontColor: '#fff',
};

const misty = {
  background:
    '/src/view/assets/background/Fog-mark-eder-T_gAmymcQFs-unsplash.jpg',
  fontColor: '#808080',
};

const rain = {
  background:
    '/src/view/assets/background/Rain-stormseeker-vRCZ3DztaoA-unsplash.jpg',
  fontColor: '#fff',
};

const snow = {
  background:
    '/src/view/assets/background/Snow-alessio-soggetti-Pao8_rE4a44-unsplash.jpg',
  fontColor: '#000',
};

const sleet = {
  background:
    '/src/view/assets/background/Sleet-kelly-sikkema-hSPVuakrJqs-unsplash.jpg',
  fontColor: '#fff',
};

const night = {
  background:
    '/src/view/assets/background/NightStars-paul-volkmer-qVotvbsuM_c-unsplash.jpg',
  fontColor: '#fff',
};

const error = {
  background:
    '/src/view/assets/background/error2-vecteezy_404-landing-page_6549647.jpg',
  fontColor: '#fff',
};

const backgrounds = {
  Sunny: sunny,
  Clear: sunny,
  Cloudy: cloudy,
  'Partly cloudy': cloudy,
  Overcast: overcast,
  Mist: misty,
  'Patchy rain possible': rain,
  'Patchy snow possible': snow,
  'Patchy sleet possible': sleet,
  'Patchy freezing drizzle possible': snow,
  'Thundery outbreaks possible': storm,
  'Blowing snow': snow,
  Blizzard: snow,
  Fog: misty,
  'Freezing fog': snow,
  'Patchy light drizzle': rain,
  'Light drizzle': rain,
  'Freezing drizzle': snow,
  'Heavy freezing drizzle': snow,
  'Patchy light rain': rain,
  'Light rain': rain,
  'Moderate rain at times': rain,
  'Moderate rain': rain,
  'Heavy rain at times': rain,
  'Heavy rain': rain,
  'Light freezing rain': snow,
  'Moderate or heavy freezing rain': snow,
  'Light sleet': sleet,
  'Moderate or heavy sleet': sleet,
  'Patchy light snow': snow,
  'Light snow': snow,
  'Patchy moderate snow': snow,
  'Moderate snow': snow,
  'Patchy heavy snow': snow,
  'Heavy snow': snow,
  'Ice pellets': snow,
  'Light rain shower': rain,
  'Moderate or heavy rain shower': rain,
  'Torrential rain shower': rain,
  'Light sleet showers': sleet,
  'Moderate or heavy sleet showers': rain,
  'Light snow showers': snow,
  'Moderate or heavy snow showers': snow,
  'Light showers of ice pellets': snow,
  'Moderate or heavy showers of ice pellets': snow,
  'Patchy light rain with thunder': rain,
  'Moderate or heavy rain with thunder': rain,
  'Patchy light snow with thunder': snow,
  'Moderate or heavy snow with thunder': snow,
};

const selectBackground = ({ weather, isDay }, isError = false) => {
  const body = document.querySelector('body');
  const currentInfo = document.querySelector('#mainCurrentInfo');

  if (isError) {
    body.style.backgroundColor = 'white';
    body.style.backgroundImage = 'none';
    document.querySelector(
      '.errorCard'
    ).style.backgroundImage = `url('${error.background}')`;
    document.querySelector('.errorCard').style.color = error.fontColor;
    return;
  }
  if (!backgrounds[weather]) {
    body.style.backgroundImage = `url('${backgrounds.Sunny.background}')`;
    throw new Error('Background img missing!');
  }
  if (isDay) {
    dynamicUpdate(backgrounds[weather].background);
    // body.style.backgroundImage = `url('${backgrounds[weather].background}')`;
    currentInfo.style.color = backgrounds[weather].fontColor;
  }
  if (!isDay) {
    body.style.backgroundImage = `url('${night.background}')`;
  }
};

const dynamicUpdate = (newBackground) => {
  const body = document.querySelector('body');
  console.log(window.getComputedStyle(body).backgroundImage);

  body.style.setProperty(
    '--old-background',
    window.getComputedStyle(body).backgroundImage
  );
  body.style.setProperty('--new-background', `url('${newBackground}'`);

  body.classList.add('dynamicUpdate');

  setTimeout(() => {
    body.style.backgroundImage = `url('${newBackground}')`;
  }, 1500);
};

export default selectBackground;

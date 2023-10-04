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

const selectBackground = ({ weather, isDay }) => {
  const body = document.querySelector('body');
  const currentCard =
    document.querySelector('#mainCurrentInfo') ||
    document.querySelector('.errorCard');
  const newBackground = document.createElement('div');
  newBackground.classList.add('newBackground');
  body.append(newBackground);

  try {
    const DAY_BACKGROUND = `url('${backgrounds[weather].background}')`;
    const NIGHT_BACKGROUND = `url('${night.background}')`;
    const FONT_COLOR = `url('${backgrounds[weather].fontColor}')`;
    const newBackgroundImage = isDay ? DAY_BACKGROUND : NIGHT_BACKGROUND;

    newBackground.style.backgroundImage = newBackgroundImage;
    currentCard.style.color = FONT_COLOR;

    setTimeout(() => {
      newBackground.classList.add('updateBackground');
    }, 1100);

    setTimeout(() => {
      body.classList.remove('errorBackground');
      body.style.backgroundImage = newBackgroundImage;
    }, 4000);

    setTimeout(() => {
      newBackground.classList.remove('updateBackground');
    }, 5000);

    setTimeout(() => {
      newBackground.remove();
    }, 8000);
  } catch (err) {
    body.classList.add('errorBackground');
    newBackground.remove();
    throw new Error(`${err} Background image is missing.`);
  }
};

export default selectBackground;

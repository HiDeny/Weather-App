/* eslint-disable camelcase */
const sunnyImg = '/src/view/assets/background/Sunny.jpg';
const cloudyImg =
  '/src/view/assets/background/Cloudy-artem-anokhin-V4qjYCac7y8.jpg';

const overcastImg =
  '/src/view/assets/background/Overcast-barry-simon-4C6Rp23RjnE.jpg';

const stormImg = '/src/view/assets/background/Storm-johannes-plenio.jpg';
const mistyImg =
  '/src/view/assets/background/Fog-mark-eder-T_gAmymcQFs-unsplash.jpg';

const rainImg =
  '/src/view/assets/background/Rain-stormseeker-vRCZ3DztaoA-unsplash.jpg';

const snowImg =
  '/src/view/assets/background/Snow-alessio-soggetti-Pao8_rE4a44-unsplash.jpg';

const sleetImg =
  '/src/view/assets/background/Sleet-chuttersnap-an7gMeifdhs-unsplash.jpg';

const nightImg =
  '/src/view/assets/background/NightStars-paul-volkmer-qVotvbsuM_c-unsplash.jpg';

const backgroundImages = {
  Sunny: sunnyImg,
  Clear: sunnyImg,
  Cloudy: cloudyImg,
  'Partly cloudy': cloudyImg,
  Overcast: overcastImg,
  Mist: mistyImg,
  'Patchy rain possible': rainImg,
  'Patchy snow possible': snowImg,
  'Patchy sleet possible': sleetImg,
  'Patchy freezing drizzle possible': snowImg,
  'Thundery outbreaks possible': stormImg,
  'Blowing snow': snowImg,
  Blizzard: snowImg,
  Fog: mistyImg,
  'Freezing fog': snowImg,
  'Patchy light drizzle': rainImg,
  'Light drizzle': rainImg,
  'Freezing drizzle': snowImg,
  'Heavy freezing drizzle': snowImg,
  'Patchy light rain': rainImg,
  'Light rain': rainImg,
  'Moderate rain at times': rainImg,
  'Moderate rain': rainImg,
  'Heavy rain at times': rainImg,
  'Heavy rain': rainImg,
  'Light freezing rain': snowImg,
  'Moderate or heavy freezing rain': snowImg,
  'Light sleet': sleetImg,
  'Moderate or heavy sleet': sleetImg,
  'Patchy light snow': snowImg,
  'Light snow': snowImg,
  'Patchy moderate snow': snowImg,
  'Moderate snow': snowImg,
  'Patchy heavy snow': snowImg,
  'Heavy snow': snowImg,
  'Ice pellets': snowImg,
  'Light rain shower': rainImg,
  'Moderate or heavy rain shower': rainImg,
  'Torrential rain shower': rainImg,
  'Light sleet showers': sleetImg,
  'Moderate or heavy sleet showers': rainImg,
  'Light snow showers': snowImg,
  'Moderate or heavy snow showers': snowImg,
  'Light showers of ice pellets': snowImg,
  'Moderate or heavy showers of ice pellets': snowImg,
  'Patchy light rain with thunder': rainImg,
  'Moderate or heavy rain with thunder': rainImg,
  'Patchy light snow with thunder': snowImg,
  'Moderate or heavy snow with thunder': snowImg,
};

const selectBackground = ({ weather, isDay }) => {
  // Do more testing with font colors
  // const testWeather = 'Freezing drizzle';

  const body = document.querySelector('body');
  if (!backgroundImages[weather]) {
    throw new Error('Background img missing!');
  }
  if (isDay) body.style.backgroundImage = `url('${backgroundImages[weather]}')`;
  if (!isDay) body.style.backgroundImage = `url('${nightImg}')`;
};

export default selectBackground;

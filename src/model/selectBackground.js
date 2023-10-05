import { createElementWithClass } from '../view/cardSections/helperFunc';
import '../view/css/backgrounds.css';

const sunny = 'sunny';
const cloudy = 'cloudy';
const overcast = 'overcast';
const storm = 'storm';
const misty = 'misty';
const rain = 'rain';
const snow = 'snow';
const sleet = 'sleet';
const night = 'night';
const error = 'error';

const backgrounds = {
  Error: error,
  Night: night,
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
  const newBackground = createElementWithClass('div', 'newBackground');
  body.append(newBackground);

  try {
    const BACKGROUND = isDay ? backgrounds[weather] : backgrounds.Night;
    newBackground.classList.add(BACKGROUND);

    setTimeout(() => {
      newBackground.classList.add('updateBackground');
    }, 500);

    setTimeout(() => {
      if (body.classList[0]) body.classList.remove(body.classList[0]);
      body.classList.add(BACKGROUND);
    }, 3500);

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

import '../css/welcomeCard.css';
import { createElementWithClass, pElementWithClass } from './helperFunc';

const features = [
  'Check the clima anywhere, anytime',
  "Find out what's happening in your current location",
  'Set your favorite location as the default',
  'Plan your day with hourly forecasts',
];

// Fix whole card, figure out better messages
const createWelcomeCard = () => {
  const welcomeCard = createElementWithClass('section', 'welcomeCard');

  const welcomeMessage = createElementWithClass('h1', 'appName', 'ClimaCheck');

  const featuresHighlight = createElementWithClass('div', 'keyFeatures');

  features.forEach((feature) => {
    featuresHighlight.append(pElementWithClass('feature', feature));
  });

  const intro = createElementWithClass('div', 'intro');
  intro.append(createElementWithClass('h2', 'title', 'Intro:'));
  intro.append(
    pElementWithClass(
      'settingsIntro',
      'Here you can setup default units and location'
    )
  );
  intro.append(
    pElementWithClass(
      'geoIntro',
      'This button will show you weather in your current position!'
    )
  );
  intro.append(
    pElementWithClass(
      'searchIntro',
      'Here you can search your desired location and press search!'
    )
  );
  intro.append(
    pElementWithClass(
      'settingsIntro',
      'Set your preferences (Default location, Units, TimeFormat)'
    )
  );

  const welcomeContent = [welcomeMessage, featuresHighlight, intro];
  welcomeCard.append(...welcomeContent);

  return welcomeCard;
};

export default createWelcomeCard;

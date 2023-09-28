import '../css/cards.css';
import { createElementWithClass, pElementWithClass } from './helperFunc';

// Fix whole card, figure out better messages
const createWelcomeCard = () => {
  const welcomeCard = createElementWithClass('section', 'welcomeCard');

  const welcomeMessage = createElementWithClass(
    'h1',
    'welcomeMessage',
    'Welcome to ClimaCheck!'
  );

  const featuresHighlight = createElementWithClass('div', 'keyFeatures');
  featuresHighlight.append(createElementWithClass('h2', 'title', 'Features:'));
  featuresHighlight.append(
    pElementWithClass('feature', 'Clima in any Location!')
  );
  featuresHighlight.append(pElementWithClass('feature', 'Hourly forecast'));
  featuresHighlight.append(
    pElementWithClass('feature', 'Check Clima in your location!')
  );

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

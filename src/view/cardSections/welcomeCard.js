import { createElementWithClass, pElementWithClass } from './helperFunc';

import createDateTimeElement from './header/dateAtime';

const createWelcomeCard = () => {
  const welcomeCard = createElementWithClass('section', 'welcomeCard');
  welcomeCard.append(createDateTimeElement());

  const welcomeMessage = createElementWithClass(
    'h1',
    'welcomeMessage',
    'Welcome to this app!'
  );

  const featuresHighlight = createElementWithClass('div', 'keyFeatures');
  featuresHighlight.append(createElementWithClass('h2', 'title', 'Features:'));
  featuresHighlight.append(
    pElementWithClass('forecast', 'Weather in any Location!')
  );
  featuresHighlight.append(pElementWithClass('forecast', 'Hourly forecast'));
  featuresHighlight.append(
    pElementWithClass('weatherInfo', 'Location-based weather information')
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
      'Here you can type your desired location and press search!'
    )
  );

  const welcomeContent = [welcomeMessage, featuresHighlight, intro];
  welcomeCard.append(...welcomeContent);

  return welcomeCard;
};

export default createWelcomeCard;

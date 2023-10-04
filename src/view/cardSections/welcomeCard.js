import '../css/welcomeCard.css';
import { createElementWithClass, pElementWithClass } from './helperFunc';

export const createFeatureBtn = (className, content) => {
  const button = createElementWithClass('button', 'feature');

  button.classList.add(`intro${className}`);
  button.append(createElementWithClass('i', `icon`));
  button.append(pElementWithClass('content', content));

  return button;
};

const createWelcomeCard = () => {
  const welcomeCard = createElementWithClass('section', 'welcomeCard');

  const welcomeMessage = createElementWithClass('h1', 'appName', 'ClimaCheck');

  const featuresHighlight = createElementWithClass('div', 'keyFeatures');

  const introSearch = createFeatureBtn('Search', 'Clima anywhere, anytime');
  const introDefault = createFeatureBtn(
    'Default',
    'Set your favorite location'
  );
  const introGeo = createFeatureBtn('Geo', 'Clima in your current location');

  const featureButtons = [introGeo, introSearch, introDefault];
  featuresHighlight.append(...featureButtons);

  const welcomeContent = [welcomeMessage, featuresHighlight];
  welcomeCard.append(...welcomeContent);

  return welcomeCard;
};

export default createWelcomeCard;

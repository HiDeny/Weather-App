import '../css/errorCard.css';
import { createElementWithClass, pElementWithClass } from './helperFunc';

const errorResponses = {
  1002: 'API key not provided.',
  1003: 'Please enter a location.',
  1005: 'Invalid request. Please try again later.',
  1006: 'No results found for this location.',
  2006: 'API key provided is invalid. Please contact support.',
  2007: 'API key has exceeded its monthly usage limit.',
  2008: 'API key has been disabled. Please contact support.',
  2009: 'API key does not have access to the resource. Please check pricing page for what is allowed in your API subscription plan.',
  9000: 'JSON body passed in bulk request is invalid. Please make sure it is valid JSON with UTF-8 encoding.',
  9001: 'JSON body contains too many locations for bulk request. Please keep it below 50 in a single request.',
  9999: 'Internal server error. Please try again later.',
};
const alternativeResponse = 'Something went wrong, please contact support.';

const createErrorCard = (errorMessage) => {
  // Find better solution, because this will make an mess
  const errorCode = errorMessage.split(' ')[3] || '0';
  const correctResponse = errorResponses[errorCode] || alternativeResponse;

  const errorCard = createElementWithClass('div', 'errorCard');

  const errorResponse = createElementWithClass(
    'H1',
    'errorMsg',
    correctResponse
  );
  errorCard.append(errorResponse);

  errorCard.append(pElementWithClass('support', 'Climasupport@diginey.com'));

  return errorCard;
};

export default createErrorCard;

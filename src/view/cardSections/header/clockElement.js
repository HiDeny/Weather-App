import { format } from 'date-fns';
import { createElementWithClass, pElementWithClass } from '../helperFunc';

const setDate = () => format(new Date(), 'do MMMM');
const setTime = (format24H) => {
  if (!format24H) return format(new Date(), 'h:mm:ss aa');
  return format(new Date(), 'HH:mm:ss');
};

const createClockElement = (format24H) => {
  const div = createElementWithClass('div', 'clockElement');
  div.append(pElementWithClass('time', setTime(format24H)));
  div.append(pElementWithClass('date', setDate()));

  return div;
};

let clockInterval;

export const startClock = (format24H) => {
  clearInterval(clockInterval);
  clockInterval = setInterval(() => {
    document.querySelector('.time').textContent = setTime(format24H);
  }, 1000);
};

export default createClockElement;

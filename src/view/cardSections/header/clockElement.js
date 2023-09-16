import { format } from 'date-fns';
import { createElementWithClass, pElementWithClass } from '../helperFunc';

const setDate = () => format(new Date(), 'do MMMM');
const setTime = (format24) => {
  if (format24) return format(new Date(), 'HH:mm:ss');
  return format(new Date(), 'h:mm:ss aa');
};

const createClockElement = (format24 = true) => {
  const div = createElementWithClass('div', 'dateAtime');
  div.append(pElementWithClass('clock', setTime(format24)));
  div.append(pElementWithClass('date', setDate()));

  return div;
};

export const startClock = () => {
  const clockInterval = setInterval(() => {
    const clockElement = document.querySelector('.clock');
    if (clockElement) clockElement.textContent = setTime();
    if (!clockElement) clearInterval(clockInterval);
  }, 1000);
};

export default createClockElement;

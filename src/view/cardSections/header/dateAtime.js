import { format } from 'date-fns';
import { createElementWithClass, pElementWithClass } from '../helperFunc';

const showTime = (clock24H) => {
  if (clock24H) return format(new Date(), 'HH:mm:ss');
  return format(new Date(), 'h:mm:ss aa');
};
const showDate = () => format(new Date(), 'do MMMM');

const createDateTimeElement = (clock24H = false) => {
  const div = createElementWithClass('div', 'dateAtime');

  div.append(pElementWithClass('clock', showTime(clock24H)));
  div.append(pElementWithClass('date', showDate()));

  return div;
};

const updateClockElement = () => {
  const clockElement = document.querySelector('.clock');
  clockElement.textContent = showTime();
};

export const startClock = () => {
  const clockInterval = setInterval(() => {
    const clockElement = document.querySelector('.clock');
    if (clockElement) updateClockElement();
    if (!clockElement) clearInterval(clockInterval);
  }, 1000);
};

export default createDateTimeElement;

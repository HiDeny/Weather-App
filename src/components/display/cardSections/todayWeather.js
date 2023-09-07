import { createElementWithClass } from '../elements/helperFunc';

const createTodaySection = ({ temp, condition }) => {
  const todaySection = document.createElement('section');
  todaySection.classList.add('today');

  const currentTemp = createElementWithClass(
    'h1',
    'currentTemp',
    `${temp.c.current}°C`
  );
  todaySection.append(currentTemp);

  const conditionsDesc = createElementWithClass(
    'h3',
    'conditionsDesc',
    condition.text
  );
  todaySection.append(conditionsDesc);

  const highestTemp = createElementWithClass(
    'h3',
    'highTemp',
    `H: ${temp.c.max}°C`
  );
  todaySection.append(highestTemp);

  const lowTemp = createElementWithClass('h3', 'lowTemp', `L: ${temp.c.min}°C`);
  todaySection.append(lowTemp);

  return todaySection;
};

export default createTodaySection;

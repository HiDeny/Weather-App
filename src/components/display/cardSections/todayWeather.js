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

  return todaySection;
};

export default createTodaySection;

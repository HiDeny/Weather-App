import { createCurrentTempElement } from '../elements/temperature';
import { createConTextElement } from '../elements/conditions';

const createTodaySection = ({ temp, condition }) => {
  const todaySection = document.createElement('section');
  todaySection.classList.add('today');

  todaySection.append(createCurrentTempElement(temp.c.current));
  todaySection.append(createConTextElement(condition));

  return todaySection;
};

export default createTodaySection;

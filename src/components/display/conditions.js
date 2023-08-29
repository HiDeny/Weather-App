const createTitle = () => {
  const title = document.createElement('h3');
  title.classList.add('title');
  title.classList.add('conditions');
  title.textContent = 'Conditions';

  return title;
};

const createDescription = (weatherDescription) => {
  const description = document.createElement('p');
  description.classList.add('description');
  description.classList.add('conditions');
  description.textContent = `It's ${weatherDescription}`;

  return description;
};

const createIcon = async (iconURL) => {
  const getIcon = await fetch(iconURL);

  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.classList.add('conditions');
  icon.src = getIcon.url;

  return icon;
};

const createConditionsInfo = async ({ text, icon }) => {
  const conditions = document.createElement('div');
  conditions.classList.add('conditionsDiv');

  conditions.append(createTitle());
  conditions.append(createDescription(text));
  conditions.append(await createIcon(icon));

  return conditions;
};

export default createConditionsInfo;

const createTitleElement = () => {
  const title = document.createElement('h3');
  title.classList.add('title');
  title.classList.add('conditions');
  title.textContent = 'Conditions';
};

const createDescription = (weatherDescription) => {
  const description = document.createElement('p');
  description.classList.add('description');
  description.classList.add('conditions');
  description.textContent = weatherDescription;

  return description;
};

const createIcon = async (iconURL) => {
  const getIcon = await fetch(iconURL);
  console.log(getIcon);
  const icon = document.createElement('img');
  icon.classList.add('icon');
  icon.classList.add('conditions');
  icon.src = getIcon;

  return icon;
};

const createConditionsElement = async ({ text, icon }) => {
  const conditions = document.createElement('div');
  conditions.classList.add('conditionsDiv');

  conditions.append(createTitleElement());
  conditions.append(createDescription(text));
  conditions.append(await createIcon(icon));

  return conditions;
};

export default createConditionsElement;

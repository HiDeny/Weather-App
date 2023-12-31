export const createElementWithClass = (tagName, className, content) => {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = content;

  return element;
};

export const pElementWithClass = (className, content) => {
  const nodeContent = createElementWithClass('p', className, content);
  return nodeContent;
};

export const createConditionsIcon = async ({ icon }) => {
  try {
    const getIcon = await fetch(icon);

    const iconImg = document.createElement('img');
    iconImg.classList.add('conditionsIcon');
    iconImg.src = getIcon.url;

    return iconImg;
  } catch (err) {
    throw new Error(err);
  }
};

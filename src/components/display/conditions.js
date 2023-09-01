const createConTextElement = ({ text }) => {
  const description = document.createElement('p');
  description.classList.add('description');
  description.classList.add('conditions');
  description.textContent = `It's ${text}`;

  return description;
};

const createConIconElement = async ({ icon }) => {
  const completeURL = `https:${icon}`;
  const getIcon = await fetch(completeURL);

  const iconImg = document.createElement('img');
  iconImg.classList.add('icon');
  iconImg.classList.add('conditions');
  iconImg.src = getIcon.url;

  return iconImg;
};

export { createConIconElement, createConTextElement };

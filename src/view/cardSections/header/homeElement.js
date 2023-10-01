const createHomeButton = () => {
  const homeButton = document.createElement('button');
  homeButton.classList.add('homeButton');
  homeButton.textContent = '';

  return homeButton;
};

export default createHomeButton;

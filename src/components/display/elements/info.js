const infoClassName = 'locationInfo';

const createNameElement = (name) => {
  const nameElement = document.createElement('h2');
  nameElement.classList.add('name');
  nameElement.classList.add(infoClassName);
  nameElement.textContent = name;

  return nameElement;
};

const createRegionElement = (region) => {
  const regionElement = document.createElement('p');
  regionElement.classList.add('region');
  regionElement.classList.add(infoClassName);
  regionElement.textContent = region;

  return regionElement;
};

export { createNameElement, createRegionElement };

const createNameElement = (name) => {
  const nameElement = document.createElement('h2');
  nameElement.classList.add('name');
  nameElement.classList.add('location');
  nameElement.textContent = name;

  return nameElement;
};
const createRegionElement = (region) => {
  const regionElement = document.createElement('p');
  regionElement.classList.add('region');
  regionElement.classList.add('location');
  regionElement.textContent = region;

  return regionElement;
};
const createCountryElement = (country) => {
  const countryElement = document.createElement('p');
  countryElement.classList.add('country');
  countryElement.classList.add('location');
  countryElement.textContent = country;

  return countryElement;
};

const createInfoElement = ({ name, region, country }) => {
  const locationInfo = document.createElement('div');
  locationInfo.classList.add('infoDiv');

  locationInfo.append(createNameElement(name));
  locationInfo.append(createRegionElement(region));
  locationInfo.append(createCountryElement(country));

  return locationInfo;
};

export default createInfoElement;

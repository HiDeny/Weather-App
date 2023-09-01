const astroClassName = 'astro';

const createSunriseElement = (sunriseTime) => {
  const sunrise = document.createElement('p');
  sunrise.classList.add('sunrise');
  sunrise.classList.add(astroClassName);
  sunrise.textContent = `Sunrise: ${sunriseTime}`;

  return sunrise;
};

const createSunsetElement = (sunsetTime) => {
  const sunset = document.createElement('p');
  sunset.classList.add('sunset');
  sunset.classList.add(astroClassName);
  sunset.textContent = `Sunset: ${sunsetTime}`;

  return sunset;
};

const createMoonriseElement = (moonriseTime) => {
  const moonrise = document.createElement('p');
  moonrise.classList.add('moonrise');
  moonrise.classList.add(astroClassName);
  moonrise.textContent = `Moonrise: ${moonriseTime}`;

  return moonrise;
};

const createMoonsetElement = (moonsetTime) => {
  const moonset = document.createElement('p');
  moonset.classList.add('moonset');
  moonset.classList.add(astroClassName);
  moonset.textContent = `Moonset: ${moonsetTime}`;

  return moonset;
};

const createMoonIllElement = (moonIllValue) => {
  const moonIll = document.createElement('p');
  moonIll.classList.add('moonIll');
  moonIll.classList.add(astroClassName);
  moonIll.textContent = `Moon Illumination: ${moonIllValue}`;

  return moonIll;
};

export {
  createSunriseElement,
  createSunsetElement,
  createMoonriseElement,
  createMoonsetElement,
  createMoonIllElement,
};

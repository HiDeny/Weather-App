/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/display/conditions.js":
/*!**********************************************!*\
  !*** ./src/components/display/conditions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createConditionsElement = weatherDescription => {
  const description = document.createElement('p');
  description.classList.add('description');
  description.classList.add('conditions');
  description.textContent = `It's ${weatherDescription}`;
  return description;
};

// const createIcon = async (iconURL) => {
//   const getIcon = await fetch(iconURL);

//   const icon = document.createElement('img');
//   icon.classList.add('icon');
//   icon.classList.add('conditions');
//   icon.src = getIcon.url;

//   return icon;
// };

// const createConditionsInfo = async ({ text, icon }) => {
//   const conditions = document.createElement('div');
//   conditions.classList.add('conditionsDiv');

//   conditions.append(createTitle());
//   conditions.append(createDescription(text));
//   conditions.append(await createIcon(icon));

//   return conditions;
// };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createConditionsElement);

/***/ }),

/***/ "./src/components/display/info.js":
/*!****************************************!*\
  !*** ./src/components/display/info.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNameElement: () => (/* binding */ createNameElement),
/* harmony export */   createRegionElement: () => (/* binding */ createRegionElement)
/* harmony export */ });
const createNameElement = name => {
  const nameElement = document.createElement('h2');
  nameElement.classList.add('name');
  nameElement.classList.add('location');
  nameElement.textContent = name;
  return nameElement;
};
const createRegionElement = region => {
  const regionElement = document.createElement('p');
  regionElement.classList.add('region');
  regionElement.classList.add('location');
  regionElement.textContent = region;
  return regionElement;
};

// const createCountryElement = (country) => {
//   const countryElement = document.createElement('p');
//   countryElement.classList.add('country');
//   countryElement.classList.add('location');
//   countryElement.textContent = country;

//   return countryElement;
// };

// const createLocationInfo = ({ name, region }) => {
//   const locationInfo = document.createElement('div');
//   locationInfo.classList.add('infoDiv');

//   locationInfo.append(createNameElement(name));
//   locationInfo.append(createRegionElement(region));
//   // locationInfo.append(createCountryElement(country));

//   return locationInfo;
// };



/***/ }),

/***/ "./src/components/display/temperature.js":
/*!***********************************************!*\
  !*** ./src/components/display/temperature.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCurrentElement: () => (/* binding */ createCurrentElement),
/* harmony export */   createFeelsLikeElement: () => (/* binding */ createFeelsLikeElement),
/* harmony export */   createUVIElement: () => (/* binding */ createUVIElement)
/* harmony export */ });
// const createTitle = () => {
//   const title = document.createElement('h3');
//   title.classList.add('title');
//   title.classList.add('temp');
//   title.textContent = 'Temperature';

//   return title;
// };

const createCurrentElement = currentTemp => {
  const current = document.createElement('h2');
  current.classList.add('current');
  current.classList.add('temp');
  current.textContent = `Current: ${currentTemp}°C`;
  return current;
};
const createFeelsLikeElement = feelsLikeTemp => {
  const gust = document.createElement('p');
  gust.classList.add('feelsLike');
  gust.classList.add('temp');
  gust.textContent = `Feels Like: ${feelsLikeTemp}°C`;
  return gust;
};
const createUVIElement = UVIndex => {
  const uvIndex = document.createElement('p');
  uvIndex.classList.add('uv');
  uvIndex.classList.add('temp');
  uvIndex.textContent = `UV: ${UVIndex}`;
  return uvIndex;
};

// const createTempInfo = (temp) => {
//   const { current, feel } = temp.c;
//   const { uv } = temp;

//   const tempInfo = document.createElement('div');
//   tempInfo.classList.add('tempDiv');

//   tempInfo.append(createTitle());
//   tempInfo.append(createCurrentElement(current));
//   tempInfo.append(createFeelsLikeElement(feel));
//   tempInfo.append(createUVIElement(uv));

//   return tempInfo;
// };



/***/ }),

/***/ "./src/components/display/weatherCard.js":
/*!***********************************************!*\
  !*** ./src/components/display/weatherCard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ "./src/components/display/info.js");
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperature */ "./src/components/display/temperature.js");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditions */ "./src/components/display/conditions.js");
/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wind */ "./src/components/display/wind.js");




const createComponent = (classGroup, className) => {
  const component = document.createElement('div');
  component.classList.add(classGroup);
  component.classList.add(className);
  return component;
};
const createDetailsSection = (feelsLikeTemp, uv, wind) => {
  const details = document.createElement('div');
  details.classList.add('detailsSection');
  const componentGroup = 'detailComp';
  const feelComp = createComponent(componentGroup, 'feelsLike');
  feelComp.append((0,_temperature__WEBPACK_IMPORTED_MODULE_1__.createFeelsLikeElement)(feelsLikeTemp));
  details.append(feelComp);

  // const sunComp = createComponent(componentGroup, 'sun');
  // createSunElement(sunCond);
  // details.append(sunComp);

  const uvComp = createComponent(componentGroup, 'uv');
  uvComp.append((0,_temperature__WEBPACK_IMPORTED_MODULE_1__.createUVIElement)(uv));
  details.append(uvComp);
  const windComp = createComponent(componentGroup, 'wind');
  windComp.append((0,_wind__WEBPACK_IMPORTED_MODULE_3__.createSpeedElement)(wind.speed.kph));
  windComp.append((0,_wind__WEBPACK_IMPORTED_MODULE_3__.createGustElement)(wind.gust.kph));
  windComp.append((0,_wind__WEBPACK_IMPORTED_MODULE_3__.createDirectionElement)(wind.dir));
  details.append(windComp);
  return details;
};
const createForecastSection = () => {
  // Hour forecast
  // Day forecast
};
const createTodaySection = _ref => {
  let {} = _ref;
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  const componentGroup = 'mainComp';
  const infoComp = createComponent(componentGroup, 'info');
  infoComp.append((0,_info__WEBPACK_IMPORTED_MODULE_0__.createNameElement)(location.name));
  infoComp.append((0,_info__WEBPACK_IMPORTED_MODULE_0__.createRegionElement)(location.region));
  mainDiv.append(infoComp);
  const currentComp = createComponent(componentGroup, 'current');
  currentComp.append((0,_temperature__WEBPACK_IMPORTED_MODULE_1__.createCurrentElement)(currentTemp));
  currentComp.append((0,_conditions__WEBPACK_IMPORTED_MODULE_2__["default"])(conditions));
  mainDiv.append(currentComp);
  return mainDiv;
};
const createInfoSection = _ref2 => {
  let {
    name,
    region
  } = _ref2;
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  const componentGroup = 'infoComp';
  const infoComp = createComponent(componentGroup, 'info');
  infoComp.append((0,_info__WEBPACK_IMPORTED_MODULE_0__.createNameElement)(name));
  infoComp.append((0,_info__WEBPACK_IMPORTED_MODULE_0__.createRegionElement)(region));
  infoDiv.append(infoComp);
  const currentComp = createComponent(componentGroup, 'current');
  infoDiv.append(currentComp);
  return infoDiv;
};
const createWeatherCard = async weatherData => {
  const {
    location,
    temp,
    wind,
    condition
  } = weatherData;
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');
  const info = createTodaySection(location);
  weatherCard.append(info);
  const today = createTodaySection(location, temp.current.c, condition);
  weatherCard.append(today);

  // const forecast = createForecastSection(day, week);
  // weatherCard.append(forecast);

  const details = createDetailsSection(temp.feel.c, temp.uv, wind);
  weatherCard.append(details);
  return weatherCard;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherCard);

/***/ }),

/***/ "./src/components/display/wind.js":
/*!****************************************!*\
  !*** ./src/components/display/wind.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDirectionElement: () => (/* binding */ createDirectionElement),
/* harmony export */   createGustElement: () => (/* binding */ createGustElement),
/* harmony export */   createSpeedElement: () => (/* binding */ createSpeedElement)
/* harmony export */ });
// const createTitle = () => {
//   const title = document.createElement('h3');
//   title.classList.add('title');
//   title.classList.add('wind');
//   title.textContent = 'Wind';

//   return title;
// };

const createSpeedElement = windSpeed => {
  const speed = document.createElement('p');
  speed.classList.add('speed');
  speed.classList.add('wind');
  speed.textContent = `Wind: ${windSpeed}`;
  return speed;
};
const createGustElement = windGust => {
  const gust = document.createElement('p');
  gust.classList.add('gust');
  gust.classList.add('wind');
  gust.textContent = `Gusts: ${windGust}`;
  return gust;
};
const createDirectionElement = windDirection => {
  const direction = document.createElement('p');
  direction.classList.add('direction');
  direction.classList.add('wind');
  direction.textContent = `Direction: ${windDirection}`;
  return direction;
};

// eslint-disable-next-line camelcase
// const createWindInfo = (wind) => {
//   const { speed, gust } = wind.kph;
//   const { dir } = wind;

// const windInfo = document.createElement('div');
// windInfo.classList.add('info');
// windInfo.classList.add('location');

// windInfo.append(createTitle());
//   windInfo.append(createSpeedElement(speed));
//   windInfo.append(createGustElement(gust));
//   windInfo.append(createDirectionElement(dir));

//   return windInfo;
// };



/***/ }),

/***/ "./src/components/searchForm.js":
/*!**************************************!*\
  !*** ./src/components/searchForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createSubmitBtn = () => {
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.id = 'submitBtn';
  submitBtn.textContent = 'Search!';
  return submitBtn;
};
const createSearchBar = () => {
  const label = document.createElement('label');
  label.for = 'searchBar';
  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.placeholder = 'City';
  searchBar.name = 'searchBar';
  searchBar.id = 'searchBar';
  label.append(searchBar);
  return label;
};
const createSearchForm = () => {
  const searchForm = document.createElement('form');
  const searchBar = createSearchBar();
  searchForm.append(searchBar);
  const submitBtn = createSubmitBtn();
  searchForm.append(submitBtn);
  return searchForm;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchForm);

/***/ }),

/***/ "./src/services/filterData.js":
/*!************************************!*\
  !*** ./src/services/filterData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable camelcase */

const getTodayWeather = weatherData => {
  const {
    temp_c,
    temp_f
  } = weatherData.current;
  const {
    maxtemp_c,
    maxtemp_f
  } = weatherData.forecast.forecastday[0].day;
  const {
    mintemp_c,
    mintemp_f
  } = weatherData.forecast.forecastday[0].day;
  const {
    condition
  } = weatherData.current;
  return {
    c: {
      current: temp_c,
      max: maxtemp_c,
      min: mintemp_c
    },
    f: {
      current: temp_f,
      max: maxtemp_f,
      min: mintemp_f
    },
    condition
  };
};
const getTemp = weatherData => {
  const {
    feelslike_c,
    feelslike_f,
    uv
  } = weatherData.current;
  return {
    feel: {
      c: feelslike_c,
      f: feelslike_f
    },
    uv
  };
};
const getWind = weatherData => {
  const {
    wind_kph,
    wind_mph,
    wind_dir
  } = weatherData.current;
  const {
    gust_kph,
    gust_mph
  } = weatherData.current;
  const {
    maxwind_kph,
    maxwind_mph
  } = weatherData.forecast.forecastday[0].day;
  return {
    kph: {
      speed: wind_kph,
      gust: gust_kph,
      max: maxwind_kph
    },
    mph: {
      speed: wind_mph,
      gust: gust_mph,
      max: maxwind_mph
    },
    wind_dir
  };
};
const getAstro = weatherData => {
  const {
    sunrise,
    sunset
  } = weatherData.forecast.forecastday[0].astro;
  const {
    moonrise,
    moonset
  } = weatherData.forecast.forecastday[0].astro;
  const {
    moon_illumination
  } = weatherData.forecast.forecastday[0].astro;
  return {
    sunrise,
    sunset,
    moonrise,
    moonset,
    moon_illumination
  };
};
const getDetails = weatherData => {
  const temp = getTemp(weatherData);
  const wind = getWind(weatherData);
  const astro = getAstro(weatherData);
  return {
    temp,
    wind,
    astro
  };
};
const parseHourlyForecast = weatherData => {
  const forecastDataHours = weatherData.forecast.forecastday[0].hour;
  const forecastHourly = {};
  forecastDataHours.forEach(hourData => {
    const {
      time,
      temp_c,
      temp_f,
      condition
    } = hourData;
    const hour = time.split(' ')[1];
    const hourWeather = {
      temp: {
        c: temp_c,
        f: temp_f
      },
      icon: condition.icon
    };
    forecastHourly[hour] = hourWeather;
  });
  return forecastHourly;
};
const parseDailyForecast = weatherData => {
  const forecastDaysData = weatherData.forecast.forecastday;
  const forecastDays = {};
  forecastDaysData.forEach(forecastDay => {
    const {
      date
    } = forecastDay;
    const {
      maxtemp_c,
      maxtemp_f
    } = forecastDay.day;
    const {
      mintemp_c,
      mintemp_f
    } = forecastDay.day;
    const {
      avgtemp_c,
      avgtemp_f
    } = forecastDay.day;
    const weatherDay = {
      date,
      temp: {
        c: {
          avgtemp_c,
          maxtemp_c,
          mintemp_c
        },
        f: {
          avgtemp_f,
          maxtemp_f,
          mintemp_f
        }
      }
    };
    forecastDays[date] = weatherDay;
  });
  return forecastDays;
};
const filterWeatherData = async weatherData => {
  console.log(weatherData);
  const {
    location
  } = weatherData;
  const locationInfo = {
    name: location.name,
    region: location.region
  };
  const weatherToday = getTodayWeather(weatherData);
  const details = getDetails(weatherData);
  const forecastHourly = parseHourlyForecast(weatherData);
  const forecastDays = parseDailyForecast(weatherData);
  return {
    location: locationInfo,
    weatherToday,
    details,
    forecastHourly,
    forecastDays
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterWeatherData);

/***/ }),

/***/ "./src/services/getData.js":
/*!*********************************!*\
  !*** ./src/services/getData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiKey = 'key=0ef9234ffd8140e0bcf145942232508';
const baseURL = 'https://api.weatherapi.com/v1';
const forecastWeather = '/forecast.json';
const forecastDays = 'days=7';

// const testLocation = 'Prague';

const getWeatherData = async location => {
  const weatherURL = `${baseURL}${forecastWeather}?${apiKey}&q=${location}&${forecastDays}`;
  // const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=0ef9234ffd8140e0bcf145942232508&q=London&days=3`;

  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    throw new Error(err);
  }
};

// getWeatherData('Cape Town').then(async (result) => {
//   console.log(result);
// });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);

/***/ }),

/***/ "./src/services/weatherapi.js":
/*!************************************!*\
  !*** ./src/services/weatherapi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/services/getData.js");
/* harmony import */ var _filterData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterData */ "./src/services/filterData.js");


const getWeather = async location => {
  const weatherData = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(location);
  const cleanData = await (0,_filterData__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
  console.log(cleanData);
  return cleanData;
};

// getWeather('Cape Town');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto;
}

.weatherCard {
  display: grid;
  grid-template-rows: 50% 20% 20%;
  width: 50rem;
  margin: auto;
  height: 100%;
  gap: 5%;
}

.mainComp.info {
  text-align: center;
}

.main {
  display: grid;
  grid-template-rows: 20% 70%;
  gap: 10%;
  align-items: center;
  justify-items: center;
}

.detailsSection {
  display: grid;
  grid-auto-columns: 10rem;
  grid-auto-flow: column;
  justify-content: space-evenly;
}

.detailComp {
  background: gainsboro;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

html {
  font-family: Helvetica;
}

#searchBar {
  padding: 3px 5px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,OAAO;AACT;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,QAAQ;EACR,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["body {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 5rem auto;\n}\n\n.weatherCard {\n  display: grid;\n  grid-template-rows: 50% 20% 20%;\n  width: 50rem;\n  margin: auto;\n  height: 100%;\n  gap: 5%;\n}\n\n.mainComp.info {\n  text-align: center;\n}\n\n.main {\n  display: grid;\n  grid-template-rows: 20% 70%;\n  gap: 10%;\n  align-items: center;\n  justify-items: center;\n}\n\n.detailsSection {\n  display: grid;\n  grid-auto-columns: 10rem;\n  grid-auto-flow: column;\n  justify-content: space-evenly;\n}\n\n.detailComp {\n  background: gainsboro;\n  border: 1px solid;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n}\n\nhtml {\n  font-family: Helvetica;\n}\n\n#searchBar {\n  padding: 3px 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _components_searchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/searchForm */ "./src/components/searchForm.js");
/* harmony import */ var _services_weatherapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/weatherapi */ "./src/services/weatherapi.js");
/* harmony import */ var _components_display_weatherCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/display/weatherCard */ "./src/components/display/weatherCard.js");



// import formController from './components/controlSearchForm';



// Credit
// Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
// <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

const body = document.querySelector('body');
const displayWeather = async searchResult => {
  const weatherData = await (0,_services_weatherapi__WEBPACK_IMPORTED_MODULE_3__["default"])(searchResult);
  const weatherCard = await (0,_components_display_weatherCard__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherData);
  body.append(weatherCard);
};
const search = () => {
  const searchForm = (0,_components_searchForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  body.append(searchForm);
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const {
      searchBar
    } = searchForm;
    displayWeather(searchBar.value);
  });
  // formController(searchForm);
  // return searchForm;
};

search();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxNQUFNSiwyRUFBaUIsQ0FBQ0MsV0FBVyxDQUFDO0VBRXhEMkYsSUFBSSxDQUFDN0csTUFBTSxDQUFDcUIsV0FBVyxDQUFDO0FBQzFCLENBQUM7QUFFRCxNQUFNNEYsTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDbkIsTUFBTXpFLFVBQVUsR0FBR0Qsa0VBQWdCLENBQUMsQ0FBQztFQUNyQ3NFLElBQUksQ0FBQzdHLE1BQU0sQ0FBQ3dDLFVBQVUsQ0FBQztFQUV2QkEsVUFBVSxDQUFDMEUsZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxLQUFLLElBQUs7SUFDL0NBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDdEIsTUFBTTtNQUFFL0U7SUFBVSxDQUFDLEdBQUdHLFVBQVU7SUFDaEN1RSxjQUFjLENBQUMxRSxTQUFTLENBQUNnRixLQUFLLENBQUM7RUFDakMsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTtBQUNGLENBQUM7O0FBRURKLE1BQU0sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvY29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L3dlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS93aW5kLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXJ2aWNlcy9maWx0ZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VydmljZXMvd2VhdGhlcmFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8zNDJmIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbmRpdGlvbnNFbGVtZW50ID0gKHdlYXRoZXJEZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9ucycpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBJdCdzICR7d2VhdGhlckRlc2NyaXB0aW9ufWA7XG5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcblxuLy8gY29uc3QgY3JlYXRlSWNvbiA9IGFzeW5jIChpY29uVVJMKSA9PiB7XG4vLyAgIGNvbnN0IGdldEljb24gPSBhd2FpdCBmZXRjaChpY29uVVJMKTtcblxuLy8gICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4vLyAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuLy8gICBpY29uLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbnMnKTtcbi8vICAgaWNvbi5zcmMgPSBnZXRJY29uLnVybDtcblxuLy8gICByZXR1cm4gaWNvbjtcbi8vIH07XG5cbi8vIGNvbnN0IGNyZWF0ZUNvbmRpdGlvbnNJbmZvID0gYXN5bmMgKHsgdGV4dCwgaWNvbiB9KSA9PiB7XG4vLyAgIGNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgY29uZGl0aW9ucy5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25zRGl2Jyk7XG5cbi8vICAgY29uZGl0aW9ucy5hcHBlbmQoY3JlYXRlVGl0bGUoKSk7XG4vLyAgIGNvbmRpdGlvbnMuYXBwZW5kKGNyZWF0ZURlc2NyaXB0aW9uKHRleHQpKTtcbi8vICAgY29uZGl0aW9ucy5hcHBlbmQoYXdhaXQgY3JlYXRlSWNvbihpY29uKSk7XG5cbi8vICAgcmV0dXJuIGNvbmRpdGlvbnM7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25kaXRpb25zRWxlbWVudDtcbiIsImNvbnN0IGNyZWF0ZU5hbWVFbGVtZW50ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcblxuICByZXR1cm4gbmFtZUVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVSZWdpb25FbGVtZW50ID0gKHJlZ2lvbikgPT4ge1xuICBjb25zdCByZWdpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByZWdpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JlZ2lvbicpO1xuICByZWdpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gIHJlZ2lvbkVsZW1lbnQudGV4dENvbnRlbnQgPSByZWdpb247XG5cbiAgcmV0dXJuIHJlZ2lvbkVsZW1lbnQ7XG59O1xuXG4vLyBjb25zdCBjcmVhdGVDb3VudHJ5RWxlbWVudCA9IChjb3VudHJ5KSA9PiB7XG4vLyAgIGNvbnN0IGNvdW50cnlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLy8gICBjb3VudHJ5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3VudHJ5Jyk7XG4vLyAgIGNvdW50cnlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4vLyAgIGNvdW50cnlFbGVtZW50LnRleHRDb250ZW50ID0gY291bnRyeTtcblxuLy8gICByZXR1cm4gY291bnRyeUVsZW1lbnQ7XG4vLyB9O1xuXG4vLyBjb25zdCBjcmVhdGVMb2NhdGlvbkluZm8gPSAoeyBuYW1lLCByZWdpb24gfSkgPT4ge1xuLy8gICBjb25zdCBsb2NhdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbG9jYXRpb25JbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm9EaXYnKTtcblxuLy8gICBsb2NhdGlvbkluZm8uYXBwZW5kKGNyZWF0ZU5hbWVFbGVtZW50KG5hbWUpKTtcbi8vICAgbG9jYXRpb25JbmZvLmFwcGVuZChjcmVhdGVSZWdpb25FbGVtZW50KHJlZ2lvbikpO1xuLy8gICAvLyBsb2NhdGlvbkluZm8uYXBwZW5kKGNyZWF0ZUNvdW50cnlFbGVtZW50KGNvdW50cnkpKTtcblxuLy8gICByZXR1cm4gbG9jYXRpb25JbmZvO1xuLy8gfTtcblxuZXhwb3J0IHsgY3JlYXRlTmFtZUVsZW1lbnQsIGNyZWF0ZVJlZ2lvbkVsZW1lbnQgfTtcbiIsIi8vIGNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xuLy8gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4vLyAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4vLyAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbi8vICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGVtcGVyYXR1cmUnO1xuXG4vLyAgIHJldHVybiB0aXRsZTtcbi8vIH07XG5cbmNvbnN0IGNyZWF0ZUN1cnJlbnRFbGVtZW50ID0gKGN1cnJlbnRUZW1wKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgY3VycmVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gIGN1cnJlbnQudGV4dENvbnRlbnQgPSBgQ3VycmVudDogJHtjdXJyZW50VGVtcH3CsENgO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuY29uc3QgY3JlYXRlRmVlbHNMaWtlRWxlbWVudCA9IChmZWVsc0xpa2VUZW1wKSA9PiB7XG4gIGNvbnN0IGd1c3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGd1c3QuY2xhc3NMaXN0LmFkZCgnZmVlbHNMaWtlJyk7XG4gIGd1c3QuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xuICBndXN0LnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmVlbHNMaWtlVGVtcH3CsENgO1xuXG4gIHJldHVybiBndXN0O1xufTtcblxuY29uc3QgY3JlYXRlVVZJRWxlbWVudCA9IChVVkluZGV4KSA9PiB7XG4gIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHV2SW5kZXguY2xhc3NMaXN0LmFkZCgndXYnKTtcbiAgdXZJbmRleC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gIHV2SW5kZXgudGV4dENvbnRlbnQgPSBgVVY6ICR7VVZJbmRleH1gO1xuXG4gIHJldHVybiB1dkluZGV4O1xufTtcblxuLy8gY29uc3QgY3JlYXRlVGVtcEluZm8gPSAodGVtcCkgPT4ge1xuLy8gICBjb25zdCB7IGN1cnJlbnQsIGZlZWwgfSA9IHRlbXAuYztcbi8vICAgY29uc3QgeyB1diB9ID0gdGVtcDtcblxuLy8gICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICB0ZW1wSW5mby5jbGFzc0xpc3QuYWRkKCd0ZW1wRGl2Jyk7XG5cbi8vICAgdGVtcEluZm8uYXBwZW5kKGNyZWF0ZVRpdGxlKCkpO1xuLy8gICB0ZW1wSW5mby5hcHBlbmQoY3JlYXRlQ3VycmVudEVsZW1lbnQoY3VycmVudCkpO1xuLy8gICB0ZW1wSW5mby5hcHBlbmQoY3JlYXRlRmVlbHNMaWtlRWxlbWVudChmZWVsKSk7XG4vLyAgIHRlbXBJbmZvLmFwcGVuZChjcmVhdGVVVklFbGVtZW50KHV2KSk7XG5cbi8vICAgcmV0dXJuIHRlbXBJbmZvO1xuLy8gfTtcblxuZXhwb3J0IHsgY3JlYXRlQ3VycmVudEVsZW1lbnQsIGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQsIGNyZWF0ZVVWSUVsZW1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZU5hbWVFbGVtZW50LCBjcmVhdGVSZWdpb25FbGVtZW50IH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7XG4gIGNyZWF0ZUN1cnJlbnRFbGVtZW50LFxuICBjcmVhdGVGZWVsc0xpa2VFbGVtZW50LFxuICBjcmVhdGVVVklFbGVtZW50LFxufSBmcm9tICcuL3RlbXBlcmF0dXJlJztcbmltcG9ydCBjcmVhdGVDb25kaXRpb25zRWxlbWVudCBmcm9tICcuL2NvbmRpdGlvbnMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlU3BlZWRFbGVtZW50LFxuICBjcmVhdGVHdXN0RWxlbWVudCxcbiAgY3JlYXRlRGlyZWN0aW9uRWxlbWVudCxcbn0gZnJvbSAnLi93aW5kJztcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50ID0gKGNsYXNzR3JvdXAsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NHcm91cCk7XG4gIGNvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZURldGFpbHNTZWN0aW9uID0gKGZlZWxzTGlrZVRlbXAsIHV2LCB3aW5kKSA9PiB7XG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzU2VjdGlvbicpO1xuXG4gIGNvbnN0IGNvbXBvbmVudEdyb3VwID0gJ2RldGFpbENvbXAnO1xuXG4gIGNvbnN0IGZlZWxDb21wID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEdyb3VwLCAnZmVlbHNMaWtlJyk7XG4gIGZlZWxDb21wLmFwcGVuZChjcmVhdGVGZWVsc0xpa2VFbGVtZW50KGZlZWxzTGlrZVRlbXApKTtcbiAgZGV0YWlscy5hcHBlbmQoZmVlbENvbXApO1xuXG4gIC8vIGNvbnN0IHN1bkNvbXAgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50R3JvdXAsICdzdW4nKTtcbiAgLy8gY3JlYXRlU3VuRWxlbWVudChzdW5Db25kKTtcbiAgLy8gZGV0YWlscy5hcHBlbmQoc3VuQ29tcCk7XG5cbiAgY29uc3QgdXZDb21wID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEdyb3VwLCAndXYnKTtcbiAgdXZDb21wLmFwcGVuZChjcmVhdGVVVklFbGVtZW50KHV2KSk7XG4gIGRldGFpbHMuYXBwZW5kKHV2Q29tcCk7XG5cbiAgY29uc3Qgd2luZENvbXAgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50R3JvdXAsICd3aW5kJyk7XG4gIHdpbmRDb21wLmFwcGVuZChjcmVhdGVTcGVlZEVsZW1lbnQod2luZC5zcGVlZC5rcGgpKTtcbiAgd2luZENvbXAuYXBwZW5kKGNyZWF0ZUd1c3RFbGVtZW50KHdpbmQuZ3VzdC5rcGgpKTtcbiAgd2luZENvbXAuYXBwZW5kKGNyZWF0ZURpcmVjdGlvbkVsZW1lbnQod2luZC5kaXIpKTtcbiAgZGV0YWlscy5hcHBlbmQod2luZENvbXApO1xuXG4gIHJldHVybiBkZXRhaWxzO1xufTtcblxuY29uc3QgY3JlYXRlRm9yZWNhc3RTZWN0aW9uID0gKCkgPT4ge1xuICAvLyBIb3VyIGZvcmVjYXN0XG4gIC8vIERheSBmb3JlY2FzdFxufTtcblxuY29uc3QgY3JlYXRlVG9kYXlTZWN0aW9uID0gKHt9KSA9PiB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgY29uc3QgY29tcG9uZW50R3JvdXAgPSAnbWFpbkNvbXAnO1xuXG4gIGNvbnN0IGluZm9Db21wID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEdyb3VwLCAnaW5mbycpO1xuICBpbmZvQ29tcC5hcHBlbmQoY3JlYXRlTmFtZUVsZW1lbnQobG9jYXRpb24ubmFtZSkpO1xuICBpbmZvQ29tcC5hcHBlbmQoY3JlYXRlUmVnaW9uRWxlbWVudChsb2NhdGlvbi5yZWdpb24pKTtcbiAgbWFpbkRpdi5hcHBlbmQoaW5mb0NvbXApO1xuXG4gIGNvbnN0IGN1cnJlbnRDb21wID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEdyb3VwLCAnY3VycmVudCcpO1xuICBjdXJyZW50Q29tcC5hcHBlbmQoY3JlYXRlQ3VycmVudEVsZW1lbnQoY3VycmVudFRlbXApKTtcbiAgY3VycmVudENvbXAuYXBwZW5kKGNyZWF0ZUNvbmRpdGlvbnNFbGVtZW50KGNvbmRpdGlvbnMpKTtcbiAgbWFpbkRpdi5hcHBlbmQoY3VycmVudENvbXApO1xuXG4gIHJldHVybiBtYWluRGl2O1xufTtcblxuY29uc3QgY3JlYXRlSW5mb1NlY3Rpb24gPSAoeyBuYW1lLCByZWdpb24gfSkgPT4ge1xuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gIGNvbnN0IGNvbXBvbmVudEdyb3VwID0gJ2luZm9Db21wJztcblxuICBjb25zdCBpbmZvQ29tcCA9IGNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRHcm91cCwgJ2luZm8nKTtcbiAgaW5mb0NvbXAuYXBwZW5kKGNyZWF0ZU5hbWVFbGVtZW50KG5hbWUpKTtcbiAgaW5mb0NvbXAuYXBwZW5kKGNyZWF0ZVJlZ2lvbkVsZW1lbnQocmVnaW9uKSk7XG4gIGluZm9EaXYuYXBwZW5kKGluZm9Db21wKTtcblxuICBjb25zdCBjdXJyZW50Q29tcCA9IGNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRHcm91cCwgJ2N1cnJlbnQnKTtcbiAgaW5mb0Rpdi5hcHBlbmQoY3VycmVudENvbXApO1xuXG4gIHJldHVybiBpbmZvRGl2O1xufTtcblxuY29uc3QgY3JlYXRlV2VhdGhlckNhcmQgPSBhc3luYyAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBsb2NhdGlvbiwgdGVtcCwgd2luZCwgY29uZGl0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckNhcmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlckNhcmQnKTtcblxuICBjb25zdCBpbmZvID0gY3JlYXRlVG9kYXlTZWN0aW9uKGxvY2F0aW9uKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKGluZm8pO1xuXG4gIGNvbnN0IHRvZGF5ID0gY3JlYXRlVG9kYXlTZWN0aW9uKGxvY2F0aW9uLCB0ZW1wLmN1cnJlbnQuYywgY29uZGl0aW9uKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKHRvZGF5KTtcblxuICAvLyBjb25zdCBmb3JlY2FzdCA9IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbihkYXksIHdlZWspO1xuICAvLyB3ZWF0aGVyQ2FyZC5hcHBlbmQoZm9yZWNhc3QpO1xuXG4gIGNvbnN0IGRldGFpbHMgPSBjcmVhdGVEZXRhaWxzU2VjdGlvbih0ZW1wLmZlZWwuYywgdGVtcC51diwgd2luZCk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZChkZXRhaWxzKTtcblxuICByZXR1cm4gd2VhdGhlckNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXZWF0aGVyQ2FyZDtcbiIsIi8vIGNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xuLy8gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4vLyAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4vLyAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3dpbmQnKTtcbi8vICAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2luZCc7XG5cbi8vICAgcmV0dXJuIHRpdGxlO1xuLy8gfTtcblxuY29uc3QgY3JlYXRlU3BlZWRFbGVtZW50ID0gKHdpbmRTcGVlZCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnc3BlZWQnKTtcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnd2luZCcpO1xuICBzcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dpbmRTcGVlZH1gO1xuXG4gIHJldHVybiBzcGVlZDtcbn07XG5jb25zdCBjcmVhdGVHdXN0RWxlbWVudCA9ICh3aW5kR3VzdCkgPT4ge1xuICBjb25zdCBndXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndXN0LmNsYXNzTGlzdC5hZGQoJ2d1c3QnKTtcbiAgZ3VzdC5jbGFzc0xpc3QuYWRkKCd3aW5kJyk7XG4gIGd1c3QudGV4dENvbnRlbnQgPSBgR3VzdHM6ICR7d2luZEd1c3R9YDtcblxuICByZXR1cm4gZ3VzdDtcbn07XG5jb25zdCBjcmVhdGVEaXJlY3Rpb25FbGVtZW50ID0gKHdpbmREaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGlyZWN0aW9uJyk7XG4gIGRpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKCd3aW5kJyk7XG4gIGRpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBEaXJlY3Rpb246ICR7d2luZERpcmVjdGlvbn1gO1xuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4vLyBjb25zdCBjcmVhdGVXaW5kSW5mbyA9ICh3aW5kKSA9PiB7XG4vLyAgIGNvbnN0IHsgc3BlZWQsIGd1c3QgfSA9IHdpbmQua3BoO1xuLy8gICBjb25zdCB7IGRpciB9ID0gd2luZDtcblxuLy8gY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIHdpbmRJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbi8vIHdpbmRJbmZvLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG5cbi8vIHdpbmRJbmZvLmFwcGVuZChjcmVhdGVUaXRsZSgpKTtcbi8vICAgd2luZEluZm8uYXBwZW5kKGNyZWF0ZVNwZWVkRWxlbWVudChzcGVlZCkpO1xuLy8gICB3aW5kSW5mby5hcHBlbmQoY3JlYXRlR3VzdEVsZW1lbnQoZ3VzdCkpO1xuLy8gICB3aW5kSW5mby5hcHBlbmQoY3JlYXRlRGlyZWN0aW9uRWxlbWVudChkaXIpKTtcblxuLy8gICByZXR1cm4gd2luZEluZm87XG4vLyB9O1xuXG5leHBvcnQgeyBjcmVhdGVEaXJlY3Rpb25FbGVtZW50LCBjcmVhdGVTcGVlZEVsZW1lbnQsIGNyZWF0ZUd1c3RFbGVtZW50IH07XG4iLCJjb25zdCBjcmVhdGVTdWJtaXRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0QnRuJztcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NlYXJjaCEnO1xuXG4gIHJldHVybiBzdWJtaXRCdG47XG59O1xuXG5jb25zdCBjcmVhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuZm9yID0gJ3NlYXJjaEJhcic7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQmFyLnR5cGUgPSAndGV4dCc7XG4gIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICdDaXR5JztcbiAgc2VhcmNoQmFyLm5hbWUgPSAnc2VhcmNoQmFyJztcbiAgc2VhcmNoQmFyLmlkID0gJ3NlYXJjaEJhcic7XG5cbiAgbGFiZWwuYXBwZW5kKHNlYXJjaEJhcik7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gY3JlYXRlU2VhcmNoQmFyKCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kKHNlYXJjaEJhcik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlU3VibWl0QnRuKCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHNlYXJjaEZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hGb3JtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbmNvbnN0IGdldFRvZGF5V2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHRlbXBfYywgdGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IG1heHRlbXBfYywgbWF4dGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIGNvbnN0IHsgbWludGVtcF9jLCBtaW50ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgY29uc3QgeyBjb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHJldHVybiB7XG4gICAgYzogeyBjdXJyZW50OiB0ZW1wX2MsIG1heDogbWF4dGVtcF9jLCBtaW46IG1pbnRlbXBfYyB9LFxuICAgIGY6IHsgY3VycmVudDogdGVtcF9mLCBtYXg6IG1heHRlbXBfZiwgbWluOiBtaW50ZW1wX2YgfSxcbiAgICBjb25kaXRpb24sXG4gIH07XG59O1xuXG5jb25zdCBnZXRUZW1wID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgZmVlbHNsaWtlX2MsIGZlZWxzbGlrZV9mLCB1diB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgcmV0dXJuIHsgZmVlbDogeyBjOiBmZWVsc2xpa2VfYywgZjogZmVlbHNsaWtlX2YgfSwgdXYgfTtcbn07XG5cbmNvbnN0IGdldFdpbmQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyB3aW5kX2twaCwgd2luZF9tcGgsIHdpbmRfZGlyIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IGd1c3Rfa3BoLCBndXN0X21waCB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgY29uc3QgeyBtYXh3aW5kX2twaCwgbWF4d2luZF9tcGggfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgcmV0dXJuIHtcbiAgICBrcGg6IHsgc3BlZWQ6IHdpbmRfa3BoLCBndXN0OiBndXN0X2twaCwgbWF4OiBtYXh3aW5kX2twaCB9LFxuICAgIG1waDogeyBzcGVlZDogd2luZF9tcGgsIGd1c3Q6IGd1c3RfbXBoLCBtYXg6IG1heHdpbmRfbXBoIH0sXG4gICAgd2luZF9kaXIsXG4gIH07XG59O1xuY29uc3QgZ2V0QXN0cm8gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBzdW5yaXNlLCBzdW5zZXQgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCB7IG1vb25yaXNlLCBtb29uc2V0IH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgeyBtb29uX2lsbHVtaW5hdGlvbiB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIHJldHVybiB7IHN1bnJpc2UsIHN1bnNldCwgbW9vbnJpc2UsIG1vb25zZXQsIG1vb25faWxsdW1pbmF0aW9uIH07XG59O1xuXG5jb25zdCBnZXREZXRhaWxzID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHRlbXAgPSBnZXRUZW1wKHdlYXRoZXJEYXRhKTtcbiAgY29uc3Qgd2luZCA9IGdldFdpbmQod2VhdGhlckRhdGEpO1xuICBjb25zdCBhc3RybyA9IGdldEFzdHJvKHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4geyB0ZW1wLCB3aW5kLCBhc3RybyB9O1xufTtcbmNvbnN0IHBhcnNlSG91cmx5Rm9yZWNhc3QgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgZm9yZWNhc3REYXRhSG91cnMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IHt9O1xuXG4gIGZvcmVjYXN0RGF0YUhvdXJzLmZvckVhY2goKGhvdXJEYXRhKSA9PiB7XG4gICAgY29uc3QgeyB0aW1lLCB0ZW1wX2MsIHRlbXBfZiwgY29uZGl0aW9uIH0gPSBob3VyRGF0YTtcbiAgICBjb25zdCBob3VyID0gdGltZS5zcGxpdCgnICcpWzFdO1xuXG4gICAgY29uc3QgaG91cldlYXRoZXIgPSB7XG4gICAgICB0ZW1wOiB7IGM6IHRlbXBfYywgZjogdGVtcF9mIH0sXG4gICAgICBpY29uOiBjb25kaXRpb24uaWNvbixcbiAgICB9O1xuXG4gICAgZm9yZWNhc3RIb3VybHlbaG91cl0gPSBob3VyV2VhdGhlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0SG91cmx5O1xufTtcbmNvbnN0IHBhcnNlRGFpbHlGb3JlY2FzdCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdERheXNEYXRhID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHt9O1xuXG4gIGZvcmVjYXN0RGF5c0RhdGEuZm9yRWFjaCgoZm9yZWNhc3REYXkpID0+IHtcbiAgICBjb25zdCB7IGRhdGUgfSA9IGZvcmVjYXN0RGF5O1xuICAgIGNvbnN0IHsgbWF4dGVtcF9jLCBtYXh0ZW1wX2YgfSA9IGZvcmVjYXN0RGF5LmRheTtcbiAgICBjb25zdCB7IG1pbnRlbXBfYywgbWludGVtcF9mIH0gPSBmb3JlY2FzdERheS5kYXk7XG4gICAgY29uc3QgeyBhdmd0ZW1wX2MsIGF2Z3RlbXBfZiB9ID0gZm9yZWNhc3REYXkuZGF5O1xuXG4gICAgY29uc3Qgd2VhdGhlckRheSA9IHtcbiAgICAgIGRhdGUsXG4gICAgICB0ZW1wOiB7XG4gICAgICAgIGM6IHsgYXZndGVtcF9jLCBtYXh0ZW1wX2MsIG1pbnRlbXBfYyB9LFxuICAgICAgICBmOiB7IGF2Z3RlbXBfZiwgbWF4dGVtcF9mLCBtaW50ZW1wX2YgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZvcmVjYXN0RGF5c1tkYXRlXSA9IHdlYXRoZXJEYXk7XG4gIH0pO1xuXG4gIHJldHVybiBmb3JlY2FzdERheXM7XG59O1xuXG5jb25zdCBmaWx0ZXJXZWF0aGVyRGF0YSA9IGFzeW5jICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuXG4gIGNvbnN0IGxvY2F0aW9uSW5mbyA9IHsgbmFtZTogbG9jYXRpb24ubmFtZSwgcmVnaW9uOiBsb2NhdGlvbi5yZWdpb24gfTtcbiAgY29uc3Qgd2VhdGhlclRvZGF5ID0gZ2V0VG9kYXlXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZGV0YWlscyA9IGdldERldGFpbHMod2VhdGhlckRhdGEpO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IHBhcnNlSG91cmx5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICBjb25zdCBmb3JlY2FzdERheXMgPSBwYXJzZURhaWx5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IGxvY2F0aW9uSW5mbyxcbiAgICB3ZWF0aGVyVG9kYXksXG4gICAgZGV0YWlscyxcbiAgICBmb3JlY2FzdEhvdXJseSxcbiAgICBmb3JlY2FzdERheXMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJXZWF0aGVyRGF0YTtcbiIsImNvbnN0IGFwaUtleSA9ICdrZXk9MGVmOTIzNGZmZDgxNDBlMGJjZjE0NTk0MjIzMjUwOCc7XG5jb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJztcblxuY29uc3QgZm9yZWNhc3RXZWF0aGVyID0gJy9mb3JlY2FzdC5qc29uJztcbmNvbnN0IGZvcmVjYXN0RGF5cyA9ICdkYXlzPTcnO1xuXG4vLyBjb25zdCB0ZXN0TG9jYXRpb24gPSAnUHJhZ3VlJztcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlclVSTCA9IGAke2Jhc2VVUkx9JHtmb3JlY2FzdFdlYXRoZXJ9PyR7YXBpS2V5fSZxPSR7bG9jYXRpb259JiR7Zm9yZWNhc3REYXlzfWA7XG4gIC8vIGNvbnN0IHdlYXRoZXJVUkwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wZWY5MjM0ZmZkODE0MGUwYmNmMTQ1OTQyMjMyNTA4JnE9TG9uZG9uJmRheXM9M2A7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVVJMKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG59O1xuXG4vLyBnZXRXZWF0aGVyRGF0YSgnQ2FwZSBUb3duJykudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCBmaWx0ZXJXZWF0aGVyRGF0YSBmcm9tICcuL2ZpbHRlckRhdGEnO1xuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICBjb25zdCBjbGVhbkRhdGEgPSBhd2FpdCBmaWx0ZXJXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKGNsZWFuRGF0YSk7XG4gIHJldHVybiBjbGVhbkRhdGE7XG59O1xuXG4vLyBnZXRXZWF0aGVyKCdDYXBlIFRvd24nKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0bztcbn1cblxuLndlYXRoZXJDYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgMjAlIDIwJTtcbiAgd2lkdGg6IDUwcmVtO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZ2FwOiA1JTtcbn1cblxuLm1haW5Db21wLmluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNzAlO1xuICBnYXA6IDEwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uZGV0YWlsc1NlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tY29sdW1uczogMTByZW07XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZGV0YWlsQ29tcCB7XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cblxuI3NlYXJjaEJhciB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvO1xcbn1cXG5cXG4ud2VhdGhlckNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDIwJSAyMCU7XFxuICB3aWR0aDogNTByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG4ubWFpbkNvbXAuaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA3MCU7XFxuICBnYXA6IDEwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxzU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZGV0YWlsQ29tcCB7XFxuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbn1cXG5cXG4jc2VhcmNoQmFyIHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5cbmltcG9ydCBjcmVhdGVTZWFyY2hGb3JtIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2hGb3JtJztcbi8vIGltcG9ydCBmb3JtQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbFNlYXJjaEZvcm0nO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9zZXJ2aWNlcy93ZWF0aGVyYXBpJztcbmltcG9ydCBjcmVhdGVXZWF0aGVyQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS93ZWF0aGVyQ2FyZCc7XG5cbi8vIENyZWRpdFxuLy8gUG93ZXJlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXCIgdGl0bGU9XCJGcmVlIFdlYXRoZXIgQVBJXCI+V2VhdGhlckFQSS5jb208L2E+XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXCIgdGl0bGU9XCJGcmVlIFdlYXRoZXIgQVBJXCI+PGltZyBzcmM9Jy8vY2RuLndlYXRoZXJhcGkuY29tL3Y0L2ltYWdlcy93ZWF0aGVyYXBpX2xvZ28ucG5nJyBhbHQ9XCJXZWF0aGVyIGRhdGEgYnkgV2VhdGhlckFQSS5jb21cIiBib3JkZXI9XCIwXCI+PC9hPlxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlciA9IGFzeW5jIChzZWFyY2hSZXN1bHQpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaFJlc3VsdCk7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gYXdhaXQgY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xuXG4gIGJvZHkuYXBwZW5kKHdlYXRoZXJDYXJkKTtcbn07XG5cbmNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGNyZWF0ZVNlYXJjaEZvcm0oKTtcbiAgYm9keS5hcHBlbmQoc2VhcmNoRm9ybSk7XG5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgc2VhcmNoQmFyIH0gPSBzZWFyY2hGb3JtO1xuICAgIGRpc3BsYXlXZWF0aGVyKHNlYXJjaEJhci52YWx1ZSk7XG4gIH0pO1xuICAvLyBmb3JtQ29udHJvbGxlcihzZWFyY2hGb3JtKTtcbiAgLy8gcmV0dXJuIHNlYXJjaEZvcm07XG59O1xuXG5zZWFyY2goKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb25kaXRpb25zRWxlbWVudCIsIndlYXRoZXJEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJjcmVhdGVOYW1lRWxlbWVudCIsIm5hbWUiLCJuYW1lRWxlbWVudCIsImNyZWF0ZVJlZ2lvbkVsZW1lbnQiLCJyZWdpb24iLCJyZWdpb25FbGVtZW50IiwiY3JlYXRlQ3VycmVudEVsZW1lbnQiLCJjdXJyZW50VGVtcCIsImN1cnJlbnQiLCJjcmVhdGVGZWVsc0xpa2VFbGVtZW50IiwiZmVlbHNMaWtlVGVtcCIsImd1c3QiLCJjcmVhdGVVVklFbGVtZW50IiwiVVZJbmRleCIsInV2SW5kZXgiLCJjcmVhdGVTcGVlZEVsZW1lbnQiLCJjcmVhdGVHdXN0RWxlbWVudCIsImNyZWF0ZURpcmVjdGlvbkVsZW1lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjbGFzc0dyb3VwIiwiY2xhc3NOYW1lIiwiY29tcG9uZW50IiwiY3JlYXRlRGV0YWlsc1NlY3Rpb24iLCJ1diIsIndpbmQiLCJkZXRhaWxzIiwiY29tcG9uZW50R3JvdXAiLCJmZWVsQ29tcCIsImFwcGVuZCIsInV2Q29tcCIsIndpbmRDb21wIiwic3BlZWQiLCJrcGgiLCJkaXIiLCJjcmVhdGVGb3JlY2FzdFNlY3Rpb24iLCJjcmVhdGVUb2RheVNlY3Rpb24iLCJfcmVmIiwibWFpbkRpdiIsImluZm9Db21wIiwibG9jYXRpb24iLCJjdXJyZW50Q29tcCIsImNvbmRpdGlvbnMiLCJjcmVhdGVJbmZvU2VjdGlvbiIsIl9yZWYyIiwiaW5mb0RpdiIsImNyZWF0ZVdlYXRoZXJDYXJkIiwid2VhdGhlckRhdGEiLCJ0ZW1wIiwiY29uZGl0aW9uIiwid2VhdGhlckNhcmQiLCJpbmZvIiwidG9kYXkiLCJjIiwiZmVlbCIsIndpbmRTcGVlZCIsIndpbmRHdXN0Iiwid2luZERpcmVjdGlvbiIsImRpcmVjdGlvbiIsImNyZWF0ZVN1Ym1pdEJ0biIsInN1Ym1pdEJ0biIsInR5cGUiLCJpZCIsImNyZWF0ZVNlYXJjaEJhciIsImxhYmVsIiwiZm9yIiwic2VhcmNoQmFyIiwicGxhY2Vob2xkZXIiLCJjcmVhdGVTZWFyY2hGb3JtIiwic2VhcmNoRm9ybSIsImdldFRvZGF5V2VhdGhlciIsInRlbXBfYyIsInRlbXBfZiIsIm1heHRlbXBfYyIsIm1heHRlbXBfZiIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJtaW50ZW1wX2MiLCJtaW50ZW1wX2YiLCJtYXgiLCJtaW4iLCJmIiwiZ2V0VGVtcCIsImZlZWxzbGlrZV9jIiwiZmVlbHNsaWtlX2YiLCJnZXRXaW5kIiwid2luZF9rcGgiLCJ3aW5kX21waCIsIndpbmRfZGlyIiwiZ3VzdF9rcGgiLCJndXN0X21waCIsIm1heHdpbmRfa3BoIiwibWF4d2luZF9tcGgiLCJtcGgiLCJnZXRBc3RybyIsInN1bnJpc2UiLCJzdW5zZXQiLCJhc3RybyIsIm1vb25yaXNlIiwibW9vbnNldCIsIm1vb25faWxsdW1pbmF0aW9uIiwiZ2V0RGV0YWlscyIsInBhcnNlSG91cmx5Rm9yZWNhc3QiLCJmb3JlY2FzdERhdGFIb3VycyIsImhvdXIiLCJmb3JlY2FzdEhvdXJseSIsImZvckVhY2giLCJob3VyRGF0YSIsInRpbWUiLCJzcGxpdCIsImhvdXJXZWF0aGVyIiwiaWNvbiIsInBhcnNlRGFpbHlGb3JlY2FzdCIsImZvcmVjYXN0RGF5c0RhdGEiLCJmb3JlY2FzdERheXMiLCJmb3JlY2FzdERheSIsImRhdGUiLCJhdmd0ZW1wX2MiLCJhdmd0ZW1wX2YiLCJ3ZWF0aGVyRGF5IiwiZmlsdGVyV2VhdGhlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb25JbmZvIiwid2VhdGhlclRvZGF5IiwiYXBpS2V5IiwiYmFzZVVSTCIsImZvcmVjYXN0V2VhdGhlciIsImdldFdlYXRoZXJEYXRhIiwid2VhdGhlclVSTCIsIndlYXRoZXJSZXNwb25zZSIsImZldGNoIiwianNvbiIsImVyciIsIkVycm9yIiwiZ2V0V2VhdGhlciIsImNsZWFuRGF0YSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheVdlYXRoZXIiLCJzZWFyY2hSZXN1bHQiLCJzZWFyY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony export */   createMaxTempElement: () => (/* binding */ createMaxTempElement),
/* harmony export */   createMinTempElement: () => (/* binding */ createMinTempElement),
/* harmony export */   createUVIElement: () => (/* binding */ createUVIElement)
/* harmony export */ });
const tempClassName = 'temp';
const createCurrentElement = currentTemp => {
  const current = document.createElement('h2');
  current.classList.add('current');
  current.classList.add(tempClassName);
  current.textContent = `Current: ${currentTemp}°C`;
  return current;
};
const createFeelsLikeElement = feelsLikeTemp => {
  const feelsLike = document.createElement('p');
  feelsLike.classList.add('feelsLike');
  feelsLike.classList.add(tempClassName);
  feelsLike.textContent = `Feels Like: ${feelsLikeTemp}°C`;
  return feelsLike;
};
const createMinTempElement = minTempValue => {
  const minTemp = document.createElement('p');
  minTemp.classList.add('minTemp');
  minTemp.classList.add(tempClassName);
  minTemp.textContent = `Min.: ${minTempValue}°C`;
  return minTemp;
};
const createMaxTempElement = maxTempValue => {
  const maxTemp = document.createElement('p');
  maxTemp.classList.add('maxTemp');
  maxTemp.classList.add(tempClassName);
  maxTemp.textContent = `Feels Like: ${maxTempValue}°C`;
  return maxTemp;
};
const createUVIElement = UVIndex => {
  const uvIndex = document.createElement('p');
  uvIndex.classList.add('uv');
  uvIndex.classList.add(tempClassName);
  uvIndex.textContent = `UV: ${UVIndex}`;
  return uvIndex;
};


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
/* harmony export */   createMaxSpeedElement: () => (/* binding */ createMaxSpeedElement),
/* harmony export */   createMinSpeedElement: () => (/* binding */ createMinSpeedElement),
/* harmony export */   createSpeedElement: () => (/* binding */ createSpeedElement)
/* harmony export */ });
const windClassName = 'wind';
const createSpeedElement = windSpeed => {
  const speed = document.createElement('p');
  speed.classList.add('speed');
  speed.classList.add(windClassName);
  speed.textContent = `Wind: ${windSpeed}`;
  return speed;
};
const createGustElement = windGust => {
  const gust = document.createElement('p');
  gust.classList.add('gust');
  gust.classList.add(windClassName);
  gust.textContent = `Gusts: ${windGust}`;
  return gust;
};
const createMaxSpeedElement = maxSpeed => {
  const maxWind = document.createElement('p');
  maxWind.classList.add('maxWind');
  maxWind.classList.add(windClassName);
  maxWind.textContent = `Max Speed: ${maxSpeed}`;
  return maxWind;
};
const createMinSpeedElement = minSpeed => {
  const minWind = document.createElement('p');
  minWind.classList.add('minWind');
  minWind.classList.add(windClassName);
  minWind.textContent = `Min Speed: ${minSpeed}`;
  return minWind;
};
const createDirectionElement = windDirection => {
  const direction = document.createElement('p');
  direction.classList.add('direction');
  direction.classList.add(windClassName);
  direction.textContent = `Direction: ${windDirection}`;
  return direction;
};


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
getWeatherData('Cape Town').then(async result => {
  console.log(result);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsTUFBTWtHLGdFQUFVLENBQUNLLFlBQVksQ0FBQztFQUNsRCxNQUFNcEcsV0FBVyxHQUFHLE1BQU1KLDJFQUFpQixDQUFDQyxXQUFXLENBQUM7RUFFeERvRyxJQUFJLENBQUN2SCxNQUFNLENBQUNzQixXQUFXLENBQUM7QUFDMUIsQ0FBQztBQUVELE1BQU1xRyxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUNuQixNQUFNM0UsVUFBVSxHQUFHRCxrRUFBZ0IsQ0FBQyxDQUFDO0VBQ3JDd0UsSUFBSSxDQUFDdkgsTUFBTSxDQUFDZ0QsVUFBVSxDQUFDO0VBRXZCQSxVQUFVLENBQUM0RSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUdDLEtBQUssSUFBSztJQUMvQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QixNQUFNO01BQUVqRjtJQUFVLENBQUMsR0FBR0csVUFBVTtJQUNoQ3lFLGNBQWMsQ0FBQzVFLFNBQVMsQ0FBQ2tGLEtBQUssQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFDRjtFQUNBO0FBQ0YsQ0FBQzs7QUFFREosTUFBTSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jb25kaXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS90ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvd2VhdGhlckNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L3dpbmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hGb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL2ZpbHRlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VydmljZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXJ2aWNlcy93ZWF0aGVyYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzM0MmYiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29uZGl0aW9uc0VsZW1lbnQgPSAod2VhdGhlckRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25zJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYEl0J3MgJHt3ZWF0aGVyRGVzY3JpcHRpb259YDtcblxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG4vLyBjb25zdCBjcmVhdGVJY29uID0gYXN5bmMgKGljb25VUkwpID0+IHtcbi8vICAgY29uc3QgZ2V0SWNvbiA9IGF3YWl0IGZldGNoKGljb25VUkwpO1xuXG4vLyAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbi8vICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4vLyAgIGljb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9ucycpO1xuLy8gICBpY29uLnNyYyA9IGdldEljb24udXJsO1xuXG4vLyAgIHJldHVybiBpY29uO1xuLy8gfTtcblxuLy8gY29uc3QgY3JlYXRlQ29uZGl0aW9uc0luZm8gPSBhc3luYyAoeyB0ZXh0LCBpY29uIH0pID0+IHtcbi8vICAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBjb25kaXRpb25zLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbnNEaXYnKTtcblxuLy8gICBjb25kaXRpb25zLmFwcGVuZChjcmVhdGVUaXRsZSgpKTtcbi8vICAgY29uZGl0aW9ucy5hcHBlbmQoY3JlYXRlRGVzY3JpcHRpb24odGV4dCkpO1xuLy8gICBjb25kaXRpb25zLmFwcGVuZChhd2FpdCBjcmVhdGVJY29uKGljb24pKTtcblxuLy8gICByZXR1cm4gY29uZGl0aW9ucztcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbmRpdGlvbnNFbGVtZW50O1xuIiwiY29uc3QgY3JlYXRlTmFtZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIHJldHVybiBuYW1lRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlZ2lvbkVsZW1lbnQgPSAocmVnaW9uKSA9PiB7XG4gIGNvbnN0IHJlZ2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlZ2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVnaW9uJyk7XG4gIHJlZ2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgcmVnaW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHJlZ2lvbjtcblxuICByZXR1cm4gcmVnaW9uRWxlbWVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5hbWVFbGVtZW50LCBjcmVhdGVSZWdpb25FbGVtZW50IH07XG4iLCJjb25zdCB0ZW1wQ2xhc3NOYW1lID0gJ3RlbXAnO1xuXG5jb25zdCBjcmVhdGVDdXJyZW50RWxlbWVudCA9IChjdXJyZW50VGVtcCkgPT4ge1xuICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY3VycmVudC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gIGN1cnJlbnQuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgY3VycmVudC50ZXh0Q29udGVudCA9IGBDdXJyZW50OiAke2N1cnJlbnRUZW1wfcKwQ2A7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVGZWVsc0xpa2VFbGVtZW50ID0gKGZlZWxzTGlrZVRlbXApID0+IHtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZCgnZmVlbHNMaWtlJyk7XG4gIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKHRlbXBDbGFzc05hbWUpO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmZWVsc0xpa2VUZW1wfcKwQ2A7XG5cbiAgcmV0dXJuIGZlZWxzTGlrZTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1pblRlbXBFbGVtZW50ID0gKG1pblRlbXBWYWx1ZSkgPT4ge1xuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ21pblRlbXAnKTtcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKHRlbXBDbGFzc05hbWUpO1xuICBtaW5UZW1wLnRleHRDb250ZW50ID0gYE1pbi46ICR7bWluVGVtcFZhbHVlfcKwQ2A7XG5cbiAgcmV0dXJuIG1pblRlbXA7XG59O1xuXG5jb25zdCBjcmVhdGVNYXhUZW1wRWxlbWVudCA9IChtYXhUZW1wVmFsdWUpID0+IHtcbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdtYXhUZW1wJyk7XG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke21heFRlbXBWYWx1ZX3CsENgO1xuXG4gIHJldHVybiBtYXhUZW1wO1xufTtcblxuY29uc3QgY3JlYXRlVVZJRWxlbWVudCA9IChVVkluZGV4KSA9PiB7XG4gIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHV2SW5kZXguY2xhc3NMaXN0LmFkZCgndXYnKTtcbiAgdXZJbmRleC5jbGFzc0xpc3QuYWRkKHRlbXBDbGFzc05hbWUpO1xuICB1dkluZGV4LnRleHRDb250ZW50ID0gYFVWOiAke1VWSW5kZXh9YDtcblxuICByZXR1cm4gdXZJbmRleDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUN1cnJlbnRFbGVtZW50LFxuICBjcmVhdGVNYXhUZW1wRWxlbWVudCxcbiAgY3JlYXRlTWluVGVtcEVsZW1lbnQsXG4gIGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQsXG4gIGNyZWF0ZVVWSUVsZW1lbnQsXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlTmFtZUVsZW1lbnQsIGNyZWF0ZVJlZ2lvbkVsZW1lbnQgfSBmcm9tICcuL2luZm8nO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ3VycmVudEVsZW1lbnQsXG4gIGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQsXG4gIGNyZWF0ZVVWSUVsZW1lbnQsXG59IGZyb20gJy4vdGVtcGVyYXR1cmUnO1xuaW1wb3J0IGNyZWF0ZUNvbmRpdGlvbnNFbGVtZW50IGZyb20gJy4vY29uZGl0aW9ucyc7XG5pbXBvcnQge1xuICBjcmVhdGVTcGVlZEVsZW1lbnQsXG4gIGNyZWF0ZUd1c3RFbGVtZW50LFxuICBjcmVhdGVEaXJlY3Rpb25FbGVtZW50LFxufSBmcm9tICcuL3dpbmQnO1xuXG5jb25zdCBjcmVhdGVDb21wb25lbnQgPSAoY2xhc3NHcm91cCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21wb25lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0dyb3VwKTtcbiAgY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuY29uc3QgY3JlYXRlRGV0YWlsc1NlY3Rpb24gPSAoZmVlbHNMaWtlVGVtcCwgdXYsIHdpbmQpID0+IHtcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNTZWN0aW9uJyk7XG5cbiAgY29uc3QgY29tcG9uZW50R3JvdXAgPSAnZGV0YWlsQ29tcCc7XG5cbiAgY29uc3QgZmVlbENvbXAgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50R3JvdXAsICdmZWVsc0xpa2UnKTtcbiAgZmVlbENvbXAuYXBwZW5kKGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQoZmVlbHNMaWtlVGVtcCkpO1xuICBkZXRhaWxzLmFwcGVuZChmZWVsQ29tcCk7XG5cbiAgLy8gY29uc3Qgc3VuQ29tcCA9IGNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRHcm91cCwgJ3N1bicpO1xuICAvLyBjcmVhdGVTdW5FbGVtZW50KHN1bkNvbmQpO1xuICAvLyBkZXRhaWxzLmFwcGVuZChzdW5Db21wKTtcblxuICBjb25zdCB1dkNvbXAgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50R3JvdXAsICd1dicpO1xuICB1dkNvbXAuYXBwZW5kKGNyZWF0ZVVWSUVsZW1lbnQodXYpKTtcbiAgZGV0YWlscy5hcHBlbmQodXZDb21wKTtcblxuICBjb25zdCB3aW5kQ29tcCA9IGNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRHcm91cCwgJ3dpbmQnKTtcbiAgd2luZENvbXAuYXBwZW5kKGNyZWF0ZVNwZWVkRWxlbWVudCh3aW5kLnNwZWVkLmtwaCkpO1xuICB3aW5kQ29tcC5hcHBlbmQoY3JlYXRlR3VzdEVsZW1lbnQod2luZC5ndXN0LmtwaCkpO1xuICB3aW5kQ29tcC5hcHBlbmQoY3JlYXRlRGlyZWN0aW9uRWxlbWVudCh3aW5kLmRpcikpO1xuICBkZXRhaWxzLmFwcGVuZCh3aW5kQ29tcCk7XG5cbiAgcmV0dXJuIGRldGFpbHM7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JlY2FzdFNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vIEhvdXIgZm9yZWNhc3RcbiAgLy8gRGF5IGZvcmVjYXN0XG59O1xuXG5jb25zdCBjcmVhdGVUb2RheVNlY3Rpb24gPSAoe30pID0+IHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICBjb25zdCBjb21wb25lbnRHcm91cCA9ICdtYWluQ29tcCc7XG5cbiAgY29uc3QgaW5mb0NvbXAgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50R3JvdXAsICdpbmZvJyk7XG4gIGluZm9Db21wLmFwcGVuZChjcmVhdGVOYW1lRWxlbWVudChsb2NhdGlvbi5uYW1lKSk7XG4gIGluZm9Db21wLmFwcGVuZChjcmVhdGVSZWdpb25FbGVtZW50KGxvY2F0aW9uLnJlZ2lvbikpO1xuICBtYWluRGl2LmFwcGVuZChpbmZvQ29tcCk7XG5cbiAgY29uc3QgY3VycmVudENvbXAgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50R3JvdXAsICdjdXJyZW50Jyk7XG4gIGN1cnJlbnRDb21wLmFwcGVuZChjcmVhdGVDdXJyZW50RWxlbWVudChjdXJyZW50VGVtcCkpO1xuICBjdXJyZW50Q29tcC5hcHBlbmQoY3JlYXRlQ29uZGl0aW9uc0VsZW1lbnQoY29uZGl0aW9ucykpO1xuICBtYWluRGl2LmFwcGVuZChjdXJyZW50Q29tcCk7XG5cbiAgcmV0dXJuIG1haW5EaXY7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvU2VjdGlvbiA9ICh7IG5hbWUsIHJlZ2lvbiB9KSA9PiB7XG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgY29uc3QgY29tcG9uZW50R3JvdXAgPSAnaW5mb0NvbXAnO1xuXG4gIGNvbnN0IGluZm9Db21wID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEdyb3VwLCAnaW5mbycpO1xuICBpbmZvQ29tcC5hcHBlbmQoY3JlYXRlTmFtZUVsZW1lbnQobmFtZSkpO1xuICBpbmZvQ29tcC5hcHBlbmQoY3JlYXRlUmVnaW9uRWxlbWVudChyZWdpb24pKTtcbiAgaW5mb0Rpdi5hcHBlbmQoaW5mb0NvbXApO1xuXG4gIGNvbnN0IGN1cnJlbnRDb21wID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEdyb3VwLCAnY3VycmVudCcpO1xuICBpbmZvRGl2LmFwcGVuZChjdXJyZW50Q29tcCk7XG5cbiAgcmV0dXJuIGluZm9EaXY7XG59O1xuXG5jb25zdCBjcmVhdGVXZWF0aGVyQ2FyZCA9IGFzeW5jICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IGxvY2F0aW9uLCB0ZW1wLCB3aW5kLCBjb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyQ2FyZCcpO1xuXG4gIGNvbnN0IGluZm8gPSBjcmVhdGVUb2RheVNlY3Rpb24obG9jYXRpb24pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoaW5mbyk7XG5cbiAgY29uc3QgdG9kYXkgPSBjcmVhdGVUb2RheVNlY3Rpb24obG9jYXRpb24sIHRlbXAuY3VycmVudC5jLCBjb25kaXRpb24pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQodG9kYXkpO1xuXG4gIC8vIGNvbnN0IGZvcmVjYXN0ID0gY3JlYXRlRm9yZWNhc3RTZWN0aW9uKGRheSwgd2Vlayk7XG4gIC8vIHdlYXRoZXJDYXJkLmFwcGVuZChmb3JlY2FzdCk7XG5cbiAgY29uc3QgZGV0YWlscyA9IGNyZWF0ZURldGFpbHNTZWN0aW9uKHRlbXAuZmVlbC5jLCB0ZW1wLnV2LCB3aW5kKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKGRldGFpbHMpO1xuXG4gIHJldHVybiB3ZWF0aGVyQ2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYXRoZXJDYXJkO1xuIiwiY29uc3Qgd2luZENsYXNzTmFtZSA9ICd3aW5kJztcblxuY29uc3QgY3JlYXRlU3BlZWRFbGVtZW50ID0gKHdpbmRTcGVlZCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnc3BlZWQnKTtcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgc3BlZWQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3aW5kU3BlZWR9YDtcblxuICByZXR1cm4gc3BlZWQ7XG59O1xuXG5jb25zdCBjcmVhdGVHdXN0RWxlbWVudCA9ICh3aW5kR3VzdCkgPT4ge1xuICBjb25zdCBndXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndXN0LmNsYXNzTGlzdC5hZGQoJ2d1c3QnKTtcbiAgZ3VzdC5jbGFzc0xpc3QuYWRkKHdpbmRDbGFzc05hbWUpO1xuICBndXN0LnRleHRDb250ZW50ID0gYEd1c3RzOiAke3dpbmRHdXN0fWA7XG5cbiAgcmV0dXJuIGd1c3Q7XG59O1xuXG5jb25zdCBjcmVhdGVNYXhTcGVlZEVsZW1lbnQgPSAobWF4U3BlZWQpID0+IHtcbiAgY29uc3QgbWF4V2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWF4V2luZC5jbGFzc0xpc3QuYWRkKCdtYXhXaW5kJyk7XG4gIG1heFdpbmQuY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgbWF4V2luZC50ZXh0Q29udGVudCA9IGBNYXggU3BlZWQ6ICR7bWF4U3BlZWR9YDtcblxuICByZXR1cm4gbWF4V2luZDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1pblNwZWVkRWxlbWVudCA9IChtaW5TcGVlZCkgPT4ge1xuICBjb25zdCBtaW5XaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtaW5XaW5kLmNsYXNzTGlzdC5hZGQoJ21pbldpbmQnKTtcbiAgbWluV2luZC5jbGFzc0xpc3QuYWRkKHdpbmRDbGFzc05hbWUpO1xuICBtaW5XaW5kLnRleHRDb250ZW50ID0gYE1pbiBTcGVlZDogJHttaW5TcGVlZH1gO1xuXG4gIHJldHVybiBtaW5XaW5kO1xufTtcblxuY29uc3QgY3JlYXRlRGlyZWN0aW9uRWxlbWVudCA9ICh3aW5kRGlyZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2RpcmVjdGlvbicpO1xuICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgZGlyZWN0aW9uLnRleHRDb250ZW50ID0gYERpcmVjdGlvbjogJHt3aW5kRGlyZWN0aW9ufWA7XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZURpcmVjdGlvbkVsZW1lbnQsXG4gIGNyZWF0ZVNwZWVkRWxlbWVudCxcbiAgY3JlYXRlR3VzdEVsZW1lbnQsXG4gIGNyZWF0ZU1heFNwZWVkRWxlbWVudCxcbiAgY3JlYXRlTWluU3BlZWRFbGVtZW50LFxufTtcbiIsImNvbnN0IGNyZWF0ZVN1Ym1pdEJ0biA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXRCdG4nO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VhcmNoISc7XG5cbiAgcmV0dXJuIHN1Ym1pdEJ0bjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5mb3IgPSAnc2VhcmNoQmFyJztcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCYXIudHlwZSA9ICd0ZXh0JztcbiAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gJ0NpdHknO1xuICBzZWFyY2hCYXIubmFtZSA9ICdzZWFyY2hCYXInO1xuICBzZWFyY2hCYXIuaWQgPSAnc2VhcmNoQmFyJztcblxuICBsYWJlbC5hcHBlbmQoc2VhcmNoQmFyKTtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlU2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVTZWFyY2hCYXIoKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmQoc2VhcmNoQmFyKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVTdWJtaXRCdG4oKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gc2VhcmNoRm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuY29uc3QgZ2V0VG9kYXlXZWF0aGVyID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgdGVtcF9jLCB0ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHsgbWF4dGVtcF9jLCBtYXh0ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgY29uc3QgeyBtaW50ZW1wX2MsIG1pbnRlbXBfZiB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICBjb25zdCB7IGNvbmRpdGlvbiB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgcmV0dXJuIHtcbiAgICBjOiB7IGN1cnJlbnQ6IHRlbXBfYywgbWF4OiBtYXh0ZW1wX2MsIG1pbjogbWludGVtcF9jIH0sXG4gICAgZjogeyBjdXJyZW50OiB0ZW1wX2YsIG1heDogbWF4dGVtcF9mLCBtaW46IG1pbnRlbXBfZiB9LFxuICAgIGNvbmRpdGlvbixcbiAgfTtcbn07XG5cbmNvbnN0IGdldFRlbXAgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBmZWVsc2xpa2VfYywgZmVlbHNsaWtlX2YsIHV2IH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICByZXR1cm4geyBmZWVsOiB7IGM6IGZlZWxzbGlrZV9jLCBmOiBmZWVsc2xpa2VfZiB9LCB1diB9O1xufTtcblxuY29uc3QgZ2V0V2luZCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHdpbmRfa3BoLCB3aW5kX21waCwgd2luZF9kaXIgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHsgZ3VzdF9rcGgsIGd1c3RfbXBoIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IG1heHdpbmRfa3BoLCBtYXh3aW5kX21waCB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICByZXR1cm4ge1xuICAgIGtwaDogeyBzcGVlZDogd2luZF9rcGgsIGd1c3Q6IGd1c3Rfa3BoLCBtYXg6IG1heHdpbmRfa3BoIH0sXG4gICAgbXBoOiB7IHNwZWVkOiB3aW5kX21waCwgZ3VzdDogZ3VzdF9tcGgsIG1heDogbWF4d2luZF9tcGggfSxcbiAgICB3aW5kX2RpcixcbiAgfTtcbn07XG5jb25zdCBnZXRBc3RybyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHN1bnJpc2UsIHN1bnNldCB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgbW9vbnJpc2UsIG1vb25zZXQgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCB7IG1vb25faWxsdW1pbmF0aW9uIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgcmV0dXJuIHsgc3VucmlzZSwgc3Vuc2V0LCBtb29ucmlzZSwgbW9vbnNldCwgbW9vbl9pbGx1bWluYXRpb24gfTtcbn07XG5cbmNvbnN0IGdldERldGFpbHMgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgdGVtcCA9IGdldFRlbXAod2VhdGhlckRhdGEpO1xuICBjb25zdCB3aW5kID0gZ2V0V2luZCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGFzdHJvID0gZ2V0QXN0cm8od2VhdGhlckRhdGEpO1xuXG4gIHJldHVybiB7IHRlbXAsIHdpbmQsIGFzdHJvIH07XG59O1xuY29uc3QgcGFyc2VIb3VybHlGb3JlY2FzdCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdERhdGFIb3VycyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0ge307XG5cbiAgZm9yZWNhc3REYXRhSG91cnMuZm9yRWFjaCgoaG91ckRhdGEpID0+IHtcbiAgICBjb25zdCB7IHRpbWUsIHRlbXBfYywgdGVtcF9mLCBjb25kaXRpb24gfSA9IGhvdXJEYXRhO1xuICAgIGNvbnN0IGhvdXIgPSB0aW1lLnNwbGl0KCcgJylbMV07XG5cbiAgICBjb25zdCBob3VyV2VhdGhlciA9IHtcbiAgICAgIHRlbXA6IHsgYzogdGVtcF9jLCBmOiB0ZW1wX2YgfSxcbiAgICAgIGljb246IGNvbmRpdGlvbi5pY29uLFxuICAgIH07XG5cbiAgICBmb3JlY2FzdEhvdXJseVtob3VyXSA9IGhvdXJXZWF0aGVyO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3RIb3VybHk7XG59O1xuY29uc3QgcGFyc2VEYWlseUZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0RGF5c0RhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0ge307XG5cbiAgZm9yZWNhc3REYXlzRGF0YS5mb3JFYWNoKChmb3JlY2FzdERheSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXk7XG4gICAgY29uc3QgeyBtYXh0ZW1wX2MsIG1heHRlbXBfZiB9ID0gZm9yZWNhc3REYXkuZGF5O1xuICAgIGNvbnN0IHsgbWludGVtcF9jLCBtaW50ZW1wX2YgfSA9IGZvcmVjYXN0RGF5LmRheTtcbiAgICBjb25zdCB7IGF2Z3RlbXBfYywgYXZndGVtcF9mIH0gPSBmb3JlY2FzdERheS5kYXk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF5ID0ge1xuICAgICAgZGF0ZSxcbiAgICAgIHRlbXA6IHtcbiAgICAgICAgYzogeyBhdmd0ZW1wX2MsIG1heHRlbXBfYywgbWludGVtcF9jIH0sXG4gICAgICAgIGY6IHsgYXZndGVtcF9mLCBtYXh0ZW1wX2YsIG1pbnRlbXBfZiB9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZm9yZWNhc3REYXlzW2RhdGVdID0gd2VhdGhlckRheTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0RGF5cztcbn07XG5cbmNvbnN0IGZpbHRlcldlYXRoZXJEYXRhID0gYXN5bmMgKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gd2VhdGhlckRhdGE7XG5cbiAgY29uc3QgbG9jYXRpb25JbmZvID0geyBuYW1lOiBsb2NhdGlvbi5uYW1lLCByZWdpb246IGxvY2F0aW9uLnJlZ2lvbiB9O1xuICBjb25zdCB3ZWF0aGVyVG9kYXkgPSBnZXRUb2RheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICBjb25zdCBkZXRhaWxzID0gZ2V0RGV0YWlscyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gcGFyc2VIb3VybHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHBhcnNlRGFpbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbjogbG9jYXRpb25JbmZvLFxuICAgIHdlYXRoZXJUb2RheSxcbiAgICBkZXRhaWxzLFxuICAgIGZvcmVjYXN0SG91cmx5LFxuICAgIGZvcmVjYXN0RGF5cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlcldlYXRoZXJEYXRhO1xuIiwiY29uc3QgYXBpS2V5ID0gJ2tleT0wZWY5MjM0ZmZkODE0MGUwYmNmMTQ1OTQyMjMyNTA4JztcbmNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnO1xuXG5jb25zdCBmb3JlY2FzdFdlYXRoZXIgPSAnL2ZvcmVjYXN0Lmpzb24nO1xuY29uc3QgZm9yZWNhc3REYXlzID0gJ2RheXM9Nyc7XG5cbi8vIGNvbnN0IHRlc3RMb2NhdGlvbiA9ICdQcmFndWUnO1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCB3ZWF0aGVyVVJMID0gYCR7YmFzZVVSTH0ke2ZvcmVjYXN0V2VhdGhlcn0/JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mJHtmb3JlY2FzdERheXN9YDtcbiAgLy8gY29uc3Qgd2VhdGhlclVSTCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTBlZjkyMzRmZmQ4MTQwZTBiY2YxNDU5NDIyMzI1MDgmcT1Mb25kb24mZGF5cz0zYDtcblxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVUkwpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gIH1cbn07XG5cbmdldFdlYXRoZXJEYXRhKCdDYXBlIFRvd24nKS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IGZpbHRlcldlYXRoZXJEYXRhIGZyb20gJy4vZmlsdGVyRGF0YSc7XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gIGNvbnN0IGNsZWFuRGF0YSA9IGF3YWl0IGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgY29uc29sZS5sb2coY2xlYW5EYXRhKTtcbiAgcmV0dXJuIGNsZWFuRGF0YTtcbn07XG5cbi8vIGdldFdlYXRoZXIoJ0NhcGUgVG93bicpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVG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ZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvO1xufVxuXG4ud2VhdGhlckNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSAyMCUgMjAlO1xuICB3aWR0aDogNTByZW07XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDUlO1xufVxuXG4ubWFpbkNvbXAuaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA3MCU7XG4gIGdhcDogMTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5kZXRhaWxDb21wIHtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xufVxuXG4jc2VhcmNoQmFyIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG87XFxufVxcblxcbi53ZWF0aGVyQ2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgMjAlIDIwJTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogNSU7XFxufVxcblxcbi5tYWluQ29tcC5pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDcwJTtcXG4gIGdhcDogMTAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHNTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMTByZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5kZXRhaWxDb21wIHtcXG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxufVxcblxcbiNzZWFyY2hCYXIge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcblxuaW1wb3J0IGNyZWF0ZVNlYXJjaEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaEZvcm0nO1xuLy8gaW1wb3J0IGZvcm1Db250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sU2VhcmNoRm9ybSc7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL3NlcnZpY2VzL3dlYXRoZXJhcGknO1xuaW1wb3J0IGNyZWF0ZVdlYXRoZXJDYXJkIGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5L3dlYXRoZXJDYXJkJztcblxuLy8gQ3JlZGl0XG4vLyBQb3dlcmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9cIiB0aXRsZT1cIkZyZWUgV2VhdGhlciBBUElcIj5XZWF0aGVyQVBJLmNvbTwvYT5cbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9cIiB0aXRsZT1cIkZyZWUgV2VhdGhlciBBUElcIj48aW1nIHNyYz0nLy9jZG4ud2VhdGhlcmFwaS5jb20vdjQvaW1hZ2VzL3dlYXRoZXJhcGlfbG9nby5wbmcnIGFsdD1cIldlYXRoZXIgZGF0YSBieSBXZWF0aGVyQVBJLmNvbVwiIGJvcmRlcj1cIjBcIj48L2E+XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVyID0gYXN5bmMgKHNlYXJjaFJlc3VsdCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoc2VhcmNoUmVzdWx0KTtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBhd2FpdCBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XG5cbiAgYm9keS5hcHBlbmQod2VhdGhlckNhcmQpO1xufTtcblxuY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hGb3JtID0gY3JlYXRlU2VhcmNoRm9ybSgpO1xuICBib2R5LmFwcGVuZChzZWFyY2hGb3JtKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBzZWFyY2hCYXIgfSA9IHNlYXJjaEZvcm07XG4gICAgZGlzcGxheVdlYXRoZXIoc2VhcmNoQmFyLnZhbHVlKTtcbiAgfSk7XG4gIC8vIGZvcm1Db250cm9sbGVyKHNlYXJjaEZvcm0pO1xuICAvLyByZXR1cm4gc2VhcmNoRm9ybTtcbn07XG5cbnNlYXJjaCgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbmRpdGlvbnNFbGVtZW50Iiwid2VhdGhlckRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZU5hbWVFbGVtZW50IiwibmFtZSIsIm5hbWVFbGVtZW50IiwiY3JlYXRlUmVnaW9uRWxlbWVudCIsInJlZ2lvbiIsInJlZ2lvbkVsZW1lbnQiLCJ0ZW1wQ2xhc3NOYW1lIiwiY3JlYXRlQ3VycmVudEVsZW1lbnQiLCJjdXJyZW50VGVtcCIsImN1cnJlbnQiLCJjcmVhdGVGZWVsc0xpa2VFbGVtZW50IiwiZmVlbHNMaWtlVGVtcCIsImZlZWxzTGlrZSIsImNyZWF0ZU1pblRlbXBFbGVtZW50IiwibWluVGVtcFZhbHVlIiwibWluVGVtcCIsImNyZWF0ZU1heFRlbXBFbGVtZW50IiwibWF4VGVtcFZhbHVlIiwibWF4VGVtcCIsImNyZWF0ZVVWSUVsZW1lbnQiLCJVVkluZGV4IiwidXZJbmRleCIsImNyZWF0ZVNwZWVkRWxlbWVudCIsImNyZWF0ZUd1c3RFbGVtZW50IiwiY3JlYXRlRGlyZWN0aW9uRWxlbWVudCIsImNyZWF0ZUNvbXBvbmVudCIsImNsYXNzR3JvdXAiLCJjbGFzc05hbWUiLCJjb21wb25lbnQiLCJjcmVhdGVEZXRhaWxzU2VjdGlvbiIsInV2Iiwid2luZCIsImRldGFpbHMiLCJjb21wb25lbnRHcm91cCIsImZlZWxDb21wIiwiYXBwZW5kIiwidXZDb21wIiwid2luZENvbXAiLCJzcGVlZCIsImtwaCIsImd1c3QiLCJkaXIiLCJjcmVhdGVGb3JlY2FzdFNlY3Rpb24iLCJjcmVhdGVUb2RheVNlY3Rpb24iLCJfcmVmIiwibWFpbkRpdiIsImluZm9Db21wIiwibG9jYXRpb24iLCJjdXJyZW50Q29tcCIsImNvbmRpdGlvbnMiLCJjcmVhdGVJbmZvU2VjdGlvbiIsIl9yZWYyIiwiaW5mb0RpdiIsImNyZWF0ZVdlYXRoZXJDYXJkIiwid2VhdGhlckRhdGEiLCJ0ZW1wIiwiY29uZGl0aW9uIiwid2VhdGhlckNhcmQiLCJpbmZvIiwidG9kYXkiLCJjIiwiZmVlbCIsIndpbmRDbGFzc05hbWUiLCJ3aW5kU3BlZWQiLCJ3aW5kR3VzdCIsImNyZWF0ZU1heFNwZWVkRWxlbWVudCIsIm1heFNwZWVkIiwibWF4V2luZCIsImNyZWF0ZU1pblNwZWVkRWxlbWVudCIsIm1pblNwZWVkIiwibWluV2luZCIsIndpbmREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJjcmVhdGVTdWJtaXRCdG4iLCJzdWJtaXRCdG4iLCJ0eXBlIiwiaWQiLCJjcmVhdGVTZWFyY2hCYXIiLCJsYWJlbCIsImZvciIsInNlYXJjaEJhciIsInBsYWNlaG9sZGVyIiwiY3JlYXRlU2VhcmNoRm9ybSIsInNlYXJjaEZvcm0iLCJnZXRUb2RheVdlYXRoZXIiLCJ0ZW1wX2MiLCJ0ZW1wX2YiLCJtYXh0ZW1wX2MiLCJtYXh0ZW1wX2YiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF5IiwibWludGVtcF9jIiwibWludGVtcF9mIiwibWF4IiwibWluIiwiZiIsImdldFRlbXAiLCJmZWVsc2xpa2VfYyIsImZlZWxzbGlrZV9mIiwiZ2V0V2luZCIsIndpbmRfa3BoIiwid2luZF9tcGgiLCJ3aW5kX2RpciIsImd1c3Rfa3BoIiwiZ3VzdF9tcGgiLCJtYXh3aW5kX2twaCIsIm1heHdpbmRfbXBoIiwibXBoIiwiZ2V0QXN0cm8iLCJzdW5yaXNlIiwic3Vuc2V0IiwiYXN0cm8iLCJtb29ucmlzZSIsIm1vb25zZXQiLCJtb29uX2lsbHVtaW5hdGlvbiIsImdldERldGFpbHMiLCJwYXJzZUhvdXJseUZvcmVjYXN0IiwiZm9yZWNhc3REYXRhSG91cnMiLCJob3VyIiwiZm9yZWNhc3RIb3VybHkiLCJmb3JFYWNoIiwiaG91ckRhdGEiLCJ0aW1lIiwic3BsaXQiLCJob3VyV2VhdGhlciIsImljb24iLCJwYXJzZURhaWx5Rm9yZWNhc3QiLCJmb3JlY2FzdERheXNEYXRhIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3REYXkiLCJkYXRlIiwiYXZndGVtcF9jIiwiYXZndGVtcF9mIiwid2VhdGhlckRheSIsImZpbHRlcldlYXRoZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uSW5mbyIsIndlYXRoZXJUb2RheSIsImFwaUtleSIsImJhc2VVUkwiLCJmb3JlY2FzdFdlYXRoZXIiLCJnZXRXZWF0aGVyRGF0YSIsIndlYXRoZXJVUkwiLCJ3ZWF0aGVyUmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlcnIiLCJFcnJvciIsInRoZW4iLCJyZXN1bHQiLCJnZXRXZWF0aGVyIiwiY2xlYW5EYXRhIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5V2VhdGhlciIsInNlYXJjaFJlc3VsdCIsInNlYXJjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9
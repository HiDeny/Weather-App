/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/display/cardSections/detailCards.js":
/*!************************************************************!*\
  !*** ./src/components/display/cardSections/detailCards.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/helperFunc */ "./src/components/display/elements/helperFunc.js");

const createCard = (title, className, content) => {
  const card = document.createElement('div');
  card.classList.add('detailCard');
  card.classList.add(`${className}Card`);
  const titleElement = (0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('h4', `${className}Title`, title);
  card.append(titleElement);
  if (content) {
    const contentElement = (0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)(`${className}Content`, content);
    card.append(contentElement);
  }
  return card;
};
const createAstroCard = (astroData, isMoon) => {
  const {
    rise,
    set,
    illumination
  } = astroData;
  const cardName = isMoon ? 'Moon' : 'Sun';
  const cardClass = isMoon ? 'moon' : 'sun';
  const card = createCard(cardName, cardClass);
  card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('astroRise', `Rise: ${rise}`));
  card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('astroSet', `Set: ${set}`));
  if (isMoon) {
    card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('astroIll', `Illumination: ${illumination}`));
  }
  return card;
};
const createWindCard = wind => {
  const {
    speed,
    gust,
    max
  } = wind.kph;
  const {
    dir
  } = wind;
  const card = createCard('Wind', 'wind');
  card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('windSpeed', `Speed: ${speed}`));
  card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('windGust', `Gust: ${gust}`));
  card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('windMax', `Max: ${max}`));
  card.append((0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('windDir', `Direction: ${dir}`));
  return card;
};
const createDetailsSection = _ref => {
  let {
    temp,
    wind,
    astro
  } = _ref;
  const {
    feel,
    uv
  } = temp;
  const {
    sun,
    moon
  } = astro;
  const detailsSection = document.createElement('section');
  detailsSection.classList.add('detailsSection');
  const feelCard = createCard('Feels Like', 'feelsLike', feel.c);
  const uvCard = createCard('UV', 'uv', uv);
  const windCard = createWindCard(wind);
  const sunCard = createAstroCard(sun);
  const moonCard = createAstroCard(moon, true);
  const detailCards = [feelCard, uvCard, windCard, sunCard, moonCard];
  detailsSection.append(...detailCards);
  return detailsSection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDetailsSection);

/***/ }),

/***/ "./src/components/display/cardSections/forecasts.js":
/*!**********************************************************!*\
  !*** ./src/components/display/cardSections/forecasts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/forecast */ "./src/components/display/elements/forecast.js");

const createForecastSection = async _ref => {
  let {
    hour,
    days
  } = _ref;
  const forecastSection = document.createElement('section');
  forecastSection.classList.add('forecast');
  try {
    if (hour) {
      const hourForecast = await (0,_elements_forecast__WEBPACK_IMPORTED_MODULE_0__["default"])(hour, true);
      forecastSection.append(hourForecast);
    }
    if (days) {
      const daysForecast = await (0,_elements_forecast__WEBPACK_IMPORTED_MODULE_0__["default"])(days);
      forecastSection.append(daysForecast);
    }
  } catch (err) {
    throw new Error('Error crating forecast section:', err);
  }
  return forecastSection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForecastSection);

/***/ }),

/***/ "./src/components/display/cardSections/locationInfo.js":
/*!*************************************************************!*\
  !*** ./src/components/display/cardSections/locationInfo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/helperFunc */ "./src/components/display/elements/helperFunc.js");

const createInfoSection = _ref => {
  let {
    name,
    region
  } = _ref;
  try {
    const infoSection = document.createElement('section');
    infoSection.classList.add('info');
    if (name) {
      const locationName = (0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('h2', 'locationName', name);
      infoSection.append(locationName);
    }
    if (region) {
      const locationRegion = (0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('locationRegion', region);
      infoSection.append(locationRegion);
    }
    return infoSection;
  } catch (error) {
    throw new Error(error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInfoSection);

/***/ }),

/***/ "./src/components/display/cardSections/todayWeather.js":
/*!*************************************************************!*\
  !*** ./src/components/display/cardSections/todayWeather.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/helperFunc */ "./src/components/display/elements/helperFunc.js");

const createTodaySection = _ref => {
  let {
    temp,
    condition
  } = _ref;
  const todaySection = document.createElement('section');
  todaySection.classList.add('today');
  const currentTemp = (0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('h1', 'currentTemp', `${temp.c.current}°C`);
  todaySection.append(currentTemp);
  const conditionsDesc = (0,_elements_helperFunc__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('h3', 'conditionsDesc', condition.text);
  todaySection.append(conditionsDesc);
  return todaySection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodaySection);

/***/ }),

/***/ "./src/components/display/elements/forecast.js":
/*!*****************************************************!*\
  !*** ./src/components/display/elements/forecast.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunc */ "./src/components/display/elements/helperFunc.js");

const createWeatherNode = async (weatherData, isHourly) => {
  const {
    temp,
    condition
  } = weatherData;
  const nodeClass = isHourly ? 'hourWeather' : 'dayWeather';
  const nodeTitle = isHourly ? weatherData.hour : weatherData.date;
  const weatherNode = document.createElement('div');
  weatherNode.classList.add(nodeClass);
  weatherNode.append((0,_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('nodeTitle', nodeTitle));
  const conditionIcon = await (0,_helperFunc__WEBPACK_IMPORTED_MODULE_0__.createConIconElement)(condition);
  weatherNode.append(conditionIcon);
  if (isHourly) {
    weatherNode.append((0,_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('currentTemp', `${temp.c}°C`));
  } else {
    weatherNode.append((0,_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('avgTemp', `${temp.c.avg}°C`));
    weatherNode.append((0,_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('maxTemp', `${temp.c.max}°C`));
    weatherNode.append((0,_helperFunc__WEBPACK_IMPORTED_MODULE_0__.setContent)('minTemp', `${temp.c.min}°C`));
  }
  return weatherNode;
};
const createForecast = async (weatherDataArr, isHourly) => {
  const forecastClass = isHourly ? 'hourForecast' : 'daysForecast';
  const forecast = document.createElement('div');
  forecast.classList.add(forecastClass);
  const weatherNodes = await Promise.all(weatherDataArr.map(async weatherData => createWeatherNode(weatherData, isHourly)));
  weatherNodes.forEach(weatherNode => {
    forecast.append(weatherNode);
  });
  return forecast;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForecast);

/***/ }),

/***/ "./src/components/display/elements/helperFunc.js":
/*!*******************************************************!*\
  !*** ./src/components/display/elements/helperFunc.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConIconElement: () => (/* binding */ createConIconElement),
/* harmony export */   createElementWithClass: () => (/* binding */ createElementWithClass),
/* harmony export */   setContent: () => (/* binding */ setContent)
/* harmony export */ });
const createElementWithClass = (tagName, className, content) => {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = content;
  return element;
};
const setContent = (className, content) => {
  const nodeContent = createElementWithClass('p', className, content);
  return nodeContent;
};
const createConIconElement = async _ref => {
  let {
    icon
  } = _ref;
  try {
    const completeURL = `https:${icon}`;
    const getIcon = await fetch(completeURL);
    const iconImg = document.createElement('img');
    iconImg.classList.add('conditionsIcon');
    iconImg.src = getIcon.url;
    return iconImg;
  } catch (err) {
    throw new Error(err);
  }
};

/***/ }),

/***/ "./src/components/display/elements/searchForm.js":
/*!*******************************************************!*\
  !*** ./src/components/display/elements/searchForm.js ***!
  \*******************************************************/
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
  searchForm.classList.add('searchForm');
  const searchBar = createSearchBar();
  searchForm.append(searchBar);
  const submitBtn = createSubmitBtn();
  searchForm.append(submitBtn);
  return searchForm;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchForm);

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
/* harmony import */ var _cardSections_locationInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardSections/locationInfo */ "./src/components/display/cardSections/locationInfo.js");
/* harmony import */ var _cardSections_todayWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardSections/todayWeather */ "./src/components/display/cardSections/todayWeather.js");
/* harmony import */ var _cardSections_forecasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardSections/forecasts */ "./src/components/display/cardSections/forecasts.js");
/* harmony import */ var _cardSections_detailCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardSections/detailCards */ "./src/components/display/cardSections/detailCards.js");




const createWeatherCard = async weatherData => {
  const {
    info,
    today,
    forecast,
    details
  } = weatherData;
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');
  const infoSec = (0,_cardSections_locationInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(info);
  weatherCard.append(infoSec);
  const todaySec = (0,_cardSections_todayWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(today);
  weatherCard.append(todaySec);
  const forecastSec = await (0,_cardSections_forecasts__WEBPACK_IMPORTED_MODULE_2__["default"])(forecast);
  weatherCard.append(forecastSec);
  const detailsSec = (0,_cardSections_detailCards__WEBPACK_IMPORTED_MODULE_3__["default"])(details);
  weatherCard.append(detailsSec);
  return weatherCard;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWeatherCard);

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
    temp: {
      c: {
        current: temp_c,
        max: maxtemp_c,
        min: mintemp_c
      },
      f: {
        current: temp_f,
        max: maxtemp_f,
        min: mintemp_f
      }
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
    dir: wind_dir
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
    sun: {
      rise: sunrise,
      set: sunset
    },
    moon: {
      rise: moonrise,
      set: moonset,
      illumination: moon_illumination
    }
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
  const forecastHourly = [];
  forecastDataHours.forEach(hourData => {
    const {
      time,
      temp_c,
      temp_f,
      condition
    } = hourData;
    const hour = time.split(' ')[1];
    const hourWeather = {
      hour,
      condition,
      temp: {
        c: temp_c,
        f: temp_f
      }
    };
    forecastHourly.push(hourWeather);
  });
  return forecastHourly;
};
const parseDailyForecast = weatherData => {
  const forecastDaysData = weatherData.forecast.forecastday;
  const forecastDays = [];
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
    const {
      condition
    } = forecastDay.hour[12];
    const weatherDay = {
      date,
      condition,
      temp: {
        c: {
          avg: avgtemp_c,
          max: maxtemp_c,
          min: mintemp_c
        },
        f: {
          avg: avgtemp_f,
          max: maxtemp_f,
          min: mintemp_f
        }
      }
    };
    forecastDays.push(weatherDay);
  });
  return forecastDays;
};
const getForecast = weatherData => {
  const forecastHourly = parseHourlyForecast(weatherData);
  const forecastDays = parseDailyForecast(weatherData);
  return {
    hour: forecastHourly,
    days: forecastDays
  };
};
const filterWeatherData = async weatherData => {
  console.log(weatherData);
  const {
    location
  } = weatherData;
  const info = {
    name: location.name,
    region: location.region
  };
  const today = getTodayWeather(weatherData);
  const forecast = getForecast(weatherData);
  const details = getDetails(weatherData);
  return {
    info,
    today,
    forecast,
    details
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
const getWeatherData = async location => {
  const weatherURL = `${baseURL}${forecastWeather}?${apiKey}&q=${location}&${forecastDays}`;
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

/* Inline #2 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

.info {
}

.hourForecast,
.daysForecast {
  display: flex;
  overflow: scroll;
}

/* Inline #0 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

.weatherCard {
  /* grid-template-rows: 50% 20% 20%; */
  /* height: 100%; */
  /* gap: 5%; */
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 900px;
}

.detailsSection {
  /* grid-auto-columns: 10rem; */
  grid-auto-columns: 8rem;
}

/* Inline #1 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

html {
  overflow: scroll;
}

/* Inline #3 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

.today {
  display: grid;
  grid-template-rows: 70% 30%;
  justify-content: center;
  text-align: center;
}

.today > .current.temp {
  font-size: 5rem;
  margin: 0;
  padding: 0;
  align-self: end;
}

.today > .description.conditions {
  margin: 0;
}

.name.locationInfo {
  font-size: 2.5rem;
}

.region.locationInfo {
  margin: 0;
}

section {
  background: aliceblue;
}

/* Inline #0 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

.info {
  text-align: center;
  align-content: center;
}

/* Inline #2 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

/* Inline #2 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.hourWeather {
  text-align: center;
}

.daysForecast {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.dayWeather {
  text-align: center;
}

/* Inline #0 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */

/* .hourForecast, .daysForecast { */
.hourForecast {
  /* overflow: scroll; */
  overflow-y: scroll;
  width: 50rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,OAAO;AACT;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,QAAQ;EACR,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,4FAA4F;;AAE5F;AACA;;AAEA;;EAEE,aAAa;EACb,gBAAgB;AAClB;;AAEA,4FAA4F;;AAE5F;EACE,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,mCAAmC;EACnC,aAAa;AACf;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA,4FAA4F;;AAE5F;EACE,gBAAgB;AAClB;;AAEA,4FAA4F;;AAE5F;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA,4FAA4F;;AAE5F;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA,4FAA4F;;AAE5F;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA,4FAA4F;;AAE5F;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,4FAA4F;;AAE5F,mCAAmC;AACnC;EACE,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["body {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 5rem auto;\n}\n\n.weatherCard {\n  display: grid;\n  grid-template-rows: 50% 20% 20%;\n  width: 50rem;\n  margin: auto;\n  height: 100%;\n  gap: 5%;\n}\n\n.mainComp.info {\n  text-align: center;\n}\n\n.main {\n  display: grid;\n  grid-template-rows: 20% 70%;\n  gap: 10%;\n  align-items: center;\n  justify-items: center;\n}\n\n.detailsSection {\n  display: grid;\n  grid-auto-columns: 10rem;\n  grid-auto-flow: column;\n  justify-content: space-evenly;\n}\n\n.detailComp {\n  background: gainsboro;\n  border: 1px solid;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n}\n\nhtml {\n  font-family: Helvetica;\n}\n\n#searchBar {\n  padding: 3px 5px;\n}\n\n/* Inline #2 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n.info {\n}\n\n.hourForecast,\n.daysForecast {\n  display: flex;\n  overflow: scroll;\n}\n\n/* Inline #0 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n.weatherCard {\n  /* grid-template-rows: 50% 20% 20%; */\n  /* height: 100%; */\n  /* gap: 5%; */\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  height: 900px;\n}\n\n.detailsSection {\n  /* grid-auto-columns: 10rem; */\n  grid-auto-columns: 8rem;\n}\n\n/* Inline #1 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\nhtml {\n  overflow: scroll;\n}\n\n/* Inline #3 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n.today {\n  display: grid;\n  grid-template-rows: 70% 30%;\n  justify-content: center;\n  text-align: center;\n}\n\n.today > .current.temp {\n  font-size: 5rem;\n  margin: 0;\n  padding: 0;\n  align-self: end;\n}\n\n.today > .description.conditions {\n  margin: 0;\n}\n\n.name.locationInfo {\n  font-size: 2.5rem;\n}\n\n.region.locationInfo {\n  margin: 0;\n}\n\nsection {\n  background: aliceblue;\n}\n\n/* Inline #0 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n.info {\n  text-align: center;\n  align-content: center;\n}\n\n/* Inline #2 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n.searchForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n/* Inline #2 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n.searchForm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.hourWeather {\n  text-align: center;\n}\n\n.daysForecast {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.dayWeather {\n  text-align: center;\n}\n\n/* Inline #0 | file:///Users/hidenny/CODE/TheOdinProject/repos/Weather-App/dist/index.html */\n\n/* .hourForecast, .daysForecast { */\n.hourForecast {\n  /* overflow: scroll; */\n  overflow-y: scroll;\n  width: 50rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _components_display_elements_searchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/display/elements/searchForm */ "./src/components/display/elements/searchForm.js");
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
const successCallback = position => {
  const {
    latitude,
    longitude
  } = position.coords;
  const searchVal = `${latitude},${longitude}`;
  displayWeather(searchVal);
};
const errorCallback = error => error;

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

const search = () => {
  const searchForm = (0,_components_display_elements_searchForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEIsTUFBTTtNQUFFckY7SUFBVSxDQUFDLEdBQUdHLFVBQVU7SUFDaENzRSxjQUFjLENBQUN6RSxTQUFTLENBQUNzRixLQUFLLENBQUM7RUFDakMsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTtBQUNGLENBQUM7O0FBRURKLE1BQU0sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvY2FyZFNlY3Rpb25zL2RldGFpbENhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvZm9yZWNhc3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvbG9jYXRpb25JbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvdG9kYXlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvaGVscGVyRnVuYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvc2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvd2VhdGhlckNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VydmljZXMvZmlsdGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXJ2aWNlcy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL3dlYXRoZXJhcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/MzQyZiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aENsYXNzLCBzZXRDb250ZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvaGVscGVyRnVuYyc7XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAodGl0bGUsIGNsYXNzTmFtZSwgY29udGVudCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsQ2FyZCcpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfUNhcmRgKTtcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdoNCcsIGAke2NsYXNzTmFtZX1UaXRsZWAsIHRpdGxlKTtcbiAgY2FyZC5hcHBlbmQodGl0bGVFbGVtZW50KTtcblxuICBpZiAoY29udGVudCkge1xuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gc2V0Q29udGVudChgJHtjbGFzc05hbWV9Q29udGVudGAsIGNvbnRlbnQpO1xuICAgIGNhcmQuYXBwZW5kKGNvbnRlbnRFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlQXN0cm9DYXJkID0gKGFzdHJvRGF0YSwgaXNNb29uKSA9PiB7XG4gIGNvbnN0IHsgcmlzZSwgc2V0LCBpbGx1bWluYXRpb24gfSA9IGFzdHJvRGF0YTtcblxuICBjb25zdCBjYXJkTmFtZSA9IGlzTW9vbiA/ICdNb29uJyA6ICdTdW4nO1xuICBjb25zdCBjYXJkQ2xhc3MgPSBpc01vb24gPyAnbW9vbicgOiAnc3VuJztcblxuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChjYXJkTmFtZSwgY2FyZENsYXNzKTtcblxuICBjYXJkLmFwcGVuZChzZXRDb250ZW50KCdhc3Ryb1Jpc2UnLCBgUmlzZTogJHtyaXNlfWApKTtcbiAgY2FyZC5hcHBlbmQoc2V0Q29udGVudCgnYXN0cm9TZXQnLCBgU2V0OiAke3NldH1gKSk7XG5cbiAgaWYgKGlzTW9vbikge1xuICAgIGNhcmQuYXBwZW5kKHNldENvbnRlbnQoJ2FzdHJvSWxsJywgYElsbHVtaW5hdGlvbjogJHtpbGx1bWluYXRpb259YCkpO1xuICB9XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVXaW5kQ2FyZCA9ICh3aW5kKSA9PiB7XG4gIGNvbnN0IHsgc3BlZWQsIGd1c3QsIG1heCB9ID0gd2luZC5rcGg7XG4gIGNvbnN0IHsgZGlyIH0gPSB3aW5kO1xuXG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKCdXaW5kJywgJ3dpbmQnKTtcblxuICBjYXJkLmFwcGVuZChzZXRDb250ZW50KCd3aW5kU3BlZWQnLCBgU3BlZWQ6ICR7c3BlZWR9YCkpO1xuICBjYXJkLmFwcGVuZChzZXRDb250ZW50KCd3aW5kR3VzdCcsIGBHdXN0OiAke2d1c3R9YCkpO1xuICBjYXJkLmFwcGVuZChzZXRDb250ZW50KCd3aW5kTWF4JywgYE1heDogJHttYXh9YCkpO1xuICBjYXJkLmFwcGVuZChzZXRDb250ZW50KCd3aW5kRGlyJywgYERpcmVjdGlvbjogJHtkaXJ9YCkpO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlRGV0YWlsc1NlY3Rpb24gPSAoeyB0ZW1wLCB3aW5kLCBhc3RybyB9KSA9PiB7XG4gIGNvbnN0IHsgZmVlbCwgdXYgfSA9IHRlbXA7XG4gIGNvbnN0IHsgc3VuLCBtb29uIH0gPSBhc3RybztcblxuICBjb25zdCBkZXRhaWxzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgZGV0YWlsc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc1NlY3Rpb24nKTtcblxuICBjb25zdCBmZWVsQ2FyZCA9IGNyZWF0ZUNhcmQoJ0ZlZWxzIExpa2UnLCAnZmVlbHNMaWtlJywgZmVlbC5jKTtcbiAgY29uc3QgdXZDYXJkID0gY3JlYXRlQ2FyZCgnVVYnLCAndXYnLCB1dik7XG4gIGNvbnN0IHdpbmRDYXJkID0gY3JlYXRlV2luZENhcmQod2luZCk7XG4gIGNvbnN0IHN1bkNhcmQgPSBjcmVhdGVBc3Ryb0NhcmQoc3VuKTtcbiAgY29uc3QgbW9vbkNhcmQgPSBjcmVhdGVBc3Ryb0NhcmQobW9vbiwgdHJ1ZSk7XG5cbiAgY29uc3QgZGV0YWlsQ2FyZHMgPSBbZmVlbENhcmQsIHV2Q2FyZCwgd2luZENhcmQsIHN1bkNhcmQsIG1vb25DYXJkXTtcbiAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKC4uLmRldGFpbENhcmRzKTtcblxuICByZXR1cm4gZGV0YWlsc1NlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZXRhaWxzU2VjdGlvbjtcbiIsImltcG9ydCBjcmVhdGVGb3JlY2FzdCBmcm9tICcuLi9lbGVtZW50cy9mb3JlY2FzdCc7XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbiA9IGFzeW5jICh7IGhvdXIsIGRheXMgfSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGZvcmVjYXN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xuXG4gIHRyeSB7XG4gICAgaWYgKGhvdXIpIHtcbiAgICAgIGNvbnN0IGhvdXJGb3JlY2FzdCA9IGF3YWl0IGNyZWF0ZUZvcmVjYXN0KGhvdXIsIHRydWUpO1xuICAgICAgZm9yZWNhc3RTZWN0aW9uLmFwcGVuZChob3VyRm9yZWNhc3QpO1xuICAgIH1cblxuICAgIGlmIChkYXlzKSB7XG4gICAgICBjb25zdCBkYXlzRm9yZWNhc3QgPSBhd2FpdCBjcmVhdGVGb3JlY2FzdChkYXlzKTtcbiAgICAgIGZvcmVjYXN0U2VjdGlvbi5hcHBlbmQoZGF5c0ZvcmVjYXN0KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgY3JhdGluZyBmb3JlY2FzdCBzZWN0aW9uOicsIGVycik7XG4gIH1cblxuICByZXR1cm4gZm9yZWNhc3RTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9yZWNhc3RTZWN0aW9uO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcywgc2V0Q29udGVudCB9IGZyb20gJy4uL2VsZW1lbnRzL2hlbHBlckZ1bmMnO1xuXG5jb25zdCBjcmVhdGVJbmZvU2VjdGlvbiA9ICh7IG5hbWUsIHJlZ2lvbiB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2gyJywgJ2xvY2F0aW9uTmFtZScsIG5hbWUpO1xuICAgICAgaW5mb1NlY3Rpb24uYXBwZW5kKGxvY2F0aW9uTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHJlZ2lvbikge1xuICAgICAgY29uc3QgbG9jYXRpb25SZWdpb24gPSBzZXRDb250ZW50KCdsb2NhdGlvblJlZ2lvbicsIHJlZ2lvbik7XG4gICAgICBpbmZvU2VjdGlvbi5hcHBlbmQobG9jYXRpb25SZWdpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmZvU2VjdGlvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvU2VjdGlvbjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MgfSBmcm9tICcuLi9lbGVtZW50cy9oZWxwZXJGdW5jJztcblxuY29uc3QgY3JlYXRlVG9kYXlTZWN0aW9uID0gKHsgdGVtcCwgY29uZGl0aW9uIH0pID0+IHtcbiAgY29uc3QgdG9kYXlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICB0b2RheVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcblxuICBjb25zdCBjdXJyZW50VGVtcCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgJ2gxJyxcbiAgICAnY3VycmVudFRlbXAnLFxuICAgIGAke3RlbXAuYy5jdXJyZW50fcKwQ2BcbiAgKTtcbiAgdG9kYXlTZWN0aW9uLmFwcGVuZChjdXJyZW50VGVtcCk7XG5cbiAgY29uc3QgY29uZGl0aW9uc0Rlc2MgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFxuICAgICdoMycsXG4gICAgJ2NvbmRpdGlvbnNEZXNjJyxcbiAgICBjb25kaXRpb24udGV4dFxuICApO1xuICB0b2RheVNlY3Rpb24uYXBwZW5kKGNvbmRpdGlvbnNEZXNjKTtcblxuICByZXR1cm4gdG9kYXlTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kYXlTZWN0aW9uO1xuIiwiaW1wb3J0IHsgc2V0Q29udGVudCwgY3JlYXRlQ29uSWNvbkVsZW1lbnQgfSBmcm9tICcuL2hlbHBlckZ1bmMnO1xuXG5jb25zdCBjcmVhdGVXZWF0aGVyTm9kZSA9IGFzeW5jICh3ZWF0aGVyRGF0YSwgaXNIb3VybHkpID0+IHtcbiAgY29uc3QgeyB0ZW1wLCBjb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuXG4gIGNvbnN0IG5vZGVDbGFzcyA9IGlzSG91cmx5ID8gJ2hvdXJXZWF0aGVyJyA6ICdkYXlXZWF0aGVyJztcbiAgY29uc3Qgbm9kZVRpdGxlID0gaXNIb3VybHkgPyB3ZWF0aGVyRGF0YS5ob3VyIDogd2VhdGhlckRhdGEuZGF0ZTtcblxuICBjb25zdCB3ZWF0aGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyTm9kZS5jbGFzc0xpc3QuYWRkKG5vZGVDbGFzcyk7XG5cbiAgd2VhdGhlck5vZGUuYXBwZW5kKHNldENvbnRlbnQoJ25vZGVUaXRsZScsIG5vZGVUaXRsZSkpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBhd2FpdCBjcmVhdGVDb25JY29uRWxlbWVudChjb25kaXRpb24pO1xuICB3ZWF0aGVyTm9kZS5hcHBlbmQoY29uZGl0aW9uSWNvbik7XG5cbiAgaWYgKGlzSG91cmx5KSB7XG4gICAgd2VhdGhlck5vZGUuYXBwZW5kKHNldENvbnRlbnQoJ2N1cnJlbnRUZW1wJywgYCR7dGVtcC5jfcKwQ2ApKTtcbiAgfSBlbHNlIHtcbiAgICB3ZWF0aGVyTm9kZS5hcHBlbmQoc2V0Q29udGVudCgnYXZnVGVtcCcsIGAke3RlbXAuYy5hdmd9wrBDYCkpO1xuICAgIHdlYXRoZXJOb2RlLmFwcGVuZChzZXRDb250ZW50KCdtYXhUZW1wJywgYCR7dGVtcC5jLm1heH3CsENgKSk7XG4gICAgd2VhdGhlck5vZGUuYXBwZW5kKHNldENvbnRlbnQoJ21pblRlbXAnLCBgJHt0ZW1wLmMubWlufcKwQ2ApKTtcbiAgfVxuXG4gIHJldHVybiB3ZWF0aGVyTm9kZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0ID0gYXN5bmMgKHdlYXRoZXJEYXRhQXJyLCBpc0hvdXJseSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdENsYXNzID0gaXNIb3VybHkgPyAnaG91ckZvcmVjYXN0JyA6ICdkYXlzRm9yZWNhc3QnO1xuXG4gIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoZm9yZWNhc3RDbGFzcyk7XG5cbiAgY29uc3Qgd2VhdGhlck5vZGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgd2VhdGhlckRhdGFBcnIubWFwKGFzeW5jICh3ZWF0aGVyRGF0YSkgPT5cbiAgICAgIGNyZWF0ZVdlYXRoZXJOb2RlKHdlYXRoZXJEYXRhLCBpc0hvdXJseSlcbiAgICApXG4gICk7XG5cbiAgd2VhdGhlck5vZGVzLmZvckVhY2goKHdlYXRoZXJOb2RlKSA9PiB7XG4gICAgZm9yZWNhc3QuYXBwZW5kKHdlYXRoZXJOb2RlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9yZWNhc3Q7XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyA9ICh0YWdOYW1lLCBjbGFzc05hbWUsIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDb250ZW50ID0gKGNsYXNzTmFtZSwgY29udGVudCkgPT4ge1xuICBjb25zdCBub2RlQ29udGVudCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ3AnLCBjbGFzc05hbWUsIGNvbnRlbnQpO1xuICByZXR1cm4gbm9kZUNvbnRlbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29uSWNvbkVsZW1lbnQgPSBhc3luYyAoeyBpY29uIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb21wbGV0ZVVSTCA9IGBodHRwczoke2ljb259YDtcbiAgICBjb25zdCBnZXRJY29uID0gYXdhaXQgZmV0Y2goY29tcGxldGVVUkwpO1xuXG4gICAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGljb25JbWcuY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uc0ljb24nKTtcbiAgICBpY29uSW1nLnNyYyA9IGdldEljb24udXJsO1xuXG4gICAgcmV0dXJuIGljb25JbWc7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG59O1xuIiwiY29uc3QgY3JlYXRlU3VibWl0QnRuID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgc3VibWl0QnRuLmlkID0gJ3N1Ym1pdEJ0bic7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTZWFyY2ghJztcblxuICByZXR1cm4gc3VibWl0QnRuO1xufTtcblxuY29uc3QgY3JlYXRlU2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLmZvciA9ICdzZWFyY2hCYXInO1xuXG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaEJhci50eXBlID0gJ3RleHQnO1xuICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSAnQ2l0eSc7XG4gIHNlYXJjaEJhci5uYW1lID0gJ3NlYXJjaEJhcic7XG4gIHNlYXJjaEJhci5pZCA9ICdzZWFyY2hCYXInO1xuXG4gIGxhYmVsLmFwcGVuZChzZWFyY2hCYXIpO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVTZWFyY2hGb3JtID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEZvcm0nKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBjcmVhdGVTZWFyY2hCYXIoKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmQoc2VhcmNoQmFyKTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVTdWJtaXRCdG4oKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gc2VhcmNoRm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaEZvcm07XG4iLCJpbXBvcnQgY3JlYXRlSW5mb1NlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvbG9jYXRpb25JbmZvJztcbmltcG9ydCBjcmVhdGVUb2RheVNlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvdG9kYXlXZWF0aGVyJztcbmltcG9ydCBjcmVhdGVGb3JlY2FzdFNlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvZm9yZWNhc3RzJztcbmltcG9ydCBjcmVhdGVEZXRhaWxzU2VjdGlvbiBmcm9tICcuL2NhcmRTZWN0aW9ucy9kZXRhaWxDYXJkcyc7XG5cbmNvbnN0IGNyZWF0ZVdlYXRoZXJDYXJkID0gYXN5bmMgKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgaW5mbywgdG9kYXksIGZvcmVjYXN0LCBkZXRhaWxzIH0gPSB3ZWF0aGVyRGF0YTtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckNhcmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlckNhcmQnKTtcblxuICBjb25zdCBpbmZvU2VjID0gY3JlYXRlSW5mb1NlY3Rpb24oaW5mbyk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZChpbmZvU2VjKTtcblxuICBjb25zdCB0b2RheVNlYyA9IGNyZWF0ZVRvZGF5U2VjdGlvbih0b2RheSk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZCh0b2RheVNlYyk7XG5cbiAgY29uc3QgZm9yZWNhc3RTZWMgPSBhd2FpdCBjcmVhdGVGb3JlY2FzdFNlY3Rpb24oZm9yZWNhc3QpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoZm9yZWNhc3RTZWMpO1xuXG4gIGNvbnN0IGRldGFpbHNTZWMgPSBjcmVhdGVEZXRhaWxzU2VjdGlvbihkZXRhaWxzKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKGRldGFpbHNTZWMpO1xuXG4gIHJldHVybiB3ZWF0aGVyQ2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYXRoZXJDYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbmNvbnN0IGdldFRvZGF5V2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHRlbXBfYywgdGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IG1heHRlbXBfYywgbWF4dGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIGNvbnN0IHsgbWludGVtcF9jLCBtaW50ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgY29uc3QgeyBjb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHJldHVybiB7XG4gICAgdGVtcDoge1xuICAgICAgYzogeyBjdXJyZW50OiB0ZW1wX2MsIG1heDogbWF4dGVtcF9jLCBtaW46IG1pbnRlbXBfYyB9LFxuICAgICAgZjogeyBjdXJyZW50OiB0ZW1wX2YsIG1heDogbWF4dGVtcF9mLCBtaW46IG1pbnRlbXBfZiB9LFxuICAgIH0sXG4gICAgY29uZGl0aW9uLFxuICB9O1xufTtcblxuY29uc3QgZ2V0VGVtcCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IGZlZWxzbGlrZV9jLCBmZWVsc2xpa2VfZiwgdXYgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHJldHVybiB7IGZlZWw6IHsgYzogZmVlbHNsaWtlX2MsIGY6IGZlZWxzbGlrZV9mIH0sIHV2IH07XG59O1xuXG5jb25zdCBnZXRXaW5kID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgd2luZF9rcGgsIHdpbmRfbXBoLCB3aW5kX2RpciB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgY29uc3QgeyBndXN0X2twaCwgZ3VzdF9tcGggfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHsgbWF4d2luZF9rcGgsIG1heHdpbmRfbXBoIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIHJldHVybiB7XG4gICAga3BoOiB7IHNwZWVkOiB3aW5kX2twaCwgZ3VzdDogZ3VzdF9rcGgsIG1heDogbWF4d2luZF9rcGggfSxcbiAgICBtcGg6IHsgc3BlZWQ6IHdpbmRfbXBoLCBndXN0OiBndXN0X21waCwgbWF4OiBtYXh3aW5kX21waCB9LFxuICAgIGRpcjogd2luZF9kaXIsXG4gIH07XG59O1xuY29uc3QgZ2V0QXN0cm8gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBzdW5yaXNlLCBzdW5zZXQgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCB7IG1vb25yaXNlLCBtb29uc2V0IH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgeyBtb29uX2lsbHVtaW5hdGlvbiB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIHJldHVybiB7XG4gICAgc3VuOiB7IHJpc2U6IHN1bnJpc2UsIHNldDogc3Vuc2V0IH0sXG4gICAgbW9vbjogeyByaXNlOiBtb29ucmlzZSwgc2V0OiBtb29uc2V0LCBpbGx1bWluYXRpb246IG1vb25faWxsdW1pbmF0aW9uIH0sXG4gIH07XG59O1xuXG5jb25zdCBnZXREZXRhaWxzID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHRlbXAgPSBnZXRUZW1wKHdlYXRoZXJEYXRhKTtcbiAgY29uc3Qgd2luZCA9IGdldFdpbmQod2VhdGhlckRhdGEpO1xuICBjb25zdCBhc3RybyA9IGdldEFzdHJvKHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4geyB0ZW1wLCB3aW5kLCBhc3RybyB9O1xufTtcblxuY29uc3QgcGFyc2VIb3VybHlGb3JlY2FzdCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdERhdGFIb3VycyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gW107XG5cbiAgZm9yZWNhc3REYXRhSG91cnMuZm9yRWFjaCgoaG91ckRhdGEpID0+IHtcbiAgICBjb25zdCB7IHRpbWUsIHRlbXBfYywgdGVtcF9mLCBjb25kaXRpb24gfSA9IGhvdXJEYXRhO1xuICAgIGNvbnN0IGhvdXIgPSB0aW1lLnNwbGl0KCcgJylbMV07XG5cbiAgICBjb25zdCBob3VyV2VhdGhlciA9IHtcbiAgICAgIGhvdXIsXG4gICAgICBjb25kaXRpb24sXG4gICAgICB0ZW1wOiB7IGM6IHRlbXBfYywgZjogdGVtcF9mIH0sXG4gICAgfTtcblxuICAgIGZvcmVjYXN0SG91cmx5LnB1c2goaG91cldlYXRoZXIpO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3RIb3VybHk7XG59O1xuY29uc3QgcGFyc2VEYWlseUZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0RGF5c0RhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gW107XG5cbiAgZm9yZWNhc3REYXlzRGF0YS5mb3JFYWNoKChmb3JlY2FzdERheSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXk7XG4gICAgY29uc3QgeyBtYXh0ZW1wX2MsIG1heHRlbXBfZiB9ID0gZm9yZWNhc3REYXkuZGF5O1xuICAgIGNvbnN0IHsgbWludGVtcF9jLCBtaW50ZW1wX2YgfSA9IGZvcmVjYXN0RGF5LmRheTtcbiAgICBjb25zdCB7IGF2Z3RlbXBfYywgYXZndGVtcF9mIH0gPSBmb3JlY2FzdERheS5kYXk7XG4gICAgY29uc3QgeyBjb25kaXRpb24gfSA9IGZvcmVjYXN0RGF5LmhvdXJbMTJdO1xuXG4gICAgY29uc3Qgd2VhdGhlckRheSA9IHtcbiAgICAgIGRhdGUsXG4gICAgICBjb25kaXRpb24sXG4gICAgICB0ZW1wOiB7XG4gICAgICAgIGM6IHsgYXZnOiBhdmd0ZW1wX2MsIG1heDogbWF4dGVtcF9jLCBtaW46IG1pbnRlbXBfYyB9LFxuICAgICAgICBmOiB7IGF2ZzogYXZndGVtcF9mLCBtYXg6IG1heHRlbXBfZiwgbWluOiBtaW50ZW1wX2YgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZvcmVjYXN0RGF5cy5wdXNoKHdlYXRoZXJEYXkpO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3REYXlzO1xufTtcblxuY29uc3QgZ2V0Rm9yZWNhc3QgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RIb3VybHkgPSBwYXJzZUhvdXJseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gcGFyc2VEYWlseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4geyBob3VyOiBmb3JlY2FzdEhvdXJseSwgZGF5czogZm9yZWNhc3REYXlzIH07XG59O1xuXG5jb25zdCBmaWx0ZXJXZWF0aGVyRGF0YSA9IGFzeW5jICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuXG4gIGNvbnN0IGluZm8gPSB7IG5hbWU6IGxvY2F0aW9uLm5hbWUsIHJlZ2lvbjogbG9jYXRpb24ucmVnaW9uIH07XG4gIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXlXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBnZXRGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGRldGFpbHMgPSBnZXREZXRhaWxzKHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4ge1xuICAgIGluZm8sXG4gICAgdG9kYXksXG4gICAgZm9yZWNhc3QsXG4gICAgZGV0YWlscyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlcldlYXRoZXJEYXRhO1xuIiwiY29uc3QgYXBpS2V5ID0gJ2tleT0wZWY5MjM0ZmZkODE0MGUwYmNmMTQ1OTQyMjMyNTA4JztcbmNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnO1xuXG5jb25zdCBmb3JlY2FzdFdlYXRoZXIgPSAnL2ZvcmVjYXN0Lmpzb24nO1xuY29uc3QgZm9yZWNhc3REYXlzID0gJ2RheXM9Nyc7XG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJVUkwgPSBgJHtiYXNlVVJMfSR7Zm9yZWNhc3RXZWF0aGVyfT8ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSYke2ZvcmVjYXN0RGF5c31gO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlclVSTCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfVxufTtcblxuLy8gZ2V0V2VhdGhlckRhdGEoJ0NhcGUgVG93bicpLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJEYXRhO1xuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vZ2V0RGF0YSc7XG5pbXBvcnQgZmlsdGVyV2VhdGhlckRhdGEgZnJvbSAnLi9maWx0ZXJEYXRhJztcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgY29uc3QgY2xlYW5EYXRhID0gYXdhaXQgZmlsdGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICBjb25zb2xlLmxvZyhjbGVhbkRhdGEpO1xuICByZXR1cm4gY2xlYW5EYXRhO1xufTtcblxuLy8gZ2V0V2VhdGhlcignQ2FwZSBUb3duJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG87XG59XG5cbi53ZWF0aGVyQ2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDIwJSAyMCU7XG4gIHdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogNSU7XG59XG5cbi5tYWluQ29tcC5pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDcwJTtcbiAgZ2FwOiAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmRldGFpbHNTZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmRldGFpbENvbXAge1xuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG5cbiNzZWFyY2hCYXIge1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuXG4vKiBJbmxpbmUgIzIgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLmluZm8ge1xufVxuXG4uaG91ckZvcmVjYXN0LFxuLmRheXNGb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qIElubGluZSAjMCB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4ud2VhdGhlckNhcmQge1xuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSAyMCUgMjAlOyAqL1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIC8qIGdhcDogNSU7ICovXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xuICBoZWlnaHQ6IDkwMHB4O1xufVxuXG4uZGV0YWlsc1NlY3Rpb24ge1xuICAvKiBncmlkLWF1dG8tY29sdW1uczogMTByZW07ICovXG4gIGdyaWQtYXV0by1jb2x1bW5zOiA4cmVtO1xufVxuXG4vKiBJbmxpbmUgIzEgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuaHRtbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qIElubGluZSAjMyB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4udG9kYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwJSAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b2RheSA+IC5jdXJyZW50LnRlbXAge1xuICBmb250LXNpemU6IDVyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4udG9kYXkgPiAuZGVzY3JpcHRpb24uY29uZGl0aW9ucyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hbWUubG9jYXRpb25JbmZvIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5yZWdpb24ubG9jYXRpb25JbmZvIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xufVxuXG4vKiBJbmxpbmUgIzAgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLmluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogSW5saW5lICMyIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi5zZWFyY2hGb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLyogSW5saW5lICMyIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi5zZWFyY2hGb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmhvdXJXZWF0aGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF5c0ZvcmVjYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXlXZWF0aGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBJbmxpbmUgIzAgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLyogLmhvdXJGb3JlY2FzdCwgLmRheXNGb3JlY2FzdCB7ICovXG4uaG91ckZvcmVjYXN0IHtcbiAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogNTByZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsNEZBQTRGOztBQUU1RjtBQUNBOztBQUVBOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUEsNEZBQTRGOztBQUU1RjtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsNEZBQTRGOztBQUU1RjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsNEZBQTRGOztBQUU1RjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsNEZBQTRGOztBQUU1RjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQSw0RkFBNEY7O0FBRTVGO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsNEZBQTRGOztBQUU1RixtQ0FBbUM7QUFDbkM7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG87XFxufVxcblxcbi53ZWF0aGVyQ2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgMjAlIDIwJTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogNSU7XFxufVxcblxcbi5tYWluQ29tcC5pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDcwJTtcXG4gIGdhcDogMTAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHNTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMTByZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5kZXRhaWxDb21wIHtcXG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxufVxcblxcbiNzZWFyY2hCYXIge1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG59XFxuXFxuLyogSW5saW5lICMyIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLmluZm8ge1xcbn1cXG5cXG4uaG91ckZvcmVjYXN0LFxcbi5kYXlzRm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi8qIElubGluZSAjMCB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi53ZWF0aGVyQ2FyZCB7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSAyMCUgMjAlOyAqL1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgLyogZ2FwOiA1JTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgaGVpZ2h0OiA5MDBweDtcXG59XFxuXFxuLmRldGFpbHNTZWN0aW9uIHtcXG4gIC8qIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTsgKi9cXG4gIGdyaWQtYXV0by1jb2x1bW5zOiA4cmVtO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzEgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG5odG1sIHtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi8qIElubGluZSAjMyB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi50b2RheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MCUgMzAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RheSA+IC5jdXJyZW50LnRlbXAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLnRvZGF5ID4gLmRlc2NyaXB0aW9uLmNvbmRpdGlvbnMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmFtZS5sb2NhdGlvbkluZm8ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5yZWdpb24ubG9jYXRpb25JbmZvIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxufVxcblxcbi8qIElubGluZSAjMCB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi5pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogSW5saW5lICMyIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLnNlYXJjaEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLyogSW5saW5lICMyIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLnNlYXJjaEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmhvdXJXZWF0aGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRheXNGb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF5V2VhdGhlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIElubGluZSAjMCB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi8qIC5ob3VyRm9yZWNhc3QsIC5kYXlzRm9yZWNhc3QgeyAqL1xcbi5ob3VyRm9yZWNhc3Qge1xcbiAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHdpZHRoOiA1MHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcblxuaW1wb3J0IGNyZWF0ZVNlYXJjaEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvc2VhcmNoRm9ybSc7XG4vLyBpbXBvcnQgZm9ybUNvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xTZWFyY2hGb3JtJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vc2VydmljZXMvd2VhdGhlcmFwaSc7XG5pbXBvcnQgY3JlYXRlV2VhdGhlckNhcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkvd2VhdGhlckNhcmQnO1xuXG4vLyBDcmVkaXRcbi8vIFBvd2VyZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL1wiIHRpdGxlPVwiRnJlZSBXZWF0aGVyIEFQSVwiPldlYXRoZXJBUEkuY29tPC9hPlxuLy8gPGEgaHJlZj1cImh0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tL1wiIHRpdGxlPVwiRnJlZSBXZWF0aGVyIEFQSVwiPjxpbWcgc3JjPScvL2Nkbi53ZWF0aGVyYXBpLmNvbS92NC9pbWFnZXMvd2VhdGhlcmFwaV9sb2dvLnBuZycgYWx0PVwiV2VhdGhlciBkYXRhIGJ5IFdlYXRoZXJBUEkuY29tXCIgYm9yZGVyPVwiMFwiPjwvYT5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgZGlzcGxheVdlYXRoZXIgPSBhc3luYyAoc2VhcmNoUmVzdWx0KSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2hSZXN1bHQpO1xuICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGF3YWl0IGNyZWF0ZVdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcblxuICBib2R5LmFwcGVuZCh3ZWF0aGVyQ2FyZCk7XG59O1xuXG5jb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSAocG9zaXRpb24pID0+IHtcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gIGNvbnN0IHNlYXJjaFZhbCA9IGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xuICBkaXNwbGF5V2VhdGhlcihzZWFyY2hWYWwpO1xufTtcblxuY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4gZXJyb3I7XG5cbi8vIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcblxuY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hGb3JtID0gY3JlYXRlU2VhcmNoRm9ybSgpO1xuICBib2R5LmFwcGVuZChzZWFyY2hGb3JtKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IHNlYXJjaEJhciB9ID0gc2VhcmNoRm9ybTtcbiAgICBkaXNwbGF5V2VhdGhlcihzZWFyY2hCYXIudmFsdWUpO1xuICB9KTtcbiAgLy8gZm9ybUNvbnRyb2xsZXIoc2VhcmNoRm9ybSk7XG4gIC8vIHJldHVybiBzZWFyY2hGb3JtO1xufTtcblxuc2VhcmNoKCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudFdpdGhDbGFzcyIsInNldENvbnRlbnQiLCJjcmVhdGVDYXJkIiwidGl0bGUiLCJjbGFzc05hbWUiLCJjb250ZW50IiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlRWxlbWVudCIsImFwcGVuZCIsImNvbnRlbnRFbGVtZW50IiwiY3JlYXRlQXN0cm9DYXJkIiwiYXN0cm9EYXRhIiwiaXNNb29uIiwicmlzZSIsInNldCIsImlsbHVtaW5hdGlvbiIsImNhcmROYW1lIiwiY2FyZENsYXNzIiwiY3JlYXRlV2luZENhcmQiLCJ3aW5kIiwic3BlZWQiLCJndXN0IiwibWF4Iiwia3BoIiwiZGlyIiwiY3JlYXRlRGV0YWlsc1NlY3Rpb24iLCJfcmVmIiwidGVtcCIsImFzdHJvIiwiZmVlbCIsInV2Iiwic3VuIiwibW9vbiIsImRldGFpbHNTZWN0aW9uIiwiZmVlbENhcmQiLCJjIiwidXZDYXJkIiwid2luZENhcmQiLCJzdW5DYXJkIiwibW9vbkNhcmQiLCJkZXRhaWxDYXJkcyIsImNyZWF0ZUZvcmVjYXN0IiwiY3JlYXRlRm9yZWNhc3RTZWN0aW9uIiwiaG91ciIsImRheXMiLCJmb3JlY2FzdFNlY3Rpb24iLCJob3VyRm9yZWNhc3QiLCJkYXlzRm9yZWNhc3QiLCJlcnIiLCJFcnJvciIsImNyZWF0ZUluZm9TZWN0aW9uIiwibmFtZSIsInJlZ2lvbiIsImluZm9TZWN0aW9uIiwibG9jYXRpb25OYW1lIiwibG9jYXRpb25SZWdpb24iLCJlcnJvciIsImNyZWF0ZVRvZGF5U2VjdGlvbiIsImNvbmRpdGlvbiIsInRvZGF5U2VjdGlvbiIsImN1cnJlbnRUZW1wIiwiY3VycmVudCIsImNvbmRpdGlvbnNEZXNjIiwidGV4dCIsImNyZWF0ZUNvbkljb25FbGVtZW50IiwiY3JlYXRlV2VhdGhlck5vZGUiLCJ3ZWF0aGVyRGF0YSIsImlzSG91cmx5Iiwibm9kZUNsYXNzIiwibm9kZVRpdGxlIiwiZGF0ZSIsIndlYXRoZXJOb2RlIiwiY29uZGl0aW9uSWNvbiIsImF2ZyIsIm1pbiIsIndlYXRoZXJEYXRhQXJyIiwiZm9yZWNhc3RDbGFzcyIsImZvcmVjYXN0Iiwid2VhdGhlck5vZGVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImZvckVhY2giLCJ0YWdOYW1lIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwibm9kZUNvbnRlbnQiLCJpY29uIiwiY29tcGxldGVVUkwiLCJnZXRJY29uIiwiZmV0Y2giLCJpY29uSW1nIiwic3JjIiwidXJsIiwiY3JlYXRlU3VibWl0QnRuIiwic3VibWl0QnRuIiwidHlwZSIsImlkIiwiY3JlYXRlU2VhcmNoQmFyIiwibGFiZWwiLCJmb3IiLCJzZWFyY2hCYXIiLCJwbGFjZWhvbGRlciIsImNyZWF0ZVNlYXJjaEZvcm0iLCJzZWFyY2hGb3JtIiwiY3JlYXRlV2VhdGhlckNhcmQiLCJpbmZvIiwidG9kYXkiLCJkZXRhaWxzIiwid2VhdGhlckNhcmQiLCJpbmZvU2VjIiwidG9kYXlTZWMiLCJmb3JlY2FzdFNlYyIsImRldGFpbHNTZWMiLCJnZXRUb2RheVdlYXRoZXIiLCJ0ZW1wX2MiLCJ0ZW1wX2YiLCJtYXh0ZW1wX2MiLCJtYXh0ZW1wX2YiLCJmb3JlY2FzdGRheSIsImRheSIsIm1pbnRlbXBfYyIsIm1pbnRlbXBfZiIsImYiLCJnZXRUZW1wIiwiZmVlbHNsaWtlX2MiLCJmZWVsc2xpa2VfZiIsImdldFdpbmQiLCJ3aW5kX2twaCIsIndpbmRfbXBoIiwid2luZF9kaXIiLCJndXN0X2twaCIsImd1c3RfbXBoIiwibWF4d2luZF9rcGgiLCJtYXh3aW5kX21waCIsIm1waCIsImdldEFzdHJvIiwic3VucmlzZSIsInN1bnNldCIsIm1vb25yaXNlIiwibW9vbnNldCIsIm1vb25faWxsdW1pbmF0aW9uIiwiZ2V0RGV0YWlscyIsInBhcnNlSG91cmx5Rm9yZWNhc3QiLCJmb3JlY2FzdERhdGFIb3VycyIsImZvcmVjYXN0SG91cmx5IiwiaG91ckRhdGEiLCJ0aW1lIiwic3BsaXQiLCJob3VyV2VhdGhlciIsInB1c2giLCJwYXJzZURhaWx5Rm9yZWNhc3QiLCJmb3JlY2FzdERheXNEYXRhIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3REYXkiLCJhdmd0ZW1wX2MiLCJhdmd0ZW1wX2YiLCJ3ZWF0aGVyRGF5IiwiZ2V0Rm9yZWNhc3QiLCJmaWx0ZXJXZWF0aGVyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsImFwaUtleSIsImJhc2VVUkwiLCJmb3JlY2FzdFdlYXRoZXIiLCJnZXRXZWF0aGVyRGF0YSIsIndlYXRoZXJVUkwiLCJ3ZWF0aGVyUmVzcG9uc2UiLCJqc29uIiwiZ2V0V2VhdGhlciIsImNsZWFuRGF0YSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheVdlYXRoZXIiLCJzZWFyY2hSZXN1bHQiLCJzdWNjZXNzQ2FsbGJhY2siLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwic2VhcmNoVmFsIiwiZXJyb3JDYWxsYmFjayIsInNlYXJjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9
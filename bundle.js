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
/* harmony import */ var _elements_temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/temperature */ "./src/components/display/elements/temperature.js");
/* harmony import */ var _elements_wind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/wind */ "./src/components/display/elements/wind.js");
/* harmony import */ var _elements_astro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/astro */ "./src/components/display/elements/astro.js");



const createMoonCard = _ref => {
  let {
    rise,
    set,
    illumination
  } = _ref;
  const card = document.createElement('div');
  card.classList.add('moon');
  const moonriseInfo = (0,_elements_astro__WEBPACK_IMPORTED_MODULE_2__.createMoonriseElement)(rise);
  card.append(moonriseInfo);
  const moonsetInfo = (0,_elements_astro__WEBPACK_IMPORTED_MODULE_2__.createMoonsetElement)(set);
  card.append(moonsetInfo);
  const moonIllInfo = (0,_elements_astro__WEBPACK_IMPORTED_MODULE_2__.createMoonIllElement)(illumination);
  card.append(moonIllInfo);
  return card;
};
const createSunCard = _ref2 => {
  let {
    rise,
    set
  } = _ref2;
  const card = document.createElement('div');
  card.classList.add('sun');
  const sunriseInfo = (0,_elements_astro__WEBPACK_IMPORTED_MODULE_2__.createSunriseElement)(rise);
  card.append(sunriseInfo);
  const sunsetInfo = (0,_elements_astro__WEBPACK_IMPORTED_MODULE_2__.createSunsetElement)(set);
  card.append(sunsetInfo);
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
  const card = document.createElement('div');
  card.classList.add('wind');
  const speedInfo = (0,_elements_wind__WEBPACK_IMPORTED_MODULE_1__.createSpeedElement)(speed);
  card.append(speedInfo);
  const gustInfo = (0,_elements_wind__WEBPACK_IMPORTED_MODULE_1__.createGustElement)(gust);
  card.append(gustInfo);
  const maxInfo = (0,_elements_wind__WEBPACK_IMPORTED_MODULE_1__.createMaxSpeedElement)(max);
  card.append(maxInfo);
  const dirInfo = (0,_elements_wind__WEBPACK_IMPORTED_MODULE_1__.createDirectionElement)(dir);
  card.append(dirInfo);
  return card;
};
const createUVICard = uvVal => {
  const card = document.createElement('div');
  card.classList.add('uv');
  const element = (0,_elements_temperature__WEBPACK_IMPORTED_MODULE_0__.createUVIElement)(uvVal);
  card.append(element);
  return card;
};
const createFeelsLikeCard = feelsLikeTemp => {
  const card = document.createElement('div');
  card.classList.add('feelsLike');
  const element = (0,_elements_temperature__WEBPACK_IMPORTED_MODULE_0__.createFeelsLikeElement)(feelsLikeTemp);
  card.append(element);
  return card;
};
const createDetailsSection = _ref3 => {
  let {
    temp,
    wind,
    astro
  } = _ref3;
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
  const feelCard = createFeelsLikeCard(feel.c);
  detailsSection.append(feelCard);
  const uvCard = createUVICard(uv);
  detailsSection.append(uvCard);
  const windCard = createWindCard(wind);
  detailsSection.append(windCard);
  const sunCard = createSunCard(sun);
  detailsSection.append(sunCard);
  const moonCard = createMoonCard(moon);
  detailsSection.append(moonCard);
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
    console.error('Error crating forecast section:', err);
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
/* harmony import */ var _elements_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/info */ "./src/components/display/elements/info.js");

const createInfoSection = _ref => {
  let {
    name,
    region
  } = _ref;
  const infoSection = document.createElement('section');
  infoSection.classList.add('info');
  infoSection.append((0,_elements_info__WEBPACK_IMPORTED_MODULE_0__.createNameElement)(name));
  infoSection.append((0,_elements_info__WEBPACK_IMPORTED_MODULE_0__.createRegionElement)(region));
  return infoSection;
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
/* harmony import */ var _elements_temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/temperature */ "./src/components/display/elements/temperature.js");
/* harmony import */ var _elements_conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/conditions */ "./src/components/display/elements/conditions.js");


const createTodaySection = _ref => {
  let {
    temp,
    condition
  } = _ref;
  const todaySection = document.createElement('section');
  todaySection.classList.add('today');
  todaySection.append((0,_elements_temperature__WEBPACK_IMPORTED_MODULE_0__.createCurrentTempElement)(temp.c.current));
  todaySection.append((0,_elements_conditions__WEBPACK_IMPORTED_MODULE_1__.createConTextElement)(condition));
  return todaySection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodaySection);

/***/ }),

/***/ "./src/components/display/elements/astro.js":
/*!**************************************************!*\
  !*** ./src/components/display/elements/astro.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMoonIllElement: () => (/* binding */ createMoonIllElement),
/* harmony export */   createMoonriseElement: () => (/* binding */ createMoonriseElement),
/* harmony export */   createMoonsetElement: () => (/* binding */ createMoonsetElement),
/* harmony export */   createSunriseElement: () => (/* binding */ createSunriseElement),
/* harmony export */   createSunsetElement: () => (/* binding */ createSunsetElement)
/* harmony export */ });
const astroClassName = 'astro';
const createSunriseElement = sunriseTime => {
  const sunrise = document.createElement('p');
  sunrise.classList.add('sunrise');
  sunrise.classList.add(astroClassName);
  sunrise.textContent = `Sunrise: ${sunriseTime}`;
  return sunrise;
};
const createSunsetElement = sunsetTime => {
  const sunset = document.createElement('p');
  sunset.classList.add('sunset');
  sunset.classList.add(astroClassName);
  sunset.textContent = `Sunset: ${sunsetTime}`;
  return sunset;
};
const createMoonriseElement = moonriseTime => {
  const moonrise = document.createElement('p');
  moonrise.classList.add('moonrise');
  moonrise.classList.add(astroClassName);
  moonrise.textContent = `Moonrise: ${moonriseTime}`;
  return moonrise;
};
const createMoonsetElement = moonsetTime => {
  const moonset = document.createElement('p');
  moonset.classList.add('moonset');
  moonset.classList.add(astroClassName);
  moonset.textContent = `Moonset: ${moonsetTime}`;
  return moonset;
};
const createMoonIllElement = moonIllValue => {
  const moonIll = document.createElement('p');
  moonIll.classList.add('moonIll');
  moonIll.classList.add(astroClassName);
  moonIll.textContent = `Moon Illumination: ${moonIllValue}`;
  return moonIll;
};


/***/ }),

/***/ "./src/components/display/elements/conditions.js":
/*!*******************************************************!*\
  !*** ./src/components/display/elements/conditions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConIconElement: () => (/* binding */ createConIconElement),
/* harmony export */   createConTextElement: () => (/* binding */ createConTextElement)
/* harmony export */ });
const createConTextElement = _ref => {
  let {
    text
  } = _ref;
  const description = document.createElement('p');
  description.classList.add('description');
  description.classList.add('conditions');
  description.textContent = `It's ${text}`;
  return description;
};
const createConIconElement = async _ref2 => {
  let {
    icon
  } = _ref2;
  try {
    const completeURL = `https:${icon}`;
    const getIcon = await fetch(completeURL);
    const iconImg = document.createElement('img');
    iconImg.classList.add('icon');
    iconImg.classList.add('conditions');
    iconImg.src = getIcon.url;
    return iconImg;
  } catch (err) {
    throw new Error(err);
  }
};


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
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature */ "./src/components/display/elements/temperature.js");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditions */ "./src/components/display/elements/conditions.js");


const createWeatherNode = async (weatherData, isHourly) => {
  const {
    temp,
    condition
  } = weatherData;
  const nodeClass = isHourly ? 'hourWeather' : 'dayWeather';
  const nodeTitle = isHourly ? weatherData.hour : weatherData.date;
  const weatherNode = document.createElement('div');
  weatherNode.classList.add(nodeClass);
  const weatherTitle = document.createElement('p');
  weatherTitle.classList.add('nodeTitle');
  weatherTitle.textContent = nodeTitle;
  weatherNode.append(weatherTitle);
  const conditionIcon = await (0,_conditions__WEBPACK_IMPORTED_MODULE_1__.createConIconElement)(condition);
  weatherNode.append(conditionIcon);
  if (isHourly) {
    const currentTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createCurrentTempElement)(temp.c);
    weatherNode.append(currentTemp);
  } else {
    const avgTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createCurrentTempElement)(temp.c.avg);
    weatherNode.append(avgTemp);
    const maxTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createMaxTempElement)(temp.c.max);
    weatherNode.append(maxTemp);
    const minTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createMinTempElement)(temp.c.min);
    weatherNode.append(minTemp);
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

/***/ "./src/components/display/elements/info.js":
/*!*************************************************!*\
  !*** ./src/components/display/elements/info.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNameElement: () => (/* binding */ createNameElement),
/* harmony export */   createRegionElement: () => (/* binding */ createRegionElement)
/* harmony export */ });
const infoClassName = 'locationInfo';
const createNameElement = name => {
  const nameElement = document.createElement('h2');
  nameElement.classList.add('name');
  nameElement.classList.add(infoClassName);
  nameElement.textContent = name;
  return nameElement;
};
const createRegionElement = region => {
  const regionElement = document.createElement('p');
  regionElement.classList.add('region');
  regionElement.classList.add(infoClassName);
  regionElement.textContent = region;
  return regionElement;
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

/***/ "./src/components/display/elements/temperature.js":
/*!********************************************************!*\
  !*** ./src/components/display/elements/temperature.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCurrentTempElement: () => (/* binding */ createCurrentTempElement),
/* harmony export */   createFeelsLikeElement: () => (/* binding */ createFeelsLikeElement),
/* harmony export */   createMaxTempElement: () => (/* binding */ createMaxTempElement),
/* harmony export */   createMinTempElement: () => (/* binding */ createMinTempElement),
/* harmony export */   createUVIElement: () => (/* binding */ createUVIElement)
/* harmony export */ });
const tempClassName = 'temp';
const createCurrentTempElement = currentTemp => {
  const current = document.createElement('p');
  current.classList.add('current');
  current.classList.add(tempClassName);
  current.textContent = `${currentTemp}°C`;
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
  minTemp.textContent = `Min: ${minTempValue}°C`;
  return minTemp;
};
const createMaxTempElement = maxTempValue => {
  const maxTemp = document.createElement('p');
  maxTemp.classList.add('maxTemp');
  maxTemp.classList.add(tempClassName);
  maxTemp.textContent = `Max: ${maxTempValue}°C`;
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

/***/ "./src/components/display/elements/wind.js":
/*!*************************************************!*\
  !*** ./src/components/display/elements/wind.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDirectionElement: () => (/* binding */ createDirectionElement),
/* harmony export */   createGustElement: () => (/* binding */ createGustElement),
/* harmony export */   createMaxSpeedElement: () => (/* binding */ createMaxSpeedElement),
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
const createDirectionElement = windDirection => {
  const direction = document.createElement('p');
  direction.classList.add('direction');
  direction.classList.add(windClassName);
  direction.textContent = `Direction: ${windDirection}`;
  return direction;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDM0IsQ0FBQztBQUVELE1BQU1DLGFBQWEsR0FBSWhLLEtBQUssSUFBS0EsS0FBSzs7QUFFdEM7O0FBRUEsTUFBTWlLLE1BQU0sR0FBR0EsQ0FBQSxLQUFNO0VBQ25CLE1BQU12RixVQUFVLEdBQUdELG1GQUFnQixDQUFDLENBQUM7RUFDckM2RSxJQUFJLENBQUNyTSxNQUFNLENBQUN5SCxVQUFVLENBQUM7RUFFdkJBLFVBQVUsQ0FBQ3dGLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsS0FBSyxJQUFLO0lBQy9DQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLE1BQU07TUFBRTdGO0lBQVUsQ0FBQyxHQUFHRyxVQUFVO0lBQ2hDOEUsY0FBYyxDQUFDakYsU0FBUyxDQUFDOEYsS0FBSyxDQUFDO0VBQ2pDLENBQUMsQ0FBQztFQUNGO0VBQ0E7QUFDRixDQUFDOztBQUVESixNQUFNLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2NhcmRTZWN0aW9ucy9kZXRhaWxDYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvY2FyZFNlY3Rpb25zL2ZvcmVjYXN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvY2FyZFNlY3Rpb25zL2xvY2F0aW9uSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvY2FyZFNlY3Rpb25zL3RvZGF5V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvYXN0cm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL2NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9zZWFyY2hGb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy90ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvd2luZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvd2VhdGhlckNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VydmljZXMvZmlsdGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXJ2aWNlcy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL3dlYXRoZXJhcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/MzQyZiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWVsc0xpa2VFbGVtZW50LFxuICBjcmVhdGVVVklFbGVtZW50LFxufSBmcm9tICcuLi9lbGVtZW50cy90ZW1wZXJhdHVyZSc7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVNwZWVkRWxlbWVudCxcbiAgY3JlYXRlR3VzdEVsZW1lbnQsXG4gIGNyZWF0ZURpcmVjdGlvbkVsZW1lbnQsXG4gIGNyZWF0ZU1heFNwZWVkRWxlbWVudCxcbn0gZnJvbSAnLi4vZWxlbWVudHMvd2luZCc7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVN1bnJpc2VFbGVtZW50LFxuICBjcmVhdGVTdW5zZXRFbGVtZW50LFxuICBjcmVhdGVNb29ucmlzZUVsZW1lbnQsXG4gIGNyZWF0ZU1vb25zZXRFbGVtZW50LFxuICBjcmVhdGVNb29uSWxsRWxlbWVudCxcbn0gZnJvbSAnLi4vZWxlbWVudHMvYXN0cm8nO1xuXG5jb25zdCBjcmVhdGVNb29uQ2FyZCA9ICh7IHJpc2UsIHNldCwgaWxsdW1pbmF0aW9uIH0pID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21vb24nKTtcblxuICBjb25zdCBtb29ucmlzZUluZm8gPSBjcmVhdGVNb29ucmlzZUVsZW1lbnQocmlzZSk7XG4gIGNhcmQuYXBwZW5kKG1vb25yaXNlSW5mbyk7XG5cbiAgY29uc3QgbW9vbnNldEluZm8gPSBjcmVhdGVNb29uc2V0RWxlbWVudChzZXQpO1xuICBjYXJkLmFwcGVuZChtb29uc2V0SW5mbyk7XG5cbiAgY29uc3QgbW9vbklsbEluZm8gPSBjcmVhdGVNb29uSWxsRWxlbWVudChpbGx1bWluYXRpb24pO1xuICBjYXJkLmFwcGVuZChtb29uSWxsSW5mbyk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVTdW5DYXJkID0gKHsgcmlzZSwgc2V0IH0pID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3N1bicpO1xuXG4gIGNvbnN0IHN1bnJpc2VJbmZvID0gY3JlYXRlU3VucmlzZUVsZW1lbnQocmlzZSk7XG4gIGNhcmQuYXBwZW5kKHN1bnJpc2VJbmZvKTtcblxuICBjb25zdCBzdW5zZXRJbmZvID0gY3JlYXRlU3Vuc2V0RWxlbWVudChzZXQpO1xuICBjYXJkLmFwcGVuZChzdW5zZXRJbmZvKTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVdpbmRDYXJkID0gKHdpbmQpID0+IHtcbiAgY29uc3QgeyBzcGVlZCwgZ3VzdCwgbWF4IH0gPSB3aW5kLmtwaDtcbiAgY29uc3QgeyBkaXIgfSA9IHdpbmQ7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3aW5kJyk7XG5cbiAgY29uc3Qgc3BlZWRJbmZvID0gY3JlYXRlU3BlZWRFbGVtZW50KHNwZWVkKTtcbiAgY2FyZC5hcHBlbmQoc3BlZWRJbmZvKTtcblxuICBjb25zdCBndXN0SW5mbyA9IGNyZWF0ZUd1c3RFbGVtZW50KGd1c3QpO1xuICBjYXJkLmFwcGVuZChndXN0SW5mbyk7XG5cbiAgY29uc3QgbWF4SW5mbyA9IGNyZWF0ZU1heFNwZWVkRWxlbWVudChtYXgpO1xuICBjYXJkLmFwcGVuZChtYXhJbmZvKTtcblxuICBjb25zdCBkaXJJbmZvID0gY3JlYXRlRGlyZWN0aW9uRWxlbWVudChkaXIpO1xuICBjYXJkLmFwcGVuZChkaXJJbmZvKTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVVWSUNhcmQgPSAodXZWYWwpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3V2Jyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZVVWSUVsZW1lbnQodXZWYWwpO1xuICBjYXJkLmFwcGVuZChlbGVtZW50KTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmNvbnN0IGNyZWF0ZUZlZWxzTGlrZUNhcmQgPSAoZmVlbHNMaWtlVGVtcCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmVlbHNMaWtlJyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQoZmVlbHNMaWtlVGVtcCk7XG4gIGNhcmQuYXBwZW5kKGVsZW1lbnQpO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlRGV0YWlsc1NlY3Rpb24gPSAoeyB0ZW1wLCB3aW5kLCBhc3RybyB9KSA9PiB7XG4gIGNvbnN0IHsgZmVlbCwgdXYgfSA9IHRlbXA7XG4gIGNvbnN0IHsgc3VuLCBtb29uIH0gPSBhc3RybztcblxuICBjb25zdCBkZXRhaWxzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgZGV0YWlsc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGV0YWlsc1NlY3Rpb24nKTtcblxuICBjb25zdCBmZWVsQ2FyZCA9IGNyZWF0ZUZlZWxzTGlrZUNhcmQoZmVlbC5jKTtcbiAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKGZlZWxDYXJkKTtcblxuICBjb25zdCB1dkNhcmQgPSBjcmVhdGVVVklDYXJkKHV2KTtcbiAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKHV2Q2FyZCk7XG5cbiAgY29uc3Qgd2luZENhcmQgPSBjcmVhdGVXaW5kQ2FyZCh3aW5kKTtcbiAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKHdpbmRDYXJkKTtcblxuICBjb25zdCBzdW5DYXJkID0gY3JlYXRlU3VuQ2FyZChzdW4pO1xuICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQoc3VuQ2FyZCk7XG5cbiAgY29uc3QgbW9vbkNhcmQgPSBjcmVhdGVNb29uQ2FyZChtb29uKTtcbiAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKG1vb25DYXJkKTtcblxuICByZXR1cm4gZGV0YWlsc1NlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZXRhaWxzU2VjdGlvbjtcbiIsImltcG9ydCBjcmVhdGVGb3JlY2FzdCBmcm9tICcuLi9lbGVtZW50cy9mb3JlY2FzdCc7XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbiA9IGFzeW5jICh7IGhvdXIsIGRheXMgfSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGZvcmVjYXN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xuXG4gIHRyeSB7XG4gICAgaWYgKGhvdXIpIHtcbiAgICAgIGNvbnN0IGhvdXJGb3JlY2FzdCA9IGF3YWl0IGNyZWF0ZUZvcmVjYXN0KGhvdXIsIHRydWUpO1xuICAgICAgZm9yZWNhc3RTZWN0aW9uLmFwcGVuZChob3VyRm9yZWNhc3QpO1xuICAgIH1cblxuICAgIGlmIChkYXlzKSB7XG4gICAgICBjb25zdCBkYXlzRm9yZWNhc3QgPSBhd2FpdCBjcmVhdGVGb3JlY2FzdChkYXlzKTtcbiAgICAgIGZvcmVjYXN0U2VjdGlvbi5hcHBlbmQoZGF5c0ZvcmVjYXN0KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyYXRpbmcgZm9yZWNhc3Qgc2VjdGlvbjonLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcmVjYXN0U2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbjtcbiIsImltcG9ydCB7IGNyZWF0ZU5hbWVFbGVtZW50LCBjcmVhdGVSZWdpb25FbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvaW5mbyc7XG5cbmNvbnN0IGNyZWF0ZUluZm9TZWN0aW9uID0gKHsgbmFtZSwgcmVnaW9uIH0pID0+IHtcbiAgY29uc3QgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGluZm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICBpbmZvU2VjdGlvbi5hcHBlbmQoY3JlYXRlTmFtZUVsZW1lbnQobmFtZSkpO1xuICBpbmZvU2VjdGlvbi5hcHBlbmQoY3JlYXRlUmVnaW9uRWxlbWVudChyZWdpb24pKTtcblxuICByZXR1cm4gaW5mb1NlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvU2VjdGlvbjtcbiIsImltcG9ydCB7IGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL3RlbXBlcmF0dXJlJztcbmltcG9ydCB7IGNyZWF0ZUNvblRleHRFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvY29uZGl0aW9ucyc7XG5cbmNvbnN0IGNyZWF0ZVRvZGF5U2VjdGlvbiA9ICh7IHRlbXAsIGNvbmRpdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHRvZGF5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgdG9kYXlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG5cbiAgdG9kYXlTZWN0aW9uLmFwcGVuZChjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jLmN1cnJlbnQpKTtcbiAgdG9kYXlTZWN0aW9uLmFwcGVuZChjcmVhdGVDb25UZXh0RWxlbWVudChjb25kaXRpb24pKTtcblxuICByZXR1cm4gdG9kYXlTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kYXlTZWN0aW9uO1xuIiwiY29uc3QgYXN0cm9DbGFzc05hbWUgPSAnYXN0cm8nO1xuXG5jb25zdCBjcmVhdGVTdW5yaXNlRWxlbWVudCA9IChzdW5yaXNlVGltZSkgPT4ge1xuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzdW5yaXNlLmNsYXNzTGlzdC5hZGQoJ3N1bnJpc2UnKTtcbiAgc3VucmlzZS5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgc3VucmlzZS50ZXh0Q29udGVudCA9IGBTdW5yaXNlOiAke3N1bnJpc2VUaW1lfWA7XG5cbiAgcmV0dXJuIHN1bnJpc2U7XG59O1xuXG5jb25zdCBjcmVhdGVTdW5zZXRFbGVtZW50ID0gKHN1bnNldFRpbWUpID0+IHtcbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzdW5zZXQuY2xhc3NMaXN0LmFkZCgnc3Vuc2V0Jyk7XG4gIHN1bnNldC5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gYFN1bnNldDogJHtzdW5zZXRUaW1lfWA7XG5cbiAgcmV0dXJuIHN1bnNldDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25yaXNlRWxlbWVudCA9IChtb29ucmlzZVRpbWUpID0+IHtcbiAgY29uc3QgbW9vbnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1vb25yaXNlLmNsYXNzTGlzdC5hZGQoJ21vb25yaXNlJyk7XG4gIG1vb25yaXNlLmNsYXNzTGlzdC5hZGQoYXN0cm9DbGFzc05hbWUpO1xuICBtb29ucmlzZS50ZXh0Q29udGVudCA9IGBNb29ucmlzZTogJHttb29ucmlzZVRpbWV9YDtcblxuICByZXR1cm4gbW9vbnJpc2U7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uc2V0RWxlbWVudCA9IChtb29uc2V0VGltZSkgPT4ge1xuICBjb25zdCBtb29uc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtb29uc2V0LmNsYXNzTGlzdC5hZGQoJ21vb25zZXQnKTtcbiAgbW9vbnNldC5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgbW9vbnNldC50ZXh0Q29udGVudCA9IGBNb29uc2V0OiAke21vb25zZXRUaW1lfWA7XG5cbiAgcmV0dXJuIG1vb25zZXQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uSWxsRWxlbWVudCA9IChtb29uSWxsVmFsdWUpID0+IHtcbiAgY29uc3QgbW9vbklsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbW9vbklsbC5jbGFzc0xpc3QuYWRkKCdtb29uSWxsJyk7XG4gIG1vb25JbGwuY2xhc3NMaXN0LmFkZChhc3Ryb0NsYXNzTmFtZSk7XG4gIG1vb25JbGwudGV4dENvbnRlbnQgPSBgTW9vbiBJbGx1bWluYXRpb246ICR7bW9vbklsbFZhbHVlfWA7XG5cbiAgcmV0dXJuIG1vb25JbGw7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVTdW5yaXNlRWxlbWVudCxcbiAgY3JlYXRlU3Vuc2V0RWxlbWVudCxcbiAgY3JlYXRlTW9vbnJpc2VFbGVtZW50LFxuICBjcmVhdGVNb29uc2V0RWxlbWVudCxcbiAgY3JlYXRlTW9vbklsbEVsZW1lbnQsXG59O1xuIiwiY29uc3QgY3JlYXRlQ29uVGV4dEVsZW1lbnQgPSAoeyB0ZXh0IH0pID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbnMnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgSXQncyAke3RleHR9YDtcblxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVDb25JY29uRWxlbWVudCA9IGFzeW5jICh7IGljb24gfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbXBsZXRlVVJMID0gYGh0dHBzOiR7aWNvbn1gO1xuICAgIGNvbnN0IGdldEljb24gPSBhd2FpdCBmZXRjaChjb21wbGV0ZVVSTCk7XG5cbiAgICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbkltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgaWNvbkltZy5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25zJyk7XG4gICAgaWNvbkltZy5zcmMgPSBnZXRJY29uLnVybDtcblxuICAgIHJldHVybiBpY29uSW1nO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29uSWNvbkVsZW1lbnQsIGNyZWF0ZUNvblRleHRFbGVtZW50IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQsXG4gIGNyZWF0ZU1heFRlbXBFbGVtZW50LFxuICBjcmVhdGVNaW5UZW1wRWxlbWVudCxcbn0gZnJvbSAnLi90ZW1wZXJhdHVyZSc7XG5cbmltcG9ydCB7IGNyZWF0ZUNvbkljb25FbGVtZW50IH0gZnJvbSAnLi9jb25kaXRpb25zJztcblxuY29uc3QgY3JlYXRlV2VhdGhlck5vZGUgPSBhc3luYyAod2VhdGhlckRhdGEsIGlzSG91cmx5KSA9PiB7XG4gIGNvbnN0IHsgdGVtcCwgY29uZGl0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcblxuICBjb25zdCBub2RlQ2xhc3MgPSBpc0hvdXJseSA/ICdob3VyV2VhdGhlcicgOiAnZGF5V2VhdGhlcic7XG4gIGNvbnN0IG5vZGVUaXRsZSA9IGlzSG91cmx5ID8gd2VhdGhlckRhdGEuaG91ciA6IHdlYXRoZXJEYXRhLmRhdGU7XG5cbiAgY29uc3Qgd2VhdGhlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlck5vZGUuY2xhc3NMaXN0LmFkZChub2RlQ2xhc3MpO1xuXG4gIGNvbnN0IHdlYXRoZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VhdGhlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ25vZGVUaXRsZScpO1xuICB3ZWF0aGVyVGl0bGUudGV4dENvbnRlbnQgPSBub2RlVGl0bGU7XG4gIHdlYXRoZXJOb2RlLmFwcGVuZCh3ZWF0aGVyVGl0bGUpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBhd2FpdCBjcmVhdGVDb25JY29uRWxlbWVudChjb25kaXRpb24pO1xuICB3ZWF0aGVyTm9kZS5hcHBlbmQoY29uZGl0aW9uSWNvbik7XG5cbiAgaWYgKGlzSG91cmx5KSB7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jKTtcbiAgICB3ZWF0aGVyTm9kZS5hcHBlbmQoY3VycmVudFRlbXApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGF2Z1RlbXAgPSBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jLmF2Zyk7XG4gICAgd2VhdGhlck5vZGUuYXBwZW5kKGF2Z1RlbXApO1xuXG4gICAgY29uc3QgbWF4VGVtcCA9IGNyZWF0ZU1heFRlbXBFbGVtZW50KHRlbXAuYy5tYXgpO1xuICAgIHdlYXRoZXJOb2RlLmFwcGVuZChtYXhUZW1wKTtcblxuICAgIGNvbnN0IG1pblRlbXAgPSBjcmVhdGVNaW5UZW1wRWxlbWVudCh0ZW1wLmMubWluKTtcbiAgICB3ZWF0aGVyTm9kZS5hcHBlbmQobWluVGVtcCk7XG4gIH1cblxuICByZXR1cm4gd2VhdGhlck5vZGU7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JlY2FzdCA9IGFzeW5jICh3ZWF0aGVyRGF0YUFyciwgaXNIb3VybHkpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RDbGFzcyA9IGlzSG91cmx5ID8gJ2hvdXJGb3JlY2FzdCcgOiAnZGF5c0ZvcmVjYXN0JztcblxuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JlY2FzdC5jbGFzc0xpc3QuYWRkKGZvcmVjYXN0Q2xhc3MpO1xuXG4gIGNvbnN0IHdlYXRoZXJOb2RlcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIHdlYXRoZXJEYXRhQXJyLm1hcChhc3luYyAod2VhdGhlckRhdGEpID0+XG4gICAgICBjcmVhdGVXZWF0aGVyTm9kZSh3ZWF0aGVyRGF0YSwgaXNIb3VybHkpXG4gICAgKVxuICApO1xuXG4gIHdlYXRoZXJOb2Rlcy5mb3JFYWNoKCh3ZWF0aGVyTm9kZSkgPT4ge1xuICAgIGZvcmVjYXN0LmFwcGVuZCh3ZWF0aGVyTm9kZSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb3JlY2FzdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcmVjYXN0O1xuIiwiY29uc3QgaW5mb0NsYXNzTmFtZSA9ICdsb2NhdGlvbkluZm8nO1xuXG5jb25zdCBjcmVhdGVOYW1lRWxlbWVudCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKGluZm9DbGFzc05hbWUpO1xuICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgcmV0dXJuIG5hbWVFbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlUmVnaW9uRWxlbWVudCA9IChyZWdpb24pID0+IHtcbiAgY29uc3QgcmVnaW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmVnaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyZWdpb24nKTtcbiAgcmVnaW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGluZm9DbGFzc05hbWUpO1xuICByZWdpb25FbGVtZW50LnRleHRDb250ZW50ID0gcmVnaW9uO1xuXG4gIHJldHVybiByZWdpb25FbGVtZW50O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmFtZUVsZW1lbnQsIGNyZWF0ZVJlZ2lvbkVsZW1lbnQgfTtcbiIsImNvbnN0IGNyZWF0ZVN1Ym1pdEJ0biA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXRCdG4nO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VhcmNoISc7XG5cbiAgcmV0dXJuIHN1Ym1pdEJ0bjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5mb3IgPSAnc2VhcmNoQmFyJztcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCYXIudHlwZSA9ICd0ZXh0JztcbiAgc2VhcmNoQmFyLnBsYWNlaG9sZGVyID0gJ0NpdHknO1xuICBzZWFyY2hCYXIubmFtZSA9ICdzZWFyY2hCYXInO1xuICBzZWFyY2hCYXIuaWQgPSAnc2VhcmNoQmFyJztcblxuICBsYWJlbC5hcHBlbmQoc2VhcmNoQmFyKTtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlU2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzZWFyY2hGb3JtJyk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gY3JlYXRlU2VhcmNoQmFyKCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kKHNlYXJjaEJhcik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlU3VibWl0QnRuKCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHNlYXJjaEZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hGb3JtO1xuIiwiY29uc3QgdGVtcENsYXNzTmFtZSA9ICd0ZW1wJztcblxuY29uc3QgY3JlYXRlQ3VycmVudFRlbXBFbGVtZW50ID0gKGN1cnJlbnRUZW1wKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICBjdXJyZW50LmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIGN1cnJlbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcH3CsENgO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuY29uc3QgY3JlYXRlRmVlbHNMaWtlRWxlbWVudCA9IChmZWVsc0xpa2VUZW1wKSA9PiB7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZScpO1xuICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmVlbHNMaWtlVGVtcH3CsENgO1xuXG4gIHJldHVybiBmZWVsc0xpa2U7XG59O1xuXG5jb25zdCBjcmVhdGVNaW5UZW1wRWxlbWVudCA9IChtaW5UZW1wVmFsdWUpID0+IHtcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdtaW5UZW1wJyk7XG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgbWluVGVtcC50ZXh0Q29udGVudCA9IGBNaW46ICR7bWluVGVtcFZhbHVlfcKwQ2A7XG5cbiAgcmV0dXJuIG1pblRlbXA7XG59O1xuXG5jb25zdCBjcmVhdGVNYXhUZW1wRWxlbWVudCA9IChtYXhUZW1wVmFsdWUpID0+IHtcbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdtYXhUZW1wJyk7XG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXg6ICR7bWF4VGVtcFZhbHVlfcKwQ2A7XG5cbiAgcmV0dXJuIG1heFRlbXA7XG59O1xuXG5jb25zdCBjcmVhdGVVVklFbGVtZW50ID0gKFVWSW5kZXgpID0+IHtcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdXZJbmRleC5jbGFzc0xpc3QuYWRkKCd1dicpO1xuICB1dkluZGV4LmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIHV2SW5kZXgudGV4dENvbnRlbnQgPSBgVVY6ICR7VVZJbmRleH1gO1xuXG4gIHJldHVybiB1dkluZGV4O1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlQ3VycmVudFRlbXBFbGVtZW50LFxuICBjcmVhdGVNYXhUZW1wRWxlbWVudCxcbiAgY3JlYXRlTWluVGVtcEVsZW1lbnQsXG4gIGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQsXG4gIGNyZWF0ZVVWSUVsZW1lbnQsXG59O1xuIiwiY29uc3Qgd2luZENsYXNzTmFtZSA9ICd3aW5kJztcblxuY29uc3QgY3JlYXRlU3BlZWRFbGVtZW50ID0gKHdpbmRTcGVlZCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnc3BlZWQnKTtcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgc3BlZWQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3aW5kU3BlZWR9YDtcblxuICByZXR1cm4gc3BlZWQ7XG59O1xuXG5jb25zdCBjcmVhdGVHdXN0RWxlbWVudCA9ICh3aW5kR3VzdCkgPT4ge1xuICBjb25zdCBndXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndXN0LmNsYXNzTGlzdC5hZGQoJ2d1c3QnKTtcbiAgZ3VzdC5jbGFzc0xpc3QuYWRkKHdpbmRDbGFzc05hbWUpO1xuICBndXN0LnRleHRDb250ZW50ID0gYEd1c3RzOiAke3dpbmRHdXN0fWA7XG5cbiAgcmV0dXJuIGd1c3Q7XG59O1xuXG5jb25zdCBjcmVhdGVNYXhTcGVlZEVsZW1lbnQgPSAobWF4U3BlZWQpID0+IHtcbiAgY29uc3QgbWF4V2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWF4V2luZC5jbGFzc0xpc3QuYWRkKCdtYXhXaW5kJyk7XG4gIG1heFdpbmQuY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgbWF4V2luZC50ZXh0Q29udGVudCA9IGBNYXggU3BlZWQ6ICR7bWF4U3BlZWR9YDtcblxuICByZXR1cm4gbWF4V2luZDtcbn07XG5cbmNvbnN0IGNyZWF0ZURpcmVjdGlvbkVsZW1lbnQgPSAod2luZERpcmVjdGlvbikgPT4ge1xuICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXJlY3Rpb24nKTtcbiAgZGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQod2luZENsYXNzTmFtZSk7XG4gIGRpcmVjdGlvbi50ZXh0Q29udGVudCA9IGBEaXJlY3Rpb246ICR7d2luZERpcmVjdGlvbn1gO1xuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVEaXJlY3Rpb25FbGVtZW50LFxuICBjcmVhdGVHdXN0RWxlbWVudCxcbiAgY3JlYXRlU3BlZWRFbGVtZW50LFxuICBjcmVhdGVNYXhTcGVlZEVsZW1lbnQsXG59O1xuIiwiaW1wb3J0IGNyZWF0ZUluZm9TZWN0aW9uIGZyb20gJy4vY2FyZFNlY3Rpb25zL2xvY2F0aW9uSW5mbyc7XG5pbXBvcnQgY3JlYXRlVG9kYXlTZWN0aW9uIGZyb20gJy4vY2FyZFNlY3Rpb25zL3RvZGF5V2VhdGhlcic7XG5pbXBvcnQgY3JlYXRlRm9yZWNhc3RTZWN0aW9uIGZyb20gJy4vY2FyZFNlY3Rpb25zL2ZvcmVjYXN0cyc7XG5pbXBvcnQgY3JlYXRlRGV0YWlsc1NlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvZGV0YWlsQ2FyZHMnO1xuXG5jb25zdCBjcmVhdGVXZWF0aGVyQ2FyZCA9IGFzeW5jICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IGluZm8sIHRvZGF5LCBmb3JlY2FzdCwgZGV0YWlscyB9ID0gd2VhdGhlckRhdGE7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJDYXJkJyk7XG5cbiAgY29uc3QgaW5mb1NlYyA9IGNyZWF0ZUluZm9TZWN0aW9uKGluZm8pO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoaW5mb1NlYyk7XG5cbiAgY29uc3QgdG9kYXlTZWMgPSBjcmVhdGVUb2RheVNlY3Rpb24odG9kYXkpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQodG9kYXlTZWMpO1xuXG4gIGNvbnN0IGZvcmVjYXN0U2VjID0gYXdhaXQgY3JlYXRlRm9yZWNhc3RTZWN0aW9uKGZvcmVjYXN0KTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKGZvcmVjYXN0U2VjKTtcblxuICBjb25zdCBkZXRhaWxzU2VjID0gY3JlYXRlRGV0YWlsc1NlY3Rpb24oZGV0YWlscyk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZChkZXRhaWxzU2VjKTtcblxuICByZXR1cm4gd2VhdGhlckNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXZWF0aGVyQ2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG5jb25zdCBnZXRUb2RheVdlYXRoZXIgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyB0ZW1wX2MsIHRlbXBfZiB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgY29uc3QgeyBtYXh0ZW1wX2MsIG1heHRlbXBfZiB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICBjb25zdCB7IG1pbnRlbXBfYywgbWludGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIGNvbnN0IHsgY29uZGl0aW9uIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICByZXR1cm4ge1xuICAgIHRlbXA6IHtcbiAgICAgIGM6IHsgY3VycmVudDogdGVtcF9jLCBtYXg6IG1heHRlbXBfYywgbWluOiBtaW50ZW1wX2MgfSxcbiAgICAgIGY6IHsgY3VycmVudDogdGVtcF9mLCBtYXg6IG1heHRlbXBfZiwgbWluOiBtaW50ZW1wX2YgfSxcbiAgICB9LFxuICAgIGNvbmRpdGlvbixcbiAgfTtcbn07XG5cbmNvbnN0IGdldFRlbXAgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBmZWVsc2xpa2VfYywgZmVlbHNsaWtlX2YsIHV2IH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICByZXR1cm4geyBmZWVsOiB7IGM6IGZlZWxzbGlrZV9jLCBmOiBmZWVsc2xpa2VfZiB9LCB1diB9O1xufTtcblxuY29uc3QgZ2V0V2luZCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHdpbmRfa3BoLCB3aW5kX21waCwgd2luZF9kaXIgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHsgZ3VzdF9rcGgsIGd1c3RfbXBoIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IG1heHdpbmRfa3BoLCBtYXh3aW5kX21waCB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICByZXR1cm4ge1xuICAgIGtwaDogeyBzcGVlZDogd2luZF9rcGgsIGd1c3Q6IGd1c3Rfa3BoLCBtYXg6IG1heHdpbmRfa3BoIH0sXG4gICAgbXBoOiB7IHNwZWVkOiB3aW5kX21waCwgZ3VzdDogZ3VzdF9tcGgsIG1heDogbWF4d2luZF9tcGggfSxcbiAgICBkaXI6IHdpbmRfZGlyLFxuICB9O1xufTtcbmNvbnN0IGdldEFzdHJvID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgc3VucmlzZSwgc3Vuc2V0IH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgeyBtb29ucmlzZSwgbW9vbnNldCB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgbW9vbl9pbGx1bWluYXRpb24gfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICByZXR1cm4ge1xuICAgIHN1bjogeyByaXNlOiBzdW5yaXNlLCBzZXQ6IHN1bnNldCB9LFxuICAgIG1vb246IHsgcmlzZTogbW9vbnJpc2UsIHNldDogbW9vbnNldCwgaWxsdW1pbmF0aW9uOiBtb29uX2lsbHVtaW5hdGlvbiB9LFxuICB9O1xufTtcblxuY29uc3QgZ2V0RGV0YWlscyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB0ZW1wID0gZ2V0VGVtcCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IHdpbmQgPSBnZXRXaW5kKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgYXN0cm8gPSBnZXRBc3Rybyh3ZWF0aGVyRGF0YSk7XG5cbiAgcmV0dXJuIHsgdGVtcCwgd2luZCwgYXN0cm8gfTtcbn07XG5cbmNvbnN0IHBhcnNlSG91cmx5Rm9yZWNhc3QgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgZm9yZWNhc3REYXRhSG91cnMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IFtdO1xuXG4gIGZvcmVjYXN0RGF0YUhvdXJzLmZvckVhY2goKGhvdXJEYXRhKSA9PiB7XG4gICAgY29uc3QgeyB0aW1lLCB0ZW1wX2MsIHRlbXBfZiwgY29uZGl0aW9uIH0gPSBob3VyRGF0YTtcbiAgICBjb25zdCBob3VyID0gdGltZS5zcGxpdCgnICcpWzFdO1xuXG4gICAgY29uc3QgaG91cldlYXRoZXIgPSB7XG4gICAgICBob3VyLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgdGVtcDogeyBjOiB0ZW1wX2MsIGY6IHRlbXBfZiB9LFxuICAgIH07XG5cbiAgICBmb3JlY2FzdEhvdXJseS5wdXNoKGhvdXJXZWF0aGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0SG91cmx5O1xufTtcbmNvbnN0IHBhcnNlRGFpbHlGb3JlY2FzdCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdERheXNEYXRhID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IFtdO1xuXG4gIGZvcmVjYXN0RGF5c0RhdGEuZm9yRWFjaCgoZm9yZWNhc3REYXkpID0+IHtcbiAgICBjb25zdCB7IGRhdGUgfSA9IGZvcmVjYXN0RGF5O1xuICAgIGNvbnN0IHsgbWF4dGVtcF9jLCBtYXh0ZW1wX2YgfSA9IGZvcmVjYXN0RGF5LmRheTtcbiAgICBjb25zdCB7IG1pbnRlbXBfYywgbWludGVtcF9mIH0gPSBmb3JlY2FzdERheS5kYXk7XG4gICAgY29uc3QgeyBhdmd0ZW1wX2MsIGF2Z3RlbXBfZiB9ID0gZm9yZWNhc3REYXkuZGF5O1xuICAgIGNvbnN0IHsgY29uZGl0aW9uIH0gPSBmb3JlY2FzdERheS5ob3VyWzEyXTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXkgPSB7XG4gICAgICBkYXRlLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgdGVtcDoge1xuICAgICAgICBjOiB7IGF2ZzogYXZndGVtcF9jLCBtYXg6IG1heHRlbXBfYywgbWluOiBtaW50ZW1wX2MgfSxcbiAgICAgICAgZjogeyBhdmc6IGF2Z3RlbXBfZiwgbWF4OiBtYXh0ZW1wX2YsIG1pbjogbWludGVtcF9mIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBmb3JlY2FzdERheXMucHVzaCh3ZWF0aGVyRGF5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0RGF5cztcbn07XG5cbmNvbnN0IGdldEZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gcGFyc2VIb3VybHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHBhcnNlRGFpbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG5cbiAgcmV0dXJuIHsgaG91cjogZm9yZWNhc3RIb3VybHksIGRheXM6IGZvcmVjYXN0RGF5cyB9O1xufTtcblxuY29uc3QgZmlsdGVyV2VhdGhlckRhdGEgPSBhc3luYyAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBjb25zdCB7IGxvY2F0aW9uIH0gPSB3ZWF0aGVyRGF0YTtcblxuICBjb25zdCBpbmZvID0geyBuYW1lOiBsb2NhdGlvbi5uYW1lLCByZWdpb246IGxvY2F0aW9uLnJlZ2lvbiB9O1xuICBjb25zdCB0b2RheSA9IGdldFRvZGF5V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGZvcmVjYXN0ID0gZ2V0Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICBjb25zdCBkZXRhaWxzID0gZ2V0RGV0YWlscyh3ZWF0aGVyRGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbmZvLFxuICAgIHRvZGF5LFxuICAgIGZvcmVjYXN0LFxuICAgIGRldGFpbHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJXZWF0aGVyRGF0YTtcbiIsImNvbnN0IGFwaUtleSA9ICdrZXk9MGVmOTIzNGZmZDgxNDBlMGJjZjE0NTk0MjIzMjUwOCc7XG5jb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJztcblxuY29uc3QgZm9yZWNhc3RXZWF0aGVyID0gJy9mb3JlY2FzdC5qc29uJztcbmNvbnN0IGZvcmVjYXN0RGF5cyA9ICdkYXlzPTcnO1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCB3ZWF0aGVyVVJMID0gYCR7YmFzZVVSTH0ke2ZvcmVjYXN0V2VhdGhlcn0/JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mJHtmb3JlY2FzdERheXN9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVUkwpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gIH1cbn07XG5cbi8vIGdldFdlYXRoZXJEYXRhKCdDYXBlIFRvd24nKS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcbi8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IGZpbHRlcldlYXRoZXJEYXRhIGZyb20gJy4vZmlsdGVyRGF0YSc7XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4gIGNvbnN0IGNsZWFuRGF0YSA9IGF3YWl0IGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgY29uc29sZS5sb2coY2xlYW5EYXRhKTtcbiAgcmV0dXJuIGNsZWFuRGF0YTtcbn07XG5cbi8vIGdldFdlYXRoZXIoJ0NhcGUgVG93bicpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvO1xufVxuXG4ud2VhdGhlckNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSAyMCUgMjAlO1xuICB3aWR0aDogNTByZW07XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDUlO1xufVxuXG4ubWFpbkNvbXAuaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA3MCU7XG4gIGdhcDogMTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5kZXRhaWxDb21wIHtcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xufVxuXG4jc2VhcmNoQmFyIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbn1cblxuLyogSW5saW5lICMyIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi5pbmZvIHtcbn1cblxuLmhvdXJGb3JlY2FzdCxcbi5kYXlzRm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKiBJbmxpbmUgIzAgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLndlYXRoZXJDYXJkIHtcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgMjAlIDIwJTsgKi9cbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAvKiBnYXA6IDUlOyAqL1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbiAgaGVpZ2h0OiA5MDBweDtcbn1cblxuLmRldGFpbHNTZWN0aW9uIHtcbiAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtOyAqL1xuICBncmlkLWF1dG8tY29sdW1uczogOHJlbTtcbn1cblxuLyogSW5saW5lICMxIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbmh0bWwge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vKiBJbmxpbmUgIzMgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLnRvZGF5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MCUgMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9kYXkgPiAuY3VycmVudC50ZW1wIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLnRvZGF5ID4gLmRlc2NyaXB0aW9uLmNvbmRpdGlvbnMge1xuICBtYXJnaW46IDA7XG59XG5cbi5uYW1lLmxvY2F0aW9uSW5mbyB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ucmVnaW9uLmxvY2F0aW9uSW5mbyB7XG4gIG1hcmdpbjogMDtcbn1cblxuc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbn1cblxuLyogSW5saW5lICMwIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi5pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIElubGluZSAjMiB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4uc2VhcmNoRm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi8qIElubGluZSAjMiB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4uc2VhcmNoRm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5ob3VyV2VhdGhlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRheXNGb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5V2VhdGhlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogSW5saW5lICMwIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi8qIC5ob3VyRm9yZWNhc3QsIC5kYXlzRm9yZWNhc3QgeyAqL1xuLmhvdXJGb3JlY2FzdCB7XG4gIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDUwcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLDRGQUE0Rjs7QUFFNUY7QUFDQTs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQSw0RkFBNEY7O0FBRTVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUEsNEZBQTRGOztBQUU1RjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDRGQUE0Rjs7QUFFNUYsbUNBQW1DO0FBQ25DO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvO1xcbn1cXG5cXG4ud2VhdGhlckNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDIwJSAyMCU7XFxuICB3aWR0aDogNTByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG4ubWFpbkNvbXAuaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA3MCU7XFxuICBnYXA6IDEwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxzU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZGV0YWlsQ29tcCB7XFxuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbn1cXG5cXG4jc2VhcmNoQmFyIHtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxufVxcblxcbi8qIElubGluZSAjMiB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi5pbmZvIHtcXG59XFxuXFxuLmhvdXJGb3JlY2FzdCxcXG4uZGF5c0ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzAgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4ud2VhdGhlckNhcmQge1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgMjAlIDIwJTsgKi9cXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIC8qIGdhcDogNSU7ICovXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGhlaWdodDogOTAwcHg7XFxufVxcblxcbi5kZXRhaWxzU2VjdGlvbiB7XFxuICAvKiBncmlkLWF1dG8tY29sdW1uczogMTByZW07ICovXFxuICBncmlkLWF1dG8tY29sdW1uczogOHJlbTtcXG59XFxuXFxuLyogSW5saW5lICMxIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuaHRtbCB7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzMgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4udG9kYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzAlIDMwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kYXkgPiAuY3VycmVudC50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi50b2RheSA+IC5kZXNjcmlwdGlvbi5jb25kaXRpb25zIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hbWUubG9jYXRpb25JbmZvIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ucmVnaW9uLmxvY2F0aW9uSW5mbyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzAgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4uaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIElubGluZSAjMiB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi5zZWFyY2hGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qIElubGluZSAjMiB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbi5zZWFyY2hGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5ob3VyV2VhdGhlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXlzRm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheVdlYXRoZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzAgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4vKiAuaG91ckZvcmVjYXN0LCAuZGF5c0ZvcmVjYXN0IHsgKi9cXG4uaG91ckZvcmVjYXN0IHtcXG4gIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB3aWR0aDogNTByZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5cbmltcG9ydCBjcmVhdGVTZWFyY2hGb3JtIGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL3NlYXJjaEZvcm0nO1xuLy8gaW1wb3J0IGZvcm1Db250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sU2VhcmNoRm9ybSc7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL3NlcnZpY2VzL3dlYXRoZXJhcGknO1xuaW1wb3J0IGNyZWF0ZVdlYXRoZXJDYXJkIGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5L3dlYXRoZXJDYXJkJztcblxuLy8gQ3JlZGl0XG4vLyBQb3dlcmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9cIiB0aXRsZT1cIkZyZWUgV2VhdGhlciBBUElcIj5XZWF0aGVyQVBJLmNvbTwvYT5cbi8vIDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9cIiB0aXRsZT1cIkZyZWUgV2VhdGhlciBBUElcIj48aW1nIHNyYz0nLy9jZG4ud2VhdGhlcmFwaS5jb20vdjQvaW1hZ2VzL3dlYXRoZXJhcGlfbG9nby5wbmcnIGFsdD1cIldlYXRoZXIgZGF0YSBieSBXZWF0aGVyQVBJLmNvbVwiIGJvcmRlcj1cIjBcIj48L2E+XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGRpc3BsYXlXZWF0aGVyID0gYXN5bmMgKHNlYXJjaFJlc3VsdCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoc2VhcmNoUmVzdWx0KTtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBhd2FpdCBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XG5cbiAgYm9keS5hcHBlbmQod2VhdGhlckNhcmQpO1xufTtcblxuY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICBjb25zdCBzZWFyY2hWYWwgPSBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcbiAgZGlzcGxheVdlYXRoZXIoc2VhcmNoVmFsKTtcbn07XG5cbmNvbnN0IGVycm9yQ2FsbGJhY2sgPSAoZXJyb3IpID0+IGVycm9yO1xuXG4vLyBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG5cbmNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGNyZWF0ZVNlYXJjaEZvcm0oKTtcbiAgYm9keS5hcHBlbmQoc2VhcmNoRm9ybSk7XG5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgeyBzZWFyY2hCYXIgfSA9IHNlYXJjaEZvcm07XG4gICAgZGlzcGxheVdlYXRoZXIoc2VhcmNoQmFyLnZhbHVlKTtcbiAgfSk7XG4gIC8vIGZvcm1Db250cm9sbGVyKHNlYXJjaEZvcm0pO1xuICAvLyByZXR1cm4gc2VhcmNoRm9ybTtcbn07XG5cbnNlYXJjaCgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQiLCJjcmVhdGVVVklFbGVtZW50IiwiY3JlYXRlU3BlZWRFbGVtZW50IiwiY3JlYXRlR3VzdEVsZW1lbnQiLCJjcmVhdGVEaXJlY3Rpb25FbGVtZW50IiwiY3JlYXRlTWF4U3BlZWRFbGVtZW50IiwiY3JlYXRlU3VucmlzZUVsZW1lbnQiLCJjcmVhdGVTdW5zZXRFbGVtZW50IiwiY3JlYXRlTW9vbnJpc2VFbGVtZW50IiwiY3JlYXRlTW9vbnNldEVsZW1lbnQiLCJjcmVhdGVNb29uSWxsRWxlbWVudCIsImNyZWF0ZU1vb25DYXJkIiwiX3JlZiIsInJpc2UiLCJzZXQiLCJpbGx1bWluYXRpb24iLCJjYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibW9vbnJpc2VJbmZvIiwiYXBwZW5kIiwibW9vbnNldEluZm8iLCJtb29uSWxsSW5mbyIsImNyZWF0ZVN1bkNhcmQiLCJfcmVmMiIsInN1bnJpc2VJbmZvIiwic3Vuc2V0SW5mbyIsImNyZWF0ZVdpbmRDYXJkIiwid2luZCIsInNwZWVkIiwiZ3VzdCIsIm1heCIsImtwaCIsImRpciIsInNwZWVkSW5mbyIsImd1c3RJbmZvIiwibWF4SW5mbyIsImRpckluZm8iLCJjcmVhdGVVVklDYXJkIiwidXZWYWwiLCJlbGVtZW50IiwiY3JlYXRlRmVlbHNMaWtlQ2FyZCIsImZlZWxzTGlrZVRlbXAiLCJjcmVhdGVEZXRhaWxzU2VjdGlvbiIsIl9yZWYzIiwidGVtcCIsImFzdHJvIiwiZmVlbCIsInV2Iiwic3VuIiwibW9vbiIsImRldGFpbHNTZWN0aW9uIiwiZmVlbENhcmQiLCJjIiwidXZDYXJkIiwid2luZENhcmQiLCJzdW5DYXJkIiwibW9vbkNhcmQiLCJjcmVhdGVGb3JlY2FzdCIsImNyZWF0ZUZvcmVjYXN0U2VjdGlvbiIsImhvdXIiLCJkYXlzIiwiZm9yZWNhc3RTZWN0aW9uIiwiaG91ckZvcmVjYXN0IiwiZGF5c0ZvcmVjYXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlTmFtZUVsZW1lbnQiLCJjcmVhdGVSZWdpb25FbGVtZW50IiwiY3JlYXRlSW5mb1NlY3Rpb24iLCJuYW1lIiwicmVnaW9uIiwiaW5mb1NlY3Rpb24iLCJjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQiLCJjcmVhdGVDb25UZXh0RWxlbWVudCIsImNyZWF0ZVRvZGF5U2VjdGlvbiIsImNvbmRpdGlvbiIsInRvZGF5U2VjdGlvbiIsImN1cnJlbnQiLCJhc3Ryb0NsYXNzTmFtZSIsInN1bnJpc2VUaW1lIiwic3VucmlzZSIsInRleHRDb250ZW50Iiwic3Vuc2V0VGltZSIsInN1bnNldCIsIm1vb25yaXNlVGltZSIsIm1vb25yaXNlIiwibW9vbnNldFRpbWUiLCJtb29uc2V0IiwibW9vbklsbFZhbHVlIiwibW9vbklsbCIsInRleHQiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUNvbkljb25FbGVtZW50IiwiaWNvbiIsImNvbXBsZXRlVVJMIiwiZ2V0SWNvbiIsImZldGNoIiwiaWNvbkltZyIsInNyYyIsInVybCIsIkVycm9yIiwiY3JlYXRlTWF4VGVtcEVsZW1lbnQiLCJjcmVhdGVNaW5UZW1wRWxlbWVudCIsImNyZWF0ZVdlYXRoZXJOb2RlIiwid2VhdGhlckRhdGEiLCJpc0hvdXJseSIsIm5vZGVDbGFzcyIsIm5vZGVUaXRsZSIsImRhdGUiLCJ3ZWF0aGVyTm9kZSIsIndlYXRoZXJUaXRsZSIsImNvbmRpdGlvbkljb24iLCJjdXJyZW50VGVtcCIsImF2Z1RlbXAiLCJhdmciLCJtYXhUZW1wIiwibWluVGVtcCIsIm1pbiIsIndlYXRoZXJEYXRhQXJyIiwiZm9yZWNhc3RDbGFzcyIsImZvcmVjYXN0Iiwid2VhdGhlck5vZGVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImZvckVhY2giLCJpbmZvQ2xhc3NOYW1lIiwibmFtZUVsZW1lbnQiLCJyZWdpb25FbGVtZW50IiwiY3JlYXRlU3VibWl0QnRuIiwic3VibWl0QnRuIiwidHlwZSIsImlkIiwiY3JlYXRlU2VhcmNoQmFyIiwibGFiZWwiLCJmb3IiLCJzZWFyY2hCYXIiLCJwbGFjZWhvbGRlciIsImNyZWF0ZVNlYXJjaEZvcm0iLCJzZWFyY2hGb3JtIiwidGVtcENsYXNzTmFtZSIsImZlZWxzTGlrZSIsIm1pblRlbXBWYWx1ZSIsIm1heFRlbXBWYWx1ZSIsIlVWSW5kZXgiLCJ1dkluZGV4Iiwid2luZENsYXNzTmFtZSIsIndpbmRTcGVlZCIsIndpbmRHdXN0IiwibWF4U3BlZWQiLCJtYXhXaW5kIiwid2luZERpcmVjdGlvbiIsImRpcmVjdGlvbiIsImNyZWF0ZVdlYXRoZXJDYXJkIiwiaW5mbyIsInRvZGF5IiwiZGV0YWlscyIsIndlYXRoZXJDYXJkIiwiaW5mb1NlYyIsInRvZGF5U2VjIiwiZm9yZWNhc3RTZWMiLCJkZXRhaWxzU2VjIiwiZ2V0VG9kYXlXZWF0aGVyIiwidGVtcF9jIiwidGVtcF9mIiwibWF4dGVtcF9jIiwibWF4dGVtcF9mIiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJtaW50ZW1wX2MiLCJtaW50ZW1wX2YiLCJmIiwiZ2V0VGVtcCIsImZlZWxzbGlrZV9jIiwiZmVlbHNsaWtlX2YiLCJnZXRXaW5kIiwid2luZF9rcGgiLCJ3aW5kX21waCIsIndpbmRfZGlyIiwiZ3VzdF9rcGgiLCJndXN0X21waCIsIm1heHdpbmRfa3BoIiwibWF4d2luZF9tcGgiLCJtcGgiLCJnZXRBc3RybyIsIm1vb25faWxsdW1pbmF0aW9uIiwiZ2V0RGV0YWlscyIsInBhcnNlSG91cmx5Rm9yZWNhc3QiLCJmb3JlY2FzdERhdGFIb3VycyIsImZvcmVjYXN0SG91cmx5IiwiaG91ckRhdGEiLCJ0aW1lIiwic3BsaXQiLCJob3VyV2VhdGhlciIsInB1c2giLCJwYXJzZURhaWx5Rm9yZWNhc3QiLCJmb3JlY2FzdERheXNEYXRhIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3REYXkiLCJhdmd0ZW1wX2MiLCJhdmd0ZW1wX2YiLCJ3ZWF0aGVyRGF5IiwiZ2V0Rm9yZWNhc3QiLCJmaWx0ZXJXZWF0aGVyRGF0YSIsImxvZyIsImxvY2F0aW9uIiwiYXBpS2V5IiwiYmFzZVVSTCIsImZvcmVjYXN0V2VhdGhlciIsImdldFdlYXRoZXJEYXRhIiwid2VhdGhlclVSTCIsIndlYXRoZXJSZXNwb25zZSIsImpzb24iLCJnZXRXZWF0aGVyIiwiY2xlYW5EYXRhIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5V2VhdGhlciIsInNlYXJjaFJlc3VsdCIsInN1Y2Nlc3NDYWxsYmFjayIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb29yZHMiLCJzZWFyY2hWYWwiLCJlcnJvckNhbGxiYWNrIiwic2VhcmNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=
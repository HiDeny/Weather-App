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
  const hourForecast = await (0,_elements_forecast__WEBPACK_IMPORTED_MODULE_0__.createHourForecast)(hour);
  forecastSection.append(hourForecast);
  const daysForecast = (0,_elements_forecast__WEBPACK_IMPORTED_MODULE_0__.createDaysForecast)(days);
  forecastSection.append(daysForecast);
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
/* harmony export */   createDaysForecast: () => (/* binding */ createDaysForecast),
/* harmony export */   createHourForecast: () => (/* binding */ createHourForecast)
/* harmony export */ });
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature */ "./src/components/display/elements/temperature.js");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditions */ "./src/components/display/elements/conditions.js");


const forecastClassName = 'forecast';
const createHourNode = async hourWeather => {
  const {
    temp,
    condition
  } = hourWeather;
  const hourNode = document.createElement('div');
  hourNode.classList.add('hourWeather');
  const hourTitle = document.createElement('p');
  hourTitle.classList.add('hourTitle');
  hourTitle.textContent = hourWeather.hour;
  hourNode.append(hourTitle);
  const conditionIcon = await (0,_conditions__WEBPACK_IMPORTED_MODULE_1__.createConIconElement)(condition);
  hourNode.append(conditionIcon);
  const currentTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createCurrentTempElement)(temp.c);
  hourNode.append(currentTemp);
  return hourNode;
};
const createHourForecast = async hourlyArr => {
  const hourForecast = document.createElement('div');
  hourForecast.classList.add(forecastClassName);
  hourForecast.classList.add('hourForecast');
  const hourNodes = await Promise.all(hourlyArr.map(async hourWeather => {
    return await createHourNode(hourWeather);
  }));
  console.log(hourNodes);
  hourNodes.forEach(hourNode => {
    hourForecast.append(hourNode);
  });
  return hourForecast;
};
const createDayNode = async dayWeather => {
  const {
    temp,
    condition
  } = dayWeather;
  const dayNode = document.createElement('div');
  dayNode.classList.add('dayWeather');
  const dayTitle = document.createElement('p');
  dayTitle.classList.add('dayTitle');
  dayTitle.textContent = dayWeather.date;
  dayNode.append(dayTitle);
  const conditionIcon = await (0,_conditions__WEBPACK_IMPORTED_MODULE_1__.createConIconElement)(condition);
  dayNode.append(conditionIcon);
  const avgTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createCurrentTempElement)(temp.c.avg);
  dayNode.append(avgTemp);
  const maxTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createMaxTempElement)(temp.c.max);
  dayNode.append(maxTemp);
  const minTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.createMinTempElement)(temp.c.min);
  dayNode.append(minTemp);
  return dayNode;
};
const createDaysForecast = daysArr => {
  const daysForecast = document.createElement('div');
  daysForecast.classList.add(forecastClassName);
  daysForecast.classList.add('daysForecast');
  daysArr.forEach(async dayWeather => {
    const dayNode = await createDayNode(dayWeather);
    daysForecast.append(dayNode);
  });
  return daysForecast;
};


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
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUVqRztJQUFVLENBQUMsR0FBR0csVUFBVTtJQUNoQzhFLGNBQWMsQ0FBQ2pGLFNBQVMsQ0FBQ2tHLEtBQUssQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFDRjtFQUNBO0FBQ0YsQ0FBQzs7QUFFREosTUFBTSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvZGV0YWlsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2NhcmRTZWN0aW9ucy9mb3JlY2FzdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2NhcmRTZWN0aW9ucy9sb2NhdGlvbkluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2NhcmRTZWN0aW9ucy90b2RheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL2FzdHJvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9jb25kaXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvc2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL3dpbmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L3dlYXRoZXJDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL2ZpbHRlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VydmljZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXJ2aWNlcy93ZWF0aGVyYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzM0MmYiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVlbHNMaWtlRWxlbWVudCxcbiAgY3JlYXRlVVZJRWxlbWVudCxcbn0gZnJvbSAnLi4vZWxlbWVudHMvdGVtcGVyYXR1cmUnO1xuXG5pbXBvcnQge1xuICBjcmVhdGVTcGVlZEVsZW1lbnQsXG4gIGNyZWF0ZUd1c3RFbGVtZW50LFxuICBjcmVhdGVEaXJlY3Rpb25FbGVtZW50LFxuICBjcmVhdGVNYXhTcGVlZEVsZW1lbnQsXG59IGZyb20gJy4uL2VsZW1lbnRzL3dpbmQnO1xuXG5pbXBvcnQge1xuICBjcmVhdGVTdW5yaXNlRWxlbWVudCxcbiAgY3JlYXRlU3Vuc2V0RWxlbWVudCxcbiAgY3JlYXRlTW9vbnJpc2VFbGVtZW50LFxuICBjcmVhdGVNb29uc2V0RWxlbWVudCxcbiAgY3JlYXRlTW9vbklsbEVsZW1lbnQsXG59IGZyb20gJy4uL2VsZW1lbnRzL2FzdHJvJztcblxuY29uc3QgY3JlYXRlTW9vbkNhcmQgPSAoeyByaXNlLCBzZXQsIGlsbHVtaW5hdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtb29uJyk7XG5cbiAgY29uc3QgbW9vbnJpc2VJbmZvID0gY3JlYXRlTW9vbnJpc2VFbGVtZW50KHJpc2UpO1xuICBjYXJkLmFwcGVuZChtb29ucmlzZUluZm8pO1xuXG4gIGNvbnN0IG1vb25zZXRJbmZvID0gY3JlYXRlTW9vbnNldEVsZW1lbnQoc2V0KTtcbiAgY2FyZC5hcHBlbmQobW9vbnNldEluZm8pO1xuXG4gIGNvbnN0IG1vb25JbGxJbmZvID0gY3JlYXRlTW9vbklsbEVsZW1lbnQoaWxsdW1pbmF0aW9uKTtcbiAgY2FyZC5hcHBlbmQobW9vbklsbEluZm8pO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlU3VuQ2FyZCA9ICh7IHJpc2UsIHNldCB9KSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzdW4nKTtcblxuICBjb25zdCBzdW5yaXNlSW5mbyA9IGNyZWF0ZVN1bnJpc2VFbGVtZW50KHJpc2UpO1xuICBjYXJkLmFwcGVuZChzdW5yaXNlSW5mbyk7XG5cbiAgY29uc3Qgc3Vuc2V0SW5mbyA9IGNyZWF0ZVN1bnNldEVsZW1lbnQoc2V0KTtcbiAgY2FyZC5hcHBlbmQoc3Vuc2V0SW5mbyk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVXaW5kQ2FyZCA9ICh3aW5kKSA9PiB7XG4gIGNvbnN0IHsgc3BlZWQsIGd1c3QsIG1heCB9ID0gd2luZC5rcGg7XG4gIGNvbnN0IHsgZGlyIH0gPSB3aW5kO1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnd2luZCcpO1xuXG4gIGNvbnN0IHNwZWVkSW5mbyA9IGNyZWF0ZVNwZWVkRWxlbWVudChzcGVlZCk7XG4gIGNhcmQuYXBwZW5kKHNwZWVkSW5mbyk7XG5cbiAgY29uc3QgZ3VzdEluZm8gPSBjcmVhdGVHdXN0RWxlbWVudChndXN0KTtcbiAgY2FyZC5hcHBlbmQoZ3VzdEluZm8pO1xuXG4gIGNvbnN0IG1heEluZm8gPSBjcmVhdGVNYXhTcGVlZEVsZW1lbnQobWF4KTtcbiAgY2FyZC5hcHBlbmQobWF4SW5mbyk7XG5cbiAgY29uc3QgZGlySW5mbyA9IGNyZWF0ZURpcmVjdGlvbkVsZW1lbnQoZGlyKTtcbiAgY2FyZC5hcHBlbmQoZGlySW5mbyk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVVVklDYXJkID0gKHV2VmFsKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCd1dicpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVVVklFbGVtZW50KHV2VmFsKTtcbiAgY2FyZC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVGZWVsc0xpa2VDYXJkID0gKGZlZWxzTGlrZVRlbXApID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZScpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVGZWVsc0xpa2VFbGVtZW50KGZlZWxzTGlrZVRlbXApO1xuICBjYXJkLmFwcGVuZChlbGVtZW50KTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmNvbnN0IGNyZWF0ZURldGFpbHNTZWN0aW9uID0gKHsgdGVtcCwgd2luZCwgYXN0cm8gfSkgPT4ge1xuICBjb25zdCB7IGZlZWwsIHV2IH0gPSB0ZW1wO1xuICBjb25zdCB7IHN1biwgbW9vbiB9ID0gYXN0cm87XG5cbiAgY29uc3QgZGV0YWlsc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGRldGFpbHNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHNTZWN0aW9uJyk7XG5cbiAgY29uc3QgZmVlbENhcmQgPSBjcmVhdGVGZWVsc0xpa2VDYXJkKGZlZWwuYyk7XG4gIGRldGFpbHNTZWN0aW9uLmFwcGVuZChmZWVsQ2FyZCk7XG5cbiAgY29uc3QgdXZDYXJkID0gY3JlYXRlVVZJQ2FyZCh1dik7XG4gIGRldGFpbHNTZWN0aW9uLmFwcGVuZCh1dkNhcmQpO1xuXG4gIGNvbnN0IHdpbmRDYXJkID0gY3JlYXRlV2luZENhcmQod2luZCk7XG4gIGRldGFpbHNTZWN0aW9uLmFwcGVuZCh3aW5kQ2FyZCk7XG5cbiAgY29uc3Qgc3VuQ2FyZCA9IGNyZWF0ZVN1bkNhcmQoc3VuKTtcbiAgZGV0YWlsc1NlY3Rpb24uYXBwZW5kKHN1bkNhcmQpO1xuXG4gIGNvbnN0IG1vb25DYXJkID0gY3JlYXRlTW9vbkNhcmQobW9vbik7XG4gIGRldGFpbHNTZWN0aW9uLmFwcGVuZChtb29uQ2FyZCk7XG5cbiAgcmV0dXJuIGRldGFpbHNTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGV0YWlsc1NlY3Rpb247XG4iLCJpbXBvcnQgeyBjcmVhdGVIb3VyRm9yZWNhc3QsIGNyZWF0ZURheXNGb3JlY2FzdCB9IGZyb20gJy4uL2VsZW1lbnRzL2ZvcmVjYXN0JztcblxuY29uc3QgY3JlYXRlRm9yZWNhc3RTZWN0aW9uID0gYXN5bmMgKHsgaG91ciwgZGF5cyB9KSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgZm9yZWNhc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Jyk7XG5cbiAgY29uc3QgaG91ckZvcmVjYXN0ID0gYXdhaXQgY3JlYXRlSG91ckZvcmVjYXN0KGhvdXIpO1xuICBmb3JlY2FzdFNlY3Rpb24uYXBwZW5kKGhvdXJGb3JlY2FzdCk7XG5cbiAgY29uc3QgZGF5c0ZvcmVjYXN0ID0gY3JlYXRlRGF5c0ZvcmVjYXN0KGRheXMpO1xuICBmb3JlY2FzdFNlY3Rpb24uYXBwZW5kKGRheXNGb3JlY2FzdCk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0U2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbjtcbiIsImltcG9ydCB7IGNyZWF0ZU5hbWVFbGVtZW50LCBjcmVhdGVSZWdpb25FbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvaW5mbyc7XG5cbmNvbnN0IGNyZWF0ZUluZm9TZWN0aW9uID0gKHsgbmFtZSwgcmVnaW9uIH0pID0+IHtcbiAgY29uc3QgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGluZm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICBpbmZvU2VjdGlvbi5hcHBlbmQoY3JlYXRlTmFtZUVsZW1lbnQobmFtZSkpO1xuICBpbmZvU2VjdGlvbi5hcHBlbmQoY3JlYXRlUmVnaW9uRWxlbWVudChyZWdpb24pKTtcblxuICByZXR1cm4gaW5mb1NlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvU2VjdGlvbjtcbiIsImltcG9ydCB7IGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL3RlbXBlcmF0dXJlJztcbmltcG9ydCB7IGNyZWF0ZUNvblRleHRFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvY29uZGl0aW9ucyc7XG5cbmNvbnN0IGNyZWF0ZVRvZGF5U2VjdGlvbiA9ICh7IHRlbXAsIGNvbmRpdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHRvZGF5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgdG9kYXlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG5cbiAgdG9kYXlTZWN0aW9uLmFwcGVuZChjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jLmN1cnJlbnQpKTtcbiAgdG9kYXlTZWN0aW9uLmFwcGVuZChjcmVhdGVDb25UZXh0RWxlbWVudChjb25kaXRpb24pKTtcblxuICByZXR1cm4gdG9kYXlTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kYXlTZWN0aW9uO1xuIiwiY29uc3QgYXN0cm9DbGFzc05hbWUgPSAnYXN0cm8nO1xuXG5jb25zdCBjcmVhdGVTdW5yaXNlRWxlbWVudCA9IChzdW5yaXNlVGltZSkgPT4ge1xuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzdW5yaXNlLmNsYXNzTGlzdC5hZGQoJ3N1bnJpc2UnKTtcbiAgc3VucmlzZS5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgc3VucmlzZS50ZXh0Q29udGVudCA9IGBTdW5yaXNlOiAke3N1bnJpc2VUaW1lfWA7XG5cbiAgcmV0dXJuIHN1bnJpc2U7XG59O1xuXG5jb25zdCBjcmVhdGVTdW5zZXRFbGVtZW50ID0gKHN1bnNldFRpbWUpID0+IHtcbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzdW5zZXQuY2xhc3NMaXN0LmFkZCgnc3Vuc2V0Jyk7XG4gIHN1bnNldC5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gYFN1bnNldDogJHtzdW5zZXRUaW1lfWA7XG5cbiAgcmV0dXJuIHN1bnNldDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25yaXNlRWxlbWVudCA9IChtb29ucmlzZVRpbWUpID0+IHtcbiAgY29uc3QgbW9vbnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1vb25yaXNlLmNsYXNzTGlzdC5hZGQoJ21vb25yaXNlJyk7XG4gIG1vb25yaXNlLmNsYXNzTGlzdC5hZGQoYXN0cm9DbGFzc05hbWUpO1xuICBtb29ucmlzZS50ZXh0Q29udGVudCA9IGBNb29ucmlzZTogJHttb29ucmlzZVRpbWV9YDtcblxuICByZXR1cm4gbW9vbnJpc2U7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uc2V0RWxlbWVudCA9IChtb29uc2V0VGltZSkgPT4ge1xuICBjb25zdCBtb29uc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtb29uc2V0LmNsYXNzTGlzdC5hZGQoJ21vb25zZXQnKTtcbiAgbW9vbnNldC5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgbW9vbnNldC50ZXh0Q29udGVudCA9IGBNb29uc2V0OiAke21vb25zZXRUaW1lfWA7XG5cbiAgcmV0dXJuIG1vb25zZXQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb29uSWxsRWxlbWVudCA9IChtb29uSWxsVmFsdWUpID0+IHtcbiAgY29uc3QgbW9vbklsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbW9vbklsbC5jbGFzc0xpc3QuYWRkKCdtb29uSWxsJyk7XG4gIG1vb25JbGwuY2xhc3NMaXN0LmFkZChhc3Ryb0NsYXNzTmFtZSk7XG4gIG1vb25JbGwudGV4dENvbnRlbnQgPSBgTW9vbiBJbGx1bWluYXRpb246ICR7bW9vbklsbFZhbHVlfWA7XG5cbiAgcmV0dXJuIG1vb25JbGw7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVTdW5yaXNlRWxlbWVudCxcbiAgY3JlYXRlU3Vuc2V0RWxlbWVudCxcbiAgY3JlYXRlTW9vbnJpc2VFbGVtZW50LFxuICBjcmVhdGVNb29uc2V0RWxlbWVudCxcbiAgY3JlYXRlTW9vbklsbEVsZW1lbnQsXG59O1xuIiwiY29uc3QgY3JlYXRlQ29uVGV4dEVsZW1lbnQgPSAoeyB0ZXh0IH0pID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbnMnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgSXQncyAke3RleHR9YDtcblxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVDb25JY29uRWxlbWVudCA9IGFzeW5jICh7IGljb24gfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbXBsZXRlVVJMID0gYGh0dHBzOiR7aWNvbn1gO1xuICAgIGNvbnN0IGdldEljb24gPSBhd2FpdCBmZXRjaChjb21wbGV0ZVVSTCk7XG5cbiAgICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbkltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgaWNvbkltZy5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb25zJyk7XG4gICAgaWNvbkltZy5zcmMgPSBnZXRJY29uLnVybDtcblxuICAgIHJldHVybiBpY29uSW1nO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29uSWNvbkVsZW1lbnQsIGNyZWF0ZUNvblRleHRFbGVtZW50IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQsXG4gIGNyZWF0ZU1heFRlbXBFbGVtZW50LFxuICBjcmVhdGVNaW5UZW1wRWxlbWVudCxcbn0gZnJvbSAnLi90ZW1wZXJhdHVyZSc7XG5pbXBvcnQgeyBjcmVhdGVDb25JY29uRWxlbWVudCB9IGZyb20gJy4vY29uZGl0aW9ucyc7XG5cbmNvbnN0IGZvcmVjYXN0Q2xhc3NOYW1lID0gJ2ZvcmVjYXN0JztcblxuY29uc3QgY3JlYXRlSG91ck5vZGUgPSBhc3luYyAoaG91cldlYXRoZXIpID0+IHtcbiAgY29uc3QgeyB0ZW1wLCBjb25kaXRpb24gfSA9IGhvdXJXZWF0aGVyO1xuXG4gIGNvbnN0IGhvdXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJOb2RlLmNsYXNzTGlzdC5hZGQoJ2hvdXJXZWF0aGVyJyk7XG5cbiAgY29uc3QgaG91clRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob3VyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaG91clRpdGxlJyk7XG4gIGhvdXJUaXRsZS50ZXh0Q29udGVudCA9IGhvdXJXZWF0aGVyLmhvdXI7XG4gIGhvdXJOb2RlLmFwcGVuZChob3VyVGl0bGUpO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBhd2FpdCBjcmVhdGVDb25JY29uRWxlbWVudChjb25kaXRpb24pO1xuICBob3VyTm9kZS5hcHBlbmQoY29uZGl0aW9uSWNvbik7XG5cbiAgY29uc3QgY3VycmVudFRlbXAgPSBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jKTtcbiAgaG91ck5vZGUuYXBwZW5kKGN1cnJlbnRUZW1wKTtcblxuICByZXR1cm4gaG91ck5vZGU7XG59O1xuXG5jb25zdCBjcmVhdGVIb3VyRm9yZWNhc3QgPSBhc3luYyAoaG91cmx5QXJyKSA9PiB7XG4gIGNvbnN0IGhvdXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3VyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChmb3JlY2FzdENsYXNzTmFtZSk7XG4gIGhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdob3VyRm9yZWNhc3QnKTtcblxuICBjb25zdCBob3VyTm9kZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBob3VybHlBcnIubWFwKGFzeW5jIChob3VyV2VhdGhlcikgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUhvdXJOb2RlKGhvdXJXZWF0aGVyKTtcbiAgICB9KVxuICApO1xuICBjb25zb2xlLmxvZyhob3VyTm9kZXMpO1xuXG4gIGhvdXJOb2Rlcy5mb3JFYWNoKChob3VyTm9kZSkgPT4ge1xuICAgIGhvdXJGb3JlY2FzdC5hcHBlbmQoaG91ck5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gaG91ckZvcmVjYXN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF5Tm9kZSA9IGFzeW5jIChkYXlXZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHsgdGVtcCwgY29uZGl0aW9uIH0gPSBkYXlXZWF0aGVyO1xuXG4gIGNvbnN0IGRheU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5Tm9kZS5jbGFzc0xpc3QuYWRkKCdkYXlXZWF0aGVyJyk7XG5cbiAgY29uc3QgZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RheVRpdGxlJyk7XG4gIGRheVRpdGxlLnRleHRDb250ZW50ID0gZGF5V2VhdGhlci5kYXRlO1xuICBkYXlOb2RlLmFwcGVuZChkYXlUaXRsZSk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGF3YWl0IGNyZWF0ZUNvbkljb25FbGVtZW50KGNvbmRpdGlvbik7XG4gIGRheU5vZGUuYXBwZW5kKGNvbmRpdGlvbkljb24pO1xuXG4gIGNvbnN0IGF2Z1RlbXAgPSBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jLmF2Zyk7XG4gIGRheU5vZGUuYXBwZW5kKGF2Z1RlbXApO1xuXG4gIGNvbnN0IG1heFRlbXAgPSBjcmVhdGVNYXhUZW1wRWxlbWVudCh0ZW1wLmMubWF4KTtcbiAgZGF5Tm9kZS5hcHBlbmQobWF4VGVtcCk7XG5cbiAgY29uc3QgbWluVGVtcCA9IGNyZWF0ZU1pblRlbXBFbGVtZW50KHRlbXAuYy5taW4pO1xuICBkYXlOb2RlLmFwcGVuZChtaW5UZW1wKTtcblxuICByZXR1cm4gZGF5Tm9kZTtcbn07XG5cbmNvbnN0IGNyZWF0ZURheXNGb3JlY2FzdCA9IChkYXlzQXJyKSA9PiB7XG4gIGNvbnN0IGRheXNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChmb3JlY2FzdENsYXNzTmFtZSk7XG4gIGRheXNGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXlzRm9yZWNhc3QnKTtcblxuICBkYXlzQXJyLmZvckVhY2goYXN5bmMgKGRheVdlYXRoZXIpID0+IHtcbiAgICBjb25zdCBkYXlOb2RlID0gYXdhaXQgY3JlYXRlRGF5Tm9kZShkYXlXZWF0aGVyKTtcbiAgICBkYXlzRm9yZWNhc3QuYXBwZW5kKGRheU5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gZGF5c0ZvcmVjYXN0O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSG91ckZvcmVjYXN0LCBjcmVhdGVEYXlzRm9yZWNhc3QgfTtcbiIsImNvbnN0IGluZm9DbGFzc05hbWUgPSAnbG9jYXRpb25JbmZvJztcblxuY29uc3QgY3JlYXRlTmFtZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbmZvQ2xhc3NOYW1lKTtcbiAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIHJldHVybiBuYW1lRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlZ2lvbkVsZW1lbnQgPSAocmVnaW9uKSA9PiB7XG4gIGNvbnN0IHJlZ2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlZ2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVnaW9uJyk7XG4gIHJlZ2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbmZvQ2xhc3NOYW1lKTtcbiAgcmVnaW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHJlZ2lvbjtcblxuICByZXR1cm4gcmVnaW9uRWxlbWVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5hbWVFbGVtZW50LCBjcmVhdGVSZWdpb25FbGVtZW50IH07XG4iLCJjb25zdCBjcmVhdGVTdWJtaXRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0QnRuJztcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NlYXJjaCEnO1xuXG4gIHJldHVybiBzdWJtaXRCdG47XG59O1xuXG5jb25zdCBjcmVhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuZm9yID0gJ3NlYXJjaEJhcic7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQmFyLnR5cGUgPSAndGV4dCc7XG4gIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICdDaXR5JztcbiAgc2VhcmNoQmFyLm5hbWUgPSAnc2VhcmNoQmFyJztcbiAgc2VhcmNoQmFyLmlkID0gJ3NlYXJjaEJhcic7XG5cbiAgbGFiZWwuYXBwZW5kKHNlYXJjaEJhcik7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc2VhcmNoRm9ybScpO1xuXG4gIGNvbnN0IHNlYXJjaEJhciA9IGNyZWF0ZVNlYXJjaEJhcigpO1xuICBzZWFyY2hGb3JtLmFwcGVuZChzZWFyY2hCYXIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZVN1Ym1pdEJ0bigpO1xuICBzZWFyY2hGb3JtLmFwcGVuZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiBzZWFyY2hGb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoRm9ybTtcbiIsImNvbnN0IHRlbXBDbGFzc05hbWUgPSAndGVtcCc7XG5cbmNvbnN0IGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCA9IChjdXJyZW50VGVtcCkgPT4ge1xuICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgY3VycmVudC5jbGFzc0xpc3QuYWRkKHRlbXBDbGFzc05hbWUpO1xuICBjdXJyZW50LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXB9wrBDYDtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQgPSAoZmVlbHNMaWtlVGVtcCkgPT4ge1xuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKCdmZWVsc0xpa2UnKTtcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZlZWxzTGlrZVRlbXB9wrBDYDtcblxuICByZXR1cm4gZmVlbHNMaWtlO1xufTtcblxuY29uc3QgY3JlYXRlTWluVGVtcEVsZW1lbnQgPSAobWluVGVtcFZhbHVlKSA9PiB7XG4gIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnbWluVGVtcCcpO1xuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIG1pblRlbXAudGV4dENvbnRlbnQgPSBgTWluOiAke21pblRlbXBWYWx1ZX3CsENgO1xuXG4gIHJldHVybiBtaW5UZW1wO1xufTtcblxuY29uc3QgY3JlYXRlTWF4VGVtcEVsZW1lbnQgPSAobWF4VGVtcFZhbHVlKSA9PiB7XG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnbWF4VGVtcCcpO1xuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIG1heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4OiAke21heFRlbXBWYWx1ZX3CsENgO1xuXG4gIHJldHVybiBtYXhUZW1wO1xufTtcblxuY29uc3QgY3JlYXRlVVZJRWxlbWVudCA9IChVVkluZGV4KSA9PiB7XG4gIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHV2SW5kZXguY2xhc3NMaXN0LmFkZCgndXYnKTtcbiAgdXZJbmRleC5jbGFzc0xpc3QuYWRkKHRlbXBDbGFzc05hbWUpO1xuICB1dkluZGV4LnRleHRDb250ZW50ID0gYFVWOiAke1VWSW5kZXh9YDtcblxuICByZXR1cm4gdXZJbmRleDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCxcbiAgY3JlYXRlTWF4VGVtcEVsZW1lbnQsXG4gIGNyZWF0ZU1pblRlbXBFbGVtZW50LFxuICBjcmVhdGVGZWVsc0xpa2VFbGVtZW50LFxuICBjcmVhdGVVVklFbGVtZW50LFxufTtcbiIsImNvbnN0IHdpbmRDbGFzc05hbWUgPSAnd2luZCc7XG5cbmNvbnN0IGNyZWF0ZVNwZWVkRWxlbWVudCA9ICh3aW5kU3BlZWQpID0+IHtcbiAgY29uc3Qgc3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNwZWVkLmNsYXNzTGlzdC5hZGQoJ3NwZWVkJyk7XG4gIHNwZWVkLmNsYXNzTGlzdC5hZGQod2luZENsYXNzTmFtZSk7XG4gIHNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7d2luZFNwZWVkfWA7XG5cbiAgcmV0dXJuIHNwZWVkO1xufTtcblxuY29uc3QgY3JlYXRlR3VzdEVsZW1lbnQgPSAod2luZEd1c3QpID0+IHtcbiAgY29uc3QgZ3VzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZ3VzdC5jbGFzc0xpc3QuYWRkKCdndXN0Jyk7XG4gIGd1c3QuY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgZ3VzdC50ZXh0Q29udGVudCA9IGBHdXN0czogJHt3aW5kR3VzdH1gO1xuXG4gIHJldHVybiBndXN0O1xufTtcblxuY29uc3QgY3JlYXRlTWF4U3BlZWRFbGVtZW50ID0gKG1heFNwZWVkKSA9PiB7XG4gIGNvbnN0IG1heFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1heFdpbmQuY2xhc3NMaXN0LmFkZCgnbWF4V2luZCcpO1xuICBtYXhXaW5kLmNsYXNzTGlzdC5hZGQod2luZENsYXNzTmFtZSk7XG4gIG1heFdpbmQudGV4dENvbnRlbnQgPSBgTWF4IFNwZWVkOiAke21heFNwZWVkfWA7XG5cbiAgcmV0dXJuIG1heFdpbmQ7XG59O1xuXG5jb25zdCBjcmVhdGVEaXJlY3Rpb25FbGVtZW50ID0gKHdpbmREaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGlyZWN0aW9uJyk7XG4gIGRpcmVjdGlvbi5jbGFzc0xpc3QuYWRkKHdpbmRDbGFzc05hbWUpO1xuICBkaXJlY3Rpb24udGV4dENvbnRlbnQgPSBgRGlyZWN0aW9uOiAke3dpbmREaXJlY3Rpb259YDtcblxuICByZXR1cm4gZGlyZWN0aW9uO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRGlyZWN0aW9uRWxlbWVudCxcbiAgY3JlYXRlR3VzdEVsZW1lbnQsXG4gIGNyZWF0ZVNwZWVkRWxlbWVudCxcbiAgY3JlYXRlTWF4U3BlZWRFbGVtZW50LFxufTtcbiIsImltcG9ydCBjcmVhdGVJbmZvU2VjdGlvbiBmcm9tICcuL2NhcmRTZWN0aW9ucy9sb2NhdGlvbkluZm8nO1xuaW1wb3J0IGNyZWF0ZVRvZGF5U2VjdGlvbiBmcm9tICcuL2NhcmRTZWN0aW9ucy90b2RheVdlYXRoZXInO1xuaW1wb3J0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbiBmcm9tICcuL2NhcmRTZWN0aW9ucy9mb3JlY2FzdHMnO1xuaW1wb3J0IGNyZWF0ZURldGFpbHNTZWN0aW9uIGZyb20gJy4vY2FyZFNlY3Rpb25zL2RldGFpbENhcmRzJztcblxuY29uc3QgY3JlYXRlV2VhdGhlckNhcmQgPSBhc3luYyAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBpbmZvLCB0b2RheSwgZm9yZWNhc3QsIGRldGFpbHMgfSA9IHdlYXRoZXJEYXRhO1xuICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyQ2FyZCcpO1xuXG4gIGNvbnN0IGluZm9TZWMgPSBjcmVhdGVJbmZvU2VjdGlvbihpbmZvKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKGluZm9TZWMpO1xuXG4gIGNvbnN0IHRvZGF5U2VjID0gY3JlYXRlVG9kYXlTZWN0aW9uKHRvZGF5KTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKHRvZGF5U2VjKTtcblxuICBjb25zdCBmb3JlY2FzdFNlYyA9IGF3YWl0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbihmb3JlY2FzdCk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZChmb3JlY2FzdFNlYyk7XG5cbiAgY29uc3QgZGV0YWlsc1NlYyA9IGNyZWF0ZURldGFpbHNTZWN0aW9uKGRldGFpbHMpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoZGV0YWlsc1NlYyk7XG5cbiAgcmV0dXJuIHdlYXRoZXJDYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2VhdGhlckNhcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuY29uc3QgZ2V0VG9kYXlXZWF0aGVyID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgdGVtcF9jLCB0ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHsgbWF4dGVtcF9jLCBtYXh0ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgY29uc3QgeyBtaW50ZW1wX2MsIG1pbnRlbXBfZiB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICBjb25zdCB7IGNvbmRpdGlvbiB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wOiB7XG4gICAgICBjOiB7IGN1cnJlbnQ6IHRlbXBfYywgbWF4OiBtYXh0ZW1wX2MsIG1pbjogbWludGVtcF9jIH0sXG4gICAgICBmOiB7IGN1cnJlbnQ6IHRlbXBfZiwgbWF4OiBtYXh0ZW1wX2YsIG1pbjogbWludGVtcF9mIH0sXG4gICAgfSxcbiAgICBjb25kaXRpb24sXG4gIH07XG59O1xuXG5jb25zdCBnZXRUZW1wID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgZmVlbHNsaWtlX2MsIGZlZWxzbGlrZV9mLCB1diB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgcmV0dXJuIHsgZmVlbDogeyBjOiBmZWVsc2xpa2VfYywgZjogZmVlbHNsaWtlX2YgfSwgdXYgfTtcbn07XG5cbmNvbnN0IGdldFdpbmQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyB3aW5kX2twaCwgd2luZF9tcGgsIHdpbmRfZGlyIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IGd1c3Rfa3BoLCBndXN0X21waCB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgY29uc3QgeyBtYXh3aW5kX2twaCwgbWF4d2luZF9tcGggfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgcmV0dXJuIHtcbiAgICBrcGg6IHsgc3BlZWQ6IHdpbmRfa3BoLCBndXN0OiBndXN0X2twaCwgbWF4OiBtYXh3aW5kX2twaCB9LFxuICAgIG1waDogeyBzcGVlZDogd2luZF9tcGgsIGd1c3Q6IGd1c3RfbXBoLCBtYXg6IG1heHdpbmRfbXBoIH0sXG4gICAgZGlyOiB3aW5kX2RpcixcbiAgfTtcbn07XG5jb25zdCBnZXRBc3RybyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHN1bnJpc2UsIHN1bnNldCB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIGNvbnN0IHsgbW9vbnJpc2UsIG1vb25zZXQgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCB7IG1vb25faWxsdW1pbmF0aW9uIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgcmV0dXJuIHtcbiAgICBzdW46IHsgcmlzZTogc3VucmlzZSwgc2V0OiBzdW5zZXQgfSxcbiAgICBtb29uOiB7IHJpc2U6IG1vb25yaXNlLCBzZXQ6IG1vb25zZXQsIGlsbHVtaW5hdGlvbjogbW9vbl9pbGx1bWluYXRpb24gfSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldERldGFpbHMgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgdGVtcCA9IGdldFRlbXAod2VhdGhlckRhdGEpO1xuICBjb25zdCB3aW5kID0gZ2V0V2luZCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGFzdHJvID0gZ2V0QXN0cm8od2VhdGhlckRhdGEpO1xuXG4gIHJldHVybiB7IHRlbXAsIHdpbmQsIGFzdHJvIH07XG59O1xuXG5jb25zdCBwYXJzZUhvdXJseUZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0RGF0YUhvdXJzID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcbiAgY29uc3QgZm9yZWNhc3RIb3VybHkgPSBbXTtcblxuICBmb3JlY2FzdERhdGFIb3Vycy5mb3JFYWNoKChob3VyRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSwgdGVtcF9jLCB0ZW1wX2YsIGNvbmRpdGlvbiB9ID0gaG91ckRhdGE7XG4gICAgY29uc3QgaG91ciA9IHRpbWUuc3BsaXQoJyAnKVsxXTtcblxuICAgIGNvbnN0IGhvdXJXZWF0aGVyID0ge1xuICAgICAgaG91cixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIHRlbXA6IHsgYzogdGVtcF9jLCBmOiB0ZW1wX2YgfSxcbiAgICB9O1xuXG4gICAgZm9yZWNhc3RIb3VybHkucHVzaChob3VyV2VhdGhlcik7XG4gIH0pO1xuXG4gIHJldHVybiBmb3JlY2FzdEhvdXJseTtcbn07XG5jb25zdCBwYXJzZURhaWx5Rm9yZWNhc3QgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgZm9yZWNhc3REYXlzRGF0YSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICBjb25zdCBmb3JlY2FzdERheXMgPSBbXTtcblxuICBmb3JlY2FzdERheXNEYXRhLmZvckVhY2goKGZvcmVjYXN0RGF5KSA9PiB7XG4gICAgY29uc3QgeyBkYXRlIH0gPSBmb3JlY2FzdERheTtcbiAgICBjb25zdCB7IG1heHRlbXBfYywgbWF4dGVtcF9mIH0gPSBmb3JlY2FzdERheS5kYXk7XG4gICAgY29uc3QgeyBtaW50ZW1wX2MsIG1pbnRlbXBfZiB9ID0gZm9yZWNhc3REYXkuZGF5O1xuICAgIGNvbnN0IHsgYXZndGVtcF9jLCBhdmd0ZW1wX2YgfSA9IGZvcmVjYXN0RGF5LmRheTtcbiAgICBjb25zdCB7IGNvbmRpdGlvbiB9ID0gZm9yZWNhc3REYXkuaG91clsxMl07XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF5ID0ge1xuICAgICAgZGF0ZSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIHRlbXA6IHtcbiAgICAgICAgYzogeyBhdmc6IGF2Z3RlbXBfYywgbWF4OiBtYXh0ZW1wX2MsIG1pbjogbWludGVtcF9jIH0sXG4gICAgICAgIGY6IHsgYXZnOiBhdmd0ZW1wX2YsIG1heDogbWF4dGVtcF9mLCBtaW46IG1pbnRlbXBfZiB9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZm9yZWNhc3REYXlzLnB1c2god2VhdGhlckRheSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb3JlY2FzdERheXM7XG59O1xuXG5jb25zdCBnZXRGb3JlY2FzdCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IHBhcnNlSG91cmx5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICBjb25zdCBmb3JlY2FzdERheXMgPSBwYXJzZURhaWx5Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuXG4gIHJldHVybiB7IGhvdXI6IGZvcmVjYXN0SG91cmx5LCBkYXlzOiBmb3JlY2FzdERheXMgfTtcbn07XG5cbmNvbnN0IGZpbHRlcldlYXRoZXJEYXRhID0gYXN5bmMgKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gd2VhdGhlckRhdGE7XG5cbiAgY29uc3QgaW5mbyA9IHsgbmFtZTogbG9jYXRpb24ubmFtZSwgcmVnaW9uOiBsb2NhdGlvbi5yZWdpb24gfTtcbiAgY29uc3QgdG9kYXkgPSBnZXRUb2RheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICBjb25zdCBmb3JlY2FzdCA9IGdldEZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZGV0YWlscyA9IGdldERldGFpbHMod2VhdGhlckRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgaW5mbyxcbiAgICB0b2RheSxcbiAgICBmb3JlY2FzdCxcbiAgICBkZXRhaWxzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyV2VhdGhlckRhdGE7XG4iLCJjb25zdCBhcGlLZXkgPSAna2V5PTBlZjkyMzRmZmQ4MTQwZTBiY2YxNDU5NDIyMzI1MDgnO1xuY29uc3QgYmFzZVVSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MSc7XG5cbmNvbnN0IGZvcmVjYXN0V2VhdGhlciA9ICcvZm9yZWNhc3QuanNvbic7XG5jb25zdCBmb3JlY2FzdERheXMgPSAnZGF5cz03JztcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlclVSTCA9IGAke2Jhc2VVUkx9JHtmb3JlY2FzdFdlYXRoZXJ9PyR7YXBpS2V5fSZxPSR7bG9jYXRpb259JiR7Zm9yZWNhc3REYXlzfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVVJMKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG59O1xuXG4vLyBnZXRXZWF0aGVyRGF0YSgnQ2FwZSBUb3duJykudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCBmaWx0ZXJXZWF0aGVyRGF0YSBmcm9tICcuL2ZpbHRlckRhdGEnO1xuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICBjb25zdCBjbGVhbkRhdGEgPSBhd2FpdCBmaWx0ZXJXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKGNsZWFuRGF0YSk7XG4gIHJldHVybiBjbGVhbkRhdGE7XG59O1xuXG4vLyBnZXRXZWF0aGVyKCdDYXBlIFRvd24nKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7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O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0bztcbn1cblxuLndlYXRoZXJDYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgMjAlIDIwJTtcbiAgd2lkdGg6IDUwcmVtO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZ2FwOiA1JTtcbn1cblxuLm1haW5Db21wLmluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNzAlO1xuICBnYXA6IDEwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uZGV0YWlsc1NlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tY29sdW1uczogMTByZW07XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZGV0YWlsQ29tcCB7XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cblxuI3NlYXJjaEJhciB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG5cbi8qIElubGluZSAjMiB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4uaW5mbyB7XG59XG5cbi5ob3VyRm9yZWNhc3QsXG4uZGF5c0ZvcmVjYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLyogSW5saW5lICMwIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi53ZWF0aGVyQ2FyZCB7XG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDIwJSAyMCU7ICovXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgLyogZ2FwOiA1JTsgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG4gIGhlaWdodDogOTAwcHg7XG59XG5cbi5kZXRhaWxzU2VjdGlvbiB7XG4gIC8qIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTsgKi9cbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDhyZW07XG59XG5cbi8qIElubGluZSAjMSB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG5odG1sIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLyogSW5saW5lICMzIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXG5cbi50b2RheSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzAlIDMwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvZGF5ID4gLmN1cnJlbnQudGVtcCB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbi50b2RheSA+IC5kZXNjcmlwdGlvbi5jb25kaXRpb25zIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmFtZS5sb2NhdGlvbkluZm8ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLnJlZ2lvbi5sb2NhdGlvbkluZm8ge1xuICBtYXJnaW46IDA7XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG59XG5cbi8qIElubGluZSAjMCB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4uaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4vKiBJbmxpbmUgIzIgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLnNlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4vKiBJbmxpbmUgIzIgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cblxuLnNlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaG91cldlYXRoZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kYXlzRm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRheVdlYXRoZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIElubGluZSAjMCB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xuXG4vKiAuaG91ckZvcmVjYXN0LCAuZGF5c0ZvcmVjYXN0IHsgKi9cbi5ob3VyRm9yZWNhc3Qge1xuICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiA1MHJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSw0RkFBNEY7O0FBRTVGO0FBQ0E7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQSw0RkFBNEY7O0FBRTVGO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUEsNEZBQTRGOztBQUU1RjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSw0RkFBNEY7O0FBRTVGO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSw0RkFBNEY7O0FBRTVGO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQSw0RkFBNEY7O0FBRTVGO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBLDRGQUE0Rjs7QUFFNUY7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSw0RkFBNEY7O0FBRTVGLG1DQUFtQztBQUNuQztFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0bztcXG59XFxuXFxuLndlYXRoZXJDYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSAyMCUgMjAlO1xcbiAgd2lkdGg6IDUwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiA1JTtcXG59XFxuXFxuLm1haW5Db21wLmluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNzAlO1xcbiAgZ2FwOiAxMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsc1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmRldGFpbENvbXAge1xcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG59XFxuXFxuI3NlYXJjaEJhciB7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbn1cXG5cXG4vKiBJbmxpbmUgIzIgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4uaW5mbyB7XFxufVxcblxcbi5ob3VyRm9yZWNhc3QsXFxuLmRheXNGb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLyogSW5saW5lICMwIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLndlYXRoZXJDYXJkIHtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDIwJSAyMCU7ICovXFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAvKiBnYXA6IDUlOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICBoZWlnaHQ6IDkwMHB4O1xcbn1cXG5cXG4uZGV0YWlsc1NlY3Rpb24ge1xcbiAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtOyAqL1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDhyZW07XFxufVxcblxcbi8qIElubGluZSAjMSB8IGZpbGU6Ly8vVXNlcnMvaGlkZW5ueS9DT0RFL1RoZU9kaW5Qcm9qZWN0L3JlcG9zL1dlYXRoZXItQXBwL2Rpc3QvaW5kZXguaHRtbCAqL1xcblxcbmh0bWwge1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLyogSW5saW5lICMzIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLnRvZGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwJSAzMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZGF5ID4gLmN1cnJlbnQudGVtcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4udG9kYXkgPiAuZGVzY3JpcHRpb24uY29uZGl0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5uYW1lLmxvY2F0aW9uSW5mbyB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnJlZ2lvbi5sb2NhdGlvbkluZm8ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLyogSW5saW5lICMwIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLmluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzIgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4uc2VhcmNoRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBJbmxpbmUgIzIgfCBmaWxlOi8vL1VzZXJzL2hpZGVubnkvQ09ERS9UaGVPZGluUHJvamVjdC9yZXBvcy9XZWF0aGVyLUFwcC9kaXN0L2luZGV4Lmh0bWwgKi9cXG5cXG4uc2VhcmNoRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaG91cldlYXRoZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF5c0ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXlXZWF0aGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogSW5saW5lICMwIHwgZmlsZTovLy9Vc2Vycy9oaWRlbm55L0NPREUvVGhlT2RpblByb2plY3QvcmVwb3MvV2VhdGhlci1BcHAvZGlzdC9pbmRleC5odG1sICovXFxuXFxuLyogLmhvdXJGb3JlY2FzdCwgLmRheXNGb3JlY2FzdCB7ICovXFxuLmhvdXJGb3JlY2FzdCB7XFxuICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgd2lkdGg6IDUwcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuXG5pbXBvcnQgY3JlYXRlU2VhcmNoRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9zZWFyY2hGb3JtJztcbi8vIGltcG9ydCBmb3JtQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbFNlYXJjaEZvcm0nO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9zZXJ2aWNlcy93ZWF0aGVyYXBpJztcbmltcG9ydCBjcmVhdGVXZWF0aGVyQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS93ZWF0aGVyQ2FyZCc7XG5cbi8vIENyZWRpdFxuLy8gUG93ZXJlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXCIgdGl0bGU9XCJGcmVlIFdlYXRoZXIgQVBJXCI+V2VhdGhlckFQSS5jb208L2E+XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXCIgdGl0bGU9XCJGcmVlIFdlYXRoZXIgQVBJXCI+PGltZyBzcmM9Jy8vY2RuLndlYXRoZXJhcGkuY29tL3Y0L2ltYWdlcy93ZWF0aGVyYXBpX2xvZ28ucG5nJyBhbHQ9XCJXZWF0aGVyIGRhdGEgYnkgV2VhdGhlckFQSS5jb21cIiBib3JkZXI9XCIwXCI+PC9hPlxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlciA9IGFzeW5jIChzZWFyY2hSZXN1bHQpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaFJlc3VsdCk7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gYXdhaXQgY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xuXG4gIGJvZHkuYXBwZW5kKHdlYXRoZXJDYXJkKTtcbn07XG5cbmNvbnN0IHN1Y2Nlc3NDYWxsYmFjayA9IChwb3NpdGlvbikgPT4ge1xuICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgY29uc3Qgc2VhcmNoVmFsID0gYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWA7XG4gIGRpc3BsYXlXZWF0aGVyKHNlYXJjaFZhbCk7XG59O1xuXG5jb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yKSA9PiBlcnJvcjtcblxubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuXG5jb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBjcmVhdGVTZWFyY2hGb3JtKCk7XG4gIGJvZHkuYXBwZW5kKHNlYXJjaEZvcm0pO1xuXG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHsgc2VhcmNoQmFyIH0gPSBzZWFyY2hGb3JtO1xuICAgIGRpc3BsYXlXZWF0aGVyKHNlYXJjaEJhci52YWx1ZSk7XG4gIH0pO1xuICAvLyBmb3JtQ29udHJvbGxlcihzZWFyY2hGb3JtKTtcbiAgLy8gcmV0dXJuIHNlYXJjaEZvcm07XG59O1xuXG5zZWFyY2goKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVGZWVsc0xpa2VFbGVtZW50IiwiY3JlYXRlVVZJRWxlbWVudCIsImNyZWF0ZVNwZWVkRWxlbWVudCIsImNyZWF0ZUd1c3RFbGVtZW50IiwiY3JlYXRlRGlyZWN0aW9uRWxlbWVudCIsImNyZWF0ZU1heFNwZWVkRWxlbWVudCIsImNyZWF0ZVN1bnJpc2VFbGVtZW50IiwiY3JlYXRlU3Vuc2V0RWxlbWVudCIsImNyZWF0ZU1vb25yaXNlRWxlbWVudCIsImNyZWF0ZU1vb25zZXRFbGVtZW50IiwiY3JlYXRlTW9vbklsbEVsZW1lbnQiLCJjcmVhdGVNb29uQ2FyZCIsIl9yZWYiLCJyaXNlIiwic2V0IiwiaWxsdW1pbmF0aW9uIiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1vb25yaXNlSW5mbyIsImFwcGVuZCIsIm1vb25zZXRJbmZvIiwibW9vbklsbEluZm8iLCJjcmVhdGVTdW5DYXJkIiwiX3JlZjIiLCJzdW5yaXNlSW5mbyIsInN1bnNldEluZm8iLCJjcmVhdGVXaW5kQ2FyZCIsIndpbmQiLCJzcGVlZCIsImd1c3QiLCJtYXgiLCJrcGgiLCJkaXIiLCJzcGVlZEluZm8iLCJndXN0SW5mbyIsIm1heEluZm8iLCJkaXJJbmZvIiwiY3JlYXRlVVZJQ2FyZCIsInV2VmFsIiwiZWxlbWVudCIsImNyZWF0ZUZlZWxzTGlrZUNhcmQiLCJmZWVsc0xpa2VUZW1wIiwiY3JlYXRlRGV0YWlsc1NlY3Rpb24iLCJfcmVmMyIsInRlbXAiLCJhc3RybyIsImZlZWwiLCJ1diIsInN1biIsIm1vb24iLCJkZXRhaWxzU2VjdGlvbiIsImZlZWxDYXJkIiwiYyIsInV2Q2FyZCIsIndpbmRDYXJkIiwic3VuQ2FyZCIsIm1vb25DYXJkIiwiY3JlYXRlSG91ckZvcmVjYXN0IiwiY3JlYXRlRGF5c0ZvcmVjYXN0IiwiY3JlYXRlRm9yZWNhc3RTZWN0aW9uIiwiaG91ciIsImRheXMiLCJmb3JlY2FzdFNlY3Rpb24iLCJob3VyRm9yZWNhc3QiLCJkYXlzRm9yZWNhc3QiLCJjcmVhdGVOYW1lRWxlbWVudCIsImNyZWF0ZVJlZ2lvbkVsZW1lbnQiLCJjcmVhdGVJbmZvU2VjdGlvbiIsIm5hbWUiLCJyZWdpb24iLCJpbmZvU2VjdGlvbiIsImNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCIsImNyZWF0ZUNvblRleHRFbGVtZW50IiwiY3JlYXRlVG9kYXlTZWN0aW9uIiwiY29uZGl0aW9uIiwidG9kYXlTZWN0aW9uIiwiY3VycmVudCIsImFzdHJvQ2xhc3NOYW1lIiwic3VucmlzZVRpbWUiLCJzdW5yaXNlIiwidGV4dENvbnRlbnQiLCJzdW5zZXRUaW1lIiwic3Vuc2V0IiwibW9vbnJpc2VUaW1lIiwibW9vbnJpc2UiLCJtb29uc2V0VGltZSIsIm1vb25zZXQiLCJtb29uSWxsVmFsdWUiLCJtb29uSWxsIiwidGV4dCIsImRlc2NyaXB0aW9uIiwiY3JlYXRlQ29uSWNvbkVsZW1lbnQiLCJpY29uIiwiY29tcGxldGVVUkwiLCJnZXRJY29uIiwiZmV0Y2giLCJpY29uSW1nIiwic3JjIiwidXJsIiwiZXJyIiwiRXJyb3IiLCJjcmVhdGVNYXhUZW1wRWxlbWVudCIsImNyZWF0ZU1pblRlbXBFbGVtZW50IiwiZm9yZWNhc3RDbGFzc05hbWUiLCJjcmVhdGVIb3VyTm9kZSIsImhvdXJXZWF0aGVyIiwiaG91ck5vZGUiLCJob3VyVGl0bGUiLCJjb25kaXRpb25JY29uIiwiY3VycmVudFRlbXAiLCJob3VybHlBcnIiLCJob3VyTm9kZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJjcmVhdGVEYXlOb2RlIiwiZGF5V2VhdGhlciIsImRheU5vZGUiLCJkYXlUaXRsZSIsImRhdGUiLCJhdmdUZW1wIiwiYXZnIiwibWF4VGVtcCIsIm1pblRlbXAiLCJtaW4iLCJkYXlzQXJyIiwiaW5mb0NsYXNzTmFtZSIsIm5hbWVFbGVtZW50IiwicmVnaW9uRWxlbWVudCIsImNyZWF0ZVN1Ym1pdEJ0biIsInN1Ym1pdEJ0biIsInR5cGUiLCJpZCIsImNyZWF0ZVNlYXJjaEJhciIsImxhYmVsIiwiZm9yIiwic2VhcmNoQmFyIiwicGxhY2Vob2xkZXIiLCJjcmVhdGVTZWFyY2hGb3JtIiwic2VhcmNoRm9ybSIsInRlbXBDbGFzc05hbWUiLCJmZWVsc0xpa2UiLCJtaW5UZW1wVmFsdWUiLCJtYXhUZW1wVmFsdWUiLCJVVkluZGV4IiwidXZJbmRleCIsIndpbmRDbGFzc05hbWUiLCJ3aW5kU3BlZWQiLCJ3aW5kR3VzdCIsIm1heFNwZWVkIiwibWF4V2luZCIsIndpbmREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJjcmVhdGVXZWF0aGVyQ2FyZCIsIndlYXRoZXJEYXRhIiwiaW5mbyIsInRvZGF5IiwiZm9yZWNhc3QiLCJkZXRhaWxzIiwid2VhdGhlckNhcmQiLCJpbmZvU2VjIiwidG9kYXlTZWMiLCJmb3JlY2FzdFNlYyIsImRldGFpbHNTZWMiLCJnZXRUb2RheVdlYXRoZXIiLCJ0ZW1wX2MiLCJ0ZW1wX2YiLCJtYXh0ZW1wX2MiLCJtYXh0ZW1wX2YiLCJmb3JlY2FzdGRheSIsImRheSIsIm1pbnRlbXBfYyIsIm1pbnRlbXBfZiIsImYiLCJnZXRUZW1wIiwiZmVlbHNsaWtlX2MiLCJmZWVsc2xpa2VfZiIsImdldFdpbmQiLCJ3aW5kX2twaCIsIndpbmRfbXBoIiwid2luZF9kaXIiLCJndXN0X2twaCIsImd1c3RfbXBoIiwibWF4d2luZF9rcGgiLCJtYXh3aW5kX21waCIsIm1waCIsImdldEFzdHJvIiwibW9vbl9pbGx1bWluYXRpb24iLCJnZXREZXRhaWxzIiwicGFyc2VIb3VybHlGb3JlY2FzdCIsImZvcmVjYXN0RGF0YUhvdXJzIiwiZm9yZWNhc3RIb3VybHkiLCJob3VyRGF0YSIsInRpbWUiLCJzcGxpdCIsInB1c2giLCJwYXJzZURhaWx5Rm9yZWNhc3QiLCJmb3JlY2FzdERheXNEYXRhIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3REYXkiLCJhdmd0ZW1wX2MiLCJhdmd0ZW1wX2YiLCJ3ZWF0aGVyRGF5IiwiZ2V0Rm9yZWNhc3QiLCJmaWx0ZXJXZWF0aGVyRGF0YSIsImxvY2F0aW9uIiwiYXBpS2V5IiwiYmFzZVVSTCIsImZvcmVjYXN0V2VhdGhlciIsImdldFdlYXRoZXJEYXRhIiwid2VhdGhlclVSTCIsIndlYXRoZXJSZXNwb25zZSIsImpzb24iLCJnZXRXZWF0aGVyIiwiY2xlYW5EYXRhIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5V2VhdGhlciIsInNlYXJjaFJlc3VsdCIsInN1Y2Nlc3NDYWxsYmFjayIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb29yZHMiLCJzZWFyY2hWYWwiLCJlcnJvckNhbGxiYWNrIiwiZXJyb3IiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInNlYXJjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9
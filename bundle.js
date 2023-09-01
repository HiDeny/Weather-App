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

const createForecastSection = _ref => {
  let {
    hour,
    days
  } = _ref;
  const forecastSection = document.createElement('section');
  forecastSection.classList.add('forecast');
  const hourForecast = (0,_elements_forecast__WEBPACK_IMPORTED_MODULE_0__.createHourForecast)(hour);
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
const createHourForecast = hourlyArr => {
  const hourForecast = document.createElement('div');
  hourForecast.classList.add(forecastClassName);
  hourForecast.classList.add('hourForecast');
  hourlyArr.forEach(async hourWeather => {
    const hourNode = await createHourNode(hourWeather);
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




const createWeatherCard = weatherData => {
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
  const forecastSec = (0,_cardSections_forecasts__WEBPACK_IMPORTED_MODULE_2__["default"])(forecast);
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
const forecastDays = 'days=3';
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
  const weatherCard = (0,_components_display_weatherCard__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherData);
  body.append(weatherCard);
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2lDO0FBT1A7QUFRQztBQUUzQixNQUFNVyxjQUFjLEdBQUdDLElBQUEsSUFBaUM7RUFBQSxJQUFoQztJQUFFQyxJQUFJO0lBQUVDLEdBQUc7SUFBRUM7RUFBYSxDQUFDLEdBQUFILElBQUE7RUFDakQsTUFBTUksSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBRTFCLE1BQU1DLFlBQVksR0FBR2Isc0VBQXFCLENBQUNLLElBQUksQ0FBQztFQUNoREcsSUFBSSxDQUFDTSxNQUFNLENBQUNELFlBQVksQ0FBQztFQUV6QixNQUFNRSxXQUFXLEdBQUdkLHFFQUFvQixDQUFDSyxHQUFHLENBQUM7RUFDN0NFLElBQUksQ0FBQ00sTUFBTSxDQUFDQyxXQUFXLENBQUM7RUFFeEIsTUFBTUMsV0FBVyxHQUFHZCxxRUFBb0IsQ0FBQ0ssWUFBWSxDQUFDO0VBQ3REQyxJQUFJLENBQUNNLE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBRXhCLE9BQU9SLElBQUk7QUFDYixDQUFDO0FBRUQsTUFBTVMsYUFBYSxHQUFHQyxLQUFBLElBQW1CO0VBQUEsSUFBbEI7SUFBRWIsSUFBSTtJQUFFQztFQUFJLENBQUMsR0FBQVksS0FBQTtFQUNsQyxNQUFNVixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMxQ0YsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFFekIsTUFBTU8sV0FBVyxHQUFHckIscUVBQW9CLENBQUNPLElBQUksQ0FBQztFQUM5Q0csSUFBSSxDQUFDTSxNQUFNLENBQUNLLFdBQVcsQ0FBQztFQUV4QixNQUFNQyxVQUFVLEdBQUdyQixvRUFBbUIsQ0FBQ08sR0FBRyxDQUFDO0VBQzNDRSxJQUFJLENBQUNNLE1BQU0sQ0FBQ00sVUFBVSxDQUFDO0VBRXZCLE9BQU9aLElBQUk7QUFDYixDQUFDO0FBRUQsTUFBTWEsY0FBYyxHQUFJQyxJQUFJLElBQUs7RUFDL0IsTUFBTTtJQUFFQyxLQUFLO0lBQUVDLElBQUk7SUFBRUM7RUFBSSxDQUFDLEdBQUdILElBQUksQ0FBQ0ksR0FBRztFQUNyQyxNQUFNO0lBQUVDO0VBQUksQ0FBQyxHQUFHTCxJQUFJO0VBQ3BCLE1BQU1kLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUUxQixNQUFNZ0IsU0FBUyxHQUFHbEMsa0VBQWtCLENBQUM2QixLQUFLLENBQUM7RUFDM0NmLElBQUksQ0FBQ00sTUFBTSxDQUFDYyxTQUFTLENBQUM7RUFFdEIsTUFBTUMsUUFBUSxHQUFHbEMsaUVBQWlCLENBQUM2QixJQUFJLENBQUM7RUFDeENoQixJQUFJLENBQUNNLE1BQU0sQ0FBQ2UsUUFBUSxDQUFDO0VBRXJCLE1BQU1DLE9BQU8sR0FBR2pDLHFFQUFxQixDQUFDNEIsR0FBRyxDQUFDO0VBQzFDakIsSUFBSSxDQUFDTSxNQUFNLENBQUNnQixPQUFPLENBQUM7RUFFcEIsTUFBTUMsT0FBTyxHQUFHbkMsc0VBQXNCLENBQUMrQixHQUFHLENBQUM7RUFDM0NuQixJQUFJLENBQUNNLE1BQU0sQ0FBQ2lCLE9BQU8sQ0FBQztFQUVwQixPQUFPdkIsSUFBSTtBQUNiLENBQUM7QUFFRCxNQUFNd0IsYUFBYSxHQUFJQyxLQUFLLElBQUs7RUFDL0IsTUFBTXpCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUV4QixNQUFNc0IsT0FBTyxHQUFHekMsdUVBQWdCLENBQUN3QyxLQUFLLENBQUM7RUFDdkN6QixJQUFJLENBQUNNLE1BQU0sQ0FBQ29CLE9BQU8sQ0FBQztFQUVwQixPQUFPMUIsSUFBSTtBQUNiLENBQUM7QUFFRCxNQUFNMkIsbUJBQW1CLEdBQUlDLGFBQWEsSUFBSztFQUM3QyxNQUFNNUIsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNGLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBRS9CLE1BQU1zQixPQUFPLEdBQUcxQyw2RUFBc0IsQ0FBQzRDLGFBQWEsQ0FBQztFQUNyRDVCLElBQUksQ0FBQ00sTUFBTSxDQUFDb0IsT0FBTyxDQUFDO0VBRXBCLE9BQU8xQixJQUFJO0FBQ2IsQ0FBQztBQUVELE1BQU02QixvQkFBb0IsR0FBR0MsS0FBQSxJQUEyQjtFQUFBLElBQTFCO0lBQUVDLElBQUk7SUFBRWpCLElBQUk7SUFBRWtCO0VBQU0sQ0FBQyxHQUFBRixLQUFBO0VBQ2pELE1BQU07SUFBRUcsSUFBSTtJQUFFQztFQUFHLENBQUMsR0FBR0gsSUFBSTtFQUN6QixNQUFNO0lBQUVJLEdBQUc7SUFBRUM7RUFBSyxDQUFDLEdBQUdKLEtBQUs7RUFFM0IsTUFBTUssY0FBYyxHQUFHcEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3hEbUMsY0FBYyxDQUFDbEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFOUMsTUFBTWtDLFFBQVEsR0FBR1gsbUJBQW1CLENBQUNNLElBQUksQ0FBQ00sQ0FBQyxDQUFDO0VBQzVDRixjQUFjLENBQUMvQixNQUFNLENBQUNnQyxRQUFRLENBQUM7RUFFL0IsTUFBTUUsTUFBTSxHQUFHaEIsYUFBYSxDQUFDVSxFQUFFLENBQUM7RUFDaENHLGNBQWMsQ0FBQy9CLE1BQU0sQ0FBQ2tDLE1BQU0sQ0FBQztFQUU3QixNQUFNQyxRQUFRLEdBQUc1QixjQUFjLENBQUNDLElBQUksQ0FBQztFQUNyQ3VCLGNBQWMsQ0FBQy9CLE1BQU0sQ0FBQ21DLFFBQVEsQ0FBQztFQUUvQixNQUFNQyxPQUFPLEdBQUdqQyxhQUFhLENBQUMwQixHQUFHLENBQUM7RUFDbENFLGNBQWMsQ0FBQy9CLE1BQU0sQ0FBQ29DLE9BQU8sQ0FBQztFQUU5QixNQUFNQyxRQUFRLEdBQUdoRCxjQUFjLENBQUN5QyxJQUFJLENBQUM7RUFDckNDLGNBQWMsQ0FBQy9CLE1BQU0sQ0FBQ3FDLFFBQVEsQ0FBQztFQUUvQixPQUFPTixjQUFjO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZVIsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUNuSDJDO0FBRTlFLE1BQU1pQixxQkFBcUIsR0FBR2xELElBQUEsSUFBb0I7RUFBQSxJQUFuQjtJQUFFbUQsSUFBSTtJQUFFQztFQUFLLENBQUMsR0FBQXBELElBQUE7RUFFM0MsTUFBTXFELGVBQWUsR0FBR2hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUN6RCtDLGVBQWUsQ0FBQzlDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUV6QyxNQUFNOEMsWUFBWSxHQUFHTixzRUFBa0IsQ0FBQ0csSUFBSSxDQUFDO0VBQzdDRSxlQUFlLENBQUMzQyxNQUFNLENBQUM0QyxZQUFZLENBQUM7RUFFcEMsTUFBTUMsWUFBWSxHQUFHTixzRUFBa0IsQ0FBQ0csSUFBSSxDQUFDO0VBQzdDQyxlQUFlLENBQUMzQyxNQUFNLENBQUM2QyxZQUFZLENBQUM7RUFFcEMsT0FBT0YsZUFBZTtBQUN4QixDQUFDO0FBRUQsaUVBQWVILHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDaEJzQztBQUUxRSxNQUFNUSxpQkFBaUIsR0FBRzFELElBQUEsSUFBc0I7RUFBQSxJQUFyQjtJQUFFMkQsSUFBSTtJQUFFQztFQUFPLENBQUMsR0FBQTVELElBQUE7RUFDekMsTUFBTTZELFdBQVcsR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNyRHVELFdBQVcsQ0FBQ3RELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUVqQ3FELFdBQVcsQ0FBQ25ELE1BQU0sQ0FBQzhDLGlFQUFpQixDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUMzQ0UsV0FBVyxDQUFDbkQsTUFBTSxDQUFDK0MsbUVBQW1CLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0VBRS9DLE9BQU9DLFdBQVc7QUFDcEIsQ0FBQztBQUVELGlFQUFlSCxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUM7QUFDTDtBQUU5RCxNQUFNTSxrQkFBa0IsR0FBR2hFLElBQUEsSUFBeUI7RUFBQSxJQUF4QjtJQUFFbUMsSUFBSTtJQUFFOEI7RUFBVSxDQUFDLEdBQUFqRSxJQUFBO0VBQzdDLE1BQU1rRSxZQUFZLEdBQUc3RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDdEQ0RCxZQUFZLENBQUMzRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFFbkMwRCxZQUFZLENBQUN4RCxNQUFNLENBQUNvRCwrRUFBd0IsQ0FBQzNCLElBQUksQ0FBQ1EsQ0FBQyxDQUFDd0IsT0FBTyxDQUFDLENBQUM7RUFDN0RELFlBQVksQ0FBQ3hELE1BQU0sQ0FBQ3FELDBFQUFvQixDQUFDRSxTQUFTLENBQUMsQ0FBQztFQUVwRCxPQUFPQyxZQUFZO0FBQ3JCLENBQUM7QUFFRCxpRUFBZUYsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiakMsTUFBTUksY0FBYyxHQUFHLE9BQU87QUFFOUIsTUFBTTFFLG9CQUFvQixHQUFJMkUsV0FBVyxJQUFLO0VBQzVDLE1BQU1DLE9BQU8sR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ2dFLE9BQU8sQ0FBQy9ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUNoQzhELE9BQU8sQ0FBQy9ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNEQsY0FBYyxDQUFDO0VBQ3JDRSxPQUFPLENBQUNDLFdBQVcsR0FBSSxZQUFXRixXQUFZLEVBQUM7RUFFL0MsT0FBT0MsT0FBTztBQUNoQixDQUFDO0FBRUQsTUFBTTNFLG1CQUFtQixHQUFJNkUsVUFBVSxJQUFLO0VBQzFDLE1BQU1DLE1BQU0sR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMxQ21FLE1BQU0sQ0FBQ2xFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUM5QmlFLE1BQU0sQ0FBQ2xFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDNEQsY0FBYyxDQUFDO0VBQ3BDSyxNQUFNLENBQUNGLFdBQVcsR0FBSSxXQUFVQyxVQUFXLEVBQUM7RUFFNUMsT0FBT0MsTUFBTTtBQUNmLENBQUM7QUFFRCxNQUFNN0UscUJBQXFCLEdBQUk4RSxZQUFZLElBQUs7RUFDOUMsTUFBTUMsUUFBUSxHQUFHdEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzVDcUUsUUFBUSxDQUFDcEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ2xDbUUsUUFBUSxDQUFDcEUsU0FBUyxDQUFDQyxHQUFHLENBQUM0RCxjQUFjLENBQUM7RUFDdENPLFFBQVEsQ0FBQ0osV0FBVyxHQUFJLGFBQVlHLFlBQWEsRUFBQztFQUVsRCxPQUFPQyxRQUFRO0FBQ2pCLENBQUM7QUFFRCxNQUFNOUUsb0JBQW9CLEdBQUkrRSxXQUFXLElBQUs7RUFDNUMsTUFBTUMsT0FBTyxHQUFHeEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDdUUsT0FBTyxDQUFDdEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDcUUsT0FBTyxDQUFDdEUsU0FBUyxDQUFDQyxHQUFHLENBQUM0RCxjQUFjLENBQUM7RUFDckNTLE9BQU8sQ0FBQ04sV0FBVyxHQUFJLFlBQVdLLFdBQVksRUFBQztFQUUvQyxPQUFPQyxPQUFPO0FBQ2hCLENBQUM7QUFFRCxNQUFNL0Usb0JBQW9CLEdBQUlnRixZQUFZLElBQUs7RUFDN0MsTUFBTUMsT0FBTyxHQUFHMUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDeUUsT0FBTyxDQUFDeEUsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDdUUsT0FBTyxDQUFDeEUsU0FBUyxDQUFDQyxHQUFHLENBQUM0RCxjQUFjLENBQUM7RUFDckNXLE9BQU8sQ0FBQ1IsV0FBVyxHQUFJLHNCQUFxQk8sWUFBYSxFQUFDO0VBRTFELE9BQU9DLE9BQU87QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRCxNQUFNaEIsb0JBQW9CLEdBQUcvRCxJQUFBLElBQWM7RUFBQSxJQUFiO0lBQUVnRjtFQUFLLENBQUMsR0FBQWhGLElBQUE7RUFDcEMsTUFBTWlGLFdBQVcsR0FBRzVFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMvQzJFLFdBQVcsQ0FBQzFFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUN4Q3lFLFdBQVcsQ0FBQzFFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztFQUN2Q3lFLFdBQVcsQ0FBQ1YsV0FBVyxHQUFJLFFBQU9TLElBQUssRUFBQztFQUV4QyxPQUFPQyxXQUFXO0FBQ3BCLENBQUM7QUFFRCxNQUFNQyxvQkFBb0IsR0FBRyxNQUFBcEUsS0FBQSxJQUFvQjtFQUFBLElBQWI7SUFBRXFFO0VBQUssQ0FBQyxHQUFBckUsS0FBQTtFQUMxQyxJQUFJO0lBQ0YsTUFBTXNFLFdBQVcsR0FBSSxTQUFRRCxJQUFLLEVBQUM7SUFDbkMsTUFBTUUsT0FBTyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsV0FBVyxDQUFDO0lBRXhDLE1BQU1HLE9BQU8sR0FBR2xGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3Q2lGLE9BQU8sQ0FBQ2hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM3QitFLE9BQU8sQ0FBQ2hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNuQytFLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHSCxPQUFPLENBQUNJLEdBQUc7SUFFekIsT0FBT0YsT0FBTztFQUNoQixDQUFDLENBQUMsT0FBT0csR0FBRyxFQUFFO0lBQ1osTUFBTSxJQUFJQyxLQUFLLENBQUNELEdBQUcsQ0FBQztFQUN0QjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0I7QUFDNkI7QUFFcEQsTUFBTUksaUJBQWlCLEdBQUcsVUFBVTtBQUVwQyxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsV0FBVyxJQUFLO0VBQzVDLE1BQU07SUFBRTdELElBQUk7SUFBRThCO0VBQVUsQ0FBQyxHQUFHK0IsV0FBVztFQUV2QyxNQUFNQyxRQUFRLEdBQUc1RixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUMyRixRQUFRLENBQUMxRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFFckMsTUFBTTBGLFNBQVMsR0FBRzdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM3QzRGLFNBQVMsQ0FBQzNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUNwQzBGLFNBQVMsQ0FBQzNCLFdBQVcsR0FBR3lCLFdBQVcsQ0FBQzdDLElBQUk7RUFDeEM4QyxRQUFRLENBQUN2RixNQUFNLENBQUN3RixTQUFTLENBQUM7RUFFMUIsTUFBTUMsYUFBYSxHQUFHLE1BQU1qQixpRUFBb0IsQ0FBQ2pCLFNBQVMsQ0FBQztFQUMzRGdDLFFBQVEsQ0FBQ3ZGLE1BQU0sQ0FBQ3lGLGFBQWEsQ0FBQztFQUU5QixNQUFNQyxXQUFXLEdBQUd0QyxzRUFBd0IsQ0FBQzNCLElBQUksQ0FBQ1EsQ0FBQyxDQUFDO0VBQ3BEc0QsUUFBUSxDQUFDdkYsTUFBTSxDQUFDMEYsV0FBVyxDQUFDO0VBRTVCLE9BQU9ILFFBQVE7QUFDakIsQ0FBQztBQUVELE1BQU1qRCxrQkFBa0IsR0FBSXFELFNBQVMsSUFBSztFQUN4QyxNQUFNL0MsWUFBWSxHQUFHakQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xEZ0QsWUFBWSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUNzRixpQkFBaUIsQ0FBQztFQUM3Q3hDLFlBQVksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUUxQzZGLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLE1BQU9OLFdBQVcsSUFBSztJQUN2QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUYsY0FBYyxDQUFDQyxXQUFXLENBQUM7SUFDbEQxQyxZQUFZLENBQUM1QyxNQUFNLENBQUN1RixRQUFRLENBQUM7RUFDL0IsQ0FBQyxDQUFDO0VBRUYsT0FBTzNDLFlBQVk7QUFDckIsQ0FBQztBQUVELE1BQU1pRCxhQUFhLEdBQUcsTUFBT0MsVUFBVSxJQUFLO0VBQzFDLE1BQU07SUFBRXJFLElBQUk7SUFBRThCO0VBQVUsQ0FBQyxHQUFHdUMsVUFBVTtFQUV0QyxNQUFNQyxPQUFPLEdBQUdwRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0NtRyxPQUFPLENBQUNsRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFFbkMsTUFBTWtHLFFBQVEsR0FBR3JHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM1Q29HLFFBQVEsQ0FBQ25HLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNsQ2tHLFFBQVEsQ0FBQ25DLFdBQVcsR0FBR2lDLFVBQVUsQ0FBQ0csSUFBSTtFQUN0Q0YsT0FBTyxDQUFDL0YsTUFBTSxDQUFDZ0csUUFBUSxDQUFDO0VBRXhCLE1BQU1QLGFBQWEsR0FBRyxNQUFNakIsaUVBQW9CLENBQUNqQixTQUFTLENBQUM7RUFDM0R3QyxPQUFPLENBQUMvRixNQUFNLENBQUN5RixhQUFhLENBQUM7RUFFN0IsTUFBTVMsT0FBTyxHQUFHOUMsc0VBQXdCLENBQUMzQixJQUFJLENBQUNRLENBQUMsQ0FBQ2tFLEdBQUcsQ0FBQztFQUNwREosT0FBTyxDQUFDL0YsTUFBTSxDQUFDa0csT0FBTyxDQUFDO0VBRXZCLE1BQU1FLE9BQU8sR0FBR2xCLGtFQUFvQixDQUFDekQsSUFBSSxDQUFDUSxDQUFDLENBQUN0QixHQUFHLENBQUM7RUFDaERvRixPQUFPLENBQUMvRixNQUFNLENBQUNvRyxPQUFPLENBQUM7RUFFdkIsTUFBTUMsT0FBTyxHQUFHbEIsa0VBQW9CLENBQUMxRCxJQUFJLENBQUNRLENBQUMsQ0FBQ3FFLEdBQUcsQ0FBQztFQUNoRFAsT0FBTyxDQUFDL0YsTUFBTSxDQUFDcUcsT0FBTyxDQUFDO0VBRXZCLE9BQU9OLE9BQU87QUFDaEIsQ0FBQztBQUVELE1BQU14RCxrQkFBa0IsR0FBSWdFLE9BQU8sSUFBSztFQUN0QyxNQUFNMUQsWUFBWSxHQUFHbEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xEaUQsWUFBWSxDQUFDaEQsU0FBUyxDQUFDQyxHQUFHLENBQUNzRixpQkFBaUIsQ0FBQztFQUM3Q3ZDLFlBQVksQ0FBQ2hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUUxQ3lHLE9BQU8sQ0FBQ1gsT0FBTyxDQUFDLE1BQU9FLFVBQVUsSUFBSztJQUNwQyxNQUFNQyxPQUFPLEdBQUcsTUFBTUYsYUFBYSxDQUFDQyxVQUFVLENBQUM7SUFDL0NqRCxZQUFZLENBQUM3QyxNQUFNLENBQUMrRixPQUFPLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0VBRUYsT0FBT2xELFlBQVk7QUFDckIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FRCxNQUFNMkQsYUFBYSxHQUFHLGNBQWM7QUFFcEMsTUFBTTFELGlCQUFpQixHQUFJRyxJQUFJLElBQUs7RUFDbEMsTUFBTXdELFdBQVcsR0FBRzlHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUNoRDZHLFdBQVcsQ0FBQzVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNqQzJHLFdBQVcsQ0FBQzVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDMEcsYUFBYSxDQUFDO0VBQ3hDQyxXQUFXLENBQUM1QyxXQUFXLEdBQUdaLElBQUk7RUFFOUIsT0FBT3dELFdBQVc7QUFDcEIsQ0FBQztBQUVELE1BQU0xRCxtQkFBbUIsR0FBSUcsTUFBTSxJQUFLO0VBQ3RDLE1BQU13RCxhQUFhLEdBQUcvRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDakQ4RyxhQUFhLENBQUM3RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDckM0RyxhQUFhLENBQUM3RyxTQUFTLENBQUNDLEdBQUcsQ0FBQzBHLGFBQWEsQ0FBQztFQUMxQ0UsYUFBYSxDQUFDN0MsV0FBVyxHQUFHWCxNQUFNO0VBRWxDLE9BQU93RCxhQUFhO0FBQ3RCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRCxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTTtFQUM1QixNQUFNQyxTQUFTLEdBQUdqSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDbERnSCxTQUFTLENBQUNDLElBQUksR0FBRyxRQUFRO0VBQ3pCRCxTQUFTLENBQUNFLEVBQUUsR0FBRyxXQUFXO0VBQzFCRixTQUFTLENBQUMvQyxXQUFXLEdBQUcsU0FBUztFQUVqQyxPQUFPK0MsU0FBUztBQUNsQixDQUFDO0FBRUQsTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQU07RUFDNUIsTUFBTUMsS0FBSyxHQUFHckgsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzdDb0gsS0FBSyxDQUFDQyxHQUFHLEdBQUcsV0FBVztFQUV2QixNQUFNQyxTQUFTLEdBQUd2SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDakRzSCxTQUFTLENBQUNMLElBQUksR0FBRyxNQUFNO0VBQ3ZCSyxTQUFTLENBQUNDLFdBQVcsR0FBRyxNQUFNO0VBQzlCRCxTQUFTLENBQUNqRSxJQUFJLEdBQUcsV0FBVztFQUM1QmlFLFNBQVMsQ0FBQ0osRUFBRSxHQUFHLFdBQVc7RUFFMUJFLEtBQUssQ0FBQ2hILE1BQU0sQ0FBQ2tILFNBQVMsQ0FBQztFQUN2QixPQUFPRixLQUFLO0FBQ2QsQ0FBQztBQUVELE1BQU1JLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07RUFDN0IsTUFBTUMsVUFBVSxHQUFHMUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBRWpELE1BQU1zSCxTQUFTLEdBQUdILGVBQWUsQ0FBQyxDQUFDO0VBQ25DTSxVQUFVLENBQUNySCxNQUFNLENBQUNrSCxTQUFTLENBQUM7RUFFNUIsTUFBTU4sU0FBUyxHQUFHRCxlQUFlLENBQUMsQ0FBQztFQUNuQ1UsVUFBVSxDQUFDckgsTUFBTSxDQUFDNEcsU0FBUyxDQUFDO0VBRTVCLE9BQU9TLFVBQVU7QUFDbkIsQ0FBQztBQUVELGlFQUFlRCxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DL0IsTUFBTUUsYUFBYSxHQUFHLE1BQU07QUFFNUIsTUFBTWxFLHdCQUF3QixHQUFJc0MsV0FBVyxJQUFLO0VBQ2hELE1BQU1qQyxPQUFPLEdBQUc5RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDM0M2RCxPQUFPLENBQUM1RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDaEMyRCxPQUFPLENBQUM1RCxTQUFTLENBQUNDLEdBQUcsQ0FBQ3dILGFBQWEsQ0FBQztFQUNwQzdELE9BQU8sQ0FBQ0ksV0FBVyxHQUFJLEdBQUU2QixXQUFZLElBQUc7RUFFeEMsT0FBT2pDLE9BQU87QUFDaEIsQ0FBQztBQUVELE1BQU0vRSxzQkFBc0IsR0FBSTRDLGFBQWEsSUFBSztFQUNoRCxNQUFNaUcsU0FBUyxHQUFHNUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzdDMkgsU0FBUyxDQUFDMUgsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ3BDeUgsU0FBUyxDQUFDMUgsU0FBUyxDQUFDQyxHQUFHLENBQUN3SCxhQUFhLENBQUM7RUFDdENDLFNBQVMsQ0FBQzFELFdBQVcsR0FBSSxlQUFjdkMsYUFBYyxJQUFHO0VBRXhELE9BQU9pRyxTQUFTO0FBQ2xCLENBQUM7QUFFRCxNQUFNcEMsb0JBQW9CLEdBQUlxQyxZQUFZLElBQUs7RUFDN0MsTUFBTW5CLE9BQU8sR0FBRzFHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3lHLE9BQU8sQ0FBQ3hHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUNoQ3VHLE9BQU8sQ0FBQ3hHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDd0gsYUFBYSxDQUFDO0VBQ3BDakIsT0FBTyxDQUFDeEMsV0FBVyxHQUFJLFNBQVEyRCxZQUFhLElBQUc7RUFFL0MsT0FBT25CLE9BQU87QUFDaEIsQ0FBQztBQUVELE1BQU1uQixvQkFBb0IsR0FBSXVDLFlBQVksSUFBSztFQUM3QyxNQUFNckIsT0FBTyxHQUFHekcsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDd0csT0FBTyxDQUFDdkcsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDc0csT0FBTyxDQUFDdkcsU0FBUyxDQUFDQyxHQUFHLENBQUN3SCxhQUFhLENBQUM7RUFDcENsQixPQUFPLENBQUN2QyxXQUFXLEdBQUksZUFBYzRELFlBQWEsSUFBRztFQUVyRCxPQUFPckIsT0FBTztBQUNoQixDQUFDO0FBRUQsTUFBTXpILGdCQUFnQixHQUFJK0ksT0FBTyxJQUFLO0VBQ3BDLE1BQU1DLE9BQU8sR0FBR2hJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQytILE9BQU8sQ0FBQzlILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUMzQjZILE9BQU8sQ0FBQzlILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDd0gsYUFBYSxDQUFDO0VBQ3BDSyxPQUFPLENBQUM5RCxXQUFXLEdBQUksT0FBTTZELE9BQVEsRUFBQztFQUV0QyxPQUFPQyxPQUFPO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRCxNQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUU1QixNQUFNaEosa0JBQWtCLEdBQUlpSixTQUFTLElBQUs7RUFDeEMsTUFBTXBILEtBQUssR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3pDYSxLQUFLLENBQUNaLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUM1QlcsS0FBSyxDQUFDWixTQUFTLENBQUNDLEdBQUcsQ0FBQzhILGFBQWEsQ0FBQztFQUNsQ25ILEtBQUssQ0FBQ29ELFdBQVcsR0FBSSxTQUFRZ0UsU0FBVSxFQUFDO0VBRXhDLE9BQU9wSCxLQUFLO0FBQ2QsQ0FBQztBQUVELE1BQU01QixpQkFBaUIsR0FBSWlKLFFBQVEsSUFBSztFQUN0QyxNQUFNcEgsSUFBSSxHQUFHZixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDeENjLElBQUksQ0FBQ2IsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQzFCWSxJQUFJLENBQUNiLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDOEgsYUFBYSxDQUFDO0VBQ2pDbEgsSUFBSSxDQUFDbUQsV0FBVyxHQUFJLFVBQVNpRSxRQUFTLEVBQUM7RUFFdkMsT0FBT3BILElBQUk7QUFDYixDQUFDO0FBRUQsTUFBTTNCLHFCQUFxQixHQUFJZ0osUUFBUSxJQUFLO0VBQzFDLE1BQU1DLE9BQU8sR0FBR3JJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ29JLE9BQU8sQ0FBQ25JLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUNoQ2tJLE9BQU8sQ0FBQ25JLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDOEgsYUFBYSxDQUFDO0VBQ3BDSSxPQUFPLENBQUNuRSxXQUFXLEdBQUksY0FBYWtFLFFBQVMsRUFBQztFQUU5QyxPQUFPQyxPQUFPO0FBQ2hCLENBQUM7QUFFRCxNQUFNbEosc0JBQXNCLEdBQUltSixhQUFhLElBQUs7RUFDaEQsTUFBTUMsU0FBUyxHQUFHdkksUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzdDc0ksU0FBUyxDQUFDckksU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ3BDb0ksU0FBUyxDQUFDckksU0FBUyxDQUFDQyxHQUFHLENBQUM4SCxhQUFhLENBQUM7RUFDdENNLFNBQVMsQ0FBQ3JFLFdBQVcsR0FBSSxjQUFhb0UsYUFBYyxFQUFDO0VBRXJELE9BQU9DLFNBQVM7QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDMkQ7QUFDQztBQUNBO0FBQ0M7QUFFOUQsTUFBTUMsaUJBQWlCLEdBQUlDLFdBQVcsSUFBSztFQUN6QyxNQUFNO0lBQUVDLElBQUk7SUFBRUMsS0FBSztJQUFFQyxRQUFRO0lBQUVDO0VBQVEsQ0FBQyxHQUFHSixXQUFXO0VBQ3RELE1BQU1LLFdBQVcsR0FBRzlJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRDZJLFdBQVcsQ0FBQzVJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUV4QyxNQUFNNEksT0FBTyxHQUFHMUYsc0VBQWlCLENBQUNxRixJQUFJLENBQUM7RUFDdkNJLFdBQVcsQ0FBQ3pJLE1BQU0sQ0FBQzBJLE9BQU8sQ0FBQztFQUUzQixNQUFNQyxRQUFRLEdBQUdyRixzRUFBa0IsQ0FBQ2dGLEtBQUssQ0FBQztFQUMxQ0csV0FBVyxDQUFDekksTUFBTSxDQUFDMkksUUFBUSxDQUFDO0VBRTVCLE1BQU1DLFdBQVcsR0FBR3BHLG1FQUFxQixDQUFDK0YsUUFBUSxDQUFDO0VBQ25ERSxXQUFXLENBQUN6SSxNQUFNLENBQUM0SSxXQUFXLENBQUM7RUFFL0IsTUFBTUMsVUFBVSxHQUFHdEgscUVBQW9CLENBQUNpSCxPQUFPLENBQUM7RUFDaERDLFdBQVcsQ0FBQ3pJLE1BQU0sQ0FBQzZJLFVBQVUsQ0FBQztFQUU5QixPQUFPSixXQUFXO0FBQ3BCLENBQUM7QUFFRCxpRUFBZU4saUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3pCaEM7O0FBRUEsTUFBTVcsZUFBZSxHQUFJVixXQUFXLElBQUs7RUFDdkMsTUFBTTtJQUFFVyxNQUFNO0lBQUVDO0VBQU8sQ0FBQyxHQUFHWixXQUFXLENBQUMzRSxPQUFPO0VBQzlDLE1BQU07SUFBRXdGLFNBQVM7SUFBRUM7RUFBVSxDQUFDLEdBQUdkLFdBQVcsQ0FBQ0csUUFBUSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUc7RUFDeEUsTUFBTTtJQUFFQyxTQUFTO0lBQUVDO0VBQVUsQ0FBQyxHQUFHbEIsV0FBVyxDQUFDRyxRQUFRLENBQUNZLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRztFQUN4RSxNQUFNO0lBQUU3RjtFQUFVLENBQUMsR0FBRzZFLFdBQVcsQ0FBQzNFLE9BQU87RUFDekMsT0FBTztJQUNMaEMsSUFBSSxFQUFFO01BQ0pRLENBQUMsRUFBRTtRQUFFd0IsT0FBTyxFQUFFc0YsTUFBTTtRQUFFcEksR0FBRyxFQUFFc0ksU0FBUztRQUFFM0MsR0FBRyxFQUFFK0M7TUFBVSxDQUFDO01BQ3RERSxDQUFDLEVBQUU7UUFBRTlGLE9BQU8sRUFBRXVGLE1BQU07UUFBRXJJLEdBQUcsRUFBRXVJLFNBQVM7UUFBRTVDLEdBQUcsRUFBRWdEO01BQVU7SUFDdkQsQ0FBQztJQUNEL0Y7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU1pRyxPQUFPLEdBQUlwQixXQUFXLElBQUs7RUFDL0IsTUFBTTtJQUFFcUIsV0FBVztJQUFFQyxXQUFXO0lBQUU5SDtFQUFHLENBQUMsR0FBR3dHLFdBQVcsQ0FBQzNFLE9BQU87RUFDNUQsT0FBTztJQUFFOUIsSUFBSSxFQUFFO01BQUVNLENBQUMsRUFBRXdILFdBQVc7TUFBRUYsQ0FBQyxFQUFFRztJQUFZLENBQUM7SUFBRTlIO0VBQUcsQ0FBQztBQUN6RCxDQUFDO0FBRUQsTUFBTStILE9BQU8sR0FBSXZCLFdBQVcsSUFBSztFQUMvQixNQUFNO0lBQUV3QixRQUFRO0lBQUVDLFFBQVE7SUFBRUM7RUFBUyxDQUFDLEdBQUcxQixXQUFXLENBQUMzRSxPQUFPO0VBQzVELE1BQU07SUFBRXNHLFFBQVE7SUFBRUM7RUFBUyxDQUFDLEdBQUc1QixXQUFXLENBQUMzRSxPQUFPO0VBQ2xELE1BQU07SUFBRXdHLFdBQVc7SUFBRUM7RUFBWSxDQUFDLEdBQUc5QixXQUFXLENBQUNHLFFBQVEsQ0FBQ1ksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHO0VBQzVFLE9BQU87SUFDTHhJLEdBQUcsRUFBRTtNQUFFSCxLQUFLLEVBQUVtSixRQUFRO01BQUVsSixJQUFJLEVBQUVxSixRQUFRO01BQUVwSixHQUFHLEVBQUVzSjtJQUFZLENBQUM7SUFDMURFLEdBQUcsRUFBRTtNQUFFMUosS0FBSyxFQUFFb0osUUFBUTtNQUFFbkosSUFBSSxFQUFFc0osUUFBUTtNQUFFckosR0FBRyxFQUFFdUo7SUFBWSxDQUFDO0lBQzFEckosR0FBRyxFQUFFaUo7RUFDUCxDQUFDO0FBQ0gsQ0FBQztBQUNELE1BQU1NLFFBQVEsR0FBSWhDLFdBQVcsSUFBSztFQUNoQyxNQUFNO0lBQUV4RSxPQUFPO0lBQUVHO0VBQU8sQ0FBQyxHQUFHcUUsV0FBVyxDQUFDRyxRQUFRLENBQUNZLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ3pILEtBQUs7RUFDckUsTUFBTTtJQUFFdUMsUUFBUTtJQUFFRTtFQUFRLENBQUMsR0FBR2lFLFdBQVcsQ0FBQ0csUUFBUSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUN6SCxLQUFLO0VBQ3ZFLE1BQU07SUFBRTJJO0VBQWtCLENBQUMsR0FBR2pDLFdBQVcsQ0FBQ0csUUFBUSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUN6SCxLQUFLO0VBQ3ZFLE9BQU87SUFDTEcsR0FBRyxFQUFFO01BQUV0QyxJQUFJLEVBQUVxRSxPQUFPO01BQUVwRSxHQUFHLEVBQUV1RTtJQUFPLENBQUM7SUFDbkNqQyxJQUFJLEVBQUU7TUFBRXZDLElBQUksRUFBRTBFLFFBQVE7TUFBRXpFLEdBQUcsRUFBRTJFLE9BQU87TUFBRTFFLFlBQVksRUFBRTRLO0lBQWtCO0VBQ3hFLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTUMsVUFBVSxHQUFJbEMsV0FBVyxJQUFLO0VBQ2xDLE1BQU0zRyxJQUFJLEdBQUcrSCxPQUFPLENBQUNwQixXQUFXLENBQUM7RUFDakMsTUFBTTVILElBQUksR0FBR21KLE9BQU8sQ0FBQ3ZCLFdBQVcsQ0FBQztFQUNqQyxNQUFNMUcsS0FBSyxHQUFHMEksUUFBUSxDQUFDaEMsV0FBVyxDQUFDO0VBRW5DLE9BQU87SUFBRTNHLElBQUk7SUFBRWpCLElBQUk7SUFBRWtCO0VBQU0sQ0FBQztBQUM5QixDQUFDO0FBRUQsTUFBTTZJLG1CQUFtQixHQUFJbkMsV0FBVyxJQUFLO0VBQzNDLE1BQU1vQyxpQkFBaUIsR0FBR3BDLFdBQVcsQ0FBQ0csUUFBUSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMxRyxJQUFJO0VBQ2xFLE1BQU1nSSxjQUFjLEdBQUcsRUFBRTtFQUV6QkQsaUJBQWlCLENBQUM1RSxPQUFPLENBQUU4RSxRQUFRLElBQUs7SUFDdEMsTUFBTTtNQUFFQyxJQUFJO01BQUU1QixNQUFNO01BQUVDLE1BQU07TUFBRXpGO0lBQVUsQ0FBQyxHQUFHbUgsUUFBUTtJQUNwRCxNQUFNakksSUFBSSxHQUFHa0ksSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9CLE1BQU10RixXQUFXLEdBQUc7TUFDbEI3QyxJQUFJO01BQ0pjLFNBQVM7TUFDVDlCLElBQUksRUFBRTtRQUFFUSxDQUFDLEVBQUU4RyxNQUFNO1FBQUVRLENBQUMsRUFBRVA7TUFBTztJQUMvQixDQUFDO0lBRUR5QixjQUFjLENBQUNJLElBQUksQ0FBQ3ZGLFdBQVcsQ0FBQztFQUNsQyxDQUFDLENBQUM7RUFFRixPQUFPbUYsY0FBYztBQUN2QixDQUFDO0FBQ0QsTUFBTUssa0JBQWtCLEdBQUkxQyxXQUFXLElBQUs7RUFDMUMsTUFBTTJDLGdCQUFnQixHQUFHM0MsV0FBVyxDQUFDRyxRQUFRLENBQUNZLFdBQVc7RUFDekQsTUFBTTZCLFlBQVksR0FBRyxFQUFFO0VBRXZCRCxnQkFBZ0IsQ0FBQ25GLE9BQU8sQ0FBRXFGLFdBQVcsSUFBSztJQUN4QyxNQUFNO01BQUVoRjtJQUFLLENBQUMsR0FBR2dGLFdBQVc7SUFDNUIsTUFBTTtNQUFFaEMsU0FBUztNQUFFQztJQUFVLENBQUMsR0FBRytCLFdBQVcsQ0FBQzdCLEdBQUc7SUFDaEQsTUFBTTtNQUFFQyxTQUFTO01BQUVDO0lBQVUsQ0FBQyxHQUFHMkIsV0FBVyxDQUFDN0IsR0FBRztJQUNoRCxNQUFNO01BQUU4QixTQUFTO01BQUVDO0lBQVUsQ0FBQyxHQUFHRixXQUFXLENBQUM3QixHQUFHO0lBQ2hELE1BQU07TUFBRTdGO0lBQVUsQ0FBQyxHQUFHMEgsV0FBVyxDQUFDeEksSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUUxQyxNQUFNMkksVUFBVSxHQUFHO01BQ2pCbkYsSUFBSTtNQUNKMUMsU0FBUztNQUNUOUIsSUFBSSxFQUFFO1FBQ0pRLENBQUMsRUFBRTtVQUFFa0UsR0FBRyxFQUFFK0UsU0FBUztVQUFFdkssR0FBRyxFQUFFc0ksU0FBUztVQUFFM0MsR0FBRyxFQUFFK0M7UUFBVSxDQUFDO1FBQ3JERSxDQUFDLEVBQUU7VUFBRXBELEdBQUcsRUFBRWdGLFNBQVM7VUFBRXhLLEdBQUcsRUFBRXVJLFNBQVM7VUFBRTVDLEdBQUcsRUFBRWdEO1FBQVU7TUFDdEQ7SUFDRixDQUFDO0lBRUQwQixZQUFZLENBQUNILElBQUksQ0FBQ08sVUFBVSxDQUFDO0VBQy9CLENBQUMsQ0FBQztFQUVGLE9BQU9KLFlBQVk7QUFDckIsQ0FBQztBQUVELE1BQU1LLFdBQVcsR0FBSWpELFdBQVcsSUFBSztFQUNuQyxNQUFNcUMsY0FBYyxHQUFHRixtQkFBbUIsQ0FBQ25DLFdBQVcsQ0FBQztFQUN2RCxNQUFNNEMsWUFBWSxHQUFHRixrQkFBa0IsQ0FBQzFDLFdBQVcsQ0FBQztFQUVwRCxPQUFPO0lBQUUzRixJQUFJLEVBQUVnSSxjQUFjO0lBQUUvSCxJQUFJLEVBQUVzSTtFQUFhLENBQUM7QUFDckQsQ0FBQztBQUVELE1BQU1NLGlCQUFpQixHQUFHLE1BQU9sRCxXQUFXLElBQUs7RUFDL0NtRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3BELFdBQVcsQ0FBQztFQUN4QixNQUFNO0lBQUVxRDtFQUFTLENBQUMsR0FBR3JELFdBQVc7RUFFaEMsTUFBTUMsSUFBSSxHQUFHO0lBQUVwRixJQUFJLEVBQUV3SSxRQUFRLENBQUN4SSxJQUFJO0lBQUVDLE1BQU0sRUFBRXVJLFFBQVEsQ0FBQ3ZJO0VBQU8sQ0FBQztFQUM3RCxNQUFNb0YsS0FBSyxHQUFHUSxlQUFlLENBQUNWLFdBQVcsQ0FBQztFQUMxQyxNQUFNRyxRQUFRLEdBQUc4QyxXQUFXLENBQUNqRCxXQUFXLENBQUM7RUFDekMsTUFBTUksT0FBTyxHQUFHOEIsVUFBVSxDQUFDbEMsV0FBVyxDQUFDO0VBRXZDLE9BQU87SUFDTEMsSUFBSTtJQUNKQyxLQUFLO0lBQ0xDLFFBQVE7SUFDUkM7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlOEMsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3RIaEMsTUFBTUksTUFBTSxHQUFHLHFDQUFxQztBQUNwRCxNQUFNQyxPQUFPLEdBQUcsK0JBQStCO0FBRS9DLE1BQU1DLGVBQWUsR0FBRyxnQkFBZ0I7QUFDeEMsTUFBTVosWUFBWSxHQUFHLFFBQVE7QUFFN0IsTUFBTWEsY0FBYyxHQUFHLE1BQU9KLFFBQVEsSUFBSztFQUN6QyxNQUFNSyxVQUFVLEdBQUksR0FBRUgsT0FBUSxHQUFFQyxlQUFnQixJQUFHRixNQUFPLE1BQUtELFFBQVMsSUFBR1QsWUFBYSxFQUFDO0VBRXpGLElBQUk7SUFDRixNQUFNZSxlQUFlLEdBQUcsTUFBTW5ILEtBQUssQ0FBQ2tILFVBQVUsQ0FBQztJQUMvQyxNQUFNMUQsV0FBVyxHQUFHLE1BQU0yRCxlQUFlLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBRWhEVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3BELFdBQVcsQ0FBQztJQUV4QixPQUFPQSxXQUFXO0VBQ3BCLENBQUMsQ0FBQyxPQUFPcEQsR0FBRyxFQUFFO0lBQ1osTUFBTSxJQUFJQyxLQUFLLENBQUNELEdBQUcsQ0FBQztFQUN0QjtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlNkcsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCVTtBQUNNO0FBRTdDLE1BQU1JLFVBQVUsR0FBRyxNQUFPUixRQUFRLElBQUs7RUFDckMsTUFBTXJELFdBQVcsR0FBRyxNQUFNeUQsb0RBQWMsQ0FBQ0osUUFBUSxDQUFDO0VBQ2xELE1BQU1TLFNBQVMsR0FBRyxNQUFNWix1REFBaUIsQ0FBQ2xELFdBQVcsQ0FBQztFQUN0RG1ELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxTQUFTLENBQUM7RUFDdEIsT0FBT0EsU0FBUztBQUNsQixDQUFDOztBQUVEOztBQUVBLGlFQUFlRCxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaekI7QUFDNkY7QUFDakI7QUFDNUUsOEJBQThCLHNFQUEyQixDQUFDLCtFQUFxQztBQUMvRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUhBQW1ILE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFB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RURKLE1BQU0sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvY2FyZFNlY3Rpb25zL2RldGFpbENhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvZm9yZWNhc3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvbG9jYXRpb25JbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9jYXJkU2VjdGlvbnMvdG9kYXlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9hc3Ryby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvY29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL2luZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL3NlYXJjaEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5L2VsZW1lbnRzL3RlbXBlcmF0dXJlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy93aW5kLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS93ZWF0aGVyQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZXJ2aWNlcy9maWx0ZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlcnZpY2VzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VydmljZXMvd2VhdGhlcmFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8zNDJmIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUZlZWxzTGlrZUVsZW1lbnQsXG4gIGNyZWF0ZVVWSUVsZW1lbnQsXG59IGZyb20gJy4uL2VsZW1lbnRzL3RlbXBlcmF0dXJlJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlU3BlZWRFbGVtZW50LFxuICBjcmVhdGVHdXN0RWxlbWVudCxcbiAgY3JlYXRlRGlyZWN0aW9uRWxlbWVudCxcbiAgY3JlYXRlTWF4U3BlZWRFbGVtZW50LFxufSBmcm9tICcuLi9lbGVtZW50cy93aW5kJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlU3VucmlzZUVsZW1lbnQsXG4gIGNyZWF0ZVN1bnNldEVsZW1lbnQsXG4gIGNyZWF0ZU1vb25yaXNlRWxlbWVudCxcbiAgY3JlYXRlTW9vbnNldEVsZW1lbnQsXG4gIGNyZWF0ZU1vb25JbGxFbGVtZW50LFxufSBmcm9tICcuLi9lbGVtZW50cy9hc3Rybyc7XG5cbmNvbnN0IGNyZWF0ZU1vb25DYXJkID0gKHsgcmlzZSwgc2V0LCBpbGx1bWluYXRpb24gfSkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnbW9vbicpO1xuXG4gIGNvbnN0IG1vb25yaXNlSW5mbyA9IGNyZWF0ZU1vb25yaXNlRWxlbWVudChyaXNlKTtcbiAgY2FyZC5hcHBlbmQobW9vbnJpc2VJbmZvKTtcblxuICBjb25zdCBtb29uc2V0SW5mbyA9IGNyZWF0ZU1vb25zZXRFbGVtZW50KHNldCk7XG4gIGNhcmQuYXBwZW5kKG1vb25zZXRJbmZvKTtcblxuICBjb25zdCBtb29uSWxsSW5mbyA9IGNyZWF0ZU1vb25JbGxFbGVtZW50KGlsbHVtaW5hdGlvbik7XG4gIGNhcmQuYXBwZW5kKG1vb25JbGxJbmZvKTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVN1bkNhcmQgPSAoeyByaXNlLCBzZXQgfSkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnc3VuJyk7XG5cbiAgY29uc3Qgc3VucmlzZUluZm8gPSBjcmVhdGVTdW5yaXNlRWxlbWVudChyaXNlKTtcbiAgY2FyZC5hcHBlbmQoc3VucmlzZUluZm8pO1xuXG4gIGNvbnN0IHN1bnNldEluZm8gPSBjcmVhdGVTdW5zZXRFbGVtZW50KHNldCk7XG4gIGNhcmQuYXBwZW5kKHN1bnNldEluZm8pO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlV2luZENhcmQgPSAod2luZCkgPT4ge1xuICBjb25zdCB7IHNwZWVkLCBndXN0LCBtYXggfSA9IHdpbmQua3BoO1xuICBjb25zdCB7IGRpciB9ID0gd2luZDtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3dpbmQnKTtcblxuICBjb25zdCBzcGVlZEluZm8gPSBjcmVhdGVTcGVlZEVsZW1lbnQoc3BlZWQpO1xuICBjYXJkLmFwcGVuZChzcGVlZEluZm8pO1xuXG4gIGNvbnN0IGd1c3RJbmZvID0gY3JlYXRlR3VzdEVsZW1lbnQoZ3VzdCk7XG4gIGNhcmQuYXBwZW5kKGd1c3RJbmZvKTtcblxuICBjb25zdCBtYXhJbmZvID0gY3JlYXRlTWF4U3BlZWRFbGVtZW50KG1heCk7XG4gIGNhcmQuYXBwZW5kKG1heEluZm8pO1xuXG4gIGNvbnN0IGRpckluZm8gPSBjcmVhdGVEaXJlY3Rpb25FbGVtZW50KGRpcik7XG4gIGNhcmQuYXBwZW5kKGRpckluZm8pO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlVVZJQ2FyZCA9ICh1dlZhbCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgndXYnKTtcblxuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlVVZJRWxlbWVudCh1dlZhbCk7XG4gIGNhcmQuYXBwZW5kKGVsZW1lbnQpO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgY3JlYXRlRmVlbHNMaWtlQ2FyZCA9IChmZWVsc0xpa2VUZW1wKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdmZWVsc0xpa2UnKTtcblxuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRmVlbHNMaWtlRWxlbWVudChmZWVsc0xpa2VUZW1wKTtcbiAgY2FyZC5hcHBlbmQoZWxlbWVudCk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVEZXRhaWxzU2VjdGlvbiA9ICh7IHRlbXAsIHdpbmQsIGFzdHJvIH0pID0+IHtcbiAgY29uc3QgeyBmZWVsLCB1diB9ID0gdGVtcDtcbiAgY29uc3QgeyBzdW4sIG1vb24gfSA9IGFzdHJvO1xuXG4gIGNvbnN0IGRldGFpbHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBkZXRhaWxzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzU2VjdGlvbicpO1xuXG4gIGNvbnN0IGZlZWxDYXJkID0gY3JlYXRlRmVlbHNMaWtlQ2FyZChmZWVsLmMpO1xuICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQoZmVlbENhcmQpO1xuXG4gIGNvbnN0IHV2Q2FyZCA9IGNyZWF0ZVVWSUNhcmQodXYpO1xuICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQodXZDYXJkKTtcblxuICBjb25zdCB3aW5kQ2FyZCA9IGNyZWF0ZVdpbmRDYXJkKHdpbmQpO1xuICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQod2luZENhcmQpO1xuXG4gIGNvbnN0IHN1bkNhcmQgPSBjcmVhdGVTdW5DYXJkKHN1bik7XG4gIGRldGFpbHNTZWN0aW9uLmFwcGVuZChzdW5DYXJkKTtcblxuICBjb25zdCBtb29uQ2FyZCA9IGNyZWF0ZU1vb25DYXJkKG1vb24pO1xuICBkZXRhaWxzU2VjdGlvbi5hcHBlbmQobW9vbkNhcmQpO1xuXG4gIHJldHVybiBkZXRhaWxzU2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURldGFpbHNTZWN0aW9uO1xuIiwiaW1wb3J0IHsgY3JlYXRlSG91ckZvcmVjYXN0LCBjcmVhdGVEYXlzRm9yZWNhc3QgfSBmcm9tICcuLi9lbGVtZW50cy9mb3JlY2FzdCc7XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbiA9ICh7IGhvdXIsIGRheXMgfSkgPT4ge1xuICBcbiAgY29uc3QgZm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBmb3JlY2FzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcblxuICBjb25zdCBob3VyRm9yZWNhc3QgPSBjcmVhdGVIb3VyRm9yZWNhc3QoaG91cik7XG4gIGZvcmVjYXN0U2VjdGlvbi5hcHBlbmQoaG91ckZvcmVjYXN0KTtcblxuICBjb25zdCBkYXlzRm9yZWNhc3QgPSBjcmVhdGVEYXlzRm9yZWNhc3QoZGF5cyk7XG4gIGZvcmVjYXN0U2VjdGlvbi5hcHBlbmQoZGF5c0ZvcmVjYXN0KTtcblxuICByZXR1cm4gZm9yZWNhc3RTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9yZWNhc3RTZWN0aW9uO1xuIiwiaW1wb3J0IHsgY3JlYXRlTmFtZUVsZW1lbnQsIGNyZWF0ZVJlZ2lvbkVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy9pbmZvJztcblxuY29uc3QgY3JlYXRlSW5mb1NlY3Rpb24gPSAoeyBuYW1lLCByZWdpb24gfSkgPT4ge1xuICBjb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gIGluZm9TZWN0aW9uLmFwcGVuZChjcmVhdGVOYW1lRWxlbWVudChuYW1lKSk7XG4gIGluZm9TZWN0aW9uLmFwcGVuZChjcmVhdGVSZWdpb25FbGVtZW50KHJlZ2lvbikpO1xuXG4gIHJldHVybiBpbmZvU2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluZm9TZWN0aW9uO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ3VycmVudFRlbXBFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvdGVtcGVyYXR1cmUnO1xuaW1wb3J0IHsgY3JlYXRlQ29uVGV4dEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy9jb25kaXRpb25zJztcblxuY29uc3QgY3JlYXRlVG9kYXlTZWN0aW9uID0gKHsgdGVtcCwgY29uZGl0aW9uIH0pID0+IHtcbiAgY29uc3QgdG9kYXlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICB0b2RheVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcblxuICB0b2RheVNlY3Rpb24uYXBwZW5kKGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCh0ZW1wLmMuY3VycmVudCkpO1xuICB0b2RheVNlY3Rpb24uYXBwZW5kKGNyZWF0ZUNvblRleHRFbGVtZW50KGNvbmRpdGlvbikpO1xuXG4gIHJldHVybiB0b2RheVNlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RheVNlY3Rpb247XG4iLCJjb25zdCBhc3Ryb0NsYXNzTmFtZSA9ICdhc3Rybyc7XG5cbmNvbnN0IGNyZWF0ZVN1bnJpc2VFbGVtZW50ID0gKHN1bnJpc2VUaW1lKSA9PiB7XG4gIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1bnJpc2UuY2xhc3NMaXN0LmFkZCgnc3VucmlzZScpO1xuICBzdW5yaXNlLmNsYXNzTGlzdC5hZGQoYXN0cm9DbGFzc05hbWUpO1xuICBzdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7c3VucmlzZVRpbWV9YDtcblxuICByZXR1cm4gc3VucmlzZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN1bnNldEVsZW1lbnQgPSAoc3Vuc2V0VGltZSkgPT4ge1xuICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1bnNldC5jbGFzc0xpc3QuYWRkKCdzdW5zZXQnKTtcbiAgc3Vuc2V0LmNsYXNzTGlzdC5hZGQoYXN0cm9DbGFzc05hbWUpO1xuICBzdW5zZXQudGV4dENvbnRlbnQgPSBgU3Vuc2V0OiAke3N1bnNldFRpbWV9YDtcblxuICByZXR1cm4gc3Vuc2V0O1xufTtcblxuY29uc3QgY3JlYXRlTW9vbnJpc2VFbGVtZW50ID0gKG1vb25yaXNlVGltZSkgPT4ge1xuICBjb25zdCBtb29ucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbW9vbnJpc2UuY2xhc3NMaXN0LmFkZCgnbW9vbnJpc2UnKTtcbiAgbW9vbnJpc2UuY2xhc3NMaXN0LmFkZChhc3Ryb0NsYXNzTmFtZSk7XG4gIG1vb25yaXNlLnRleHRDb250ZW50ID0gYE1vb25yaXNlOiAke21vb25yaXNlVGltZX1gO1xuXG4gIHJldHVybiBtb29ucmlzZTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25zZXRFbGVtZW50ID0gKG1vb25zZXRUaW1lKSA9PiB7XG4gIGNvbnN0IG1vb25zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1vb25zZXQuY2xhc3NMaXN0LmFkZCgnbW9vbnNldCcpO1xuICBtb29uc2V0LmNsYXNzTGlzdC5hZGQoYXN0cm9DbGFzc05hbWUpO1xuICBtb29uc2V0LnRleHRDb250ZW50ID0gYE1vb25zZXQ6ICR7bW9vbnNldFRpbWV9YDtcblxuICByZXR1cm4gbW9vbnNldDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vb25JbGxFbGVtZW50ID0gKG1vb25JbGxWYWx1ZSkgPT4ge1xuICBjb25zdCBtb29uSWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtb29uSWxsLmNsYXNzTGlzdC5hZGQoJ21vb25JbGwnKTtcbiAgbW9vbklsbC5jbGFzc0xpc3QuYWRkKGFzdHJvQ2xhc3NOYW1lKTtcbiAgbW9vbklsbC50ZXh0Q29udGVudCA9IGBNb29uIElsbHVtaW5hdGlvbjogJHttb29uSWxsVmFsdWV9YDtcblxuICByZXR1cm4gbW9vbklsbDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVN1bnJpc2VFbGVtZW50LFxuICBjcmVhdGVTdW5zZXRFbGVtZW50LFxuICBjcmVhdGVNb29ucmlzZUVsZW1lbnQsXG4gIGNyZWF0ZU1vb25zZXRFbGVtZW50LFxuICBjcmVhdGVNb29uSWxsRWxlbWVudCxcbn07XG4iLCJjb25zdCBjcmVhdGVDb25UZXh0RWxlbWVudCA9ICh7IHRleHQgfSkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9ucycpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBJdCdzICR7dGV4dH1gO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbkljb25FbGVtZW50ID0gYXN5bmMgKHsgaWNvbiB9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29tcGxldGVVUkwgPSBgaHR0cHM6JHtpY29ufWA7XG4gICAgY29uc3QgZ2V0SWNvbiA9IGF3YWl0IGZldGNoKGNvbXBsZXRlVVJMKTtcblxuICAgIGNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICBpY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbnMnKTtcbiAgICBpY29uSW1nLnNyYyA9IGdldEljb24udXJsO1xuXG4gICAgcmV0dXJuIGljb25JbWc7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb25JY29uRWxlbWVudCwgY3JlYXRlQ29uVGV4dEVsZW1lbnQgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCxcbiAgY3JlYXRlTWF4VGVtcEVsZW1lbnQsXG4gIGNyZWF0ZU1pblRlbXBFbGVtZW50LFxufSBmcm9tICcuL3RlbXBlcmF0dXJlJztcbmltcG9ydCB7IGNyZWF0ZUNvbkljb25FbGVtZW50IH0gZnJvbSAnLi9jb25kaXRpb25zJztcblxuY29uc3QgZm9yZWNhc3RDbGFzc05hbWUgPSAnZm9yZWNhc3QnO1xuXG5jb25zdCBjcmVhdGVIb3VyTm9kZSA9IGFzeW5jIChob3VyV2VhdGhlcikgPT4ge1xuICBjb25zdCB7IHRlbXAsIGNvbmRpdGlvbiB9ID0gaG91cldlYXRoZXI7XG5cbiAgY29uc3QgaG91ck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91ck5vZGUuY2xhc3NMaXN0LmFkZCgnaG91cldlYXRoZXInKTtcblxuICBjb25zdCBob3VyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvdXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdob3VyVGl0bGUnKTtcbiAgaG91clRpdGxlLnRleHRDb250ZW50ID0gaG91cldlYXRoZXIuaG91cjtcbiAgaG91ck5vZGUuYXBwZW5kKGhvdXJUaXRsZSk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGF3YWl0IGNyZWF0ZUNvbkljb25FbGVtZW50KGNvbmRpdGlvbik7XG4gIGhvdXJOb2RlLmFwcGVuZChjb25kaXRpb25JY29uKTtcblxuICBjb25zdCBjdXJyZW50VGVtcCA9IGNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCh0ZW1wLmMpO1xuICBob3VyTm9kZS5hcHBlbmQoY3VycmVudFRlbXApO1xuXG4gIHJldHVybiBob3VyTm9kZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvdXJGb3JlY2FzdCA9IChob3VybHlBcnIpID0+IHtcbiAgY29uc3QgaG91ckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKGZvcmVjYXN0Q2xhc3NOYW1lKTtcbiAgaG91ckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJGb3JlY2FzdCcpO1xuXG4gIGhvdXJseUFyci5mb3JFYWNoKGFzeW5jIChob3VyV2VhdGhlcikgPT4ge1xuICAgIGNvbnN0IGhvdXJOb2RlID0gYXdhaXQgY3JlYXRlSG91ck5vZGUoaG91cldlYXRoZXIpO1xuICAgIGhvdXJGb3JlY2FzdC5hcHBlbmQoaG91ck5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gaG91ckZvcmVjYXN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF5Tm9kZSA9IGFzeW5jIChkYXlXZWF0aGVyKSA9PiB7XG4gIGNvbnN0IHsgdGVtcCwgY29uZGl0aW9uIH0gPSBkYXlXZWF0aGVyO1xuXG4gIGNvbnN0IGRheU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5Tm9kZS5jbGFzc0xpc3QuYWRkKCdkYXlXZWF0aGVyJyk7XG5cbiAgY29uc3QgZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RheVRpdGxlJyk7XG4gIGRheVRpdGxlLnRleHRDb250ZW50ID0gZGF5V2VhdGhlci5kYXRlO1xuICBkYXlOb2RlLmFwcGVuZChkYXlUaXRsZSk7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGF3YWl0IGNyZWF0ZUNvbkljb25FbGVtZW50KGNvbmRpdGlvbik7XG4gIGRheU5vZGUuYXBwZW5kKGNvbmRpdGlvbkljb24pO1xuXG4gIGNvbnN0IGF2Z1RlbXAgPSBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQodGVtcC5jLmF2Zyk7XG4gIGRheU5vZGUuYXBwZW5kKGF2Z1RlbXApO1xuXG4gIGNvbnN0IG1heFRlbXAgPSBjcmVhdGVNYXhUZW1wRWxlbWVudCh0ZW1wLmMubWF4KTtcbiAgZGF5Tm9kZS5hcHBlbmQobWF4VGVtcCk7XG5cbiAgY29uc3QgbWluVGVtcCA9IGNyZWF0ZU1pblRlbXBFbGVtZW50KHRlbXAuYy5taW4pO1xuICBkYXlOb2RlLmFwcGVuZChtaW5UZW1wKTtcblxuICByZXR1cm4gZGF5Tm9kZTtcbn07XG5cbmNvbnN0IGNyZWF0ZURheXNGb3JlY2FzdCA9IChkYXlzQXJyKSA9PiB7XG4gIGNvbnN0IGRheXNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChmb3JlY2FzdENsYXNzTmFtZSk7XG4gIGRheXNGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXlzRm9yZWNhc3QnKTtcblxuICBkYXlzQXJyLmZvckVhY2goYXN5bmMgKGRheVdlYXRoZXIpID0+IHtcbiAgICBjb25zdCBkYXlOb2RlID0gYXdhaXQgY3JlYXRlRGF5Tm9kZShkYXlXZWF0aGVyKTtcbiAgICBkYXlzRm9yZWNhc3QuYXBwZW5kKGRheU5vZGUpO1xuICB9KTtcblxuICByZXR1cm4gZGF5c0ZvcmVjYXN0O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSG91ckZvcmVjYXN0LCBjcmVhdGVEYXlzRm9yZWNhc3QgfTtcbiIsImNvbnN0IGluZm9DbGFzc05hbWUgPSAnbG9jYXRpb25JbmZvJztcblxuY29uc3QgY3JlYXRlTmFtZUVsZW1lbnQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgbmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbmZvQ2xhc3NOYW1lKTtcbiAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIHJldHVybiBuYW1lRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlZ2lvbkVsZW1lbnQgPSAocmVnaW9uKSA9PiB7XG4gIGNvbnN0IHJlZ2lvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlZ2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVnaW9uJyk7XG4gIHJlZ2lvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbmZvQ2xhc3NOYW1lKTtcbiAgcmVnaW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHJlZ2lvbjtcblxuICByZXR1cm4gcmVnaW9uRWxlbWVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5hbWVFbGVtZW50LCBjcmVhdGVSZWdpb25FbGVtZW50IH07XG4iLCJjb25zdCBjcmVhdGVTdWJtaXRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0QnRuJztcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NlYXJjaCEnO1xuXG4gIHJldHVybiBzdWJtaXRCdG47XG59O1xuXG5jb25zdCBjcmVhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuZm9yID0gJ3NlYXJjaEJhcic7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQmFyLnR5cGUgPSAndGV4dCc7XG4gIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICdDaXR5JztcbiAgc2VhcmNoQmFyLm5hbWUgPSAnc2VhcmNoQmFyJztcbiAgc2VhcmNoQmFyLmlkID0gJ3NlYXJjaEJhcic7XG5cbiAgbGFiZWwuYXBwZW5kKHNlYXJjaEJhcik7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gY3JlYXRlU2VhcmNoQmFyKCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kKHNlYXJjaEJhcik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlU3VibWl0QnRuKCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHNlYXJjaEZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hGb3JtO1xuIiwiY29uc3QgdGVtcENsYXNzTmFtZSA9ICd0ZW1wJztcblxuY29uc3QgY3JlYXRlQ3VycmVudFRlbXBFbGVtZW50ID0gKGN1cnJlbnRUZW1wKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICBjdXJyZW50LmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIGN1cnJlbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcH3CsENgO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuY29uc3QgY3JlYXRlRmVlbHNMaWtlRWxlbWVudCA9IChmZWVsc0xpa2VUZW1wKSA9PiB7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZScpO1xuICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmVlbHNMaWtlVGVtcH3CsENgO1xuXG4gIHJldHVybiBmZWVsc0xpa2U7XG59O1xuXG5jb25zdCBjcmVhdGVNaW5UZW1wRWxlbWVudCA9IChtaW5UZW1wVmFsdWUpID0+IHtcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdtaW5UZW1wJyk7XG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgbWluVGVtcC50ZXh0Q29udGVudCA9IGBNaW4uOiAke21pblRlbXBWYWx1ZX3CsENgO1xuXG4gIHJldHVybiBtaW5UZW1wO1xufTtcblxuY29uc3QgY3JlYXRlTWF4VGVtcEVsZW1lbnQgPSAobWF4VGVtcFZhbHVlKSA9PiB7XG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnbWF4VGVtcCcpO1xuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQodGVtcENsYXNzTmFtZSk7XG4gIG1heFRlbXAudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHttYXhUZW1wVmFsdWV9wrBDYDtcblxuICByZXR1cm4gbWF4VGVtcDtcbn07XG5cbmNvbnN0IGNyZWF0ZVVWSUVsZW1lbnQgPSAoVVZJbmRleCkgPT4ge1xuICBjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB1dkluZGV4LmNsYXNzTGlzdC5hZGQoJ3V2Jyk7XG4gIHV2SW5kZXguY2xhc3NMaXN0LmFkZCh0ZW1wQ2xhc3NOYW1lKTtcbiAgdXZJbmRleC50ZXh0Q29udGVudCA9IGBVVjogJHtVVkluZGV4fWA7XG5cbiAgcmV0dXJuIHV2SW5kZXg7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVDdXJyZW50VGVtcEVsZW1lbnQsXG4gIGNyZWF0ZU1heFRlbXBFbGVtZW50LFxuICBjcmVhdGVNaW5UZW1wRWxlbWVudCxcbiAgY3JlYXRlRmVlbHNMaWtlRWxlbWVudCxcbiAgY3JlYXRlVVZJRWxlbWVudCxcbn07XG4iLCJjb25zdCB3aW5kQ2xhc3NOYW1lID0gJ3dpbmQnO1xuXG5jb25zdCBjcmVhdGVTcGVlZEVsZW1lbnQgPSAod2luZFNwZWVkKSA9PiB7XG4gIGNvbnN0IHNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzcGVlZC5jbGFzc0xpc3QuYWRkKCdzcGVlZCcpO1xuICBzcGVlZC5jbGFzc0xpc3QuYWRkKHdpbmRDbGFzc05hbWUpO1xuICBzcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dpbmRTcGVlZH1gO1xuXG4gIHJldHVybiBzcGVlZDtcbn07XG5cbmNvbnN0IGNyZWF0ZUd1c3RFbGVtZW50ID0gKHdpbmRHdXN0KSA9PiB7XG4gIGNvbnN0IGd1c3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGd1c3QuY2xhc3NMaXN0LmFkZCgnZ3VzdCcpO1xuICBndXN0LmNsYXNzTGlzdC5hZGQod2luZENsYXNzTmFtZSk7XG4gIGd1c3QudGV4dENvbnRlbnQgPSBgR3VzdHM6ICR7d2luZEd1c3R9YDtcblxuICByZXR1cm4gZ3VzdDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1heFNwZWVkRWxlbWVudCA9IChtYXhTcGVlZCkgPT4ge1xuICBjb25zdCBtYXhXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtYXhXaW5kLmNsYXNzTGlzdC5hZGQoJ21heFdpbmQnKTtcbiAgbWF4V2luZC5jbGFzc0xpc3QuYWRkKHdpbmRDbGFzc05hbWUpO1xuICBtYXhXaW5kLnRleHRDb250ZW50ID0gYE1heCBTcGVlZDogJHttYXhTcGVlZH1gO1xuXG4gIHJldHVybiBtYXhXaW5kO1xufTtcblxuY29uc3QgY3JlYXRlRGlyZWN0aW9uRWxlbWVudCA9ICh3aW5kRGlyZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2RpcmVjdGlvbicpO1xuICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZCh3aW5kQ2xhc3NOYW1lKTtcbiAgZGlyZWN0aW9uLnRleHRDb250ZW50ID0gYERpcmVjdGlvbjogJHt3aW5kRGlyZWN0aW9ufWA7XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZURpcmVjdGlvbkVsZW1lbnQsXG4gIGNyZWF0ZUd1c3RFbGVtZW50LFxuICBjcmVhdGVTcGVlZEVsZW1lbnQsXG4gIGNyZWF0ZU1heFNwZWVkRWxlbWVudCxcbn07XG4iLCJpbXBvcnQgY3JlYXRlSW5mb1NlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvbG9jYXRpb25JbmZvJztcbmltcG9ydCBjcmVhdGVUb2RheVNlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvdG9kYXlXZWF0aGVyJztcbmltcG9ydCBjcmVhdGVGb3JlY2FzdFNlY3Rpb24gZnJvbSAnLi9jYXJkU2VjdGlvbnMvZm9yZWNhc3RzJztcbmltcG9ydCBjcmVhdGVEZXRhaWxzU2VjdGlvbiBmcm9tICcuL2NhcmRTZWN0aW9ucy9kZXRhaWxDYXJkcyc7XG5cbmNvbnN0IGNyZWF0ZVdlYXRoZXJDYXJkID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgaW5mbywgdG9kYXksIGZvcmVjYXN0LCBkZXRhaWxzIH0gPSB3ZWF0aGVyRGF0YTtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckNhcmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlckNhcmQnKTtcblxuICBjb25zdCBpbmZvU2VjID0gY3JlYXRlSW5mb1NlY3Rpb24oaW5mbyk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZChpbmZvU2VjKTtcblxuICBjb25zdCB0b2RheVNlYyA9IGNyZWF0ZVRvZGF5U2VjdGlvbih0b2RheSk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZCh0b2RheVNlYyk7XG5cbiAgY29uc3QgZm9yZWNhc3RTZWMgPSBjcmVhdGVGb3JlY2FzdFNlY3Rpb24oZm9yZWNhc3QpO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoZm9yZWNhc3RTZWMpO1xuXG4gIGNvbnN0IGRldGFpbHNTZWMgPSBjcmVhdGVEZXRhaWxzU2VjdGlvbihkZXRhaWxzKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kKGRldGFpbHNTZWMpO1xuXG4gIHJldHVybiB3ZWF0aGVyQ2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdlYXRoZXJDYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbmNvbnN0IGdldFRvZGF5V2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IHRlbXBfYywgdGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuICBjb25zdCB7IG1heHRlbXBfYywgbWF4dGVtcF9mIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIGNvbnN0IHsgbWludGVtcF9jLCBtaW50ZW1wX2YgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgY29uc3QgeyBjb25kaXRpb24gfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHJldHVybiB7XG4gICAgdGVtcDoge1xuICAgICAgYzogeyBjdXJyZW50OiB0ZW1wX2MsIG1heDogbWF4dGVtcF9jLCBtaW46IG1pbnRlbXBfYyB9LFxuICAgICAgZjogeyBjdXJyZW50OiB0ZW1wX2YsIG1heDogbWF4dGVtcF9mLCBtaW46IG1pbnRlbXBfZiB9LFxuICAgIH0sXG4gICAgY29uZGl0aW9uLFxuICB9O1xufTtcblxuY29uc3QgZ2V0VGVtcCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCB7IGZlZWxzbGlrZV9jLCBmZWVsc2xpa2VfZiwgdXYgfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIHJldHVybiB7IGZlZWw6IHsgYzogZmVlbHNsaWtlX2MsIGY6IGZlZWxzbGlrZV9mIH0sIHV2IH07XG59O1xuXG5jb25zdCBnZXRXaW5kID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHsgd2luZF9rcGgsIHdpbmRfbXBoLCB3aW5kX2RpciB9ID0gd2VhdGhlckRhdGEuY3VycmVudDtcbiAgY29uc3QgeyBndXN0X2twaCwgZ3VzdF9tcGggfSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gIGNvbnN0IHsgbWF4d2luZF9rcGgsIG1heHdpbmRfbXBoIH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXk7XG4gIHJldHVybiB7XG4gICAga3BoOiB7IHNwZWVkOiB3aW5kX2twaCwgZ3VzdDogZ3VzdF9rcGgsIG1heDogbWF4d2luZF9rcGggfSxcbiAgICBtcGg6IHsgc3BlZWQ6IHdpbmRfbXBoLCBndXN0OiBndXN0X21waCwgbWF4OiBtYXh3aW5kX21waCB9LFxuICAgIGRpcjogd2luZF9kaXIsXG4gIH07XG59O1xuY29uc3QgZ2V0QXN0cm8gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgeyBzdW5yaXNlLCBzdW5zZXQgfSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvO1xuICBjb25zdCB7IG1vb25yaXNlLCBtb29uc2V0IH0gPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgY29uc3QgeyBtb29uX2lsbHVtaW5hdGlvbiB9ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gIHJldHVybiB7XG4gICAgc3VuOiB7IHJpc2U6IHN1bnJpc2UsIHNldDogc3Vuc2V0IH0sXG4gICAgbW9vbjogeyByaXNlOiBtb29ucmlzZSwgc2V0OiBtb29uc2V0LCBpbGx1bWluYXRpb246IG1vb25faWxsdW1pbmF0aW9uIH0sXG4gIH07XG59O1xuXG5jb25zdCBnZXREZXRhaWxzID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHRlbXAgPSBnZXRUZW1wKHdlYXRoZXJEYXRhKTtcbiAgY29uc3Qgd2luZCA9IGdldFdpbmQod2VhdGhlckRhdGEpO1xuICBjb25zdCBhc3RybyA9IGdldEFzdHJvKHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4geyB0ZW1wLCB3aW5kLCBhc3RybyB9O1xufTtcblxuY29uc3QgcGFyc2VIb3VybHlGb3JlY2FzdCA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmb3JlY2FzdERhdGFIb3VycyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXI7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gW107XG5cbiAgZm9yZWNhc3REYXRhSG91cnMuZm9yRWFjaCgoaG91ckRhdGEpID0+IHtcbiAgICBjb25zdCB7IHRpbWUsIHRlbXBfYywgdGVtcF9mLCBjb25kaXRpb24gfSA9IGhvdXJEYXRhO1xuICAgIGNvbnN0IGhvdXIgPSB0aW1lLnNwbGl0KCcgJylbMV07XG5cbiAgICBjb25zdCBob3VyV2VhdGhlciA9IHtcbiAgICAgIGhvdXIsXG4gICAgICBjb25kaXRpb24sXG4gICAgICB0ZW1wOiB7IGM6IHRlbXBfYywgZjogdGVtcF9mIH0sXG4gICAgfTtcblxuICAgIGZvcmVjYXN0SG91cmx5LnB1c2goaG91cldlYXRoZXIpO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3RIb3VybHk7XG59O1xuY29uc3QgcGFyc2VEYWlseUZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0RGF5c0RhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gW107XG5cbiAgZm9yZWNhc3REYXlzRGF0YS5mb3JFYWNoKChmb3JlY2FzdERheSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXk7XG4gICAgY29uc3QgeyBtYXh0ZW1wX2MsIG1heHRlbXBfZiB9ID0gZm9yZWNhc3REYXkuZGF5O1xuICAgIGNvbnN0IHsgbWludGVtcF9jLCBtaW50ZW1wX2YgfSA9IGZvcmVjYXN0RGF5LmRheTtcbiAgICBjb25zdCB7IGF2Z3RlbXBfYywgYXZndGVtcF9mIH0gPSBmb3JlY2FzdERheS5kYXk7XG4gICAgY29uc3QgeyBjb25kaXRpb24gfSA9IGZvcmVjYXN0RGF5LmhvdXJbMTJdO1xuXG4gICAgY29uc3Qgd2VhdGhlckRheSA9IHtcbiAgICAgIGRhdGUsXG4gICAgICBjb25kaXRpb24sXG4gICAgICB0ZW1wOiB7XG4gICAgICAgIGM6IHsgYXZnOiBhdmd0ZW1wX2MsIG1heDogbWF4dGVtcF9jLCBtaW46IG1pbnRlbXBfYyB9LFxuICAgICAgICBmOiB7IGF2ZzogYXZndGVtcF9mLCBtYXg6IG1heHRlbXBfZiwgbWluOiBtaW50ZW1wX2YgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZvcmVjYXN0RGF5cy5wdXNoKHdlYXRoZXJEYXkpO1xuICB9KTtcblxuICByZXR1cm4gZm9yZWNhc3REYXlzO1xufTtcblxuY29uc3QgZ2V0Rm9yZWNhc3QgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RIb3VybHkgPSBwYXJzZUhvdXJseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gcGFyc2VEYWlseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4geyBob3VyOiBmb3JlY2FzdEhvdXJseSwgZGF5czogZm9yZWNhc3REYXlzIH07XG59O1xuXG5jb25zdCBmaWx0ZXJXZWF0aGVyRGF0YSA9IGFzeW5jICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdlYXRoZXJEYXRhO1xuXG4gIGNvbnN0IGluZm8gPSB7IG5hbWU6IGxvY2F0aW9uLm5hbWUsIHJlZ2lvbjogbG9jYXRpb24ucmVnaW9uIH07XG4gIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXlXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBnZXRGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnN0IGRldGFpbHMgPSBnZXREZXRhaWxzKHdlYXRoZXJEYXRhKTtcblxuICByZXR1cm4ge1xuICAgIGluZm8sXG4gICAgdG9kYXksXG4gICAgZm9yZWNhc3QsXG4gICAgZGV0YWlscyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlcldlYXRoZXJEYXRhO1xuIiwiY29uc3QgYXBpS2V5ID0gJ2tleT0wZWY5MjM0ZmZkODE0MGUwYmNmMTQ1OTQyMjMyNTA4JztcbmNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnO1xuXG5jb25zdCBmb3JlY2FzdFdlYXRoZXIgPSAnL2ZvcmVjYXN0Lmpzb24nO1xuY29uc3QgZm9yZWNhc3REYXlzID0gJ2RheXM9Myc7XG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJVUkwgPSBgJHtiYXNlVVJMfSR7Zm9yZWNhc3RXZWF0aGVyfT8ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSYke2ZvcmVjYXN0RGF5c31gO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlclVSTCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfVxufTtcblxuLy8gZ2V0V2VhdGhlckRhdGEoJ0NhcGUgVG93bicpLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJEYXRhO1xuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vZ2V0RGF0YSc7XG5pbXBvcnQgZmlsdGVyV2VhdGhlckRhdGEgZnJvbSAnLi9maWx0ZXJEYXRhJztcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgY29uc3QgY2xlYW5EYXRhID0gYXdhaXQgZmlsdGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICBjb25zb2xlLmxvZyhjbGVhbkRhdGEpO1xuICByZXR1cm4gY2xlYW5EYXRhO1xufTtcblxuLy8gZ2V0V2VhdGhlcignQ2FwZSBUb3duJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG87XG59XG5cbi53ZWF0aGVyQ2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDIwJSAyMCU7XG4gIHdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogNSU7XG59XG5cbi5tYWluQ29tcC5pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDcwJTtcbiAgZ2FwOiAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmRldGFpbHNTZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwcmVtO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmRldGFpbENvbXAge1xuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG5cbiNzZWFyY2hCYXIge1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gYXV0bztcXG59XFxuXFxuLndlYXRoZXJDYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSAyMCUgMjAlO1xcbiAgd2lkdGg6IDUwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiA1JTtcXG59XFxuXFxuLm1haW5Db21wLmluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNzAlO1xcbiAgZ2FwOiAxMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsc1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxMHJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmRldGFpbENvbXAge1xcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG59XFxuXFxuI3NlYXJjaEJhciB7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuXG5pbXBvcnQgY3JlYXRlU2VhcmNoRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy9zZWFyY2hGb3JtJztcbi8vIGltcG9ydCBmb3JtQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbFNlYXJjaEZvcm0nO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9zZXJ2aWNlcy93ZWF0aGVyYXBpJztcbmltcG9ydCBjcmVhdGVXZWF0aGVyQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS93ZWF0aGVyQ2FyZCc7XG5cbi8vIENyZWRpdFxuLy8gUG93ZXJlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXCIgdGl0bGU9XCJGcmVlIFdlYXRoZXIgQVBJXCI+V2VhdGhlckFQSS5jb208L2E+XG4vLyA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vXCIgdGl0bGU9XCJGcmVlIFdlYXRoZXIgQVBJXCI+PGltZyBzcmM9Jy8vY2RuLndlYXRoZXJhcGkuY29tL3Y0L2ltYWdlcy93ZWF0aGVyYXBpX2xvZ28ucG5nJyBhbHQ9XCJXZWF0aGVyIGRhdGEgYnkgV2VhdGhlckFQSS5jb21cIiBib3JkZXI9XCIwXCI+PC9hPlxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBkaXNwbGF5V2VhdGhlciA9IGFzeW5jIChzZWFyY2hSZXN1bHQpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaFJlc3VsdCk7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xuXG4gIGJvZHkuYXBwZW5kKHdlYXRoZXJDYXJkKTtcbn07XG5cbmNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGNyZWF0ZVNlYXJjaEZvcm0oKTtcbiAgYm9keS5hcHBlbmQoc2VhcmNoRm9ybSk7XG5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgc2VhcmNoQmFyIH0gPSBzZWFyY2hGb3JtO1xuICAgIGRpc3BsYXlXZWF0aGVyKHNlYXJjaEJhci52YWx1ZSk7XG4gIH0pO1xuICAvLyBmb3JtQ29udHJvbGxlcihzZWFyY2hGb3JtKTtcbiAgLy8gcmV0dXJuIHNlYXJjaEZvcm07XG59O1xuXG5zZWFyY2goKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVGZWVsc0xpa2VFbGVtZW50IiwiY3JlYXRlVVZJRWxlbWVudCIsImNyZWF0ZVNwZWVkRWxlbWVudCIsImNyZWF0ZUd1c3RFbGVtZW50IiwiY3JlYXRlRGlyZWN0aW9uRWxlbWVudCIsImNyZWF0ZU1heFNwZWVkRWxlbWVudCIsImNyZWF0ZVN1bnJpc2VFbGVtZW50IiwiY3JlYXRlU3Vuc2V0RWxlbWVudCIsImNyZWF0ZU1vb25yaXNlRWxlbWVudCIsImNyZWF0ZU1vb25zZXRFbGVtZW50IiwiY3JlYXRlTW9vbklsbEVsZW1lbnQiLCJjcmVhdGVNb29uQ2FyZCIsIl9yZWYiLCJyaXNlIiwic2V0IiwiaWxsdW1pbmF0aW9uIiwiY2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1vb25yaXNlSW5mbyIsImFwcGVuZCIsIm1vb25zZXRJbmZvIiwibW9vbklsbEluZm8iLCJjcmVhdGVTdW5DYXJkIiwiX3JlZjIiLCJzdW5yaXNlSW5mbyIsInN1bnNldEluZm8iLCJjcmVhdGVXaW5kQ2FyZCIsIndpbmQiLCJzcGVlZCIsImd1c3QiLCJtYXgiLCJrcGgiLCJkaXIiLCJzcGVlZEluZm8iLCJndXN0SW5mbyIsIm1heEluZm8iLCJkaXJJbmZvIiwiY3JlYXRlVVZJQ2FyZCIsInV2VmFsIiwiZWxlbWVudCIsImNyZWF0ZUZlZWxzTGlrZUNhcmQiLCJmZWVsc0xpa2VUZW1wIiwiY3JlYXRlRGV0YWlsc1NlY3Rpb24iLCJfcmVmMyIsInRlbXAiLCJhc3RybyIsImZlZWwiLCJ1diIsInN1biIsIm1vb24iLCJkZXRhaWxzU2VjdGlvbiIsImZlZWxDYXJkIiwiYyIsInV2Q2FyZCIsIndpbmRDYXJkIiwic3VuQ2FyZCIsIm1vb25DYXJkIiwiY3JlYXRlSG91ckZvcmVjYXN0IiwiY3JlYXRlRGF5c0ZvcmVjYXN0IiwiY3JlYXRlRm9yZWNhc3RTZWN0aW9uIiwiaG91ciIsImRheXMiLCJmb3JlY2FzdFNlY3Rpb24iLCJob3VyRm9yZWNhc3QiLCJkYXlzRm9yZWNhc3QiLCJjcmVhdGVOYW1lRWxlbWVudCIsImNyZWF0ZVJlZ2lvbkVsZW1lbnQiLCJjcmVhdGVJbmZvU2VjdGlvbiIsIm5hbWUiLCJyZWdpb24iLCJpbmZvU2VjdGlvbiIsImNyZWF0ZUN1cnJlbnRUZW1wRWxlbWVudCIsImNyZWF0ZUNvblRleHRFbGVtZW50IiwiY3JlYXRlVG9kYXlTZWN0aW9uIiwiY29uZGl0aW9uIiwidG9kYXlTZWN0aW9uIiwiY3VycmVudCIsImFzdHJvQ2xhc3NOYW1lIiwic3VucmlzZVRpbWUiLCJzdW5yaXNlIiwidGV4dENvbnRlbnQiLCJzdW5zZXRUaW1lIiwic3Vuc2V0IiwibW9vbnJpc2VUaW1lIiwibW9vbnJpc2UiLCJtb29uc2V0VGltZSIsIm1vb25zZXQiLCJtb29uSWxsVmFsdWUiLCJtb29uSWxsIiwidGV4dCIsImRlc2NyaXB0aW9uIiwiY3JlYXRlQ29uSWNvbkVsZW1lbnQiLCJpY29uIiwiY29tcGxldGVVUkwiLCJnZXRJY29uIiwiZmV0Y2giLCJpY29uSW1nIiwic3JjIiwidXJsIiwiZXJyIiwiRXJyb3IiLCJjcmVhdGVNYXhUZW1wRWxlbWVudCIsImNyZWF0ZU1pblRlbXBFbGVtZW50IiwiZm9yZWNhc3RDbGFzc05hbWUiLCJjcmVhdGVIb3VyTm9kZSIsImhvdXJXZWF0aGVyIiwiaG91ck5vZGUiLCJob3VyVGl0bGUiLCJjb25kaXRpb25JY29uIiwiY3VycmVudFRlbXAiLCJob3VybHlBcnIiLCJmb3JFYWNoIiwiY3JlYXRlRGF5Tm9kZSIsImRheVdlYXRoZXIiLCJkYXlOb2RlIiwiZGF5VGl0bGUiLCJkYXRlIiwiYXZnVGVtcCIsImF2ZyIsIm1heFRlbXAiLCJtaW5UZW1wIiwibWluIiwiZGF5c0FyciIsImluZm9DbGFzc05hbWUiLCJuYW1lRWxlbWVudCIsInJlZ2lvbkVsZW1lbnQiLCJjcmVhdGVTdWJtaXRCdG4iLCJzdWJtaXRCdG4iLCJ0eXBlIiwiaWQiLCJjcmVhdGVTZWFyY2hCYXIiLCJsYWJlbCIsImZvciIsInNlYXJjaEJhciIsInBsYWNlaG9sZGVyIiwiY3JlYXRlU2VhcmNoRm9ybSIsInNlYXJjaEZvcm0iLCJ0ZW1wQ2xhc3NOYW1lIiwiZmVlbHNMaWtlIiwibWluVGVtcFZhbHVlIiwibWF4VGVtcFZhbHVlIiwiVVZJbmRleCIsInV2SW5kZXgiLCJ3aW5kQ2xhc3NOYW1lIiwid2luZFNwZWVkIiwid2luZEd1c3QiLCJtYXhTcGVlZCIsIm1heFdpbmQiLCJ3aW5kRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiY3JlYXRlV2VhdGhlckNhcmQiLCJ3ZWF0aGVyRGF0YSIsImluZm8iLCJ0b2RheSIsImZvcmVjYXN0IiwiZGV0YWlscyIsIndlYXRoZXJDYXJkIiwiaW5mb1NlYyIsInRvZGF5U2VjIiwiZm9yZWNhc3RTZWMiLCJkZXRhaWxzU2VjIiwiZ2V0VG9kYXlXZWF0aGVyIiwidGVtcF9jIiwidGVtcF9mIiwibWF4dGVtcF9jIiwibWF4dGVtcF9mIiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJtaW50ZW1wX2MiLCJtaW50ZW1wX2YiLCJmIiwiZ2V0VGVtcCIsImZlZWxzbGlrZV9jIiwiZmVlbHNsaWtlX2YiLCJnZXRXaW5kIiwid2luZF9rcGgiLCJ3aW5kX21waCIsIndpbmRfZGlyIiwiZ3VzdF9rcGgiLCJndXN0X21waCIsIm1heHdpbmRfa3BoIiwibWF4d2luZF9tcGgiLCJtcGgiLCJnZXRBc3RybyIsIm1vb25faWxsdW1pbmF0aW9uIiwiZ2V0RGV0YWlscyIsInBhcnNlSG91cmx5Rm9yZWNhc3QiLCJmb3JlY2FzdERhdGFIb3VycyIsImZvcmVjYXN0SG91cmx5IiwiaG91ckRhdGEiLCJ0aW1lIiwic3BsaXQiLCJwdXNoIiwicGFyc2VEYWlseUZvcmVjYXN0IiwiZm9yZWNhc3REYXlzRGF0YSIsImZvcmVjYXN0RGF5cyIsImZvcmVjYXN0RGF5IiwiYXZndGVtcF9jIiwiYXZndGVtcF9mIiwid2VhdGhlckRheSIsImdldEZvcmVjYXN0IiwiZmlsdGVyV2VhdGhlckRhdGEiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJhcGlLZXkiLCJiYXNlVVJMIiwiZm9yZWNhc3RXZWF0aGVyIiwiZ2V0V2VhdGhlckRhdGEiLCJ3ZWF0aGVyVVJMIiwid2VhdGhlclJlc3BvbnNlIiwianNvbiIsImdldFdlYXRoZXIiLCJjbGVhbkRhdGEiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImRpc3BsYXlXZWF0aGVyIiwic2VhcmNoUmVzdWx0Iiwic2VhcmNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/mainController.js":
/*!******************************************!*\
  !*** ./src/controller/mainController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _model_data_getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/data/getWeatherData */ "./src/model/data/getWeatherData.js");


// import filterWeatherData from '../services/filterData';
class MainController {
  alternativeUnits = false;
  defaultLocation = 'Cape Town';
  getWeather = (() => {
    var _this = this;
    return async function () {
      let search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.defaultLocation;
      const rawData = await (0,_model_data_getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])(search);
      console.log(rawData);
    };
  })();
}

// const getWeather = async (location) => {
//   const weatherData = await getWeatherData(location);
//   const cleanData = await filterWeatherData(weatherData);
//   return cleanData;
// };

/***/ }),

/***/ "./src/model/data/getWeatherData.js":
/*!******************************************!*\
  !*** ./src/model/data/getWeatherData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_KEY = '0ef9234ffd8140e0bcf145942232508';
const BASE_URL = 'https://api.weatherapi.com/v1';
const FORECAST_WEATHER = '/forecast.json';
const forecastDays = 'days=3';
const getWeatherData = async location => {
  // Getting forecast only because current weather is already with it
  const forecast = `${BASE_URL}${FORECAST_WEATHER}?key=${API_KEY}&q=${location}&${forecastDays}`;
  try {
    const forecastResponse = await fetch(forecast);
    const weatherData = await forecastResponse.json();
    if (weatherData.error) throw new Error(`API Error: ${weatherData.error.message}`);
    return weatherData;
  } catch (err) {
    throw new Error(err);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_mainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/mainController */ "./src/controller/mainController.js");

const mainController = new _controller_mainController__WEBPACK_IMPORTED_MODULE_0__["default"]();
mainController.getWeather();

// import { searchBar } from './components/searchBar/searchBar';
// import getWeather from './components/weather';
// import createWeatherCard from './components/display/weatherCard';
// import getGeoLocation from './components/geoLocation';
// import createLoadingCard from './components/display/cardSections/loadingCard';
// import selectUnits from './components/display/elements/unitSelect';

// const body = document.querySelector('body');

// const displayWeather = async (searchResult) => {
//   const currentWeatherCard = document.querySelector('.weatherCard');
//   const currentLoadingCard = document.querySelector('.loader');

//   const loadingCard = createLoadingCard();
//   if (currentLoadingCard) currentLoadingCard.replaceWith(loadingCard);
//   if (currentWeatherCard) currentWeatherCard.replaceWith(loadingCard);
//   if (!currentWeatherCard && !currentLoadingCard) body.append(loadingCard);

//   const weatherData = await getWeather(searchResult);
//   const weatherCard = await createWeatherCard(weatherData);

//   loadingCard.replaceWith(weatherCard);
// };

// selectUnits();
// searchBar(displayWeather);
// getGeoLocation(displayWeather);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQ7QUFDZSxNQUFNQyxjQUFjLENBQUM7RUFDbENDLGdCQUFnQixHQUFHLEtBQUs7RUFFeEJDLGVBQWUsR0FBRyxXQUFXO0VBRTdCQyxVQUFVO0lBQUEsSUFBQUMsS0FBQTtJQUFBLE9BQUcsa0JBQXlDO01BQUEsSUFBbENDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdGLEtBQUksQ0FBQ0YsZUFBZTtNQUMvQyxNQUFNTyxPQUFPLEdBQUcsTUFBTVYsc0VBQWMsQ0FBQ00sTUFBTSxDQUFDO01BQzVDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0lBQ3RCLENBQUM7RUFBQTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLE1BQU1HLE9BQU8sR0FBRyxpQ0FBaUM7QUFDakQsTUFBTUMsUUFBUSxHQUFHLCtCQUErQjtBQUVoRCxNQUFNQyxnQkFBZ0IsR0FBRyxnQkFBZ0I7QUFDekMsTUFBTUMsWUFBWSxHQUFHLFFBQVE7QUFFN0IsTUFBTWhCLGNBQWMsR0FBRyxNQUFPaUIsUUFBUSxJQUFLO0VBQ3pDO0VBQ0EsTUFBTUMsUUFBUSxHQUFJLEdBQUVKLFFBQVMsR0FBRUMsZ0JBQWlCLFFBQU9GLE9BQVEsTUFBS0ksUUFBUyxJQUFHRCxZQUFhLEVBQUM7RUFFOUYsSUFBSTtJQUNGLE1BQU1HLGdCQUFnQixHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsUUFBUSxDQUFDO0lBQzlDLE1BQU1HLFdBQVcsR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFFakQsSUFBSUQsV0FBVyxDQUFDRSxLQUFLLEVBQ25CLE1BQU0sSUFBSUMsS0FBSyxDQUFFLGNBQWFILFdBQVcsQ0FBQ0UsS0FBSyxDQUFDRSxPQUFRLEVBQUMsQ0FBQztJQUU1RCxPQUFPSixXQUFXO0VBQ3BCLENBQUMsQ0FBQyxPQUFPSyxHQUFHLEVBQUU7SUFDWixNQUFNLElBQUlGLEtBQUssQ0FBQ0UsR0FBRyxDQUFDO0VBQ3RCO0FBQ0YsQ0FBQztBQUVELGlFQUFlMUIsY0FBYzs7Ozs7O1VDdkI3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlEO0FBRXpELE1BQU0yQixjQUFjLEdBQUcsSUFBSTFCLGtFQUFjLENBQUMsQ0FBQztBQUMzQzBCLGNBQWMsQ0FBQ3ZCLFVBQVUsQ0FBQyxDQUFDOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZGVsL2RhdGEvZ2V0V2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4uL21vZGVsL2RhdGEvZ2V0V2VhdGhlckRhdGEnO1xuXG4vLyBpbXBvcnQgZmlsdGVyV2VhdGhlckRhdGEgZnJvbSAnLi4vc2VydmljZXMvZmlsdGVyRGF0YSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udHJvbGxlciB7XG4gIGFsdGVybmF0aXZlVW5pdHMgPSBmYWxzZTtcblxuICBkZWZhdWx0TG9jYXRpb24gPSAnQ2FwZSBUb3duJztcblxuICBnZXRXZWF0aGVyID0gYXN5bmMgKHNlYXJjaCA9IHRoaXMuZGVmYXVsdExvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKHNlYXJjaCk7XG4gICAgY29uc29sZS5sb2cocmF3RGF0YSk7XG4gIH07XG59XG5cbi8vIGNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbi8vICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4vLyAgIGNvbnN0IGNsZWFuRGF0YSA9IGF3YWl0IGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbi8vICAgcmV0dXJuIGNsZWFuRGF0YTtcbi8vIH07XG4iLCJjb25zdCBBUElfS0VZID0gJzBlZjkyMzRmZmQ4MTQwZTBiY2YxNDU5NDIyMzI1MDgnO1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnO1xuXG5jb25zdCBGT1JFQ0FTVF9XRUFUSEVSID0gJy9mb3JlY2FzdC5qc29uJztcbmNvbnN0IGZvcmVjYXN0RGF5cyA9ICdkYXlzPTMnO1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAvLyBHZXR0aW5nIGZvcmVjYXN0IG9ubHkgYmVjYXVzZSBjdXJyZW50IHdlYXRoZXIgaXMgYWxyZWFkeSB3aXRoIGl0XG4gIGNvbnN0IGZvcmVjYXN0ID0gYCR7QkFTRV9VUkx9JHtGT1JFQ0FTVF9XRUFUSEVSfT9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JiR7Zm9yZWNhc3REYXlzfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZm9yZWNhc3QpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZm9yZWNhc3RSZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAod2VhdGhlckRhdGEuZXJyb3IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBFcnJvcjogJHt3ZWF0aGVyRGF0YS5lcnJvci5tZXNzYWdlfWApO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXInO1xuXG5jb25zdCBtYWluQ29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcigpO1xubWFpbkNvbnRyb2xsZXIuZ2V0V2VhdGhlcigpO1xuXG4vLyBpbXBvcnQgeyBzZWFyY2hCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoQmFyL3NlYXJjaEJhcic7XG4vLyBpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2NvbXBvbmVudHMvd2VhdGhlcic7XG4vLyBpbXBvcnQgY3JlYXRlV2VhdGhlckNhcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkvd2VhdGhlckNhcmQnO1xuLy8gaW1wb3J0IGdldEdlb0xvY2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9nZW9Mb2NhdGlvbic7XG4vLyBpbXBvcnQgY3JlYXRlTG9hZGluZ0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkvY2FyZFNlY3Rpb25zL2xvYWRpbmdDYXJkJztcbi8vIGltcG9ydCBzZWxlY3RVbml0cyBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS9lbGVtZW50cy91bml0U2VsZWN0JztcblxuLy8gY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuLy8gY29uc3QgZGlzcGxheVdlYXRoZXIgPSBhc3luYyAoc2VhcmNoUmVzdWx0KSA9PiB7XG4vLyAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyQ2FyZCcpO1xuLy8gICBjb25zdCBjdXJyZW50TG9hZGluZ0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG5cbi8vICAgY29uc3QgbG9hZGluZ0NhcmQgPSBjcmVhdGVMb2FkaW5nQ2FyZCgpO1xuLy8gICBpZiAoY3VycmVudExvYWRpbmdDYXJkKSBjdXJyZW50TG9hZGluZ0NhcmQucmVwbGFjZVdpdGgobG9hZGluZ0NhcmQpO1xuLy8gICBpZiAoY3VycmVudFdlYXRoZXJDYXJkKSBjdXJyZW50V2VhdGhlckNhcmQucmVwbGFjZVdpdGgobG9hZGluZ0NhcmQpO1xuLy8gICBpZiAoIWN1cnJlbnRXZWF0aGVyQ2FyZCAmJiAhY3VycmVudExvYWRpbmdDYXJkKSBib2R5LmFwcGVuZChsb2FkaW5nQ2FyZCk7XG5cbi8vICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaFJlc3VsdCk7XG4vLyAgIGNvbnN0IHdlYXRoZXJDYXJkID0gYXdhaXQgY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xuXG4vLyAgIGxvYWRpbmdDYXJkLnJlcGxhY2VXaXRoKHdlYXRoZXJDYXJkKTtcbi8vIH07XG5cbi8vIHNlbGVjdFVuaXRzKCk7XG4vLyBzZWFyY2hCYXIoZGlzcGxheVdlYXRoZXIpO1xuLy8gZ2V0R2VvTG9jYXRpb24oZGlzcGxheVdlYXRoZXIpO1xuIl0sIm5hbWVzIjpbImdldFdlYXRoZXJEYXRhIiwiTWFpbkNvbnRyb2xsZXIiLCJhbHRlcm5hdGl2ZVVuaXRzIiwiZGVmYXVsdExvY2F0aW9uIiwiZ2V0V2VhdGhlciIsIl90aGlzIiwic2VhcmNoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicmF3RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJBUElfS0VZIiwiQkFTRV9VUkwiLCJGT1JFQ0FTVF9XRUFUSEVSIiwiZm9yZWNhc3REYXlzIiwibG9jYXRpb24iLCJmb3JlY2FzdCIsImZvcmVjYXN0UmVzcG9uc2UiLCJmZXRjaCIsIndlYXRoZXJEYXRhIiwianNvbiIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwiZXJyIiwibWFpbkNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9
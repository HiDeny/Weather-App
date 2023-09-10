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
const CURRENT_WEATHER = '/current.json';
const FORECAST_WEATHER = '/forecast.json';
const forecastDays = 'days=3';
const getWeatherData = async location => {
  const current = `${BASE_URL}${CURRENT_WEATHER}?key=${API_KEY}&q=${location}`;
  const forecast = `${BASE_URL}${FORECAST_WEATHER}?key=${API_KEY}&q=${location}&${forecastDays}`;
  const urls = [current, forecast];
  try {
    const weatherData = await Promise.all(urls.map(async url => {
      const resp = await fetch(url);
      const respJSON = await resp.json();
      if (respJSON.error) throw new Error(`API Error: ${respJSON.error.message}`);
      return respJSON;
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQ7QUFDZSxNQUFNQyxjQUFjLENBQUM7RUFDbENDLGdCQUFnQixHQUFHLEtBQUs7RUFFeEJDLGVBQWUsR0FBRyxXQUFXO0VBRTdCQyxVQUFVO0lBQUEsSUFBQUMsS0FBQTtJQUFBLE9BQUcsa0JBQXlDO01BQUEsSUFBbENDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdGLEtBQUksQ0FBQ0YsZUFBZTtNQUMvQyxNQUFNTyxPQUFPLEdBQUcsTUFBTVYsc0VBQWMsQ0FBQ00sTUFBTSxDQUFDO01BQzVDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0lBQ3RCLENBQUM7RUFBQTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLE1BQU1HLE9BQU8sR0FBRyxpQ0FBaUM7QUFDakQsTUFBTUMsUUFBUSxHQUFHLCtCQUErQjtBQUVoRCxNQUFNQyxlQUFlLEdBQUcsZUFBZTtBQUN2QyxNQUFNQyxnQkFBZ0IsR0FBRyxnQkFBZ0I7QUFDekMsTUFBTUMsWUFBWSxHQUFHLFFBQVE7QUFFN0IsTUFBTWpCLGNBQWMsR0FBRyxNQUFPa0IsUUFBUSxJQUFLO0VBQ3pDLE1BQU1DLE9BQU8sR0FBSSxHQUFFTCxRQUFTLEdBQUVDLGVBQWdCLFFBQU9GLE9BQVEsTUFBS0ssUUFBUyxFQUFDO0VBQzVFLE1BQU1FLFFBQVEsR0FBSSxHQUFFTixRQUFTLEdBQUVFLGdCQUFpQixRQUFPSCxPQUFRLE1BQUtLLFFBQVMsSUFBR0QsWUFBYSxFQUFDO0VBRTlGLE1BQU1JLElBQUksR0FBRyxDQUFDRixPQUFPLEVBQUVDLFFBQVEsQ0FBQztFQUNoQyxJQUFJO0lBQ0YsTUFBTUUsV0FBVyxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUNuQ0gsSUFBSSxDQUFDSSxHQUFHLENBQUMsTUFBT0MsR0FBRyxJQUFLO01BQ3RCLE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztNQUM3QixNQUFNRyxRQUFRLEdBQUcsTUFBTUYsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUVsQyxJQUFJRCxRQUFRLENBQUNFLEtBQUssRUFDaEIsTUFBTSxJQUFJQyxLQUFLLENBQUUsY0FBYUgsUUFBUSxDQUFDRSxLQUFLLENBQUNFLE9BQVEsRUFBQyxDQUFDO01BRXpELE9BQU9KLFFBQVE7SUFDakIsQ0FBQyxDQUNILENBQUM7SUFFRCxPQUFPUCxXQUFXO0VBQ3BCLENBQUMsQ0FBQyxPQUFPWSxHQUFHLEVBQUU7SUFDWixNQUFNLElBQUlGLEtBQUssQ0FBQ0UsR0FBRyxDQUFDO0VBQ3RCO0FBQ0YsQ0FBQztBQUVELGlFQUFlbEMsY0FBYzs7Ozs7O1VDL0I3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlEO0FBRXpELE1BQU1tQyxjQUFjLEdBQUcsSUFBSWxDLGtFQUFjLENBQUMsQ0FBQztBQUMzQ2tDLGNBQWMsQ0FBQy9CLFVBQVUsQ0FBQyxDQUFDOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZGVsL2RhdGEvZ2V0V2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4uL21vZGVsL2RhdGEvZ2V0V2VhdGhlckRhdGEnO1xuXG4vLyBpbXBvcnQgZmlsdGVyV2VhdGhlckRhdGEgZnJvbSAnLi4vc2VydmljZXMvZmlsdGVyRGF0YSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udHJvbGxlciB7XG4gIGFsdGVybmF0aXZlVW5pdHMgPSBmYWxzZTtcblxuICBkZWZhdWx0TG9jYXRpb24gPSAnQ2FwZSBUb3duJztcblxuICBnZXRXZWF0aGVyID0gYXN5bmMgKHNlYXJjaCA9IHRoaXMuZGVmYXVsdExvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKHNlYXJjaCk7XG4gICAgY29uc29sZS5sb2cocmF3RGF0YSk7XG4gIH07XG59XG5cbi8vIGNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbi8vICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG4vLyAgIGNvbnN0IGNsZWFuRGF0YSA9IGF3YWl0IGZpbHRlcldlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbi8vICAgcmV0dXJuIGNsZWFuRGF0YTtcbi8vIH07XG4iLCJjb25zdCBBUElfS0VZID0gJzBlZjkyMzRmZmQ4MTQwZTBiY2YxNDU5NDIyMzI1MDgnO1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnO1xuXG5jb25zdCBDVVJSRU5UX1dFQVRIRVIgPSAnL2N1cnJlbnQuanNvbic7XG5jb25zdCBGT1JFQ0FTVF9XRUFUSEVSID0gJy9mb3JlY2FzdC5qc29uJztcbmNvbnN0IGZvcmVjYXN0RGF5cyA9ICdkYXlzPTMnO1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCBjdXJyZW50ID0gYCR7QkFTRV9VUkx9JHtDVVJSRU5UX1dFQVRIRVJ9P2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn1gO1xuICBjb25zdCBmb3JlY2FzdCA9IGAke0JBU0VfVVJMfSR7Rk9SRUNBU1RfV0VBVEhFUn0/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSYke2ZvcmVjYXN0RGF5c31gO1xuXG4gIGNvbnN0IHVybHMgPSBbY3VycmVudCwgZm9yZWNhc3RdO1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICB1cmxzLm1hcChhc3luYyAodXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCByZXNwSlNPTiA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICAgIGlmIChyZXNwSlNPTi5lcnJvcilcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBFcnJvcjogJHtyZXNwSlNPTi5lcnJvci5tZXNzYWdlfWApO1xuXG4gICAgICAgIHJldHVybiByZXNwSlNPTjtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJEYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyJztcblxuY29uc3QgbWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIoKTtcbm1haW5Db250cm9sbGVyLmdldFdlYXRoZXIoKTtcblxuLy8gaW1wb3J0IHsgc2VhcmNoQmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaEJhci9zZWFyY2hCYXInO1xuLy8gaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXInO1xuLy8gaW1wb3J0IGNyZWF0ZVdlYXRoZXJDYXJkIGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5L3dlYXRoZXJDYXJkJztcbi8vIGltcG9ydCBnZXRHZW9Mb2NhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvZ2VvTG9jYXRpb24nO1xuLy8gaW1wb3J0IGNyZWF0ZUxvYWRpbmdDYXJkIGZyb20gJy4vY29tcG9uZW50cy9kaXNwbGF5L2NhcmRTZWN0aW9ucy9sb2FkaW5nQ2FyZCc7XG4vLyBpbXBvcnQgc2VsZWN0VW5pdHMgZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkvZWxlbWVudHMvdW5pdFNlbGVjdCc7XG5cbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbi8vIGNvbnN0IGRpc3BsYXlXZWF0aGVyID0gYXN5bmMgKHNlYXJjaFJlc3VsdCkgPT4ge1xuLy8gICBjb25zdCBjdXJyZW50V2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckNhcmQnKTtcbi8vICAgY29uc3QgY3VycmVudExvYWRpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuXG4vLyAgIGNvbnN0IGxvYWRpbmdDYXJkID0gY3JlYXRlTG9hZGluZ0NhcmQoKTtcbi8vICAgaWYgKGN1cnJlbnRMb2FkaW5nQ2FyZCkgY3VycmVudExvYWRpbmdDYXJkLnJlcGxhY2VXaXRoKGxvYWRpbmdDYXJkKTtcbi8vICAgaWYgKGN1cnJlbnRXZWF0aGVyQ2FyZCkgY3VycmVudFdlYXRoZXJDYXJkLnJlcGxhY2VXaXRoKGxvYWRpbmdDYXJkKTtcbi8vICAgaWYgKCFjdXJyZW50V2VhdGhlckNhcmQgJiYgIWN1cnJlbnRMb2FkaW5nQ2FyZCkgYm9keS5hcHBlbmQobG9hZGluZ0NhcmQpO1xuXG4vLyAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2hSZXN1bHQpO1xuLy8gICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGF3YWl0IGNyZWF0ZVdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcblxuLy8gICBsb2FkaW5nQ2FyZC5yZXBsYWNlV2l0aCh3ZWF0aGVyQ2FyZCk7XG4vLyB9O1xuXG4vLyBzZWxlY3RVbml0cygpO1xuLy8gc2VhcmNoQmFyKGRpc3BsYXlXZWF0aGVyKTtcbi8vIGdldEdlb0xvY2F0aW9uKGRpc3BsYXlXZWF0aGVyKTtcbiJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyRGF0YSIsIk1haW5Db250cm9sbGVyIiwiYWx0ZXJuYXRpdmVVbml0cyIsImRlZmF1bHRMb2NhdGlvbiIsImdldFdlYXRoZXIiLCJfdGhpcyIsInNlYXJjaCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJhd0RhdGEiLCJjb25zb2xlIiwibG9nIiwiQVBJX0tFWSIsIkJBU0VfVVJMIiwiQ1VSUkVOVF9XRUFUSEVSIiwiRk9SRUNBU1RfV0VBVEhFUiIsImZvcmVjYXN0RGF5cyIsImxvY2F0aW9uIiwiY3VycmVudCIsImZvcmVjYXN0IiwidXJscyIsIndlYXRoZXJEYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInVybCIsInJlc3AiLCJmZXRjaCIsInJlc3BKU09OIiwianNvbiIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwiZXJyIiwibWFpbkNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9
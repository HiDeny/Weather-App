export const saveUserConfig = (userConfig) => {
  localStorage.setItem('configWeatherApp', JSON.stringify(userConfig));
};

export const initUserConfig = () => {
  const storedConfig = localStorage.getItem('configWeatherApp');
  const defaultConfig = {
    format24H: true,
    isMetric: true,
    defaultLocation: null,
    locationSearched: 0,
  };

  if (storedConfig) return JSON.parse(storedConfig);
  return defaultConfig;
};

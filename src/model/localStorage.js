export const saveUserConfig = (userConfig) => {
  localStorage.setItem('configWeatherApp', JSON.stringify(userConfig));
};

export const setUserConfig = () => {
  const storedConfig = localStorage.getItem('configWeatherApp');
  if (storedConfig) return JSON.parse(storedConfig);
  return {
    format24H: true,
    isMetric: true,
    defaultLocation: null,
  };
};

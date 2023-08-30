const getLocation = (weatherData) => {
  // name, region
};

const getCurrent = (weatherData) => {
  // temp
  // conditions
};

// const getWind = ()

const getDetails = (weatherData) => {
  // feels like
  // astronomy - sun up / down
  // uv
  // wind
};
const getForecastHour = (weatherData) => {
  // temp
  // condition
  // icon
};
const getForecastDay = (weatherData) => {
  // temp 
  // icon
};

const filterWeatherData = async (weatherData) => {
  console.log(weatherData);
  const locationData = await weatherData;
  const { name, region, country } = locationData.location;

  const { temp_c, temp_f, uv } = locationData.current;
  const { feelslike_c, feelslike_f } = locationData.current;

  const { wind_kph, wind_mph, wind_dir } = locationData.current;
  const { gust_kph, gust_mph } = locationData.current;

  const condition = locationData.current.condition.text;

  return {
    location: {
      name,
      region,
      country,
    },
    temp: {
      current: {
        c: temp_c,
        f: temp_f,
      },
      feel: {
        c: feelslike_c,
        f: feelslike_f,
      },
      uv,
    },
    wind: {
      speed: {
        kph: wind_kph,
        mph: wind_mph,
      },
      gust: {
        kph: gust_kph,
        mph: gust_mph,
      },
      dir: wind_dir,
    },
    condition,
  };
};

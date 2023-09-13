import Chart from 'chart.js/auto';

const createForecastHourly = (todayData) => {
  const { forecastHourly } = todayData;
  const canvas = document.createElement('canvas');
  canvas.classList.add('forecastHourly');

  const forecastHourlyChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: forecastHourly.map((data) => data.hour),
      datasets: [
        {
          label: 'Temperature',
          data: forecastHourly.map((data) => data.temp),
          borderColor: '#0173DB',

          tension: 0.3,
        },
        {
          label: 'UV',
          data: forecastHourly.map((data) => data.uv),
          borderColor: '#C3DF92',

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Chance of Rain %',
          data: forecastHourly.map((data) => data.rain),
          borderColor: '#8AA9F9',

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Wind',
          data: forecastHourly.map((data) => data.wind.speed),
          borderColor: '#8AA9F9',

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Wind - Gust',
          data: forecastHourly.map((data) => data.wind.gust),
          borderColor: '#8AA9F9',

          tension: 0.3,
          hidden: true,
        },
      ],
    },

    options: {
      maintainAspectRatio: false,
    },
  });

  return canvas;
};

export default createForecastHourly;

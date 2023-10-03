import Chart from 'chart.js/auto';

const createForecastHourly = (todayData) => {
  const { forecastHourly } = todayData;
  const canvas = document.createElement('canvas');
  canvas.classList.add('forecastHourly');

  // Update Nodes (Bigger, easier to show info)
  const forecastHourlyChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: forecastHourly.map((data) => data.hour),
      datasets: [
        {
          label: 'Temperature',
          data: forecastHourly.map((data) => data.temp),
          borderColor: '#A63737',

          pointStyle: 'circle',
          pointHoverRadius: 3,

          tension: 0.3,
        },
        {
          label: 'UV',
          data: forecastHourly.map((data) => data.uv),
          borderColor: '#F28705',

          pointStyle: 'circle',
          pointHoverRadius: 3,

          tension: 0.3,
        },
        {
          label: 'Wind',
          data: forecastHourly.map((data) => data.wind.speed),
          borderColor: '#3E606F',

          pointStyle: 'circle',
          pointHoverRadius: 3,

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Wind - Gust',
          data: forecastHourly.map((data) => data.wind.gust),
          borderColor: '#193441',

          pointStyle: 'circle',
          pointHoverRadius: 3,

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Chance of Rain %',
          data: forecastHourly.map((data) => data.rain),
          borderColor: '#1833A8',

          pointStyle: 'circle',
          pointHoverRadius: 3,

          tension: 0.3,
          hidden: true,
        },
      ],
    },

    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 35,
        },
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
    },
  });

  return canvas;
};

export default createForecastHourly;

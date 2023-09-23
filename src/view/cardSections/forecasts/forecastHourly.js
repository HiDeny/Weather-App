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
          pointRadius: 7,
          pointHoverRadius: 15,

          tension: 0.3,
        },
        {
          label: 'UV',
          data: forecastHourly.map((data) => data.uv),
          borderColor: '#F28705',

          pointStyle: 'circle',
          pointRadius: 7,
          pointHoverRadius: 15,

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Chance of Rain %',
          data: forecastHourly.map((data) => data.rain * 100),
          borderColor: '#1833A8',

          pointStyle: 'circle',
          pointRadius: 7,
          pointHoverRadius: 15,

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Wind',
          data: forecastHourly.map((data) => data.wind.speed),
          borderColor: '#3E606F',

          pointStyle: 'circle',
          pointRadius: 7,
          pointHoverRadius: 15,

          tension: 0.3,
          hidden: true,
        },
        {
          label: 'Wind - Gust',
          data: forecastHourly.map((data) => data.wind.gust),
          borderColor: '#193441',

          pointStyle: 'circle',
          pointRadius: 7,
          pointHoverRadius: 15,

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
    },
  });

  return canvas;
};

export default createForecastHourly;

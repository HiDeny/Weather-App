import Chart from 'chart.js/auto';

const createChart = (hoursWeatherArr) => {
  const canvas = document.createElement('canvas');
  canvas.classList.add('myChart');
  canvas.height = 100;

  const myChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: hoursWeatherArr.map((data) => data.hour),
      datasets: [
        {
          label: 'Temperature',
          data: hoursWeatherArr.map((data) => data.temp.c),
          borderColor: '#0173DB',

          tension: 0.3,
          fill: true,
          display: false,
        },
      ],
    },
    options: {},
  });

  return myChart;
};

export default createChart;

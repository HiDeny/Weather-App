import Chart from 'chart.js/auto';

export const createChart = (hoursWeatherArr) => {
  const canvas = document.createElement('canvas');
  canvas.classList.add('myChart');

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: hoursWeatherArr.map((data) => data.hour),
      datasets: [
        {
          label: 'Temperature',
          data: hoursWeatherArr.map((data) => data.temp.c),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {},
  });

  document.body.append(canvas);
};

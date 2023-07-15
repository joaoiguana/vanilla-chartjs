// Overall line chart
const labels = Array.from({length: 14}, (_, i) => i + 11);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Number of Orders per Hour',
      data: [5, 10, 15, 20, 15, 10, 8, 10, 12, 14, 10, 8, 5, 5],
      fill: false,
      backgroundColor: 'rgba(0, 123, 255, 1)',
      borderColor: 'rgba(0, 123, 255, 1)',
      tension: 0.1
    },
    {
      label: 'Las Gringas',
      data: [1, 4, 6, 4, 2, 2, 3, 4, 5, 2, 1, 1, 0, 0],
      fill: false,
      backgroundColor: 'rgb(162, 255, 134)',
      borderColor: 'rgb(162, 255, 134)',
      tension: 0.1
    },
    {
      label: 'Ameaça Vegetal',
      data: [3, 10, 15, 12, 8, 6, 8, 10, 14, 8, 4, 4, 2, 0],
      fill: false,
      backgroundColor: 'rgba(255, 205, 86, 1)',
      borderColor: 'rgba(255, 205, 86, 1)',
      tension: 0.1
    },
    {
      label: 'DDM',
      data: [null, null, null, null, null, null, null, 10, 12, 14, 8, 5, 4, 3],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      tension: 0.1
    },
  ]
};

const configLine = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Orders',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Hour of the Day',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
};

// Get the context of the canvas element we want to select
const ctx1 = document.getElementById('lineChart').getContext('2d');

// Create a new chart instance
const myLineChart = new Chart(ctx1, configLine);

//

// Orders line chart
const orderLabels = Array.from({length: 28}, (_, i) => `Day ${i + 1}`);

// Create an array with random values between 54 and 216
const ordersData = Array.from({length: 28}, () => Math.floor(Math.random() * (216 - 54 + 1)) + 54);

const orderData = {
  labels: orderLabels,
  datasets: [
    {
      label: 'Total Orders',
      data: ordersData,
      fill: false,
      backgroundColor: 'rgba(0, 123, 255, 1)',
      borderColor: 'rgba(0, 123, 255, 1)',
      tension: 0.1
    }
  ]
};

const configOrderLine = {
  type: 'line',
  data: orderData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Orders',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Day of the Month',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
};

// Get the context of the canvas element we want to select
const ordersCtx = document.getElementById('ordersLineChart').getContext('2d');

// Create a new chart instance
const myOrdersLineChart = new Chart(ordersCtx, configOrderLine);

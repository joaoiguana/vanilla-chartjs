// Product Sold
const ameaça = [110, 80, 130, 110, 120, 60, 50, 90, 90, 105, 120, 85, 70, 110, 75, 105, 60, 90, 80, 105, 130, 85, 115, 60, 90, 75, 125, 70, 70, 100];
const gringas = [85, 70, 60, 125, 100, 115, 120, 90, 90, 105, 70, 75, 85, 110, 60, 100, 90, 75, 130, 85, 105, 110, 75, 70, 110, 120, 80, 100, 115, 90];
const ddm = [75, 60, 100, 90, 75, 130, 85, 105, 110, 70, 100, 115, 120, 90, 90, 105, 120, 85, 70, 110, 80, 105, 130, 85, 115, 60, 90, 75, 70, 100];

const items = ameaça.map((value, index) => value + gringas[index] + ddm[index]);

const chartData = {
  items,
  ameaça,
  gringas,
  ddm
};

// Get the context of the canvas element we want to select
const ctx2 = document.getElementById('itemChart').getContext('2d');

// Create a new chart instance
const itemChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Guacamole y Totopos', 'Taco al Pastor', 'Quesadilla', 'Michelada', 'Corona', 'Margarita Sin Verguenza', 'Hamburguesa Ameaça Vegetal', 'Enchiladas Verdes', 'Chiles en Nogada', 'Tostadas de Tinga', 'Tacos de Carnitas', 'Pozole', 'Churros', 'Flan', 'Tequila Sunrise', 'Mojito', 'Burrito de Barbacoa', 'Taco de Pescado', 'Sopa Azteca', 'Agua de Jamaica', 'Agua de Horchata', 'Taco de Asada', 'Queso Fundido', 'Tamales', 'Ensalada Nopal', 'Frijoles Charros', 'Empanadas de Mole', 'Taco de Lengua', 'Ceviche', 'Cerveza Negra Modelo'],
    datasets: [{
      label: '# of Sales',
      data: chartData.items,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.1)',
        'rgba(54, 162, 235, 0.1)',
        'rgba(255, 206, 86, 0.1)',
        'rgba(75, 192, 192, 0.1)',
        'rgba(153, 102, 255, 0.1)',
        'rgba(255, 159, 64, 0.1)',
        'rgba(255, 99, 132, 0.05)',
        'rgba(54, 162, 235, 0.05)',
        'rgba(255, 206, 86, 0.05)',
        'rgba(75, 192, 192, 0.05)',
        'rgba(153, 102, 255, 0.05)',
        'rgba(255, 159, 64, 0.05)'
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      title: {
        display: true,
        text: 'Products Sold'
      }
    }
  }
});

document.getElementById('dataset-select').addEventListener('change', function(e) {
  itemChart.data.datasets[0].data = chartData[e.target.value];
  itemChart.update();
});

//

// Orders by Type
const typeCtx = document.getElementById('typeChart').getContext('2d');

// define the function
const getDataForTimeFrame = (timeFrame) => {
  switch (timeFrame) {
    case '1w':
      return [35, 5, 60];
    case '1m':
      return [33, 10, 57];
    case '3m':
      return [23, 5, 72];
    case '6m':
      return [20, 10, 70];
    case '1y':
      return [15, 5, 80];
    default:
      console.error('Invalid time frame:', timeFrame);
      return [];
  }
}

const typeData = {
  labels: ['Dine-in', 'Take-away', 'Delivery'],
  datasets: [{
    label: 'Sales distribution',
    data: getDataForTimeFrame('1w'),
    backgroundColor: [
      'rgb(2, 84, 100)',  // color for dine-in
      'rgb(229, 124, 35)', // color for take-away
      'rgb(232, 170, 66)'  // color for delivery
    ],
    hoverOffset: 4
  }]
};

const typeChart = new Chart(typeCtx, {
  type: 'pie',
  data: typeData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Orders by Type'
      }
    }
  }
});

const buttons = document.querySelectorAll('.time-frame-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const timeFrame = button.id;
    const newData = getDataForTimeFrame(timeFrame);
    typeChart.data.datasets[0].data = newData;
    typeChart.update();
  });
});

//

// Orders by Location
const locationData = {
  labels: ['DDM', 'Dinete'],
  datasets: [{
    label: 'Orders by location',
    data: [22, 78],
    backgroundColor: [
      'rgba(255, 99, 132)',   // color for DDM
      'rgb(255, 214, 165)'    // color for Dinete
    ],
    hoverOffset: 4
  }]
};

// Get the context of the canvas where the chart will be drawn
const locationCtx = document.getElementById('locationChart').getContext('2d');

// Create the chart
const locationChart = new Chart(locationCtx, {
  type: 'pie',
  data: locationData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Orders by Location'
      }
    }
  }
});

//

// Orders by channel
const channelDataTimeFrames = {
  '1W': [25, 40, 15, 20],
  '1M': [27, 38, 17, 18],
  '3M': [28, 35, 18, 19],
  '6M': [30, 33, 19, 18],
  '1Yr': [32, 31, 19, 18]
};

// Define a function to get the data for a given timeframe
function getChannelDataForTimeFrame(timeFrame) {
  return channelDataTimeFrames[timeFrame];
}

const channelData = {
  labels: ['Foodriders', 'Uber', 'Glovo', 'Bolt'],
  datasets: [{
    label: 'Orders by channel',
    data: getChannelDataForTimeFrame('1W'),  // Initialize with 1 week data
    backgroundColor: [
      'rgb(39, 55, 77)',   // color for Foodriders
      'rgb(128, 0, 128)',  // color for Uber
      'rgb(242, 190, 34)', // color for Glovo
      'rgb(67, 170, 139)'  // color for Bolt
    ],
    hoverOffset: 4
  }]
};

// Get the context of the canvas where the chart will be drawn
const channelCtx = document.getElementById('channelChart').getContext('2d');

// Create the chart
const channelChart = new Chart(channelCtx, {
  type: 'pie',
  data: channelData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Orders by Channel'
      }
    }
  }
});

const changeTimeFrame = (timeFrame) => {
  // Update the data of the chart
  channelChart.data.datasets[0].data = getChannelDataForTimeFrame(timeFrame);
  // Update the chart
  channelChart.update();
}

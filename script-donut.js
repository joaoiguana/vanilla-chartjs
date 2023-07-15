// Donut 1
const dataPlatformsFoodriders = {
  labels: ['Bolt', 'Glovo', 'Uber'],
  datasets: [{
    label: 'Platforms vs Foodriders',
    data: [35, 20, 45],
    backgroundColor: [
      'rgb(67, 170, 139)',   // Bolt
      'rgb(242, 190, 34)',    // Glovo
      'rgb(128, 0, 128)'     // Uber
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'doughnut',
  data: dataPlatformsFoodriders,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      title: {
        display: true,
        text: 'Platforms'
      }
    }
  },
};

const donutChart1 = new Chart(
  document.getElementById('donutChart1'),
  config
);

// Donut 2
const dataPlatforms = {
  labels: ['Platforms', 'Foodriders'],
  datasets: [{
    label: 'Platforms vs Foodriders',
    data: [60, 40],
    backgroundColor: [
      'rgb(82, 109, 130)', // color for Platforms
      'rgb(39, 55, 77)'  // color for Foodriders
    ],
    hoverOffset: 4
  }]
};

const configPlatforms = {
  type: 'doughnut',
  data: dataPlatforms,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      title: {
        display: true,
        text: 'Platform vs Foodriders'
      }
    }
  },
};

const donutChart2 = new Chart(
  document.getElementById('donutChart2'),
  configPlatforms
);

// Donut 3
const dataFoodriders = {
  labels: ['Dine-In', 'Delivery', 'Take-Away'],
  datasets: [{
    label: 'Foodriders',
    data: [40, 50, 10],
    backgroundColor: [
      'rgb(2, 84, 100)',  // color for dine-in
      'rgb(232, 170, 66)', // color for delivery
      'rgb(229, 124, 35)'    // color for take-away
    ],
    hoverOffset: 4
  }]
};

const configFoodriders = {
  type: 'doughnut',
  data: dataFoodriders,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      title: {
        display: true,
        text: 'Foodriders'
      }
    }
  },
};

const donutChart3 = new Chart(
  document.getElementById('donutChart3'),
  configFoodriders
);

// Donut 4
const dataMenus = {
  labels: ['Las Gringas', 'DDM', 'Ameaça Vegetal'],
  datasets: [{
    label: 'Foodriders',
    data: [19, 31, 51],
    backgroundColor: [
      'rgb(162, 255, 134)',  // color for las gringas
      'rgba(255, 99, 132)', // color for ddm
      'rgba(255, 205, 86)'    // color for ameaça
    ],
    hoverOffset: 4
  }]
};

const configMenus = {
  type: 'doughnut',
  data: dataMenus,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      title: {
        display: true,
        text: 'Menus'
      }
    }
  },
};

const donutChart4 = new Chart(
  document.getElementById('donutChart4'),
  configMenus
);

// Donut 5
const dataProductType = {
  labels: ['Drinks', 'Food'],
  datasets: [{
    label: 'Foodriders',
    data: [32, 68],
    backgroundColor: [
      'rgb(239, 225, 209)',  // color for drinks
      'rgb(167, 130, 149)', // color for food
    ],
    hoverOffset: 4
  }]
};

const configProductType = {
  type: 'doughnut',
  data: dataProductType,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide labels
      },
      title: {
        display: true,
        text: 'ProductType'
      }
    }
  },
};

const donutChart5 = new Chart(
  document.getElementById('donutChart5'),
  configProductType
);

// Donut Clients
const dataClient = {
  labels: ['Returning', 'One-time'],
  datasets: [{
    label: 'Foodriders',
    data: [72, 28],
    backgroundColor: [
      'rgb(60, 64, 72)',
      'rgb(0, 171, 179)',
    ],
    hoverOffset: 4
  }]
};

const configClient = {
  type: 'doughnut',
  data: dataClient,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'ClientType'
      }
    }
  },
};

const donutClient = new Chart(
  document.getElementById('donutClient'),
  configClient
);

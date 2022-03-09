




const alert = document.querySelector('.alert');
const alertBtn = document.querySelector('.btn-alert');

alertBtn.addEventListener('click', () => {
  alert.style.display = "none";
})




const bell = document.querySelector('.bell-icon');
const dot = document.querySelector('.bell-dot');
const dropdown = document.querySelector('.notifications');

bell.addEventListener('click', () => {
  dropdown.classList.toggle("show-drop");
  dot.style.display = "none";
});





const trafficChart = document.querySelector('#traffic-graph');

let trafficDataHourly = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(106, 95, 202, 0.3)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  
  }]
};





const trafficOptions = {
  fill: true,
  aspectRatio: 2,
  scales: {
      y:{
          beginAtZero: true
      }
  },
  plugins: {
      legend: {
          display: false
      }
  }
};

let trafficLineChart = new Chart( trafficChart, {
  type: 'line',
  data: trafficDataHourly,
  options: trafficOptions
});

const trafficList = document.querySelector('.traffic-list');

trafficList.addEventListener('click', (e) => {
  let chartLabel = e.target;
  let liveLabel = document.querySelector('.live');

  if ( chartLabel.className !== 'traffic-list-nav live' &&  chartLabel.tagName === 'LI') {
    chartLabel.classList.add('live');
    liveLabel.classList.remove('live');

    if ( chartLabel.textContent.includes('Hourly') ) {
      trafficLineChart.destroy();
      trafficLineChart = new Chart( trafficChart, {
        type: 'line',
        data: trafficDataHourly,
        options: trafficOptions
      });
    
      
    }
  }
});






const dailyChart = document.querySelector('#daily-graph');

const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    data: [450, 550, 600, 500, 750, 950, 300],
    backgroundColor: 'rgba(106, 95, 202, 0.8)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  }]
}

const dailyOptions = {
  scales: {
      y:{
          beginAtZero: true
      }
  },
  plugins: {
      legend: {
          display: false
      }
  }
};

const dailyBarChart = new Chart( dailyChart, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});





const mobileChart = document.querySelector('#mobile-graph');

const mobileData = {
  labels: ['Desktop','Tablets','Phones'],
  datasets: [{
    data: [670, 510, 890],
    label: '# of users',
    backgroundColor: [
      'rgba(106, 95, 202, 0.863)',
      'turquoise',
      'rgb(33, 192, 33)'
    ],
    borderWidth: 1
  }]
};

const mobileOptions = {
  aspectRatio: 2,
  plugins: {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            boxHeight: 15,
            fontStyle: 'bold'
        }
    }
  }
};

const mobileDoughChart = new Chart( mobileChart, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});




const send = document.querySelector('#send');
const user = document.querySelector('#text');
const message = document.querySelector('#textarea');

send.addEventListener('click', () => {
  if ( user.value === '' && message.value === '' ) {
    window.alert('Please fill out both the user and message fields.');
  } else if ( user.value === '' ){
    window.alert('Please make sure to fill out the user field.');
  } else if ( message.value === '' ){
    window.alert('Please make sure to fill out the message field.');
  } else {
    window.alert(`Your message has been successfully sent to ${user.value}.`);
  }
});


var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: '',
        backgroundColor: [
            '#ff6361',
            '#bc5090',
            '#58508d',
            '#003f5c',
            '#00202e',
            '#ffffff'
        ],
        borderColor: [
          '#ff6361',
          '#bc5090',
          '#58508d',
          '#003f5c',
          '#00202e',
          '#ffffff'
        ],
        borderWidth: 1
      }]
    },
      
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

function addData(chart) {
    chart.data.labels.push(document.getElementById("label").value);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(document.getElementById("data").value);
    });
    chart.update();
  }


function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

function saveCanvas() {
    var image = canvas.toDataURL();  
    var tmpLink = document.createElement('a');  
    tmpLink.download = 'my_chart.png';
    tmpLink.href = image;  
    document.body.appendChild(tmpLink);  
    tmpLink.click();  
    document.body.removeChild(tmpLink);  
  }


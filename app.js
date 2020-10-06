// Script

//Generate a random user
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?format=xml');
xhr.onload = function() {
    if (xhr.status === 200) {
        var doc = xhr.responseXML;
        document.getElementById('randomUserName').innerText = doc.getElementsByTagName('first')[0].childNodes[0].nodeValue + ' ' + doc.getElementsByTagName('last')[0].childNodes[0].nodeValue,
        document.getElementById('randomUserIcon').src = doc.getElementsByTagName('thumbnail')[0].childNodes[0].nodeValue;
    }
    else {
        alert('Failed to generate random user. Using default.');
        document.getElementById('randomUserName').innerText = "Keith Reid";
        document.getElementById('randomUserIcon').src="https://randomuser.me/api/portraits/thumb/men/22.jpg";
    }
};
xhr.send();

//Alert
const alertDisplay = document.getElementsByClassName('alert')[0];
const alertExit = document.getElementsByClassName('exitAlert')[0];
alertExit.addEventListener('click', () => {
    alertDisplay.style.display = 'none';
});


//Charts
var ctx1 = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            borderColor: 'rgba(116, 119, 191, 1)',
            borderWidth: 2,
            backgroundColor: 'rgba(116, 119, 191, 0.2)',
            fill: 'start',
            pointRadius: 8,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointBorderWidth: 3,
            lineTension: 0,
        }],
        
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
    }
});

var ctx2 = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: ' ',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(116, 119, 191, 1)',
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        maintainAspectRatio: false
    }
});

var ctx3 = document.getElementById('donutChart').getContext('2d');
var donutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            data: [20, 15, 65],
            backgroundColor: [
                'rgba(116, 177, 191, 1)', 
                'rgba(129, 201, 143, 1)',
                'rgba(116, 119, 191, 1)'
            ]
        }],
        
    },
    options: {
        maintainAspectRatio: false
    }
});


//Button
const sendButton = document.getElementById('send'),
userSend = document.getElementById('searchUser'),
messageSend = document.getElementById('message');
sendButton.onclick = function(){
    if (userSend.value === '') alert('User not entered');
    else if (messageSend.value === '') alert('Message not entered');
    else {
        userSend.value = ''; messageSend.value = '';
        alert('Message sent!');
    }
};
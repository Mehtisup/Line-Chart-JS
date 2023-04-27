const xValue = [0,10,20,30,40,50,60,70];
const yValue = [10,20,30,40,50,60,70,80];

new Chart("myChart", {
    type:"line",
    data: {
        labels: xValue,
        datasets: [{
            backgroundColor:"red",
            borderColor:"rgba(0,0,0,0.1)",
            lineTension:0,
            fill:false,
            data: yValue
        }]
    },
    options: {
        legend: {display:false},
        scales: {
            yAxes: [{ticks: {min:0, max:100}}]
        }
    }
})

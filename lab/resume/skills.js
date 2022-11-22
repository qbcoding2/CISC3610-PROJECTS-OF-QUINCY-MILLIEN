const JAVA = document.getElementById("java")
const javaChart = new Chart(JAVA, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [50, 50],
        backgroundColor: [
            'rgba(243, 28, 78, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "Java",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});
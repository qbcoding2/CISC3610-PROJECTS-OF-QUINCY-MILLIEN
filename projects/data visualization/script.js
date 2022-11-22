const DONUT = document.getElementById("donutChart");
const HBAR = document.getElementById("hBarChart");

let donutChart = new Chart(DONUT, {
    type: 'doughnut',
    data: {
        labels: [
            'All Students',
            'Female',
            'Male',
            'Students with Disabilities',
            'American Indian or Alaska Native',
            'Asian or Native Hawaiian/Other Pacific Islander',
            'Black or African American',
            'Hiapanic or Latino',
            'White',
            'Multiracial'
        ],
        datasets: [{
            label: '2021 Num of Graduates of August 2021',
            data: [208217, 100975, 107242, 171023, 37194, 1506, 205391, 34899, 53726, 93421, 4274],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

let hBarChart = new Chart(HBAR, {
    type: 'bar',
    data: {
        labels: [
            'All Students',
            'Female',
            'Male',
            'Students with Disabilities',
            'American Indian or Alaska Native',
            'Asian or Native Hawaiian/Other Pacific Islander',
            'Black or African American',
            'Hiapanic or Latino',
            'White',
            'Multiracial'
        ],
        datasets: [{
            label: '2020 Num of Graduates by Quincy Millien',
            data: [208436, 101307, 107129, 173209, 35227, 1404, 20136, 36347, 53984, 92962, 3603],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
      
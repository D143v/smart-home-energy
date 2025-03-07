// Simulated energy usage data (you could replace this with API data in real scenarios)
const energyUsageData = [
    { appliance: 'Washing Machine', energyConsumed: 1.2, time: '2025-03-05 10:00:00' },
    { appliance: 'Refrigerator', energyConsumed: 0.8, time: '2025-03-05 10:30:00' },
    { appliance: 'Air Conditioner', energyConsumed: 2.5, time: '2025-03-05 11:00:00' },
    { appliance: 'Microwave', energyConsumed: 0.9, time: '2025-03-05 12:00:00' },
    { appliance: 'Heater', energyConsumed: 1.7, time: '2025-03-05 13:00:00' }
];

// Simulate fetching energy usage data and displaying it
window.onload = function() {
    displayEnergyUsage();
    renderChart();
};

function displayEnergyUsage() {
    const tableBody = document.querySelector('#usage-table tbody');
    energyUsageData.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.appliance}</td>
            <td>${data.energyConsumed}</td>
            <td>${data.time}</td>
        `;
        tableBody.appendChild(row);
    });
}

function renderChart() {
    const ctx = document.getElementById('energyChart').getContext('2d');

    // Prepare data for the chart
    const labels = energyUsageData.map(data => data.appliance);
    const data = energyUsageData.map(data => data.energyConsumed);

    // Create a new Chart.js chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Energy Consumed (kWh)',
                data: data,
                backgroundColor: '#4CAF50',
                borderColor: '#4CAF50',
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
    });
}

// Budget Check
function checkBudget() {
    const budgetInput = parseFloat(document.getElementById('budget').value); // Convert to number
    const totalConsumption = parseFloat(energyUsageData.reduce((acc, curr) => acc + curr.energyConsumed, 0).toFixed(2));

    console.log("Total Consumption:", totalConsumption); // Check this value
    console.log("Budget Input:", budgetInput); // Check this value

    const budgetStatus = document.getElementById('budget-status');

    if (budgetInput && totalConsumption > budgetInput) {
        budgetStatus.textContent = `Warning! You have exceeded your budget. Total consumption: ${totalConsumption} kWh.`;
        budgetStatus.style.color = 'red';
    } else if (budgetInput && totalConsumption <= budgetInput) {
        budgetStatus.textContent = `You're within your energy budget! Total consumption: ${totalConsumption} kWh.`;
        budgetStatus.style.color = 'green';
    } else {
        budgetStatus.textContent = 'Please enter a valid energy budget.';
        budgetStatus.style.color = 'black';
    }
}


function updateLoanAmountLabel(value) {
    document.getElementById('loanAmountLabel').textContent = numberToWords.toWords(value) + " (" + value + ")";
}

function updateSliderLabel(value, labelId) {
    let suffix = '';
    if (labelId === 'interestRateLabel') {
        suffix = '%';
    } else if (labelId === 'gracePeriodLabel') {
        suffix = ' months';
    } else {
        suffix = ' years';
    }
    document.getElementById(labelId).textContent = value + suffix;
}

function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);
    const monthlyInterest = interestRate / 12 / 100;
    const payments = loanTenure * 12;

    const EMI = loanAmount * monthlyInterest * (Math.pow(1 + monthlyInterest, payments)) / (Math.pow(1 + monthlyInterest, payments) - 1);
    document.getElementById('emiResult').textContent = `₹ ${EMI.toFixed(2)}`;
    const totalPayment = EMI * payments;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('totalInterest').textContent = `₹ ${totalInterest.toFixed(2)}`;
    document.getElementById('totalPayment').textContent = `₹ ${totalPayment.toFixed(2)}`;

    const ctx = document.getElementById('chartContainer').getContext('2d');
    if (window.pieChart) window.pieChart.destroy(); // Destroy previous chart instance if exists
    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Interest', 'Principal'],
            datasets: [{
                label: 'Loan Overview',
                data: [totalInterest, loanAmount],
                backgroundColor: ['rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}


var pieChart = null;

function calculateEMI() {
    // Existing EMI calculation code...

    const ctx = document.getElementById('chartContainer').getContext('2d');
    if (pieChart != null) {
        pieChart.destroy();  // Destroy the existing chart instance if it exists
    }

    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Interest', 'Principal'],
            datasets: [{
                backgroundColor: ['#4bc0c0', '#36a2eb'],
                data: [totalInterest, loanAmount - totalInterest]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // Ensures that the chart sizes well in its container
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateSliderLabel(document.getElementById('loanTenure').value, 'tenureLabel');
    updateSliderLabel(document.getElementById('interestRate').value, 'interestRateLabel');
    updateSliderLabel(document.getElementById('gracePeriod').value, 'gracePeriodLabel');
});

// carLoanCalculator.js
function calculateCarLoanEMI(loanAmount, interestRate, loanTenure) {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;
    const EMI = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    return EMI.toFixed(2);
}

// Example usage
const loanAmount = 500000; // in INR
const interestRate = 8; // in percent
const loanTenure = 5; // in years

const EMI = calculateCarLoanEMI(loanAmount, interestRate, loanTenure);
console.log(`Monthly EMI for car loan: ₹${EMI}`);

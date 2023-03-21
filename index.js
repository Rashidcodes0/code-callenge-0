//Challenge 1: Student Grade Generator 

// Function to calculate grade based on input value
function calculateGrade() {
    let mark = document.getElementById("mark").value;

    if (mark < 0 || mark > 100) {
        // Output inavild grade message if input value is invalid
        document.getElementById("result").innerHTML = "Invalid grade. Mark should be between 0 and 100.";
    } else if (mark >= 80) {
        // Output grade A if input value is between 80 and 100
        document.getElementById("result").innerHTML = "Grade: A";
    } else if (mark >= 60) {
        // Output grade B if input value is between 60 and 79
        document.getElementById("result").innerHTML = "Grade: B";
    } else if (mark >= 50) {
        // Output grade C if input value is between 50 and 59
        document.getElementById("result").innerHTML = "Grade: C";
    } else if (mark >= 40) {
        // Output grade D if input value is between 40 and 49
        document.getElementById("result").innerHTML = "Grade: D";
    } else {
        // Output grade E if input value is less than 40
        document.getElementById("result").innerHTML = "Grade: E";
    }
}

//Challenge 2: Speed Detector 

function calculate() {
    // Get the speed input element and its value
    const speedInput = document.getElementById("speed");
    const speed = speedInput.value;

    // Get the result div element
    const resultDiv = document.getElementById("output");

    // Check if the speed is less than 70
    if (speed < 70) {
        // If the speed is less than 70, print "Ok"
        resultDiv.innerHTML = "Ok";
    } else {
        // If the speed is 70 or more, calculate the demerit points
        const demeritPoints = Math.floor((speed - 70) / 5);

        // Check if the driver gets more than 12 points
        if (demeritPoints > 12) {
            // If the driver gets more than 12 points, print "License suspended"
            resultDiv.innerHTML = "License suspended";
        } else {
            // If the driver gets less than or equal to 12 points, print the number of points
            resultDiv.innerHTML = `Points: ${demeritPoints}`;
        }
    }
}

// Challenge 3: Net Salary Calculator

// Calculate PAYE deductions based on gross pay
function calculatePaye(grossPay) {
    let taxPercentage = 0;
    if (grossPay <= 24000) {
        taxPercentage = 10;
    } else if (grossPay <= 32333) {
        taxPercentage = 25;
    } else {
        taxPercentage = 30;
    }
    const paye = grossPay * taxPercentage / 100;
    const personalRelief = 2400; // Personal relief is a fixed amount
    return paye - personalRelief;
}

// Calculate NHIF deductions based on gross pay
function calculateNhifDeductions(grossPay) {
    let nhifDeduction = 0;
    const nhifBrackets = [
        { max: 5999, amount: 150 },
        { max: 7999, amount: 300 },
        { max: 11999, amount: 400 },
        { max: 14999, amount: 500 },
        { max: 19999, amount: 600 },
        { max: 24999, amount: 750 },
        { max: 29999, amount: 850 },
        { max: 34999, amount: 900 },
        { max: 39999, amount: 950 },
        { max: 44999, amount: 1000 },
        { max: 49999, amount: 1100 },
        { max: 59999, amount: 1200 },
        { max: 69999, amount: 1300 },
        { max: 79999, amount: 1400 },
        { max: 89999, amount: 1500 },
        { max: 99999, amount: 1600 },
        { max: Infinity, amount: 1700 }
    ];
    const bracket = nhifBrackets.find(bracket => grossPay <= bracket.max); // Find the first NHIF bracket that matches the gross pay
    if (bracket) {
        nhifDeduction = bracket.amount;
    }
    return nhifDeduction;
}

// Calculate NSSF deductions based on gross pay
function calculateNssfDeductions(grossPay) {
    const nssfDeduction = grossPay * 5 / 100; // NSSF deduction is 5% of gross pay
    return nssfDeduction > 400 ? 400 : nssfDeduction; // NSSF deduction is capped at Ksh 400
}

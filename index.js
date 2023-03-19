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

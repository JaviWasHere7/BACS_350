const prompt = require('prompt-sync')();
const convertlbs = 2.20462;
const convertin = 39.3701;
let check = true;
let weight = undefined;
let height = undefined;
let BMI = undefined;
let storeBMI = [];

while(check) {
    console.log(" ")
    weight = prompt('Enter your weight in kilograms: ');
    height = prompt('Enter your height in meters: ');

    while(isNaN(parseInt(weight)) || isNaN(parseInt(height)) || weight < 0 || height < 0) {
        console.log("\nPlease enter an appropriate weight and height.");
        weight = prompt('Enter your weight in kilograms: ');
        height = prompt('Enter your height in meters: ');
    }
    
    weight = weight * convertlbs;
    height = height * convertin;
    BMI = (weight / (height * height)) * 703;
    BMI = Math.round(BMI * 100) / 100;
    storeBMI.push(BMI);

    let response = prompt('Would you like to check more BMIs (1 - Yes, 2 - No): ');
    while(response.localeCompare("1") != 0 && response.localeCompare("2") != 0) {
        console.log("\nPlease enter either 1 or 2.");
        response = prompt('Would you like to check more BMIs (1 - Yes, 2 - No): ');
    }
    if (response == '2') {
        check = false;
    }
}

console.log("\nResult Summary: ");
storeBMI.forEach(function(entry) {
    if (entry < 18.5) {
        console.log("Your BMI is " + entry + " - Underweight");
    } else if (entry >= 18.5 && entry <= 24.9) {
        console.log("Your BMI is " + entry + " - Normal weight");
    } else if (entry >= 25 && entry <= 29.9) {
        console.log("Your BMI is " + entry + " - Overweight");
    } else {
        console.log("Your BMI is " + entry + " - Obesity");
    }
});
console.log("\n");
// // bring in the exported stats object
// let stats = require("./easy-stats.js");

// // create an array that we want to get statistics for
// let numbers = [62, 65, 88, 60, 53, 34, 31, 37];

// // use the min function that is a member of the stats object
// let minNum = stats.min(numbers);

// // display the result
// console.log("Minimum number: " + minNum);

// // use the sumOfValues function 
// let sumNums = stats.sumOfValues(numbers);
// console.log("Sum of numbers: " + sumNums);

// // use the max function that is a member of the stats object
// let maxNum = stats.max(numbers);

// // display the result
// console.log("Maximum number: " + maxNum);


// // use the mean function
// let average = stats.mean(numbers);
// console.log("Mean Average number: " + average); 

//***************************************************************************************/
// below is using classes ES6

// bring in the exported StatsManager class
let StatsManager = require("./StatsManager.js");

// create an instance of the StatsManager class
let stats = new StatsManager();

// create an array that we want to get statistics for
let numbers = [62, 65, 88, 60, 53, 34, 31, 37];

// use the min function that is a member of the stats object
let minNum = stats.min(numbers);
console.log("Minimum number: " + minNum);

// use the sumOfValues function 
let sumNums = stats.sumOfValues(numbers);
console.log("Sum of numbers: " + sumNums);

// use the max function that is a member of the stats object
let maxNum = stats.max(numbers);

// display the result
console.log("Maximum number: " + maxNum);


// use the mean function
let average = stats.mean(numbers);
console.log("Mean Average number: " + average); 
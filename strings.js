// Task-1:
// Count how many times a string has the letter a

// let theName = "anamul hauqe";
// let nameObj = theName.split("");
// let value = 0;

// console.log(theName.split(""));

// for (let index = 0; index < nameObj.length; index++) {
//     nameObj[index] === "a" || nameObj[index] === "A" ? value = value + 1 : value = value + 0;
// }
// console.log(value);



// Task-2:
// Count how many times a string has the letter a or A


// let theName = "anamul hauqe";
// let nameObj = theName.split("");
// let value = 0;

// console.log(theName.split(""));

// for (let index = 0; index < nameObj.length; index++) {
//     nameObj[index] === "a" || nameObj[index] === "A" ? value = value + 1 : value = value + 0;
// }
// console.log(value);




// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u


// let theName = "anamul hauqe";
// let nameObj = theName.split("");
// let value = 0;
// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// console.log(theName.split(""));

// for (let index = 0; index < nameObj.length; index++) {
//     value += vowels.includes(nameObj[index]) ? 1 : 0;
// }
// console.log(value);






// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let theName = "the x-man and the X-man pro";
// let nameObj = theName.split("");
// let checkX = ["X"];
// let checkThex = ["x"];

// for (let index = 0; index < nameObj.length; index++) {
//     checkX.includes(nameObj[index]) ? nameObj[index] = "Y" : nameObj[index] = nameObj[index];
//     checkThex.includes(nameObj[index]) ? nameObj[index] = "y" : nameObj[index] = nameObj[index];
// }
// let theOutput = nameObj.join("");
// console.log(theOutput);




// Task-5:
// Capitalize Every first Letter of each word in a String


let theName = "the x-man and the X-man pro";
let nameObj = theName.split(" ");

for (let index = 0; index < nameObj.length; index++) {
    nameObj[index] = nameObj[index][0].toUpperCase() + nameObj[index].slice(1);
}

let theOutput = nameObj.join(" ");
console.log(theOutput);

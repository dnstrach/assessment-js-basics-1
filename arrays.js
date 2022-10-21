//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']


// Declare the varibale 'colorCopy'
// Set variable with equal operator 
// Use the array editor, slice, to create shallow copy
// Set arguments from starting to ending indices
// Note: copy in terminal will not include ending index . . . does not effect inital array

var colorCopy = faveColors.slice(0,2)
console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push('yellow')
console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

// Declare variable middleNums
// How to capture index 1, 2, and 3 using array method?
//    
// How to remove it from numbers array?
// log middleNums 

// let middleNums = numbers.shift() + numbers.pop()
// console.log(middleNums)


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

var answers = []
for (let i = 0; i < bigOrSmallArray; i++){
  answers[i] += 1
}console.log(answers)

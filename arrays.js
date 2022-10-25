//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']


// Declare the varibale 'colorCopy'
// Set variable with equal operator 
// Use the array editor, slice, to create shallow copy - evoke with parantheses 
// Set arguments from starting to ending indices
// Note: copy in terminal will not include ending index . . . does not effect inital array
// Note: slice without arguments will copy entire array. . . 0 or 1 works as arguments works too

var colorCopy = faveColors.slice(0,2)
console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push('yellow')
console.log(colorCopy)

// Pseudocode type later

colorCopy.push('orange')
console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

// Declare variable/array middleNums
// Use slice method to copy index 1, 2, and 3 on numbers array
// Plug in (1,4) in slice method to start copy at index 1 and end at 4
// log middleNums 

const middleNums = numbers.slice(1, 4)
console.log(middleNums)


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', 
  and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

// Declare array called 'answers'
// Type for format for(let i=0; i condition w/ lengtrh property; incrementor){}
// Type if statement: if(bigOrSmallArray[i]>100) then push 'big' into answers array
// else if statement: if(bigOrSmallArray[i]<=100)  --> push 'small' into answers array
// log answers to see if numbers in array are big or small

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

const answers = []
for (let i = 0; i < bigOrSmallArray.length; i++){
  if(bigOrSmallArray[i] > 100){
    answers.push('big')
  }else if(bigOrSmallArray[i] <= 100){
    answers.push('small')
  }
}

console.log(answers)
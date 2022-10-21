//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

// Declare the variable called 'myName'
// Use equal operator 
// Type string using quotes since it is a non-number datatype

let myName = "Dominique"

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

// Declare the variable called 'faveNum'
// Use equal operator 
// Type number 

let faveNum = 24

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

// Declare the variable called 'loveCode'
// Use equal operator 
// Type boolean answer

let lovesCode = true

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/


// Format if-statement structure
// Type the first if condition in first parentheses 
// Log statement after curly bracket
// Type 'anything else' condition 
// Log statement 

if (faveNum === 13){
  console.log('lucky 13!')
} else {
  console.log('not lucky 13')
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/


// Format for loop structure
// Set i to be less than 5 since . . .
//  1 2 3 4 5
//  0 1 2 3 4 . . . will force incrementor to stop at 5 loops. 
// log faveNum 

for (let i=0; i < 5; i++){
  console.log(faveNum)
}

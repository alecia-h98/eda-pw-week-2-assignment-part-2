// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.


// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// You had assigned the name variable to equal Dane.
// You created a conditional statement that if the name variable equals Mary the console.log will run the message: Hi, Mary!
// You then created an else statement to say "How do you do?" if the first conditional statement was not correct.
// 
//
//
//
// OUTCOME:
// 'How do you do?' is what will be logged

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// You declared a variable to be named secret and created another variable named code to equal 123.
// You then created a conditional statement to say if code equals 123 then the secret variable equals super. The code variable will then be multiplied by 2.
// You then created an if conditional statement incase the first statment was false.
// This conditional statement says if the code value is greater than 250 then the secret variable will be logged as set to duper.
// You also call console.log to run display the outcome of the conditional statements.
// OUTCOME:
// 'Super' will be the log outcome.

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// You set up 3 variables, one called isStudent that is true (a booleon variable), one called age and equals 34, and the final one is called zip and equals 55407.
// You then created a conditional statement that says if isStudent equals true and the zip is greater than 80000 then the console.log will say "You're a student on the West Coast!"
// If not that answer then it will move to the next conditional statement that says if isStudent is false or the age is less than 30 then the console.log will read "What are your hobbies?"
// The next conditional statement reads if isStudents is true the console.log will say "Welcome to Prime!"
// If none of these conditional statements work then the console.log will say "how about the weather?"
// OUTCOME:
// 'Welcome to Prime!' is what will be logged.

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

// FIX - colorOne should be set to blue not red and vice versa.
// You also need to add another assignment within the if statement that says colorTwo = 'purple'

let colorOne = 'blue';
let colorTwo = 'red';

if (mix === true) {
    colorOne = 'purple';
    colorTwo = 'purple';
}

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// CODE:
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// FIX - const time should be changed to let time = 4; solely because time is an everchanging variable meaning it isn't always going to be consistant.
// The conditional statement currently says if temp is higher than 39 OR time is greater than or equal to 4. Replace the pipe symbol (||) with two ampersands (&&).

let time = 4;

if ( temp > 39 && time >= 4) {
  console.log( 'throw away the food!' );
}
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// CODE:
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
//FIX - the console.logs should be switched around.
// if you want to be precise with the description to the code it should read if(age >= minAge) although they both mean the same so I don't think it matters too much.
// 
if(minAge <= age) {
  console.log( 'enter');
}
else {
  console.log('no entry')
}
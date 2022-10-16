//Exercises: Level 1
//1) Get user input using prompt(“Enter your age:”). If user is 18 or older ,
//  give feedback:'You are old enough to drive' but if not 18 give another
//  feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age:", age);

if (age > 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${18 - age} to drive`);
}

// 2. Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who
// is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt("Enter your age:");

let myAge = 30;

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge}`);
} else {
  console.log(`You are left with ${myAge - yourAge} to drive`);
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'.
// Try to implement it in to ways

// using if else

// let a = 5;
// let b = 3;
// if(a > b)
// {
//     console.log(`${a} is greater than ${b}`);
// }

// else{
//     console.log(`${b} is greater than ${a}`);
// }

// using ternary operator

// let a = 5;
// let b = 3;
// a > b
//   ? console.log(`${a} is greater than ${b}`)
//   : console.log(`${b} is greater than ${a}`);

// 4) Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?

let number = prompt("Enter a number: ");

if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt("Enter a score: ");

if (score >= 80 && score < 100) {
  console.log(`The grade is A`);
} else if (score >= 70 && score <= 79) {
  console.log(`The grade is B`);
} else if (score >= 60 && score <= 69) {
  console.log(`The grade is C`);
} else if (score >= 50 && score <= 59) {
  console.log(`The grade is D`);
} else if (score >= 0 && score <= 49) {
  console.log(`The grade is F`);
}

// 2 Check if the season is Autumn, Winter, Spring or Summer.
// If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let monthInput = prompt("Enter a month: ");

// let month = monthInput.toLowerCase();

// switch (month) {
//   case `September`:
//     console.log(`The season is Autumn`);
//     break;
//   case `October`:
//     console.log(`The season is Autumn`);
//     break;
//   case `November`:
//     console.log(`The season is Autumn`);
//     break;
//   case `December`:
//     console.log(`The season is Winter`);
//     break;
//   case `January`:
//     console.log(`The season is Winter`);
//     break;
//   case `February`:
//     console.log(`The season is Winter`);
//     break;
//   case `March`:
//     console.log(`The season is Spring`);
//     break;
//   case `April`:
//     console.log(`The season is Spring`);
//     break;
//   case `May`:
//     console.log(`The season is Spring`);
//     break;
//   case `June`:
//     console.log(`The season is Summer`);
//     break;
//   case `July`:
//     console.log(`The season is Summer`);
//     break;
//   case `August`:
//     console.log(`The season is Summer`);
//     break;
// }


// 3) Check if a day is weekend day or a working day. 
// Your script will take day as an input.

let input = prompt("Enter a day: ");

switch (input) {
  case `Saturday`:
    console.log(`Saturday is a weekend`);
    break;
  case `saturDay`:
    console.log(`saturDay is a weekend`);
    break;
  case `Sunday`:
    console.log(`Sunday is a weekend`);
    break;
  case `sunDay`:
    console.log(`sunDay is a weekend`);
    break;
  case `Monday`:
    console.log(`Monday is a working day`);
    break;
  case `MoNDAy`:
    console.log(`MoNDAy is a working day`);
    break;
  case `Tuesday`:
    console.log(`Tuesday is a working day`);
    break;
  case `TueSDAy`:
    console.log(`TueSDAy is a working day`);
    break;
  case `Wednesday`:
    console.log(`Wednesday is a working day`);
    break;
  case `WedneSDAy`:
    console.log(`WedneSDAy is a working day`);
    break;
  case `Thursday`:
    console.log(`Thursday is a working day`);
    break;
  case `ThurSDAy`:
    console.log(`ThurSDAy is a working day`);
    break;
  case `Friday`:
    console.log(`Friday is a working day`);
    break;
  case `FriDAy`:
    console.log(`FriDAy is a working day`);
    break;
}

// Exercises: Level 3
// 1) Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// 1) Write a program which tells the number of days in a month, 
//    now consider leap year.

let month = prompt("Enter a month: ");

let year = prompt("Enter a year: ")

if ((month == "January") || (month == "JANUARY") {
  console.log(`${month} has 31 days`);
} else if (((month == "February") || (month == "FEbruary")) && (year %4 !=0)  {
  console.log(`${month} has 28 days`);
}  else if (((month == "February") || (month == "FEbruary")) && (year %4 ==0)  {
  console.log(`${month} has 29 days`);
} 
else if ((month == "March") || (month == "MARCH"))  {
  console.log(`${month} has 31 days`);
}
else if ((month == "April") || (month == "APRIL"))  {
  console.log(`${month} has 30 days`);
}

else if ((month == "May") || (month == "MAY"))  {
  console.log(`${month} has 31 days`);
}


else if ((month == "June") || (month == "JUNE"))  {
  console.log(`${month} has 30 days`);
}


else if ((month == "July") || (month == "JULY"))  {
  console.log(`${month} has 31 days`);
}

else if ((month == "August") || (month == "AUGUST"))  {
  console.log(`${month} has 31 days`);
}

else if ((month == "September") || (month == "SEPTEMBER"))  {
  console.log(`${month} has 30 days`);
}


else if ((month == "October") || (month == "OCTOBER"))  {
  console.log(`${month} has 31 days`);
}



else if ((month == "November") || (month == "NOVEMBER"))  {
  console.log(`${month} has 30 days`);
}


else if ((month == "December") || (month == "DECEMBER"))  {
  console.log(`${month} has 31 days`);
}










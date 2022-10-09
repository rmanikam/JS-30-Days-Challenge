// Q1) Declare firstName, lastName, country, city, age, isMarried, year variable
// and assign value to it and use the typeof operator to check different data
// types.

let firstName = "Raman";
console.log(typeof firstName);

let lastName = "Raman";
console.log(typeof lastName);

let country = "India";
console.log(typeof country);

let city = "Mohali";
console.log(typeof city);

let age = 32;
console.log(typeof age);

let isMarried = "single";
console.log(typeof isMarried);

let year = 2022;
console.log(typeof year);

// Q2) Check if type of '10' is equal to 10

console.log(typeof "10" === typeof 10);

// Q3) Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") === 10);

// Q4) Boolean value is either true or false.

// 1) Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

// truthy values
// 4) 1) let number = 3; All numbers (positive and negative) are truthy except zero
// 2) let firstName  = 'Raman'; All strings are truthy except an empty string("")
// 3) let ans = 'true'; The boolean true

// falsy values
// 1)  let firstName
// 2) let empty = null
// 3) let ans = 'false';
// 4) let output = 1 / 0 = NaN

// Q5) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3;
console.log(4 > 3);
4 >= 3;
console.log(4 >= 3);
4 < 3;
console.log(4 < 3);
4 <= 3;
console.log(4 <= 3);
4 == 4;
console.log(4 == 4);
4 === 4;
console.log(4 === 4);
4 != 4;
console.log(4 != 4);
4 !== 4;
console.log(4 !== 4);
4 != "4";
console.log(4 != "4");
4 == "4";
console.log(4 == "4");
4 === "4";
console.log(4 === "4");
//Find the length of python and jargon and make a falsy comparison statement.

let str = "python";
console.log(str.length);

let str1 = "jargon";
console.log(str1.length);

console.log(str === str1);

// Q6) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12;
console.log(4 > 3 && 10 < 12);
4 > 3 && 10 > 12;
console.log(4 > 3 && 10 > 12);
4 > 3 || 10 < 12;
console.log(4 > 3 || 10 < 12);
4 > 3 || 10 > 12;
console.log(4 > 3 || 10 > 12);
!(4 > 3);
console.log(!(4 > 3));
!(4 < 3);
console.log(!(4 < 3));
!false;
console.log(!false);
!(4 > 3 && 10 < 12);
console.log(!(4 > 3 && 10 < 12));
!(4 > 3 && 10 > 12);
console.log(!(4 > 3 && 10 > 12));
!(4 === "4");
console.log(!(4 === "4"));
// There is no 'on' in both dragon and python

console.log(!str.includes("on") && !str1.includes("on"));

// Use the Date object to do the following activities

// What is the year today?
// let now = new Date();
// console.log(now.getFullYear());
// // What is the month today as a number?
// console.log(now.getMonth() + 1);
// // What is the date today?
// console.log(now.getDate());
// // What is the day today as a number?
// console.log(now.getDay());
// // What is the hours now?
// console.log(now.getHours());
// // What is the minutes now?
// console.log(now.getMinutes());
// // Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(now.getTime());

// const allSeconds = Date.now();
// console.log(allSeconds);

// Level 2

// Q1) Write a script that prompt the user to enter base and height of the triangle
// and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("Enter base", 20);
console.log(base);

let height = prompt("Enter height", 10);
console.log(height);

let area = 0.5 * base * height;
console.log("The area of triangle is", area);

// Q2) Write a script that prompt the user to enter side a, side b, and side
// c of the triangle and and calculate the perimeter of triangle
// (perimeter = a + b + c)

let a = prompt("Enter side a", 5);
console.log(a);

let b = prompt("Enter side b", 4);
console.log(b);

let c = prompt("Enter side c", 3);
console.log(c);

// The + sign concatenates because you haven’t used parseInt().
// The values from the textbox are string values, therefore you need to
// use parseInt() to parse the value.
// After selecting the value from text box, you need to parse that value.

let perimeter = parseInt(a) + parseInt(b) + parseInt(c);

console.log("The perimeter of triangle is", perimeter);

// Q3) Get length and width using prompt and calculate an area of
// rectangle (area = length x width and the perimeter of rectangle
// (perimeter = 2 x (length + width))

let length = prompt("Enter length", 5);
console.log(length);

let width = prompt("Enter width", 4);
console.log(width);
area = length * width;

console.log("area", area);

perimeter = 2 * (length * width);

console.log("perimeter", perimeter);

// Q4) Get radius using prompt and calculate the area of a circle
//(area = pi x r x r) and circumference of a circle(c = 2 x pi x r)
// where pi = 3.14.

let radius = prompt("Enter radius", 5);
console.log("radius", radius);
area = 3.14 * radius * radius;

console.log("area", area);

let circumference = 2 * 3.14 * radius;

console.log("circumference", circumference);

// Q5) Calculate the slope, x-intercept and y-intercept of y = 2x -2

let y = 0;
let x = 0;
let slope = y + 2;
console.log("slope", slope);

let x_intercept = (y + 2) / slope;

console.log("x_intercept", x_intercept);

let y_intercept = y - 2 * x_intercept;

console.log("y_intercept", y_intercept);

// Q6) Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2;
let x2 = 6;

let y1 = 2;
let y2 = 10;

slope = (y2 - y1) / (x2 - x1);

console.log("slope", slope);

// Q7) Compare the slope of above two questions.

console.log("Slope is same for the above 2 equations");

// Q8) Calculate the value of y (y = x2 + 6x + 9). Try to use different
// x values and figure out at what x value y is 0.

x = -3;
y = x * x + 6 * x + 9;

console.log("y", y);

// Q9) Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = prompt("Enter hours: ", 40);
let rate = prompt("Enter rate per hour: ", 28);

let pay = hours * rate;

console.log("Your weekly earning is ", pay);

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// Q10) If the length of your name is greater than 7 say, your name is
// long else say your name is short.

let name = "Raman";

if (name.length > 7) {
  console.log("your name is long");
} else {
  console.log("your name is short");
}

// Q11) Compare your first name length and your family name length and you

// should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

let first_Name = "Raman";
let last_Name = "Sahi";

if (first_Name.length > last_Name.length) {
  console.log(
    `Your first name ${first_Name} is longer than your family name, ${last_Name} `
  );
}

// Q12) Declare two variables myAge and yourAge and assign them initial values
// and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you `);

// Q13) Using prompt get the year the user was born and
// if the user is 18 or above allow the user to drive if not tell the user
// to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

let birthYear = prompt("Enter birth year", 1995);

age = 2022 - birthYear;

if (age >= 18) {
  console.log(` You are ${age}. You are old enough to drive`);
} else {
  console.log(
    ` You are ${age}. You will be allowed to drive after 18 - ${age}`
  );
}

// Q14) Write a script that prompt the user to enter number of years.
// Calculate the number of seconds a person can live. Assume some one
// lives just hundred years

let years = prompt("Enter number of years you live: ", 100);
let totalSeconds = years * 365 * 24 * 3600;

console.log(`You lived ${totalSeconds} seconds`);

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Q15) Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// now = new Date();
// year = now.getFullYear();
// let month = now.getMonth() + 1;
// let date = now.getDate();
// hours = now.getHours();
// let minutes = now.getMinutes();
// console.log(`${year} - ${month} - ${date} ${hours}: ${minutes}`);
// // DD-MM-YYYY HH:mm
// console.log(`${date} - ${month} - ${year} ${hours}: ${minutes}`);
// // DD/MM/YYYY HH:mm
// console.log(`${date} / ${month} / ${year} ${hours}: ${minutes}`);
// Exercises: Level 3
// Q16) Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits(7 hours should be
// 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let now = new Date();
console.log("now", now);
year = now.getFullYear();
console.log("year", year);
let month = now.getMonth() + 1;
console.log("month", month);
let date = now.getDate();
console.log("date", date);
let hours1 = now.getHours();
if (hours1 < 10) {
  hours1 = "0" + hours1;
}
console.log("hours1", hours1);
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes;
}
console.log("minutes", minutes);

console.log(`${year} - ${month} - ${date} ${hours}: ${minutes}`);

var challenge = "30 Days of JavaScript";

console.log(challenge);

// Print the length of the string on the
// browser console using console.log()
console.log(challenge.length);

// Change all the string characters to
// capital letters using toUpperCase()
// method

console.log(challenge.toUpperCase());

// Change all the string characters to
//lowercase letters using toLowerCase()
// method

console.log(challenge.toLowerCase());
// Cut (slice) out the first word of the
//string using substr() or substring()
// method

// substr(): It takes two arguments, the
//starting index and number of characters
// to slice.
console.log(challenge.substr(0, 2));

// substring(): It takes two arguments,
//the starting index and the stopping index
// but it doesn't include the character at
// the stopping index.

console.log(challenge.substring(0, 2));
// Slice out the phrase Days Of
// JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 21));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// Split the string into an array using
// split() method

console.log(challenge.split());

// Split the string 30 Days Of JavaScript
// at the space using split() method

console.log(challenge.split(" "));

// 'Facebook, Google, Microsoft, Apple,
// IBM, Oracle, Amazon' split the string
// at the comma and change it to an array.

let socialMediaWebsites =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(socialMediaWebsites.split(","));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace("JavaScript", "Python"));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
// Use indexOf to find the position of the first occurrence of the word because in the
// following sentence:'You cannot end a sentence with because because because is a conjunction'
let string =
  "You cannot end a sentence with because because because is a conjunction";
console.log(string.indexOf("because"));
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string.lastIndexOf("because"));
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string.search("because"));
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

console.log(challenge.trim());
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));
// Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/;
console.log(challenge.match(pattern));
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let string1 = "30 Days Of";
console.log(string1.concat(" Javascript"));

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));

// Level2

// Using console.log() print out the following statement:

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// Using console.log() print out the following quote by Mother Teresa:
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let number = "10";
console.log(typeof number);

let numberInt = parseInt(number);
console.log(typeof numberInt);
console.log(typeof 10);

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num = "9.8";
// convert string to float number using parseFloat
let numFloat = parseFloat(num);

// convert float number to integer number
let numInt = Math.round(numFloat);

console.log(numInt);

// Check if 'on' is found in both python and jargon
let name = "python";
let name1 = "jargon";
console.log(name.includes("on") && name1.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence = "I hope this course is not full of jargon";

console.log(sentence.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.

let randomNum = Math.random();

let numBtnZeroAndHundred = randomNum * 101;

console.log(numBtnZeroAndHundred);

let min = 50.78;
min = Math.floor(min);

let max = 99.89;

max = Math.ceil(max);

let ans = Math.random() * (max - min + 1) + min;

console.log(ans);

// Generate a random number between 0 and 255 inclusively.

let ans1 = Math.random() * 256;

console.log(ans1);

// Access the 'JavaScript' string characters using a random number.

let str = "JavaScript";
let output;
for (var i = 0; i <= str.length; i++) {
  output = str[Math.floor(Math.random() * i)];
}

console.log(output);

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log(`1\t1\t1\t1\t1`);
console.log(`2\t1\t2\t4\t8`);
console.log(`3\t1\t3\t9\t27`);
console.log(`4\t1\t4\t16\t64`);
console.log(`5\t1\t5\t25\t125`);

// Use substr to slice out the phrase because because because from the
//following sentence:'You cannot end a sentence with because because because is
// a conjunction'
console.log(string.substr(31, 23));

// Level 3

let string2 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love. Count the number of word love in this sentence.";
console.log(string2.split("love").length);

string =
  "You cannot end a sentence with because because because is a conjunction";
let pattern2 = /because/gi;
let output1 = string.match(pattern2);

console.log("output1", output1);

//  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
// The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const txt =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

let matches = txt.replace(/%/g, "");

console.log(matches);

let txt1 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// The \D character matches any character that is NOT a digit.
//We added the g (global) flag to match all non-digit characters and
// replaced them with empty strings.
const replaced = txt1.match(/\d+/g);
console.log(replaced);

const totalAnnualIncome = +replaced[0] + +replaced[1] + +replaced[2];

console.log(totalAnnualIncome);
// The if statement is there to check if the string contains any numbers.

//If it doesn't, we don't want to convert an empty string to a number
// because that evaluates to 0.

let num2;
var sum = 0;

if (replaced !== "") {
  num2 = Number(replaced.split());
}

// console.log(num2);

// const arr = String(num2);

// console.log(arr);

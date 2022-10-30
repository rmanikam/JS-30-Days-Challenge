// import main from "./main"

// Q1)Declare an empty array;
//  const arr = Array()
//   OR
// let arr = new Array()
// console.log(arr)

// Q2) Declare an array with more than 5 number of elements
let arr = [
  "abc",
  1,
  3,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS"] },
];
console.log(arr);
// Q3) Find the length of your array
console.log(arr.length);
// Q4) Get the first item, the middle item and the last item of the array
console.log(arr[0]);
console.log(arr[arr.length / 2]);
console.log(arr[arr.length - 1]);
//Q5) Declare an array called mixedDataTypes, put different data types in
//the array and find the length of the array. The array size should be greater
// than 5
let mixedDataTypes = [
  "abc",
  1,
  3,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS"] },
  3.14,
  50,
];
console.log(mixedDataTypes);
// Q6) Declare an array variable name itCompanies and assign initial values
//     Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Q7) Print the array using console.log()
console.log(itCompanies);
// Q8) Print the number of companies in the array
console.log(itCompanies.length);

// Q9) Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// Q10) Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
// Q11) Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}
// Q12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
//     IBM,Oracle and Amazon are big IT companies.
let itCompanies1 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "and",
  "Amazon",
  "are big IT companies",
];

console.log(itCompanies.toString());

// Q13)Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found
function exist() {
  let company = "Amazon";
  let index = itCompanies.indexOf(company);
  if (index === -1) {
    return `${company} is not found`;
  } else {
    return company;
  }
}

console.log(exist());
// Q14) Filter out companies which have more than one 'o' without the
// filter method
const verify = (word) => {
  var count = 0;
  var length = word.length;
  for (let i = 0; i < length; i++) {
    if (word[i] === "o") {
      count++;
    }
    if (count >= 2) {
      return word;
    }
  }
};
for (let i = 0; i < itCompanies.length; i++) {
  const output = verify(itCompanies[i]);
  if (output !== undefined) {
    console.log(output);
  }
}

// Q15) Sort the array using sort() method
console.log(itCompanies.sort());

// Q16) Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Q17) Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Q18) Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));
// Q19) Slice out the middle IT company or companies from the array
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Netflix",
];
let length1 = itCompanies.length;
if (length1 % 2 === 0) {
  console.log(itCompanies.slice(3, 5));
} else {
  console.log(itCompanies.slice(3, 4));
}

// Q20) Remove the first IT company from the array
console.log(itCompanies.splice(0, 1));
// console.log(itCompanies.shift());
// Q21) Remove the middle IT company or companies from the array
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Netflix",
];
let length2 = itCompanies.length;
console.log(itCompanies.splice((length2 - 1) / 2, 1));
// Q22) Remove the last IT company from the array
console.log(itCompanies.splice(7, 1));
console.log(itCompanies);
// OR

//console.log(itCompanies.pop());

// Q23) Remove all IT companies
console.log(itCompanies.splice());

//Exercise: Level 2
// Q1) Create a separate countries.js file and store the countries array in to this
//file, create a separate file web_techs.js and store the webTechs array in to this
// file. Access both file in main.js file

//   console.log(main);
// Q2) First remove all the punctuations and change the string to array and
// count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

console.log(text);

let array1 = text.split(" ");

console.log(array1);

console.log(array1.length);

// Q3) In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if
// it has not been already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);
// modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);
//Q4) In countries array check if 'Ethiopia' exists in the array if it exists
// print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

if (countries.includes("Ethiopia")) {
  console.log("Ethiopia");
} else {
  countries.push("Ethiopia");
}
//Q5) In the webTechs array check if Sass exists in the array and if it exists print
//'Sass is a CSS preprocess'. If it does not exist add Sass to the array and
// print the array.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}
console.log(webTechs);
// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3
// The following is an array of 10 students ages:

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age

ages.sort();
let minAge = ages.slice(0, 1);
console.log(minAge);
let maxAge = ages.slice(9, 10);
console.log(maxAge);
// Find the median age(one middle item or two middle items divided by two)
ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let length = ages.length;

console.log(length);
if (length % 2 == 0) {
  let t = length / 2;
  let median = ages[t - 1] + ages[t + 1];
  console.log(median / 2);
} else {
  let t = length / 2 - 0.5;
  let median = ages[t];
  console.log(median);
}

// if (length % 2 == 0) {
//   let median = ages[(length - 1) / 2] + ages[(length + 1) / 2];
//   console.log(median / 2);
// } else {
//   let median = ages[length / 2];
//   console.log(median);
// }

// Find the average age(all items divided by number of items)

let sum = 0;
for (var i = 0; i < ages.length; i++) {
  sum += ages[i];
}

console.log(sum);
let total = ages.length;
console.log(total);
let avg = sum / total;
console.log(avg);

// Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method
// Math.abs converts -ve value into positive
let diff1 = Math.abs(maxAge - avg);

console.log(diff1);
let diff2 = Math.abs(minAge - avg);

console.log(diff2);

// 1.Slice the first ten countries from the countries array
countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
countries.slice(0, 11);

// Find the middle country(ies) in the countries array
countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
length = countries.length;
console.log(length);

if (length % 2 === 0) {
  console.log(countries[(length - 1) / 2], countries[(length + 1) / 2]);
} else {
  console.log(countries[Math.floor(length / 2)]);
}

// Divide the countries array into two equal arrays if it is even.
//If countries array is not even , one more country for the first half.

// length = countries.length;
// console.log(length);
// if (length % 2 === 0) {
//   let output = countries.slice(0, length / 2);
//   console.log(output);

//   let output1 = countries.slice(length / 2, length);
//   console.log(output1);
// } else {
//   countries.splice((length - 1) / 2, 0, "India");
//   length = countries.length;
//   console.log(length);
//   if (length % 2 === 0) {
//     let output = countries.slice(0, length / 2);
//     console.log(output);

//     let output1 = countries.slice(length / 2, length);
//     console.log(output1);
//   }
// }
// even array
countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
];

// odd array

countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "China",
];

let len = countries.length;

out1 = countries.slice(0, len / 2);
out2 = countries.slice(len / 2);
if (len % 2 !== 0) {
  out1.push("India");
}
console.log(out1, " ", out2);

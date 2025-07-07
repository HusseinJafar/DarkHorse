//functionality of the side bar

const openBtn = document.getElementById("open");

const closeBtn = document.getElementById("close");

let time = document.getElementById("time");

const now = new Date();

const sideBarContainer = document.querySelector(".side-bar");

function openSideBar() {
  sideBarContainer.classList.add("active");
}

function closeSideBar() {
  sideBarContainer.classList.remove("active");
}

openBtn.addEventListener("click", openSideBar);

closeBtn.addEventListener("click", closeSideBar);

window.addEventListener("scroll", closeSideBar);
// 1. Declaration of variables
let counter = 0;
const maxCount = 10;
let name = "AI Assistant";

// 2. Function to print a greeting
function greet(userName) {
  console.log("Hello, " + userName + "!");
}

greet(name);

// 3. Function to add two numbers
function add(a, b) {
  return a + b;
}

console.log("Sum of 5 and 3 is:", add(5, 3));

// 4. Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// 5. Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("Number:", i);
}

// 6. While loop example
while (counter < maxCount) {
  console.log("Counter:", counter);
  counter++;
}

// 7. Conditional statement
if (isEven(counter)) {
  console.log(counter + " is even");
} else {
  console.log(counter + " is odd");
}

// 8. Array of fruits
const fruits = ["apple", "banana", "cherry"];

// 9. Loop through array
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 10. Add a new fruit
fruits.push("date");

// 11. Object representing a person
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "gaming", "coding"]
};

// 12. Access object properties
console.log("Person's name:", person.firstName, person.lastName);
console.log("Hobbies:", person.hobbies.join(", "));

// 13. Add new property
person.email = "john.doe@example.com";

// 14. Function to display person info
function displayPersonInfo(obj) {
  console.log(`Name: ${obj.firstName} ${obj.lastName}`);
  console.log(`Age: ${obj.age}`);
  console.log(`Email: ${obj.email}`);
  console.log(`Hobbies: ${obj.hobbies.join(", ")}`);
}

displayPersonInfo(person);

// 15. Sample array of objects
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

// 16. Loop through users
users.forEach(user => {
  console.log("User:", user.name, "Active:", user.active);
});

// 17. Toggle user active status
users[1].active = true;

// 18. Function to find user by ID
function findUserById(id) {
  return users.find(user => user.id === id);
}

const user = findUserById(2);
console.log("Found user:", user);

// 19. DOM manipulation: create element
const div = document.createElement("div");
div.innerText = "Hello from JavaScript!";
document.body.appendChild(div);

// 20. Change style
div.style.color = "blue";
div.style.fontSize = "20px";

// 21. Add event listener
div.addEventListener("click", () => {
  alert("Div clicked!");
});

// 22. Set timeout
setTimeout(() => {
  console.log("Timeout after 2 seconds");
}, 2000);

// 23. Set interval
let intervalId = setInterval(() => {
  console.log("Interval running...");
  if (counter >= maxCount) {
    clearInterval(intervalId);
  }
  counter++;
}, 1000);

// 24. Fetch data from API (example, commented out)
/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/

// 25. Function to generate a random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 26. Generate a random number between 1 and 100
const randNum = getRandomNumber(1, 100);
console.log("Random number:", randNum);

// 27. Check if number is within range
if (randNum > 50) {
  console.log("Number is greater than 50");
} else {
  console.log("Number is less than or equal to 50");
}

// 28. Array of numbers
const numbers = [10, 20, 30, 40, 50];

// 29. Map over array
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// 30. Filter array
const filtered = numbers.filter(num => num > 25);
console.log("Filtered numbers:", filtered);

// 31. Reduce array
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", total);

// 32. String template literal
const greetingMsg = `Hello, my name is ${person.firstName} and I am ${person.age} years old.`;
console.log(greetingMsg);

// 33. Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Reverse of 'hello':", reverseString("hello"));

// 34. Check if string contains substring
const containsLove = "I love JavaScript".includes("love");
console.log("Contains 'love':", containsLove);

// 35. Ternary operator
const message = randNum > 50 ? "Big number" : "Small number";
console.log(message);

// 36. Switch statement
switch (person.age) {
  case 30:
    console.log("Age is 30");
    break;
  default:
    console.log("Age is not 30");
}

// 37. Loop through object keys
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// 38. Clone an object
const personClone = {...person};
console.log("Cloned person:", personClone);

// 39. Deep copy with JSON
const deepCopy = JSON.parse(JSON.stringify(person));
console.log("Deep copied:", deepCopy);

// 40. Create a function constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log("My car:", myCar);

// 41. Prototypes
Car.prototype.displayInfo = function() {
  return `${this.year} ${this.make} ${this.model}`;
}

console.log("Car info:", myCar.displayInfo());

// 42. Class syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Dog");
dog.speak();

// 43. Extend class
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy");
myDog.speak();

// 44. Try-catch error handling
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.error(e.message);
}

// 45. Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});

promise.then(result => console.log(result));

// 46. Async/Await
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
fetchData();

// 47. Local storage
localStorage.setItem("name", "AI Assistant");
console.log("Stored name:", localStorage.getItem("name"));

// 48. Session storage
sessionStorage.setItem("sessionId", "abc123");
console.log("Session ID:", sessionStorage.getItem("sessionId"));

// 49. Clear storage
localStorage.clear();
sessionStorage.clear();

// 50. Define a class with static method
class MathUtils {
  static square(num) {
    return num * num;
  }
}

console.log("Square of 5:", MathUtils.square(5));

// 51. Arrow function
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(3, 4));

// 52. Default parameters
function greetPerson(person = "Guest") {
  console.log("Hello, " + person);
}

greetPerson();

// 53. Rest parameters
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log("Sum all:", sumAll(1, 2, 3, 4));

// 54. Destructuring assignment
const { firstName, age } = person;
console.log("Name:", firstName, "Age:", age);

// 55. Array destructuring
const [first, second] = fruits;
console.log("First fruit:", first);

// 56. Callback function
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchDataCallback(data => console.log(data));

// 57. Create array of functions
const funcArray = [
  () => console.log("Function 1"),
  () => console.log("Function 2")
];

funcArray.forEach(func => func());

// 58. Use map to create HTML list items
const listItems = fruits.map(fruit => `<li>${fruit}</li>`);
console.log("HTML list items:", listItems);

// 59. Filter even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 60. Check if array contains a value
console.log("Contains 'banana':", fruits.includes("banana"));

// 61. Find a user
const user2 = users.find(u => u.name === "Charlie");
console.log("Found user:", user2);

// 62. Sorting array
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted numbers:", sortedNumbers);

// 63. Reverse array
const reversedFruits = [...fruits].reverse();
console.log("Reversed fruits:", reversedFruits);

// 64. Generate random array
const randArray = Array.from({ length: 5 }, () => getRandomNumber(1, 100));
console.log("Random array:", randArray);

// 65. Check if object has property
console.log("Person has email:", person.hasOwnProperty("email"));

// 66. Add event listener to document
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
});

// 67. Create a button dynamically
const btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  alert("Button clicked!");
});

// 68. Style button
btn.style.padding = "10px";
btn.style.backgroundColor = "green";

// 69. Remove element
setTimeout(() => {
  document.body.removeChild(btn);
  console.log("Button removed");
}, 5000);

// 70. Check browser type
console.log("User agent:", navigator.userAgent);

// 71. Detect touch device
const isTouchDevice = 'ontouchstart' in window;
console.log("Touch device:", isTouchDevice);

// 72. Get current URL
console.log("Current URL:", window.location.href);

// 73. Redirect to another page
// window.location.href = "https://example.com";

// 74. Basic validation
function validateInput(input) {
  if (input.trim() === "") {
    return false;
  }
  return true;
}

console.log("Validation (empty):", validateInput("    "));
console.log("Validation (text):", validateInput("hello"));

// 75. Generate UUID (simple version)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

console.log("UUID:", generateUUID());

// 76. Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Is 17 prime?", isPrime(17));

// 77. Fibonacci sequence
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

console.log("Fibonacci 10:", fibonacci(10));

// 78. Count vowels in string
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log("Vowels in 'hello':", countVowels("hello"));

// 79. Capitalize strings
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log("Capitalized:", capitalize("hello"));

// 80. Pad string
console.log("Padded:", "hello".padStart(10, "*"));

// 81. Check if string is palindrome
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/\W/g, "");
  return cleanStr === reverseString(cleanStr);
}

console.log("Is 'madam' palindrome?", isPalindrome("madam"));

// 82. Toggle class on element
div.classList.toggle("active");

// 83. Add class
div.classList.add("highlight");

// 84. Remove class
div.classList.remove("highlight");

// 85. Intersection Observer example
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is visible");
    }
  });
});
observer.observe(div);

// 86. Convert number to binary string
console.log("Binary of 10:", (10).toString(2));

// 87. Parse binary string
console.log("Parsed binary:", parseInt("1010", 2));

// 88. Math functions
console.log("Max of 10, 20, 30:", Math.max(10, 20, 30));
console.log("Min of 10, 20, 30:", Math.min(10, 20, 30));
console.log("Pi:", Math.PI);

// 89. Random boolean
const randBool = Math.random() >= 0.5;
console.log("Random boolean:", randBool);

// 90. Array fill
const filledArray = Array(5).fill(0);
console.log("Filled array:", filledArray);

// 91. Array slice
console.log("Slice array:", numbers.slice(1, 3));

// 92. Array splice
const spliceArr = [...fruits];
spliceArr.splice(1, 0, "blueberry");
console.log("Spliced array:", spliceArr);

// 93. Object.entries
console.log("Object entries:", Object.entries(person));

// 94. Object.values
console.log("Object values:", Object.values(person));

// 95. Get current timestamp
console.log("Timestamp:", Date.now());

// 96. Format date
const date = new Date();
console.log("Formatted date:", date.toLocaleString());

// 97. Timer countdown
let countdown = 5;
const countdownInterval = setInterval(() => {
  console.log(`Countdown: ${countdown}`);
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Blast off!");
  }
}, 1000);

// 98. Check if array is empty
console.log("Is fruits array empty?", fruits.length === 0);

// 99. Convert string to array
const chars = "hello".split("");
console.log("Chars:", chars);

// 100. Remove duplicates from array
const duplicateArray = [1, 2, 2, 3, 4, 4];
const uniqueArray = [...new Set(duplicateArray)];
console.log("Unique array:", uniqueArray);
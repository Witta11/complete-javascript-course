let js = 'amazing';
// if (js === 'amazing') alert("JavaScript is FUN!")

console.log(4 + 4 * 20);

let firstName = 'Witta'
console.log(firstName)

// lower camel case convention
// some constants in uppercase

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

let country = "Germany";
let continent = "Europe";
let population = 8.8

console.log(country)
console.log(continent)
console.log(population)


/*
thats multi - line comment!!
*/

console.log(typeof true);
console.log(typeof 'true');
console.log(typeof 22);

// dont use let variable for re-assigning a new value


// Basic Operators

const now = 2020;
const ageAli = now - 15;
console.log(ageAli);
console.log(ageAli * 2 / 2, ageAli ** 3);
// x++; // x = x + 1

// comparison operators 
console.log(now > 2019) // true

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK

// Test Data 1
const heightMark = 1.69;
const heightJohn = 1.95;

const weightMark = 78;
const weightJohn = 92;

const BMIMark = weightMark / heightMark ** 2;
console.log(BMIMark);

const BMIJohn = weightJohn / heightJohn ** 2;
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Test Data 2
const heightMarkTwo = 1.88;
const heightJohnTwo = 1.76;

const weightMarkTwo = 95;
const weightJohnTwo = 85;

const BMIMarkTwo = weightMarkTwo / heightMarkTwo ** 2;
console.log(BMIMarkTwo);

const BMIJohnTwo = weightJohnTwo / heightJohnTwo ** 2;
console.log(BMIJohnTwo);

const markHigherBMITwo = BMIMarkTwo > BMIJohnTwo;
console.log(markHigherBMITwo);


const age = 15

if (age >= 18) {
    console.log("You can drive a car!")
} else {
    console.log("You gonna have to wait a lil!")
}

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
BMI(28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK
*/

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's! (${BMIMark})`)
}

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

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK
*/

// 1. + 2.
// const averageScoreDolphins = (96 + 108 + 89) / 3
// const averageScoreKoalas = (88 + 91 + 110) / 3

// Bonus 1
// const averageScoreDolphins = (97 + 112 + 101) / 3
// const averageScoreKoalas = (109 + 95 + 123) / 3

// Bonus 2
const averageScoreDolphins = (97 + 112 + 101) / 3
const averageScoreKoalas = (109 + 95 + 106) / 3

const minScore = 100

console.log(averageScoreDolphins);
console.log(averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minScore) {
    console.log("The Dolphins are the winner!");
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= minScore) {
    console.log("Its a Draw!!");
} else {
    console.log("The Koalas are the winner!")
}


const day = 'tuesday'

switch (day) {
    case 'monday':
        console.log('its mo');
        break;
    case 'tuesday':
        console.log("its tue");
        break;
    case 'wednesday':
        console.log("its wed");
        break;
    case 'thursday':
    case 'friday':
        console.log("its weeekend");
        break;
    default:
        console.log("no weekday!")
}


if (day === 'monday') {
    console.log('its mo');
} else if (day === 'tuesday') {
    console.log("its tue");
} else if (day === "wednesday") {
    console.log("its wed");
} else if (day === "thursday" || day === "friday") {
    console.log("its weeekend");
} else {
    console.log("no weekday!")
}
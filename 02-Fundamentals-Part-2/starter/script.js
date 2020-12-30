function logger() {
    console.log("Hello, world")
}

// call the function
logger();

function functionWithParameters(x, y) {
    const addition = x + y;
    return addition;
}

functionWithParameters(3, 4);

const appleJuice = functionWithParameters(1, 2);
console.log(appleJuice);

const orangeJuice = functionWithParameters(3, 5);
console.log(orangeJuice);

// function as reusable code blocks making code more DRY
// console.log() is a function too


//function declaration
function calcAge1(birthYear) {
    return 2020 - birthYear;
}

const age = calcAge1(1998); //works too if putting it before function declaration

//function expression

const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}

const age2 = calcAge2(1998); // does NOT work in different order

console.log(age, age2);

// Arrow function

const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

// const yearsToRetirnment = birthYear => {
//     const age = 2020 - birthYear;
//     const retirnment = 65 - age;
//     return retirnment;
// }

// console.log(yearsToRetirnment(1998));

const yearsToRetirnment = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirnment = 65 - age;
    return `Hey ${firstName}, you gonna have to work ${retirnment} years dude!`;
}

console.log(yearsToRetirnment(1998, "Bob"));

// functions in function

const multiplier = function (x) {
    return x * 4;
}

const fruitProcessor = function (x, y) {
    const lemonJuice = multiplier(x);
    const carrotJuice = multiplier(y);

    const juice = `Smoothie made out of ${lemonJuice} lemons and ${carrotJuice} carrots.`;
    return juice;
}

console.log(fruitProcessor(2, 4))

/*
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function percentageOfWorld1(x) {
    const result = x / 7800000000000000;
    return result;
}

function describePopulation(country, population) {
    const percentageOf = percentageOfWorld1(population);

    const answer = `${country} has ${population} million people,
    which is about ${percentageOf}% of the world.`;
    return answer;
}

console.log(describePopulation("China", 1441));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolhins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log("No Winner!")
    };
}

checkWinner(scoreDolphins, scoreKoalas);

// Arrays

const thisIsAnArray = ['Noalen', 'Peter', 'Maria', 'Gustav'];
console.log(thisIsAnArray);

const years = new Array(1992, 1993, 1994);

console.log(thisIsAnArray[1]);

console.log(years.length);

//change array items
years[0] = 1990;

console.log(years[0], years[1], years[2]);

// add to beginning
thisIsAnArray.unshift('Witta');

console.log(thisIsAnArray);

// remove last item
thisIsAnArray.pop();
console.log(thisIsAnArray);

// remove first item
thisIsAnArray.shift();
console.log(thisIsAnArray);
console.log(thisIsAnArray.indexOf("Noalen"));

// check if item is in array
console.log(thisIsAnArray.includes("Witta"));


// CODING CHALLENGE 2.2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);

// Objects with key/ value pairs or properties

const thisisanObject = {
    firstName: "Witta",
    lastName: "Glöckner",
    age: 2020 - 1998,
    job: 'Developer',
    friends: ['none', 'some', 'many']
}

// get values:

console.log(thisisanObject.firstName);
// or
console.log(thisisanObject["firstName"]);

/*
const question = prompt("What do you wanna know about me?");

if (thisisanObject[question]) {
    console.log(thisisanObject[question]);
} else {
    console.log("Naah, cant tell you!");
}
*/

// add key-value to object:
thisisanObject['location'] = 'Black Forest';
// or
thisisanObject.gender = 'female';

console.log(thisisanObject);

// Object Methods
// functions can be a value in an object
// this is refering to the object name here: witta
const witta = {
    birthYear: 1998,
    calcAge: function () {
        return 2020 - this.birthYear;
    },
    name: 'Witta',
    hasDriverLicense: true
};

console.log(witta.calcAge());

const getSummary = `Witta is born in ${witta.birthYear} and her name is ${witta.name} and she has ${witta.hasDriverLicense ? "a" : "no"} Driver License.`;
console.log(getSummary);

/* Coding Challenge 3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK
*/

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}

// test if function is working
mark.calcBMI();
console.log(mark.bmi);

// I need to call the function first so it can get displayed !!
john.calcBMI();

console.log(`${john.fullName}'s BMI (${john.bmi}) is lower than ${mark.fullName}'s (${mark.bmi})!`);

// for Loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`This is a for loop, yayy, exactly ${rep} repitions!!`);
}

// Loop through an array

const wittaArray = ['witta', 'macrame', 1998, 'coding']

const types = []
for (let i = 0; i < 4; i++) {
    console.log(wittaArray[i], typeof wittaArray[i]);
    // add to empty array
    types.push(typeof (wittaArray[i]));
}

console.log(types);

// continue and break

for (let i = 0; i < 4; i++) {
    // only prints strings, meaning continue skips the current iteration when condition is met, here: not a string
    if (typeof wittaArray[i] !== 'string') continue;
    console.log(wittaArray[i], typeof wittaArray[i]);
}

for (let i = 0; i < 4; i++) {
    // if number is found the loop stops when condition is met
    if (typeof wittaArray[i] === 'number') break;
    console.log(wittaArray[i], typeof wittaArray[i]);
}

// looping backwards

for (let i = wittaArray.length - 1; i >= 0; i--) {
    console.log(i, wittaArray[i]);
}

// loops in loop

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifiting repitition ${rep}`);
    }
}

// While loop
let rep = 1;
while (rep <= 10) {
    console.log(`this is a while loooop ${rep}`);
    // IMPORTANT COS OTHERWISE INFINITE !!
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled the dice with ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is ending!');
}

/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK
*/

const rechnung = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const trinkgeld = [];
const totals = [];

const getTip = function (i) {
    return i >= 50 && i <= 300 ? i * 0.15 : i * 0.2;
}

for (let i = 0; i < rechnung.length; i++) {
    const tip = getTip(rechnung[i]);
    trinkgeld.push(tip);
    totals.push(tip + rechnung[i]);
}

console.log(rechnung, trinkgeld, totals);

//Bonus
function getAver(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(getAver(totals));
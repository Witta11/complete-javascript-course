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
console.log(thisisanObject);

// Object Methods
// functions can be a value in an object
// this is refering to the object name here: witta
const witta = {
    birthYear: 1998,
    calcAge: function () {
        return 2020 - this.birthYear;
    },
    name: 'Witta'
};

console.log(witta.calcAge());

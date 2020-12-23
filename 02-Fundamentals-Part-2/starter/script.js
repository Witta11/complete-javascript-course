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

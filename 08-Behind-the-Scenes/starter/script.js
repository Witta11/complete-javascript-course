'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// Hoisting
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Witta';
let job = 'developer';
const year = 1998;

// functions Scope
console.log(addDecl);
// console.log(addExpr);
// console.log(addArrow);

// you can only use the this function declaration when calling it before declaring
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// THIS keyword

const getAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

getAge(1998);

// THIS with an Arrow Function

const calcAgeArrow = birthYear => {
  console.log(2037 - 1998);
  console.log(this);
};
calcAgeArrow(1980);
// the parent scope of this funtion is WINDOW !!

const witta = {
  year: 1998,
  getAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
witta.getAge();

const matilda = {
  year: 2017,
};

matilda.getAge = witta.getAge;
matilda.getAge();
// this keyword in getAge is calling the age of matilda!! since matilda.year is called in the function !

const f = witta.calcAge;

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
};

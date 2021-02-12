'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    // ES 5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LHE23');
createBooking('LHE23', 2, 880);
createBooking('LHE23', 2);
createBooking('LHE23');

// example 2

const flight = 'LH234';
const witta = {
  name: 'witta',
  passport: 233445667,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs.' + passenger.name;
  // if (passenger.passport === 243456677) {
  //   altert('checked in');
  // } else {
  //   alert('wrong pasport');
  // }
};

checkIn(flight, witta);
console.log(flight);
console.log(witta);

// Function in a Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Arrow function way:
// const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('hey');
greeterHey('Witta');

greet('Hi')('Witta');

const lufthansa = {
  airline: 'lufthansa',
  code: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}, ${name}` });
  },
};
console.log(lufthansa);

lufthansa.book(239, 'witta');
lufthansa.book(359, 'thomas');

const eurowings = {
  airline: 'eurowings',
  code: 'EW',
  bookings: [],
};

// Does NOT work
// book(23, 'witta')

const book = lufthansa.book;

// BOOK METHOD
book.call(eurowings, 23, 'witta');
console.log(eurowings);

book.call(lufthansa, 444, 'wicca');
console.log(lufthansa);

// APPLY METHOD
const flightData = [345, 'george orwell'];
book.apply(eurowings, flightData);

// Newer way of writing it with the spread operator:
book.call(eurowings, ...flightData);

// BIND METHOD
// book.call(eurowings, 23, 'witta');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
//that makes a new function
// call function with variable:
bookEW(23, 'witta');

// define it more precisely:
const bookSpec = book.bind(lufthansa, 777);
bookSpec('Witta Glöckner');

// With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// lufthansa.buyPlane points right now to the button itself

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (preset parameters)

const addTax = (rate, value) => value + value * rate;

// THIS keyword doesn't matter right now but rate value set:
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// CODING CHALLENG
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // Get Answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // console.log(answer);
    answer < this.answers.length &&
      typeof answer === 'number' &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus:
// this.answers inside of displayResults needs to be new defined since by:
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

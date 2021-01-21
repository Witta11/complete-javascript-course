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
  if (passenger.passport === 243456677) {
    altert('checked in');
  } else {
    alert('wrong pasport');
  }
};

checkIn(flight, witta);
console.log(flight);
console.log(witta);

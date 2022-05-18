const add = function(one, two) {
  return parseInt(one + two);
};

const subtract = function(one, two) {
	return parseInt(one - two)
};

const sum = function(arr) {
	let total = 0;
  for(let x = 0; x < arr.length; x++) total += arr[x];
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let x = 0; x < arr.length; x++) total *= arr[x];
  return total;
};

const power = function(one, two) {
	let total = 1;
  for(let x = 0; x < two; x++) total *= one;
  return total;
};

const factorial = function(start) {
	let total = 1;
  for(let x = 1; x <= start; x++) total *= x;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

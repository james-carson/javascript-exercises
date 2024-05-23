const add = function(add1, add2) {
	return (add1 + add2)
};

const subtract = function(sub1, sub2) {
	return (sub1 - sub2)
};

const sum = function(sum) {
	let total = 0;
  for (let i=0; i < sum.length; i++) {
    total += sum[i];
  }
  return total;
}

const multiply = function(mult) {
  let total = 1;

  for (let i = 0; i < mult.length; i++) {
    total *= mult[i];
  }
  return total;
};

const power = function(number, power) {
	let sum = 1
  for (i = 0; i < power; i++) {
    sum *= number
  }
  return sum
};

const factorial = function(factor) {
	let sum = 1
  if (factor > 0){
    for (i = 0; i < factor; i++) {
      sum *= (i + 1)
    }
    return sum
  } else {
    return 1
  }
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

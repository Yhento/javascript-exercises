const add = function(num1, num2) {

  return num1 + num2;
	
};

const subtract = function(num1, num2) {

  return num1 - num2;
	
};

const sum = function(arr) {

  return arr.reduce((total, num) => total + num, 0);
	
};



const multiply = function(arr) {

  return arr.reduce((total, num) => total * num)

};



const power = function(num1, num2) {

  return num1 ** num2;
	
};

const factorial = function(num) {

  factorial_array = [];

  if (num == 0) {
    num = 1;
  }

  for (let i = 1; i <= num; i++) {
        factorial_array.push(i);
  }

  ;

  factorial_array.reverse();

  return factorial_array.reduce((total, num) => total * num);
	
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

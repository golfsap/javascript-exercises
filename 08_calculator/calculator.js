const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a+b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let answer = 1;
	if (a == 0 || a == 1) {
    return answer;
  }
  else {
    for (let i=a; i>1; i--) {
      answer*= i;
    }
    return answer;
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

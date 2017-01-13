var wrapLog = function (callback, name) {
  /* your code here */

  return function(first, second) {
  	console.log(name + "(" + first + ',' + second + ') => ' + callback(first, second));
  };
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

var multiply = function(a, b) { return a * b };
var logMultiply = wrapLog(multiply, "multiply");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5

logMultiply(2, 3); // multiply(2, 3) => 6
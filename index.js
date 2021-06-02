// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//recursion

//factorial

function factorial(x) {
  if (x == 1) {
    return 1;
  }

  return factorial(x - 1) * x;
}

console.log(factorial(5));

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

console.log(power(2, 2));

function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}

var output = sumRange(3);
console.log(output);

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
}

var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log(sixty);

function fibonacci(n) {
  if (n == 1) {
    return 1;
  } else if (n == 0) {
    return 0;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));

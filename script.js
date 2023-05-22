function sumRange(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumRange(n - 1);
  }
}

function power(n, i) {
  if (i == 0) {
    return 1;
  } else if (i == 1) {
    return n;
  } else {
    return n * power(n, i - 1);
  }
}

function factorial(n) {
  if (n < 0) {
    return "The given number must be non-negative integer.";
  } else if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Sum of 3 is: " + sumRange(3));
console.log("2 to the power of 4 is: " + power(2, 4));
console.log("2 to the power of 2 is: " + power(2, 2));
console.log("2 to the power of 1 is: " + power(2, 1));
console.log("2 to the power of 0 is: " + power(2, 0));
console.log("Factorial of 5 is: " + factorial(5));
console.log("Factorial of 0 is: " + factorial(0));
console.log("Factorial of -1 is: " + factorial(-1));

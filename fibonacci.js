// Assignment 1
// Fibonacci

function fibs(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  }
  let fibArray = [0, 1];
  for (let i = 0; i <= n - 2; i++) {
    let lastItem = fibArray.length - 1; // index of the last item
    fibArray.push(fibArray[lastItem - 1] + fibArray[lastItem]);
  }
  return fibArray;
}

// console.log(fibs(0));
// console.log(fibs(1));
// console.log(fibs(2));
// console.log(fibs(3));
// console.log(fibs(4));
// console.log(fibs(5));
// console.log(fibs(6));
// console.log(fibs(7));

function fibsRec(number) {
  if (number < 0) return "ERROR";
  if (number === 0) return [0];
  if (number === 1) return [0, 1];
  const array = fibsRec(number - 1);
  return [...array, array[number - 2] + array[number - 1]];
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));
console.log(fibsRec(9));
console.log(fibsRec(10));

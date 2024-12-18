function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause an error if a or b is NaN
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns 0 as expected
console.log(myFunction(10, NaN)); // Returns NaN, but should ideally handle it gracefully
console.log(myFunction(NaN, 10)); // Returns NaN, but should ideally handle it gracefully
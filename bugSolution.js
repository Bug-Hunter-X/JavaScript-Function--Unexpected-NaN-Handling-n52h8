function myFunction(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Explicitly return NaN if either input is NaN
  } else if (a === 0 || b === 0) {
    return 0; 
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns 0
console.log(myFunction(10, NaN)); // Returns NaN
console.log(myFunction(NaN, 10)); // Returns NaN
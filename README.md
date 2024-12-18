# JavaScript Function: Unexpected NaN Handling

This repository demonstrates a subtle bug in a JavaScript function concerning the handling of NaN (Not a Number) values. The `myFunction` attempts to divide two numbers. While it correctly handles cases where either input is 0, it fails to gracefully handle cases where one of the inputs is NaN. This leads to unexpected results.  The solution demonstrates how to explicitly check for NaN values before performing the division, providing more robust behavior. 

## Bug
The `bug.js` file contains the erroneous function.  Notice that `0` is returned for `0` inputs. This masks the potential issue of returning NaN if one of the inputs is NaN. 

## Solution
The `bugSolution.js` file provides a corrected version of the function, implementing explicit checks for NaN values using `isNaN()`, providing a more robust and reliable function. 
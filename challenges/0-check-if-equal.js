/* Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.
You may assume that the numbers are always integers (i.e. whole numbers).
*/

function isEqual(numOne, numTwo) {
    if (numOne === numTwo) {
        return true;
    }
    return false;
}


console.log(isEqual(4, 4) should be True)
console.log(isEqual(0, 0) should be True)
console.log(isEqual(-4, -4) should be True)
console.log(isEqual(4, -4) should be False)
console.log(isEqual(0, 1) should be False
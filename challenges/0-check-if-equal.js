/* Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.
You may assume that the numbers are always integers (i.e. whole numbers).
*/
/**
 * Given two numbers, returns a boolean representing whether or not the two numbers are equal.
 * @param {number} numOne - first number in comparison 
 * @param {*} numTwo - second nnumber in comparison 
 * @returns {boolean} - whether the first and second number are equal
 */
function isEqual(numOne, numTwo) {
    if (numOne === numTwo) {
        return true;
    }
    return false;
}


console.log("isEqual(4, 4)", isEqual(4, 4), "should be True")
console.log("isEqual(4, 4)", isEqual(0, 0), "should be True")
console.log("isEqual(4, 4)", isEqual(-4, -4), "should be True")
console.log("isEqual(4, 4)", isEqual(4, -4), "should be False")
console.log("isEqual(4, 4)", isEqual(0, 1), "should be False")
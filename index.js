function hasTargetSum(array, target) { 
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true;
      } 
    } 
  } return false;
}

/* 
 O(n^2)
*/

/* 
  hasTargetSum takes an array and a target number as arguments
    iterate through the array 
      if two numbers are equal to the target number
        return true
      else return false

*/

/*
  Function hasTargetSum takes an array and a target as arguments. 
  If two of the numbers in the array add up to the target number, 
  the function will return true. If not, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, 2, 9], 15))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 1, 2, 3, 4, 5], 6))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

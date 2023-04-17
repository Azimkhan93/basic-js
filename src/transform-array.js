const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let newArr = [];
  newArr = arr.filter((element, i) => element !== '--discard-next' || arr[i-1] !== '--discard-next')
  newArr = arr.filter((element, i) => element !== '--discard-prev' || arr[i+1] !== '--discard-prev')
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      newArr = arr.splice(i, 1, arr[i+1])
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-prev') {
      newArr = arr.splice(i, 1, arr[i-1])
    }
  }
  return newArr;
  
}



module.exports = {
  transform
};

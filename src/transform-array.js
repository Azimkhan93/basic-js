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

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let newArr = [];
  newArr = arr.map((i) => i) 

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[newArr.length-1] === '--discard-next'){
      newArr.splice(newArr.length-1,1)
    }
    
    if (newArr[i] === '--discard-next' && newArr[newArr.length-1] !== '--discard-next') {
      newArr.splice(i, 2)
    }
  }


  for (let i = 0; i < newArr.length; i++) {
    if (newArr[0] === '--discard-prev'){
      newArr.splice(newArr[0],1)
    }
    
    if (newArr[i] === '--discard-prev' && newArr[0] !== '--discard-prev') {
      newArr.splice(i-1, 2 )
    }
  }


  for (let i = 0; i < newArr.length; i++) {
    if (newArr[newArr.length-1] === '--double-next'){
      newArr = newArr.splice(0, newArr.length-1)
    }
    
    if (newArr[i] === '--double-next' && newArr[newArr.length-1] !== '--double-next' ) {
      newArr.splice(i, 1, arr[i+1])
    }
  }
  


  for (let i = 0; i < newArr.length; i++) {
    if (newArr[0] === '--double-prev'){
      newArr = newArr.splice(1, newArr.length)
    }
    if (newArr[i] === '--double-prev' && newArr[0] !== '--double-prev') {
      newArr.splice(i, 1, newArr[i-1])
    }
  }

  return newArr;
  
}


module.exports = {
  transform
};

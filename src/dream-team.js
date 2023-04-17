const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
  let stringType = [];
  for (let i=0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      stringType.push(members[i].trim().toUpperCase())    
    }
    else {
    continue;
  }
}
console.log(stringType)

  let firstLetters = []
    for (let i=0; i < stringType.length; i++) {
      if(stringType[i].length) {
        firstLetters.push(stringType[i][0])
     }
    }
    
    sortedArr = firstLetters.sort()
    sortedString = sortedArr.join('')
    console.log(sortedArr, sortedString)


    return sortedString;
  }
  return false;

}

// createDreamTeam([ 'A', 'G', 'L', 'R' ])

module.exports = {
  createDreamTeam
};

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
  let char = ''
  if(members === undefined || members === null || typeof members === "number"){
      return false
  }
  else{
      for(let i = 0; i < members.length; i++){
          if(members[i] === undefined || members[i] === null || !(typeof members[i] === "string") || !(isNaN(members[i])) || typeof members[i] === "Array(0)" ){
              continue;
          }
          else{
              for(let j = 0; j < members[i].length; j++){
                  if(members[i][j] === ' '){
                      continue
                  }
                  else{
                      char += members[i][j];
                      break;
                  }
              }
                  
          }
        }
        let yer = char.toUpperCase().split('').sort().join('');
        return yer
  }
}

module.exports = {
  createDreamTeam
};

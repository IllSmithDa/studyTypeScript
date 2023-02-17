/* 
  Tuples is a specialized array with some particular restrictions
*/

// standard typescript array
const user: (number | string)[] = [2, 'dog'];

/* 
  converted array into a tuple where the three types listed in the square brackets on the left 
  Tuple ensures the strictness of not just what is in an array but also the ordering of the data 
  in the array. You also are not allowed to add anything outside of the given types in the bracket
  in the definition. But you can still push and pull items in the array. 
  */
const newUsers: [string, number, boolean] = ['dog', 2, true];

/* 
  You are still allowed to push things in the array and redefine the positions in the array
  This means that tuples are not a fool proof of restricting what you can put in an aray. 
*/
newUsers.push('23');
newUsers[0] = 'dn'

export {};
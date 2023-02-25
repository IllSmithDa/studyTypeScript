/* union types are good when you don't quite know the incoming type of a variable, parameter or return 
  Keeping unions limited to 2 is probably the best case scenario 
*/
type User = { _id: string, email: string };
type Admin = { _id: string, email: string };

// can be either a type string or a number
const jacket: string | number = 4;
const pizze: string | number = '4';

// works but probabaly bad pracice lol
const whatever: string | number | boolean | User = true;

/* This is the standard js way of checking for type. It will return the generic type object 
but will not be able to narrow any further than that without checking values of specific properties  */

function testUser(user:User) {
  console.log(typeof(user));
}
function testAdmin(user:User) {
  console.log(typeof(user));
}

const newAdmin = {
  _id: '331242',
  email: 'whatever@whatever.com'
}

/* newUser can now be treated as User or Admin using union types and both functions can be run 
  though both functions accepts different types
*/

function testUser2(user:User): void {
  console.log(typeof(user));
}
function testAdmin2(user:Admin): void {
  console.log(typeof(user));
}

const myUser: User = newAdmin;
testUser2(myUser);
testAdmin2(myUser);

function doSomething(id: number | string) {

  if (typeof id  === 'number') {
    /*this will draw an error as typescript is smart enought to know that if this statement assumes
      that the passed variable is a number */
  //  id.toLowerCase();
    Math.floor(id);
  } else {
    id.toLowerCase();
  }
}

/* to have multiple type of data in the same array, you need to wrap all the types
them in the parenthesis and then follow it by square brackets
*/
const data: (number | string | boolean)[] = [1, 2, 3, "4"];

/* to enforce a strict type of array where you can have all string or number but not both, */
const newData: number[] | string[] = [2, 3, 5, 6];
const newData2: number[] | string[] = ['1', '2', '4', '4'];

/* either all string or just one number not both */
const weirdData: number | string[] = 323;

/* you can set extremely strict types of setting the value as the type. This prevents values from
being overwritten 
*/
let pi:3.14 = 3.14

// setting pi to 12 will cause an error since its strictly tied to 3.14 as the value
// pi = 12;

/* 
  these strict values allows for one of three values. any other type of response will cause an error
  Keeps application more rigid and secure from unwanted entries and responses. note that this is also 
  case sensitive and must be exact match
  */
let seatType: "aisle" | "middle" | "window";
seatType = 'window';
// will cause error
// seatType = 'crew'


export {};
/* 
  We can not only type the variable themselves but also the argument of a
  function ': number' in parameters now type check function paramtere that 
  the first parameter is a number not a string or boolean 

*/

function addTwo(nun: number, text: string) {
  text.toUpperCase();
  return nun + 2;
}

console.log(addTwo(2, 'hello'));

/* you can still write in default values in the parameters even with typed parameters */

let loginUser = (email: string, name: string, isPaid: boolean = false) => {

}

/* 
  you can set the return type by adding :number after the the parameters to ensure the type checking 
  on the return value of the function.
*/

function addNumbers(num1: number, num2: number):number {
  // return has to be number
  return num1 + num2;
}

// must return string even if its just an empty one
const getString = ():string => {
  return '';
}


/*
  Typescript is smart enough to identify simple types in array to not have to excplitly declare its 
  type using :string in either the array declaration and definition as well as the map function
  where we do not need to use :string after the parameter creature; You can still indicate 
  the return type of the function itself for greater consistency in function return
*/

// exmaple of returning a typed string in maps
const creatures = ['cat', 'fox', 'bat'];

creatures.map((creature): string => {
  return `creature is ${creature}`
})

console.log(creatures);

/* 
  Setting void after arguments means the function cannot return anything.
  Explicitly indicating that the function does have a return statement is 
  also good for function consistency 
*/
function errorMsg(msg: string): void {
  console.log(errorMsg);
}

/* 
never is for values that are never observed because they throw an exception or terminates the 
application 
*/

function throwError(msg: string): never {
  throw new Error(msg);
}

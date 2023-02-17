function addTwo(nun: number, text: string) {
  text.toUpperCase();
  return nun + 2;
}

console.log(addTwo(2, 'hello'));

/* : number in parameters now type check function paramtere that the first parameter is a number 
not a string or boolean */

let loginUser = (email: string, name: string, isPaid: boolean = false) => {

}

/* you can still write in default values in the parameters even with typed parameters */


function addNumbers(num1: number, num2: number):number {
  return num1 + num2;
}

const getString = ():string => {
  return '';
}

/* you can set the return type by adding :number after the the parameters to ensure the type checking 
on the return value of the function.

*/

const creatures = ['cat', 'fox', 'bat'];
creatures.map((creature): string => {
  return `creature is ${creature}`
})
console.log(creatures);

/*

Typescript is smart enough to identify simple types in array to not have to excplitly declare its 
type using :stinrg in either the array declaration and definition as well as the map function
where we do not need to use :string after the parameter creature; You can still indicate 
the return type of the function itself for greater consistency in function return
*/

function errorMsg(msg: string): void {
    console.log(errorMsg);
}

/* explicitly indicating that the function does have a return statement is also good for function 
consistency 
*/

function throwError(msg: string): never {
  throw new Error(msg);
}

/* never is for values that are never observed because they throw an exception or terminates the 
application */
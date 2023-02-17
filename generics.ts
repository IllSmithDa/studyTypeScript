/*
  https://www.typescriptlang.org/docs/handbook/2/generics.html
*/

// generics are about avoiding the any keyword but want to define something as accepting any particular 
// type of data and returning it1

// e.g bad code using any which can return anything inculding a different type of var from parameter
// information of type is now gone in this case
function identity(arg: any): any {

}

const score: Array<number> = [];
const names: Array<string> = [];

// better but still vague interms of what we are actually passing in terms of returning a 
// type either boolean or number
function identityOne(val: boolean | number): boolean | number {
  return val
}
// example using generics. Type will log the type that is passed into the function. If the 
// parameter is number, the parameter is automatically number and the return is now has 
// to be number
function identityTwo<Type>(val: Type): Type{
  return val;
}
// Shorted version of the function identityTwo. Does the same exact thing just shorter syntax.
function identifyThree<T>(val:T):T {
  return val;
}

/* 
  One primary use for Type is that you can define your own Types and pass them into the function
*/
// e.g where interface Bottle is created 
interface Bottle {
  brand: string,
  type: string,
}
// used as the type for this generic function
identifyThree<Bottle>({ 
  brand: 'Budweiser',
  type: 'Beer'
});
// same function but now parameter and return type is automatically set to number type
identifyThree<number>(2);
identifyThree(4);
identifyThree<string>('hello world')

// Generics in Array

/* 
  when setting up generic function, you can't use methods that are attached to a specific 
  method because generics represent the possibilty of any kind of data like string or number
  So .length will not work

*/
function identifyFour<T>(val:T):T {
  // illegal because it is generic
  // return val.length;
  // return val.toString()
  // return Number(val)

  // legal as it respect the generic nature of the function
  return val;
}
// accepted parameter is generic array
function getSearch<T>(products:T[]): T[]{
  // error because return is T not number
  // return 3

  const myIndex = 3;
  // returns error because return type T is followed by brackets 
  // return product[3]
  return products
}

// indicates a generic return array return type. Somtimes comma is used to help indicate that 
// this is a generic syntax not jsx.
const getSearch2 = <T,>(products: T[]):T => {
  // do some database operatiosn
  const myIndex = 4;
  return products[3];
}
// parameter type must be generics or else the generics tag is pointless
const getSearch3 = <T,>(products: T[]):number => {
  // do some database operatiosn
  const myIndex = 4;
  return 3;
}
// bad because T isn't represent at all in the parameters so impossible to return a generic T
/*
const getSearch4 = <T,>(count: number): T => {
  return count;
}
*/


// set two generics T and U
// extends would force it to only accept number but undermines the point of having generics 
// in the first place
function genericTask<T, U extends number>(valOne: T, valTwo: U):object {
  return  {
    valOne,
    valTwo,
  }
}
// boolean no longer accepted in second parameter because of 'extends number'
// genericTask("task one", true);
// extends Database in generics to enforce interface as the second parameter
interface Database {
  connection: string, 
  username: string,
  password: string,
}
function genericTask2<T, U extends Database >(valOne: T, valTwo: U):object {
  return  {
    valOne,
    valTwo,
  }
}
genericTask2("task one", {connection: 'one', username: 'test', password: 'password'});

/* 
  Using Class Types in Generics
*/
interface Quiz {
  name: string,
  type: string,
}
interface Course {
  name: string,
  author: string,
  subject: string,
}
/* 
  generic class allows you to create generic properies that can accept any one paricular type
*/
class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
  getCart(): T[] {
    return this.cart;
  }
}
const sellableInstance = new Sellable();
// works with any type as no error will pop up
sellableInstance.addToCart(34);
sellableInstance.addToCart('efs');
// get the cart and see both have been inserted into array
console.log(sellableInstance.getCart());
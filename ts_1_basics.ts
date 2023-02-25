// Basic typescript examples show that these variables are now set to a
// particaly basic type

let greetings: string = 'hello man';

console.log(greetings);

let count: number = 12;

console.log(count);

let isLogged: boolean = false;

console.log(isLogged);

/* 

Note while typescript is a great tool for type checking and error catching, 
sometimes its obvious what the type is such as numOfAccout, or isLoggedIn so
type is not necessary

*/

let anyVar: any;

/* 
any is not special type but a marker that turns off the type checking. Not a good practice because it 
removes the strictness that is supposed to be beneficial to your code. 
*/
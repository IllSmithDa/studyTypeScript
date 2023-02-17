let greetings: string = 'hello man';

console.log(greetings);

let count: number = 12;

console.log(count);

let isLogged: boolean = false;

console.log(isLogged);

/* 

Note while typescript is a great tool for type checking and error catching, sometimes its obvious what 
the type is such as numOfAccout, or isLoggedIn where you don't need to indicate type at all because its obvious what the 
code is doing and you are assigning that value right away anyway so anyone with eyes can see that yes that 
indeed a string not a boolean lol. Of course, all of this depends on what your coding practices 
are at work and the standards set by project managers lol. 

*/

let anyVar: any;

/* any is not special type but a marker that turns off the type checking. Not a good practice because it 
removes the strictness that is supposed to be beneficial to your code. 
*/
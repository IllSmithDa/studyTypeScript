/*
array and null will be seen in js as type object. 

*/

function detectType(val: number | string /* | number[] */) {
  // use type of or type guard to ensure you know what you are 
  // working with. Avoid using too many union types if possible
  if (typeof val === "number") {
    Math.floor(val);
  } else {
    val.toLocaleUpperCase();
  }
}

function provideId(id: string | null) {
  // type check here to make sure it is not null
  if(id) {

  } else {
    // do something else
    return 'error'; 
  }

}
/* THis might seem to cover all cases but does not account for empty strings and so be aware 
of these particular issues that could rise from trying to fulfill business requirements
*/
function printAll(strs: string | string[] | null) {
  
  if (strs) {
    if(typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

/* narrowing using the keyword 'in' where we can check for a specific value or property is in 
the array or object or maybe even string */

interface User {
  name: string,
  email: string,
}

interface Admin extends User {
  isManager: boolean,
}

function isAdmin(account: User | Admin): boolean {
  if ("isManager" in account) {
    return account.isManager;
  } 
  return false;
}

const newUser: Admin = {
  name: 'Joe',
  email: 's@s.com',
  isManager: true,
} 
console.log(isAdmin(newUser));
export{};
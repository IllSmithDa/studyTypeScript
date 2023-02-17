
/* You can create type alias which are ways to simplify the process of typing an object ahead of
time. Notice you don't have to add the object properties in the parameters or in the return type 
definition*/

type User = {
  id: string; // you can use ; or ,
  name: string;
}
type DogName = string;

function evalUser(user: User): User {
  console.log(user);
  return user;
}

// twp ways to satisfy the function requirement
evalUser({ id: "", name: "" });
const myUser: User = {
  id: 'IDHN#324',
  name: 'Joe Smch',
}
evalUser(myUser);


/* you can mod things to be read only in your objects by place it in front of variable name

*/
type Car = {
  readonly _id: string,
  color: string,
  model: string,
}

let mazda3: Car = {
  _id: '12432',
  color: 'black',
  model: '3',
}
mazda3.color = 'red';

// produces error when we try to reassign the property value id
// mazda3._id = '223423';

/* you can combine types and other objects into a single type which will require all properties 
from all the separate types into this new one */

type CardNumber = {
  cardNumber: string,

}
type CardDate = {
  cardDate: string,
}
type CardDetails = CardNumber & CardDate & {
  cvv: number
}

export {};
/*
  We can destructore objects we pass into function while also enforcing types
  for each property
*/
const user = {
  id: '323132DE',
  name: 'Andy Jack',
  email: 'whatever@whatever.com',
  isActive: true,
}

// note: passing objects requires naming it on the left hand side of the object. 
const processUser = (obj: { name: string, isActive: boolean, isPaid: boolean }) => {
  const { name, isActive, isPaid } = obj;
}

processUser({name: 'Sam', isPaid: true, isActive: false});

/* 
  again you can add : { nname: string, email: string } after the arguments to indicate the 
  object return type as well as the paramter type 
*/

const newUser = (obj: {name: string, email: string}):{
  name: string,
  email: string,
} => {
  const newObj = {
    name: 'Jack',
    email: 'jack@email.com'
  }
  return newObj;
}

export {};
const user = {
  id: '323132DE',
  name: 'Andy Jack',
  email: 'whatever@whatever.com',
  isActive: true,
}

const processUser = (obj: { name: string, isActive: boolean, isPaid: boolean }) => {

}

processUser({name: 'Sam', isPaid: true, isActive: false});

/* passing objects requires naming it on the left hand side of the object. 

*/

const newUser = (obj: {name: string, email: 'string'}): {
  name: string,
  email: string,
} => {
  const newObj = {
    name: 'Jack',
    email: 'jack@email.com'
  }
  return newObj;
}

/* again you can add : { nname: string, email: string } after the parameter to indicate the 
object return type as well as the paramter type 

*/

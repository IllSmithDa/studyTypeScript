/* 
  Interfaces work similarly to alias in that you can strict type check objects with them 
*/

// alias example 

type MyUser = {
  email: string,
  userID: number,
}

/* interface uses itself as keyword and does not use = */
interface User {
  email: string,
  userId: number,
  // ? makes the property optional and is not included in the instance below
  googleId?: string,
  // read only make var value unchangeable after instance intizliaed

  readonly dbId?: number,
  // this type is any function returns a string
  method: (name: string) => string,
  // another way to define method type is to put () on the left hand side and remove the arrow
  newMethod(): string
  methodTwo?(name: string) : boolean
}

const newUser: User = {
  email: 'h@H.com',
  userId: 123231,
  dbId: 123283939,
  method: () => 'hellow',
  newMethod: () =>  'bye world',
  token: '233ndi'
}

/* 
  Things you can do with interface that you can't with aliases
  You can rewrite User interface. 
  You can add more property to the interface as you expand your data. 
  By adding a token the user above now requires a token in addition to the already 
  established types in the interface
*/
interface User {
  token: string,
}

/* 
  You still nee the rest of the types as the interface only adds not overwrites the initial
  interface. This makes interface unique because in most programming, this would result in 
  a overwrite not a addition. This is often referred to as reopening of the interface.
*/
const newUser2: User = {
  email: 'h@H.com',
  userId: 123231,
  dbId: 123283939,
  method: () => 'hellow',
  newMethod: () =>  'bye world',
  token: '233ndi'
}

/* 
  interface can have the benefit of inheritance which allows you to define new interfaces that
  also inherits the properties of an existing interface 
*/

interface Admin extends User {
  adminToken: string,
  // you can force default code to have specific values using union types
  // note thta this is also case sensitive and must be exact match
  defaultCode: '111'| '222' | 333,
}

const realAdmin: Admin = {
  email: 'h@H.com',
  userId: 123231,
  dbId: 123283939,
  method: () => 'hellow',
  newMethod: () =>  'bye world',
  token: '233ndi',
  adminToken: '23fessd',
  // you can force default code to have specific values
  defaultCode: 333,
}

/*
  Finally always check to make sure you aren't unintentionally adding onto an existing 
  interface somewhere when trying to define a new one
*/

export {};
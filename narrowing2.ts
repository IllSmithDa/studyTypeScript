/* 
When narrowing types with functions or classes or anything can be narrowed using the 'new' keyword, 
utilize the operator 'instanceof' to check if the variable type is that particular class. function
etc
*/

 function logValue(x: Date | string): string {
    // checks if x is of type Date
    if (x instanceof Date) {
      console.log(x.toUTCString())
      return 'variable is type Date'
    } else {
      console.log(x.toUpperCase())
      return 'it is string'
    }
}

const x: Date = new Date();
const y: string = 'hello world';
console.log(x);

logValue(x);
logValue(y);

class Car {
  constructor(public email: string, private name: string) {

  }
  getCar() {
    return this.name;
  }
}

const checkTypeClass = (x: Car | string) => {
  if (x instanceof Car) {
    console.log(x.getCar())
    return 'variable is type Car'
  } else {
    console.log(x.toUpperCase())
    return 'it is string'
  }
}

const myCar = new Car('s@s.com', 'mazda3');
const newString = 'hello again';
checkTypeClass(myCar);
checkTypeClass(newString);


/* 
  Predicates 
*/

type Fish = {
  swim: () => void;
}
type Bird = {
  fly: () => void
}

/*
  this function will chcek if 'pet' is type 'Bird' or 'Fish', Note that if you 
  return this without the line 'pet is fish', you will return a boolean not a type. You must 
  do this way so when your return will match the alias type you are looking for not a boolean
*/
function isFish(pet: Fish | Bird): pet is Fish {
  // check if pet has the property swim  
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return 'fish food'
  }
  return 'bird food'
}

/* 
  Discriminated Unions 
*/
interface Circle {
  kind: "circle"
  radius: number,
}

interface Square {
  kind: "square"
  side: number,
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number,
}

// union typing of two interfaces
type Shape = Circle | Square;

/* You can use interface properties to narrow down whether shape is a interface of Circle or Square */

function getTrueShape(shape: Shape) {
  if(shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}

type NewShape = Circle | Square | Rectangle; 

function getArea(shape: NewShape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius **2;
    case "square":
      return shape.side * shape.side
    case "rectangle":
      return shape.length * shape.width
    default: 
      const _defaultShape: never = shape
      return _defaultShape;
  }
}

export {};
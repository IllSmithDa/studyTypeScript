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

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if(shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}


/* 
  Notice how the never check in teh default case scenario will fail when you don't cover all your 
  bases. This is a good thing because if don't include the never check, the switch statements alone
  won't exhaustively check for all possible type cases. The idea is that when you cover all your 
  types, the never line of code will never be reached and thus filfull the never condition 
*/

type NewShape = Circle | Square | Rectangle; 

function getArea(shape: NewShape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius **2;
    case "square":
      return shape.side * shape.side
    default: 
      // error because its possible that type Rectangle is not covered under this switch statement
      // create a case for Rectangle and this error will go away 
      const _defaultShape: never = shape
      return _defaultShape;
  }
}

// error goes away once we account for rectangle and so we should include this never type 
// when using switch statements
function getArea2(shape: NewShape) {
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
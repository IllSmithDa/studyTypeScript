/*   declare array with a type using :string followed by the square bracket [] */
const critters:string[] = [];

// example for an array of boolean values
const cars: boolean[] = [];

/* Same rule applies for aliases */
type Car = {
  readonly _id: string,
  color: string,
  isAvail: boolean,
}
const allCars: Car[] = [];

// new car created and pushed in all cars array
const newCar: Car = {
  _id: 'SEFE399',
  color: 'red',
  isAvail: true,
}
allCars.push(newCar);

/* 
  added to prevent type Car from getting a duplication error from Car in the object.ts file
  Read more about it here: 
  https://stackoverflow.com/questions/60271921/duplicate-identifier-when-declaring-types-with-same-name-in-different-files
*/

/* Alternate syntax for typing array and does the same thing as :number[] */
const heroPower: Array<number> = [];
const moreCars: Array<Car> = [];

/* you can add addtion brack for typing a 3d array or an array of array of a particular type*/
const MLModels: number[][] = [
  [255, 355, 566], [23, 43, 5], []
]

const carConga: Car[][] = [
  [{_id: '322', color: 'green', isAvail: true }, {_id: '342', color: 'green', isAvail: true }],
  [{_id: '323', color: 'red', isAvail: true }, {_id: '353', color: 'black', isAvail: true }],
]

export {};
/*
Enums are also used for restricting values and choices for a variable. Good for enforcing
dropdown lists or places where you need a customer to choose between a set of options.
*/

// traditional way of assigning options
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

// using enums 
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const chosenSeat = SeatChoice.MIDDLE;

/* 
note that when you print value, it has been assigned a numeric value from top to bottm starting 
with value 0. 
*/
console.log(chosenSeat);

/* 
You can overwrite the enum values using = 23 or ='CAT' or whatever you need. The rest of the values 
that are not changed will remain their original assigned numeric value. Note that if you 
use a string the rest of the values need to be assigned unless  the next value is assigned a 
numerical value. This does not work for boolean 
*/
enum NewChoices {
  FRONT = 23,
  MIDDLE = 'helo',
  BACK = 23,
  SIDE,
}

/* 
 Note that tuples do not work for boolean. you will get a error for doing this
*/

enum OtherChoices {
  FRONT = 23,
  // MIDDLE = false,
  // BACK = true,
  // SIDE = true,
  TOP = 23,
}
console.log(NewChoices.MIDDLE);

// You can make the transipling to JavaScript much more simpler and cleaner using const 
const enum SimpleChoice {
  FRONT = 23,
  MIDDLE = 'helo',
  BACK = 23,
  SIDE,
}
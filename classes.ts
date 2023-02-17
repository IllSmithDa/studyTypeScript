/* 
  You can of course use classes with typescript
*/

// this is the classic js class with type added to it
/*
class User {
  constructor(email, name:) {
    this.email = email;
    this.name = name;
  }
}

*/

/* 
  You can take the same class and now add types to it. Strangely enough, you don't do this by 
  adding it the constructor but at the top of the class scope and in the constructor parameter
*/

class User {
  public email: string
  name: string
  city: string = "SF"
  readonly age = 12
  // only accessed via setter and getter methods in the same class and not child classes 
  // use protected instead for wanting to share with child classes
  private readonly medicalID: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// instance of the class User
const newUser = new User('sam@sam.com', 'Sam');
console.log(newUser.city) // will return sf
newUser.city = 'NY' // redefine to ny
// newUser.city = 3; produce error as it is a type string 

/* 
  note that private props cannot be access from outside the class but only in the class
  In standard js, you can add # infront of prop name to make it private
*/

//  produces error because property is private 
//  newUser.medicalID

/* 
There is also a public keyword you can add to variable but note that it is by default public
*/
/* 
  Typescript allows you to simplify syntax to the point where you do not even need to use the 'this'
  keyword but use the contructor parameters to setup need variables 
*/
class Car {
  // color already set so no need to include in constructor
  readonly color: string = "red"
  constructor(private carType: string, public manufacturer: string) {
    console.log(carType);    

  }
}

/* getters and setter are also in classes. Their purpose has always been to limit how
  one can access a varaible or a function. 
*/

class App {
    // color already set so no need to include in constructor
    readonly _countryOrigin: string = "U.S"
    // private var/method can't be accessed by outside scope directly and that includes child classes
    private currentYear = 2023;
    // same as private but can be access by child classes
    protected userCount = 1; 
    constructor(private appNmae: string, public companyName: string) {
      console.log(companyName);    
    }
    // standard getter and setters
    get appName(): string {
      return `app name: ${this.appName}`;
    }
    set appName(name: string){
      this.appName = name; 
    }
  
    // you cannot return anything in setter and even includes void. Keep return type empty
    set userNum(count: number) /*:void */{

      // you can still throw error however if a requirement isn't being met
      if (this.userCount < 0) throw new Error('User coutn must be greater than 0!');
      this.userCount = count; 
    }

    /* you can also create private methods. Cannot be directly called */
    private deleteToken() {
      console.log('token deleted'); 
    }

    // you can call private methods within the classes just like with variables
    get getToken(): string {
      this.deleteToken();
      return 'token';
    }
}

/* inheritance also comes into play when using classes in which a classes will inherit all the 
  methods, setters and getters and variables from an already existing class. You refer 
  that class you inherit from as the parent class. You cannot inherit private classes 
  because the new classes would be considered being outside the scope of the parent class which
  is where the private method and variable lies.
*/

class AndroidApp extends App {
    isLawCompliant: boolean = true;
    changeUserCount() {
      this.userCount = 4;
      // produce error because it is a private var not a protected or public one
      // this.currentYear = 2022
    }
}

/* You can combine interfaces with classes by inheriting a interface into a class 
  A guideline is provided by typescript and geting more consistency with class management
*/

interface TakePhoto {
  cameraMode: string,
  filter: string,
  burstMode: number,
}
interface Story extends TakePhoto {
  createStory(): string,
}

class Instagram implements TakePhoto {
  // you can initialize them here
  cameraMode: string;
  burstMode = 22;
  constructor(public filter: string) {

  }
}

class Youtube implements TakePhoto {
  // you can initialize them here
  cameraMode: string;
  burstMode = 22;
  constructor(public filter: string, public short: string) {

  }
}

// inheriting method from story and the var from interface TakePhoto
class Stories implements TakePhoto, Story {
  // you can initialize them here
  cameraMode: string;
  burstMode = 22;
  createStory = () => 'story'
  constructor(public filter: string, public short: string) {

  }
}

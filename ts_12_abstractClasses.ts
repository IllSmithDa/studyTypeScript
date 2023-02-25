/* 
  The keyword abstract is used in front of classes and you can no longer create a instance of a class.
  It is the responsibility of child classes to implement the functiosn and methods of the parent 
  class which is now also a abstract class. They are not optional for the child classes unlike
  normal methods. 
*/

abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public color: string
  ) {
    //
  }
  /* you can create abstract method which the implementation responsibility falls to the child class
  They must be implemented
  */
  abstract getMode():void 
  /* method implemetation is optional for child class because it is not an abstract class
    You can still access this class because it is a public class
  */
  public getReelTime(): number {
    return 0;
  }
  protected getTime():number {
    return 1;
  }
  overwriteThis(letter: string):number {
    return 3;
  }
}

// you can no longer instance this class when class is abstract
// const hc = new TakePhoto("test", "test")

// extending a abstract class
class Youtube extends TakePhoto {
  constructor(
    // must include constructor var from parent classes
    public cameraMode: string,
    public filter: string,
    public color: string,
    public burst: number
  ) {
    // must include super for parent contructor variables 
    super(cameraMode, filter, color);
  }
  getMode(): void {
    console.log('new mode')
    // access a protected method from parent class
    this.getTime();
  }
  /* overwrite function of parent class but its parameter type and  return type must be the same
     alternatively you can choose to omit parameters altogether as long return type is the same
     If you do put parameters, they must match the parent ones and so no extra paramters or 
     different type of paramteres */
  overwriteThis(letter: string, /*count: number */) {
    return 4;
  }
}
// you can create a instance of this class but not the abstract parent class
const hc = new Youtube("test", "test", "color", 4);

// You still access parent class public methods and even overwrite it here but here you 
// cannot access private or protected methods of either the parent or child class
hc.getReelTime();
// produces error because it is a protect function that must be accessed either within 
// the parent or child class
// hc.getTime()
export {};
import { IDriveStrategy } from "./strategy/drive-strategy";
export class Vehicle {
  public startegyObject: any;
  
  constructor(obj: any) {
    this.startegyObject = obj; // construction injections
  }

  drive() {
    this.startegyObject.drive();
  }
}
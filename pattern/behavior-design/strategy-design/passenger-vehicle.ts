import { Vehicle } from "./vehicle";
import { IDriveStrategy } from "./strategy/drive-strategy";
import { SportsDriveStrategy } from "./strategy/sportsDriveStrategy";

export class PassengerVehicle extends Vehicle {
  constructor() {
    super(new SportsDriveStrategy());
  }
}
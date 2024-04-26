import { NormalDriveStartegy } from "./strategy/normal-drive-startegy";
import { Vehicle } from "./vehicle";

export class OffRoadVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStartegy());
  }
}
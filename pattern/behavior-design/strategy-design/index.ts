import { SportsDriveStrategy } from "./strategy/sportsDriveStrategy";
import { PassengerVehicle } from "./passenger-vehicle";
import { OffRoadVehicle } from "./off-road-vehicle";

const passengerObject = new PassengerVehicle();
passengerObject.drive();

const offRoadObj = new OffRoadVehicle();
offRoadObj.drive();
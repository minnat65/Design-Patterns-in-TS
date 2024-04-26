import { IDriveStrategy } from "./drive-strategy";

export class SportsDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log('Sports drive capabilities');
  }
}
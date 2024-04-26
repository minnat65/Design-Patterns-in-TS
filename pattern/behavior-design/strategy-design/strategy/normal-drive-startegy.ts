import { IDriveStrategy } from "./drive-strategy";

export class NormalDriveStartegy implements IDriveStrategy {
  drive(): void {
    console.log('Normal Drive Strategy');
  }
}
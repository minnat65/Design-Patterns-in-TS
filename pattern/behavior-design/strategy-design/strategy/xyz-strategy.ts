import { IDriveStrategy } from "./drive-strategy";

export class XYZStrategy implements IDriveStrategy {
  drive(): void {
    console.log('xyz strategy');
  }
}

// In this way we can add as much strategy as we need therefore this is a scalable code

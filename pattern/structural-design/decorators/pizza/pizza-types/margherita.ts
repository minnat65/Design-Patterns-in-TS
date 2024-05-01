import { BasePizza } from "../base-pizza";

export class Margherita extends BasePizza {
  public cost(): number {
    return 120;
  }
}
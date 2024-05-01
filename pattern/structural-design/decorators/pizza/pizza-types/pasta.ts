import { BasePizza } from "../base-pizza";

export class PastaPizza extends BasePizza {
  public cost(): number {
    return 199;
  }
}
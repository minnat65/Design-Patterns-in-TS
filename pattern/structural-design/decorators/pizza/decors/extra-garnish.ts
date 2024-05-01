import { BasePizza } from "../base-pizza";
import { Topping } from "./topping";

export class ExtraGarnish extends Topping {
  public basePizza: BasePizza;

  constructor(pizza: BasePizza) {
    super();
    this.basePizza = pizza;
  }

  public cost(): number {
    return this.basePizza.cost() + 29;
  }
}
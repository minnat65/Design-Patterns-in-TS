import { ExtraCheese } from "./decors/extra-cheese";
import { ExtraGarnish } from "./decors/extra-garnish";
import { Margherita } from "./pizza-types/margherita";

const margherita = new Margherita(); // 120 base price

// extra cheese on margherita
const cheeseOnMargherita = new ExtraCheese(margherita);
const garnishOnMargharita = new ExtraGarnish(cheeseOnMargherita); // nested decoration
console.log(garnishOnMargharita.cost());
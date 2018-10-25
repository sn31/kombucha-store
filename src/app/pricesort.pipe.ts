import { Pipe, PipeTransform } from "@angular/core";
import { Flavor } from "./models/flavors-model";

@Pipe({
  name: "pricesort",
  pure: false //stateful
})
export class PriceSort implements PipeTransform {
  transform(input: Flavor[], sortDirection) {
   
      input.sort(function(a: Flavor, b: Flavor) {
        if (sortDirection === "ascending") {
            if (a.price < b.price) return -1;
            else if (a.price > b.price) return 1;
            else return 0;
        }
        else if (sortDirection === "descending") {
          if (a.price > b.price) return -1;
          else if (a.price < b.price) return 1;
          else return 0;
        }
    });
      return input;
  }
}

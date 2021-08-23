import { AbsolutDiscount } from "./Discount/AbsoluteDiscount";
import { PercentageDiscount } from "./Discount/PercentageDiscount";
import { Item } from "./Item/Item";

const item: Item = new Item("T-Shirt", 150);
console.log(`Creating an Item: ${item.name()} with value ${item.value()}`);

const amount: number = 2;

console.log("Applying No Discount");
console.log(`Price for ${amount}: ${item.priceForAmount(amount)}`);

console.log("Applying Percentage Discount");
item.setDiscount(new PercentageDiscount(10));
console.log(`Price for ${amount}: ${item.priceForAmount(amount)}`);

console.log("Applying Absolut Discount");
item.setDiscount(new AbsolutDiscount(10));
console.log(`Price for ${amount}: ${item.priceForAmount(amount)}`);

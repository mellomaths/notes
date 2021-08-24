import { Order } from "./Order/Order";
import { DeliveredOrderState } from "./OrderState/DeliveredOrderState";
import { PaidOrderState } from "./OrderState/PaidOrderState";
import { SentOrderState } from "./OrderState/SentOrderState";
import { Product } from "./Product/Product";

const order: Order = new Order();
console.log("Creating Order");

console.log("Adding products to the order.");
const tShirt = new Product("1", "T-Shirt", 19.99);
order.addOrderItem(tShirt, 2);
console.log("Adding 2 T-Shirts to the order.");

order.addOrderItem(new Product("2", "Jeans", 49.99), 1);
console.log("Adding 1 Jeans to the order.");

order.addOrderItem(new Product("3", "Hat", 25.99), 2);
console.log("Adding 2 Hats to the order.");

console.log("Checking Order with Pending State");
console.log(`Order is paid: ${order.paid()}`);
console.log(`T-Shirts reserved in Stock: ${order.reservedInStock(tShirt)}`);
console.log(`Order days to be completed: ${order.daysToComplete()}`);

order.updateState(new PaidOrderState());
console.log("Checking Order with Paid State");
console.log(`Order is paid: ${order.paid()}`);
console.log(`T-Shirts reserved in Stock: ${order.reservedInStock(tShirt)}`);
console.log(`Order days to be completed: ${order.daysToComplete()}`);

order.updateState(new SentOrderState());
console.log("Checking Order with Sent State");
console.log(`Order is paid: ${order.paid()}`);
console.log(`T-Shirts reserved in Stock: ${order.reservedInStock(tShirt)}`);
console.log(`Order days to be completed: ${order.daysToComplete()}`);

order.updateState(new DeliveredOrderState());
console.log("Checking Order with Delivered State");
console.log(`Order is paid: ${order.paid()}`);
console.log(`T-Shirts reserved in Stock: ${order.reservedInStock(tShirt)}`);
console.log(`Order days to be completed: ${order.daysToComplete()}`);

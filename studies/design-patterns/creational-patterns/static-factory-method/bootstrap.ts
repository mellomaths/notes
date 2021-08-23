import { Dice } from "./dice/Dice";

const dices: Dice[] = [new Dice(6), new Dice(6)];

dices.forEach((dice) => console.log(dice.roll()));

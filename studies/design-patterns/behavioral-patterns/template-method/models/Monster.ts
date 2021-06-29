import { AI } from "../structure/AI";
import { Position } from "../structure/Position";

export class Monster extends AI {
  collectResources() {
    console.log("Monsters don't collect resources.");
  }

  buildStructures() {
    console.log("Monsters don't build structures.");
  }

  buildUnits() {
    console.log("Monsters don't build units");
  }

  sendScouts(position: Position) {
    console.log(
      `Sending Monsters Scouts to (x=${position.x}, y=${position.y}).`
    );
  }
  sendWarriors(position: Position) {
    console.log(
      `Sending Monsters Warriors to (x=${position.x}, y=${position.y}).`
    );
  }
}

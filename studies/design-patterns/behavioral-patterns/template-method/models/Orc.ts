import { AI } from "../structure/AI";
import { Position } from "../structure/Position";

export class Orc extends AI {
  buildStructures(): void {
    console.log("Building Orcs structures.");
  }

  buildUnits(): void {
    console.log("Building Orcs units.");
  }

  sendScouts(position: Position): void {
    console.log(`Sending Orcs Scouts to (x=${position.x}, y=${position.y}).`);
  }

  sendWarriors(position: Position): void {
    console.log(
      `Sending Warriors Scouts to (x=${position.x}, y=${position.y}).`
    );
  }
}

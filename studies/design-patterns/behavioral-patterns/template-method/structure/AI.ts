import { Enemy } from "./Enemy";
import { Map } from "./Map";
import { Position } from "./Position";

export abstract class AI {
  map: Map;

  constructor(map: Map) {
    this.map = map;
  }

  turn(): void {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }

  collectResources(): void {
    console.log("Collecting Resources");
  }

  attack(): void {
    const enemy: Enemy = this.closestEnemy();
    if (!enemy) {
      return this.sendScouts(this.map.center);
    }

    return this.sendWarriors(enemy.position);
  }

  closestEnemy(): Enemy {
    return new Enemy(new Position(5, 2));
  }

  abstract buildStructures(): void;
  abstract buildUnits(): void;

  abstract sendScouts(position: Position): void;
  abstract sendWarriors(position: Position): void;
}

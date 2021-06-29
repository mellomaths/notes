import { Monster } from "./models/Monster";
import { Orc } from "./models/Orc";
import { Map } from "./structure/Map";
import { Position } from "./structure/Position";

const map = new Map(new Position(0, 0));
const monster = new Monster(map);
const orc = new Orc(map);

monster.turn();
orc.turn();

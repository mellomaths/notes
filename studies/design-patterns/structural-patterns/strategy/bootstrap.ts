import { Pokemon } from "./pokemon/Pokemon";
import { PokemonDB } from "./pokemon/PokemonDB";
import { AttackStrategy } from "./score-strategy/AttackStrategy";
import { DefenseStrategy } from "./score-strategy/DefenseStrategy";
import { HealthStrategy } from "./score-strategy/HealthStrategy";

const bulbasaur = new Pokemon(1, "Bulbasaur", {
  attack: 49,
  defense: 49,
  health: 45,
});

const charmander = new Pokemon(2, "Charmander", {
  attack: 52,
  defense: 43,
  health: 39,
});

const squirtle = new Pokemon(3, "Squirtle", {
  attack: 48,
  defense: 65,
  health: 44,
});

const db = new PokemonDB();
db.save(bulbasaur);
db.save(charmander);
db.save(squirtle);

const bestAttack = db.selectBest(new AttackStrategy());
const bestDefense = db.selectBest(new DefenseStrategy());
const bestHealth = db.selectBest(new HealthStrategy());
console.log(`The Pokemon with best Attack attribute is ${bestAttack.name()}`);
console.log(`The Pokemon with best Defense attribute is ${bestDefense.name()}`);
console.log(`The Pokemon with best Health attribute is ${bestHealth.name()}`);

import { Pokemon } from "../pokemon/Pokemon";
import { ScoreStrategy } from "./ScoreStrategy";

export class AttackStrategy implements ScoreStrategy {
  select(pokemons: Pokemon[]): Pokemon {
    return pokemons.reduce((prev, current) =>
      prev.attributes().attack > current.attributes().attack ? prev : current
    );
  }
}

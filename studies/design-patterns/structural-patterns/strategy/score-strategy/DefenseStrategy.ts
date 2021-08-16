import { Pokemon } from "../pokemon/Pokemon";
import { ScoreStrategy } from "./ScoreStrategy";

export class DefenseStrategy implements ScoreStrategy {
  select(pokemons: Pokemon[]): Pokemon {
    return pokemons.reduce((prev, current) =>
      prev.attributes().defense > current.attributes().defense ? prev : current
    );
  }
}

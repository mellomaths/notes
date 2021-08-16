import { Pokemon } from "../pokemon/Pokemon";
import { ScoreStrategy } from "./ScoreStrategy";

export class HealthStrategy implements ScoreStrategy {
  select(pokemons: Pokemon[]): Pokemon {
    return pokemons.reduce((prev, current) =>
      prev.attributes().health > current.attributes().health ? prev : current
    );
  }
}

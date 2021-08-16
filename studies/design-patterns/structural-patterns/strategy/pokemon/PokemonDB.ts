import { Database } from "../Database";
import { ScoreStrategy } from "../score-strategy/ScoreStrategy";
import { Pokemon } from "./Pokemon";

export class PokemonDB implements Database<Pokemon> {
  private pokemons: Pokemon[] = [];

  save(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  list(): Pokemon[] {
    return this.pokemons;
  }

  selectBest(scoreStrategy: ScoreStrategy): Pokemon {
    return scoreStrategy.select(this.pokemons);
  }
}

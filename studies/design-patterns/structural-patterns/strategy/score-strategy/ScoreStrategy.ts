import { Pokemon } from "../pokemon/Pokemon";

export interface ScoreStrategy {
  select(pokemons: Pokemon[]): Pokemon;
}

import { Pokemon } from "..";

export interface PokemonRepositoryInterface {
  get: () => Pokemon[];
  size: () => number;
}

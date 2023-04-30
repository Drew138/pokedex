import { Pokemon } from "..";

export interface PokemonServiceInterface {
  getRandomPokemon: () => Pokemon;
}

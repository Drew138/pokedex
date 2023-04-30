import { PokemonServiceInterface } from ".";
import { Pokemon } from "..";
import { PokemonRepositoryInterface } from "../repository";

export class PokemonService implements PokemonServiceInterface {
  private repository: PokemonRepositoryInterface;

  constructor(repository: PokemonRepositoryInterface) {
    this.repository = repository;
  }

  getRandomPokemon = (): Pokemon => {
    const pokemons = this.repository.get();
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
  };
}

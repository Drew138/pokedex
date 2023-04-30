import { PokemonRepositoryInterface } from ".";
import { Pokemon } from "..";

export class LocalPokemonRepository implements PokemonRepositoryInterface {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: "bulbasaur",
      height: 1.1,
      ability: "Overgrow",
      image: "https://storage.googleapis.com/pokedex-andres/bulbasaur.jpg",
      phrase: "Bulba bulba!",
    },
    {
      id: 2,
      name: "charmander",
      height: 1.2,
      ability: "Blaze",
      image: "https://storage.googleapis.com/pokedex-andres/charmander.jpg",
      phrase: "Char-char!",
    },
    {
      id: 3,
      name: "squirtle",
      height: 1.3,
      ability: "Torrent",
      image: "https://storage.googleapis.com/pokedex-andres/squirtle.jpg",
      phrase: "Squirtle squirt!",
    },
    {
      id: 4,
      name: "blastoise",
      height: 1.4,
      ability: "Torrent",
      image: "https://storage.googleapis.com/pokedex-andres/blastoise.jpg",
      phrase: "Blastoise!",
    },
    {
      id: 5,
      name: "charizard",
      height: 1.5,
      ability: "Blaze",
      image: "https://storage.googleapis.com/pokedex-andres/charizard.jpg",
      phrase: "Charizard!",
    },
    {
      id: 6,
      name: "caterpie",
      height: 1.5,
      ability: "Shield Dust",
      image: "https://storage.googleapis.com/pokedex-andres/caterpie.jpg",
      phrase: "Caterpie!",
    },
    {
      id: 7,
      name: "metapod",
      height: 1.7,
      ability: "Shed Skin",
      image: "https://storage.googleapis.com/pokedex-andres/metapod.jpg",
      phrase: "Metapod!",
    },
  ];

  public get(): Pokemon[] {
    return this.pokemons;
  }

  public size(): number {
    return this.pokemons.length;
  }
}

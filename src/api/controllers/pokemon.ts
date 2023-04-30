import { PokemonServiceInterface } from "../../domain/pokemon/service";
import { PokemonService } from "../../domain/pokemon/service/service";
import { pokemonView } from "../views/pokemon";
const os = require("os");

export class PokemonController {
  pokemonService: PokemonServiceInterface;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  getProfile = (req, res): void => {
    const pokemon = this.pokemonService.getRandomPokemon();
    const hostname = os.hostname();
    const data = { pokemon, hostname };
    const view = pokemonView(data);
    res.send(view);
  };

  getJSON = (req, res): void => {
    const pokemon = this.pokemonService.getRandomPokemon();
    const hostname = os.hostname();
    res.json({
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      ability: pokemon.ability,
      phrase: pokemon.phrase,
      container_id: hostname,
    });
  };
}

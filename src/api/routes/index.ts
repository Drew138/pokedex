import { LocalPokemonRepository } from "../../domain/pokemon/repository/repository";
import { PokemonService } from "../../domain/pokemon/service/service";
import { PokemonController } from "../controllers/pokemon";

export class Router {
  app: any;
  constructor(app: any) {
    this.app = app;
  }

  mapRoutes = (): void => {
    this.mapPokemonRoutes();
  };

  mapPokemonRoutes = (): void => {
    const pokemonRepository = new LocalPokemonRepository();
    const pokemonService = new PokemonService(pokemonRepository);
    const pokemonController = new PokemonController(pokemonService);

    this.app.get("/profile", pokemonController.getProfile);
    this.app.get("/json", pokemonController.getJSON);
  };
}

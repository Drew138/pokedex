import { Pokemon } from "../../domain/pokemon";

export const pokemonView = (data: {
  pokemon: Pokemon;
  hostname: string;
}): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <img src="${data.pokemon.image}" alt="${data.pokemon.name}">
        <p>Hostname: ${data.hostname}</p>
      </body>
    </html>  
    `;
};

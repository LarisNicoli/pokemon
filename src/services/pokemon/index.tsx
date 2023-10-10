import { PokemonResults } from "../../types/types";

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export class PokemonService {
  static async getPokemons(page: string): Promise<PokemonResults> {
    const pokemonUrl = page ? page : `${API_BASE_URL}/?limit=20&offset=0`;
    const response = await fetch(pokemonUrl);
    const pokemons: PokemonResults = await response.json();
    return pokemons;
  }
}

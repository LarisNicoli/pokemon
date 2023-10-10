export interface PokemonResults {
  count: number;
  next: string;
  previus?: string;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url: string;
}

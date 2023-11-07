import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { Pokemon, SimplePokemon } from "../../types";
import { PokemonService } from "../../services/pokemon";
import { Loader } from "../../components/Loader";
import { Card } from "../../components/Card";
import { Pagination } from "../../Pagination";

export const Home = () => {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState<string | undefined>("");
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemons = useCallback(async (page: string) => {
    setIsLoading(true);

    try {
      const { results, next, previous } = await PokemonService.getPokemons(
        page
      );
      setPokemons(results);
      setNextPage(next);
      setPreviousPage(previous);
    } catch (error) {
      console.error("Erro na busca de pokémons", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNextPage = () => {
    getPokemons(nextPage);
  };

  const handlePreviousPage = () => {
    if (!previousPage) return;
    getPokemons(previousPage);
  };

  useEffect(() => {
    getPokemons("");
  }, [getPokemons]);

  const onHandleSearch = async (value: string) => {
    try {
      const searchedPokemonResult = await PokemonService.searchPokemon(value);
      if (searchedPokemonResult) {
        setPokemon(searchedPokemonResult);
      }

      if (!value) {
        setPokemon(undefined);
      }
    } catch (error) {
      console.error("Erro ao pesquisar pokémon:" + error);
    }
  };

  return (
    <div className="h-full m-full bg-blue-100">
      <Header title="Pokédex">
        <Input onHandleSearch={onHandleSearch} />
      </Header>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <main className="mt-5 md:mt-10 flex justify-center flex-wrap">
          {!pokemon &&
            pokemons.map((pokemon) => (
              <Card key={pokemon.name} simplePokemon={pokemon} />
            ))}

          {pokemon && <Card pokemonSearched={pokemon} />}
        </main>
      )}

      {!pokemon && (
        <footer className="flex w-full justify-center p-5 text-xl">
          <Pagination
            previousPage={previousPage}
            onHandleNext={handleNextPage}
            onHandlePrevious={handlePreviousPage}
          />
        </footer>
      )}
    </div>
  );
};

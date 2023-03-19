import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_VALUES_TABLE } from "../../../constants";
import { PokemonService } from "../../../core/services/pokemon";
import { TableResponse } from "../../../core/types";

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<TableResponse>(DEFAULT_VALUES_TABLE);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = async () => {
    PokemonService.getAllPokemons({ limit: 1008 })
      .then(response => setPokemonList(response))
      .catch(e => console.log(e))
  };

  const filteredPokemon = pokemonList.results.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const redirectToPokemon = (url: string) => {
    return navigate(`/list/pokemon/${url.split('/')[6]}`)
  }
  

  return ({ setSearchQuery, searchQuery, filteredPokemon, redirectToPokemon })
}

export default usePokemonList

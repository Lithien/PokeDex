import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_VALUES_TABLE } from "../../../constants";
import { PokemonService } from "../../../core/services/pokemon";
import { NamedAPIResource, TableResponse } from "../../../core/types";

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<TableResponse>(DEFAULT_VALUES_TABLE);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    fetchPokemon({ limit: 57, offset: 0 })
  }, [])

  const fetchPokemon = async (params: object) => {
    PokemonService.getAllPokemons(params)
      .then(response => setPokemonList(response))
      .catch(e => console.log(e))
  };

  const filteredPokemon = pokemonList.results.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const redirectToPokemon = (url: string) => navigate(`/list/pokemon/${url.split('/')[6]}`)

  const getPokemons = (url: string) => {
    const params = Object.fromEntries(new URLSearchParams(new URL(url).search).entries())
    fetchPokemon(params)
  }
  

  // TO DO mirar como usarlo bien


  const onMouseOverImg = (e: HTMLImageElement, pokemon: NamedAPIResource) => e.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.url.split('/')[6]}.png`

  const onMouseOutImg = (e: HTMLImageElement, pokemon: NamedAPIResource) => e.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`      


  return ({ setSearchQuery, searchQuery, filteredPokemon, redirectToPokemon, onMouseOverImg, onMouseOutImg, pokemonList, getPokemons })
}

export default usePokemonList

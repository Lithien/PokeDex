import { useEffect, useState } from "react";
import { PokemonService } from "../../../core/services/pokemon";
import { Pokemon } from "../../../core/types";

const usePokemon = (id?: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    fetchPokemon()
  }, [id])

  const fetchPokemon = async () => {
    PokemonService.getPokemonById(id ?? '0')
      .then(response => setPokemon(response))
      .catch(e => console.log(e))
  };
  return ({ pokemon })
}

export default usePokemon
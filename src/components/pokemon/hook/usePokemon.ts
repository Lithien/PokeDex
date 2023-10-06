import { useEffect, useState } from "react";
import { PokemonService } from "../../../core/services/pokemon";
import { Pokemon, PokemonStat } from "../../../core/types";

const usePokemon = (id?: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [stats, setStats] = useState<PokemonStat[]>([])

  const max_stats: any = {
    'hp': 255,
    'attack': 190,
    'defense': 230,
    'special-attack': 194,
    'special-defense':230,
    'speed': 180
  }

  useEffect(() => {
    fetchPokemon()
  }, [id])

  useEffect(() => {
    const newStats: PokemonStat[] = []
    pokemon?.stats.map(stat => {
      stat.max_stat = max_stats[stat.stat.name]
      newStats.push(stat)
    })
    setStats(newStats)
  }, [pokemon])


  const fetchPokemon = async () => {
    PokemonService.getPokemonById(id ?? '0')
      .then(response => setPokemon(response))
      .catch(e => console.log(e))
  };

  const calcStat = (stat: number, max: number) => `${(stat / max * 100).toFixed(1)}%`

  return ({ pokemon, calcStat, stats })
}

export default usePokemon
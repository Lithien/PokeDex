import { apiFetcher } from "../fetchers"
import { TableProps, TableResponse, Pokemon, EvolutionChain, PokemonSpecies } from "../types"


class Service {
  getAllPokemons = async (params?: TableProps): Promise<TableResponse> =>
    apiFetcher.get({ urlMethod: '/pokemon', params })

  getPokemonById = async (id: string): Promise<Pokemon> =>
    apiFetcher.get({ urlMethod: `/pokemon/${id}` })

  getPokemonSpecies = async (id: number): Promise<PokemonSpecies> =>
    apiFetcher.get({ urlMethod: `/pokemon-species/${id}` })

  getEvolutionChain = async (id?: string): Promise<EvolutionChain> =>
    apiFetcher.get({ urlMethod: `/evolution-chain/${id}` })
}

export const PokemonService = new Service()

import { apiFetcher } from "../fetchers"
import { TableProps, TableResponse, Pokemon } from "../types"


class Service {
  getAllPokemons = async (params?: TableProps): Promise<TableResponse> =>
    apiFetcher.get({ urlMethod: '/pokemon', params })

  getPokemonById = async(id: string): Promise<Pokemon> =>
    apiFetcher.get({ urlMethod: `/pokemon/${id}`})
}

export const PokemonService = new Service()

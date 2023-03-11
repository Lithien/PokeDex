import { apiFetcher } from "../fetchers"
import { TableProps, TableResponse, ItemList, Pokemon } from "../types"


class Service {
  getAllPokemons = async (params?: TableProps): Promise<TableResponse> =>
    apiFetcher.get({ urlMethod: '/pokemon', params })

  getPokemonByName = async(name: string): Promise<Pokemon> =>
    apiFetcher.get({ urlMethod: `/pokemon/${name}`})
}

export const PokemonService = new Service()

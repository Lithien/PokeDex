import { apiFetcher } from '../fetchers'
import { TableProps, TableResponse } from '../types'
import { Pokemons } from '../types/pokemon'



class Service {
  getAllPokemons = async (params: TableProps): Promise<TableResponse<Pokemons>> =>
    apiFetcher.get({ urlMethod: '/pokemon', params })
}

export const PokemonService = new Service()

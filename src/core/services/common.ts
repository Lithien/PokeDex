import { apiFetcher } from "../fetchers"


class Service<T> {
  getDataFromURL = async (url: string): Promise<T> =>
    apiFetcher.get({ urlMethod: url })
}

export const PokemonService = new Service()

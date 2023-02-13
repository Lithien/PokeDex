import axios from 'axios'

import type { AxiosInstance } from 'axios'

/* [start] ------------------ TYPES ---------------------------------- */

interface GetParams<T> {
  urlMethod: string
  params?: T
}
/* [end] -------------------- TYPES ---------------------------------- */



export default class AxiosFetcher {
  #axios: AxiosInstance
  #serviceHost = ''

  constructor ({ serviceHost }: { serviceHost: string }) {
    this.#serviceHost = serviceHost
    this.#axios = axios.create()
  }

  async get <T, Params>({ urlMethod, params }: GetParams<Params>): Promise<T> {
    const serviceUrl = this.#getServiceUrl(urlMethod)
    return this.#axios.get(serviceUrl, { params }).then(r => r.data)
  }

  readonly #getServiceUrl = (urlMethod: string) => `${this.#serviceHost}${urlMethod}`
}

import { FetchersFactory } from './factory'


/* [start] ------------------ ALL SERVICES HOST MAPPING ---------------------------------- */
const SERVICES_HOST_MAPPER = {
  api: 'https://pokeapi.co/api/v2',
} as const
/* [end] -------------------- ALL SERVICES HOST MAPPING ---------------------------------- */


export type SERVICES_HOST_KEYS = keyof typeof SERVICES_HOST_MAPPER

export const getServiceHostByKey = (serviceKey: SERVICES_HOST_KEYS): string => {
  return SERVICES_HOST_MAPPER[serviceKey] ?? ''
}


/* [start] ------------------ EXPORTED FETCHERS ---------------------------------- */
export const apiFetcher = FetchersFactory.fetch()
/* [end] -------------------- EXPORTED FETCHERS ---------------------------------- */

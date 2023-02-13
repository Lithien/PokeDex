import AxiosFetcher from './AxiosFetcher'

import { getServiceHostByKey } from '.'

import type { SERVICES_HOST_KEYS } from '.'


export class FetchersFactory {
  static fetch = (service: SERVICES_HOST_KEYS = 'api'): AxiosFetcher =>
    new AxiosFetcher({ serviceHost: getServiceHostByKey(service) })
}

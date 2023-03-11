import { ItemList } from "../common"

export interface TableProps {
  lang?: string
  limit?: number
  offset?: number
}

export interface TableResponse {
  results: Array<ItemList>
  count: number
  next: string
  previous: string
}

export interface TableProps {
  lang?: string
  limit?: number
  offset?: number
}

export interface TableResponse<T> {
  results: Array<T>
  count: number
  next: string
  previous: string
}

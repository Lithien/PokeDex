import { TableResponse } from '../../core/types'

interface TableListPropsT {
  data: TableResponse
}

const TableList = ({ data }: TableListPropsT) => {
  return (

    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.results.map(item => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default TableList

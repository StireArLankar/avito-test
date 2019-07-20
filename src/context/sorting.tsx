import React from 'react'
import sorting from './sorting-data'

const temp = sorting.map((el) => el.value)
type sorting = typeof temp[number]

export interface ISortingContext {
  sorting: sorting
  updateSorting: (value: sorting) => void
}

const SortingContext = React.createContext<ISortingContext>({
  sorting: 'popularity',
  updateSorting: () => null
})

export default SortingContext

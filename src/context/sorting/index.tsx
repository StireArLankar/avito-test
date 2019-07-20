import React from 'react'
import sortingData, { ISortingData, sortingValue } from './sorting-data'

export interface ISortingContext {
  sortingData: ISortingData
  value: sortingValue
  updateSorting: (value: sortingValue) => void
}

const SortingContext = React.createContext<ISortingContext>({
  sortingData,
  value: 'popularity',
  updateSorting: () => null
})

export default SortingContext

import React, { useState } from 'react'
import SortingContext from 'Context/sorting'
import sortingData, { sortingValue } from 'Context/sorting/sorting-data'

const withSorting = (Component: any) => (props: any) => {
  const [value, setValue] = useState<sortingValue>('popularity')

  const updateSorting = (val: sortingValue) => {
    if (val === value) return
    setValue(val)
  }

  return (
    <SortingContext.Provider value={{ sortingData, value, updateSorting }}>
      <Component {...props} />
    </SortingContext.Provider>
  )
}

export default withSorting

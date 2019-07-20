import React, { useState } from 'react'

import FiltersContext, { initialFilters, IFiltersValues } from 'Context/filters'

const withSorting = (Component: any) => (props: any) => {
  const [ filters, setFilters ] = useState<IFiltersValues>(initialFilters)

  const updateFilters = (name: string, value: any) => {
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
  }

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      <Component {...props} />
    </FiltersContext.Provider>
  )
}

export default withSorting

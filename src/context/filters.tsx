import React from 'react'
import filters from './filters-data'
import { IProduct } from 'Context/products'

export const initialFilters = filters.reduce((acc, el) => ({ ...acc, [el.name]: el.default_value }), {})

type rules = {
  [key: string]: (array: IProduct[], value: any, favourites?: string[]) => any[]
}

export const filterRules: rules = filters.reduce((acc, el) => ({ ...acc, [el.name]: el.rule }), {})

export interface IFiltersValues {
  [key: string]: any
}

export interface IFiltersContext {
  filters: IFiltersValues
  updateFilters: (name: string, value: any) => void
}

const FiltersContext = React.createContext<IFiltersContext>({
  filters: initialFilters,
  updateFilters: () => null
})

export default FiltersContext

import { compose } from '@typed/compose'
import React, { useState, useEffect, useContext } from 'react'
import ProductsContext, { IProduct } from 'Context/products'
import withSellers from './with-sellers'
import withFilters from './with-filters'
import FiltersContext, { filterRules } from 'Context/filters'
import withSorting from './with-sorting'
import SortingContext from 'Context/sorting'
import withFavourites from './with-favourites'
import FavouritesContext from 'Context/favourites'
import Main from 'Src/pages/main'

import style from './app.module.scss'

const App = () => {
  const [ items, setItems ] = useState<IProduct[]>([])
  const [ filteredItems, setFilteredItems ] = useState<IProduct[]>([])

  const { filters } = useContext(FiltersContext)

  const sortingCtx = useContext(SortingContext)

  const { favourites } = useContext(FavouritesContext)

  const fetchItems = async () => {
    const url = 'http://avito.dump.academy/products'
    const { data } = await fetch(url).then((res) => res.json())
    return data
  }

  useEffect(() => {
    const load = async () => {
      const loadedItems = await fetchItems()
      setItems(loadedItems)
      setFilteredItems(loadedItems)
    }

    load()
  }, [])

  const sortingValue = sortingCtx.value
  const sortingRule = sortingCtx.sortingData[sortingValue].rule

  useEffect(() => {
    const updateItems = () => {
      const newItems = Object.entries(filterRules).reduce((acc, [ key, rule ]) => {
        return rule(acc, filters[key], favourites)
      }, items)
      const sortedItems = sortingRule(newItems)
      setFilteredItems(sortedItems)
    }

    const debounce = setTimeout(updateItems, 300)
    return () => { clearTimeout(debounce) }
  }, [favourites, filters, items, sortingRule])

  return (
    <ProductsContext.Provider value={{ products: filteredItems }}>
      <div className={style.wrapper}>
        <Main />
      </div>
    </ProductsContext.Provider>
  )
}

const composition = compose(
  withSellers,
  withFilters,
  withFavourites,
  withSorting
)

export default composition(App)

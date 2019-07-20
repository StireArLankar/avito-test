import React, { useState, useEffect } from 'react'
import ProductsContext, { IProduct } from 'Context/products'
import SellersContext, { ISeller } from 'Context/sellers'
import FiltersContext, { initialFilters, IFiltersValues, filterRules } from 'Context/filters'
import Main from 'Src/pages/main'
import style from './app.module.scss'

const App = () => {
  const [ items, setItems ] = useState<IProduct[]>([])
  const [ filteredItems, setFilteredItems ] = useState<IProduct[]>([])
  const [ sellers, setSellers ] = useState<ISeller[]>([])
  const [ favourites, setFavourites ] = useState<string[]>([])
  const [ filters, setFilters ] = useState<IFiltersValues>(initialFilters)

  const temp = Object.values(filters)

  useEffect(() => {
    const newItems = Object.entries(filterRules).reduce((acc, [ key, rule ]) => {
      return rule(acc, filters[key], favourites)
    }, items)
    setFilteredItems(newItems)
  }, [favourites, ...temp, items])

  const updateFilters = (name: string, value: any) => {
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
  }

  const getFavourites = async () => {
    const cached = localStorage.getItem(`books`)
    const data = cached ? JSON.parse(cached) : []
    return data
  }

  const fetchItems = async () => {
    const url = 'http://avito.dump.academy/products'
    const { data } = await fetch(url).then((res) => res.json())
    console.log('hello')
    return data
  }

  const fetchSellers = async () => {
    const url = 'https://avito.dump.academy/sellers'
    const { data } = await fetch(url).then((res) => res.json())
    return data
  }

  const addProductToFav = (id: string) => {
    const newFav = [ ...favourites, id ]
    setFavourites(newFav)
    localStorage.setItem(`avito-fav`, JSON.stringify(newFav))
  }

  const removeProductFromFav = (id: string) => {
    const newFav = favourites.filter((el: string) => el !== id)
    setFavourites(newFav)
    localStorage.setItem(`avito-fav`, JSON.stringify(newFav))
  }

  useEffect(() => {
    const load = async () => {
      const loadedSellers = await fetchSellers()
      const loadedItems = await fetchItems()
      const localFavourites = await getFavourites()
      setItems(loadedItems)
      setFilteredItems(loadedItems)
      setSellers(loadedSellers)
      setFavourites(localFavourites)
    }

    load()
  }, [])

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      <ProductsContext.Provider value={{ products: filteredItems, favourites, addProductToFav, removeProductFromFav }}>
        <SellersContext.Provider value={{ sellers }}>
          <main className={style.wrapper}>
            <Main />
          </main>
        </SellersContext.Provider>
      </ProductsContext.Provider>
    </FiltersContext.Provider>
  )
}

export default App

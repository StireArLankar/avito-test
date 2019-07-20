import React, { useState, useEffect } from 'react'
import ProductsContext, { IProduct } from 'Context/products'
import SellersContext, { ISeller } from 'Context/sellers'
import Main from 'Src/pages/main'
import style from './app.module.scss'

const App = () => {
  const [ items, setItems ] = useState<IProduct[] | []>([])
  const [ filteredItems, setFilteredItems ] = useState<IProduct[] | []>([])
  const [ sellers, setSellers ] = useState<ISeller[] | []>([])

  const fetchItems = async () => {
    const url = 'http://avito.dump.academy/products'
    const { data } = await fetch(url).then((res) => res.json())
    return data
  }

  const fetchSellers = async () => {
    const url = 'https://avito.dump.academy/sellers'
    const { data } = await fetch(url).then((res) => res.json())
    return data
  }

  useEffect(() => {
    const getItems = async () => {
      const loadedItems = await fetchItems()
      setItems(loadedItems)
      setFilteredItems(loadedItems)
    }

    const getSellers = async () => {
      const loadedSellers = await fetchSellers()
      setSellers(loadedSellers)
    }

    const load = async () => {
      await getItems()
      await getSellers()
    }

    load()
  }, [])

  return (
    <ProductsContext.Provider value={{ products: filteredItems }}>
      <SellersContext.Provider value={{ sellers }}>
        <main className={style.wrapper}>
          <Main />
        </main>
      </SellersContext.Provider>
    </ProductsContext.Provider>
  )
}

export default App

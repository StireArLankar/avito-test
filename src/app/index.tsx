import React, { useState, useEffect } from 'react'
import Context, { IItem } from 'Src/context'
import Main from 'Src/pages/main'
import style from './app.module.scss'

const App = () => {
  const [ items, setItems ] = useState<IItem[] | []>([])
  const [ filteredItems, setFilteredItems ] = useState<IItem[] | []>([])

  const fetchItems = async () => {
    const url = 'http://avito.dump.academy/products'
    const { data } = await fetch(url).then((res) => res.json())
    return data
  }

  useEffect(() => {
    const getItems = async () => {
      const loadedItems = await fetchItems()
      setItems(loadedItems)
      setFilteredItems(loadedItems)
    }

    getItems()
  }, [])

  return (
    <Context.Provider value={ { items: filteredItems } }>
      <main className={ style.wrapper }>
        <Main />
      </main>
    </Context.Provider>
  )
}

export default App

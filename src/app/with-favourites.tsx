import React, { useState, useEffect } from 'react'
import FavouritesContext from 'Context/favourites'

const withSorting = (Component: any) => (props: any) => {
  const [ favourites, setFavourites ] = useState<string[]>([])

  const getFavourites = async () => {
    const cached = localStorage.getItem('avito-fav')
    const data = cached ? JSON.parse(cached) : []
    return data
  }

  const addProductToFav = (id: string) => {
    const newFav = [ ...favourites, id ]
    setFavourites(newFav)
    localStorage.setItem('avito-fav', JSON.stringify(newFav))
  }

  const removeProductFromFav = (id: string) => {
    const newFav = favourites.filter((el: string) => el !== id)
    setFavourites(newFav)
    localStorage.setItem('avito-fav', JSON.stringify(newFav))
  }

  useEffect(() => {
    const load = async () => {
      const localFavourites = await getFavourites()
      setFavourites(localFavourites)
    }

    load()
  }, [])

  return (
    <FavouritesContext.Provider value={{ favourites, addProductToFav, removeProductFromFav }}>
      <Component {...props} />
    </FavouritesContext.Provider>
  )
}

export default withSorting

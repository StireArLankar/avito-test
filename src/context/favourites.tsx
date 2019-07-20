import React from 'react'

export interface IFavouritesContext {
  favourites: string[]
  addProductToFav: (id: string) => void
  removeProductFromFav: (id: string) => void
}

const FavouritesContext = React.createContext<IFavouritesContext>({
  favourites: [],
  addProductToFav: () => null,
  removeProductFromFav: () => null
})

export default FavouritesContext

import React from 'react'

export interface IItem {
  temp: number
}

interface IContext {
  temp: IItem[]
}

const BookContext = React.createContext<IContext>({
  temp: [{ temp: 0 }]
})

export default BookContext

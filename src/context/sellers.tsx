import React from 'react'

export interface ISeller {
  category: string
  isCompany: boolean
  name: string
  rating: number
  id: string
}

interface IContext {
  sellers: ISeller[]
}

const SellersContext = React.createContext<IContext>({
  sellers: []
})

export default SellersContext

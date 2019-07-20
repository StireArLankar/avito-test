import React from 'react'

type Base = {
  address: {
    lat: number
    lng: number
  }
  category: string
  id: string
  pictures: string[]
  price: number
  relationships: {
    seller: string
  }
  title: string
}

interface IAuto extends Base {
  body_type: string
  gearbox: string
  year: number
}

interface ILaptop extends Base {
  laptop_type: string
  processor: string
  ram: string
  screen: string
}

interface ICamera extends Base {
  camera_type: string
  matrix_resolution: number
  video_resolution: string
}

interface IImmovable extends Base {
  property_type: string
  rooms: number
  square: number
}

export type IProduct = IAuto | ILaptop | ICamera | IImmovable

interface IContext {
  products: IProduct[]
}

const ProductsContext = React.createContext<IContext>({
  products: []
})

export default ProductsContext

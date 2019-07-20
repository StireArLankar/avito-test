import React, { useContext } from 'react'
import ProductsContext from 'Context/products'
import ProductPreview from './ProductPreview'

const ProductsList = () => {
  const context = useContext(ProductsContext)

  const renderProducts = () => {
    return context.products.map((product) => (
      <li key={product.id}>
        <ProductPreview {...product} />
      </li>
    ))
  }

  return (
    <ul>
      {renderProducts()}
    </ul>
  )
}

export default ProductsList

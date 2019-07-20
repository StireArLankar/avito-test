import React, { useContext, useState } from 'react'
import ProductsContext from 'Context/products'
import ProductPreview from './ProductPreview'
import styles from './products.module.scss'

const ProductsList = () => {
  const [shownAmount, setShownAmount] = useState(24)
  const context = useContext(ProductsContext)

  const renderProducts = () => {
    return context.products.slice(0, shownAmount).map((product) => (
      <li key={product.id} className={styles.item}>
        <ProductPreview {...product} />
      </li>
    ))
  }

  const renderFlexFixers = () => {
    return (new Array(6).fill(1)).map((el, index) => <li key={index} className={styles.item} />)
  }

  const showMore = () => {
    setShownAmount(shownAmount + 24)
  }

  const renderShowMoreButton = () => {
    return context.products.length > shownAmount
      ? <button type='button' onClick={showMore}>Показать еще</button>
      : null
  }

  return (
    <div>
      <ul className={styles.list}>
        {renderProducts()}
        {renderFlexFixers()}
      </ul>
      {renderShowMoreButton()}
    </div>
  )
}

export default ProductsList

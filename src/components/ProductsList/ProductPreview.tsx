import React, { useContext, Fragment } from 'react'
import { getFormattedPrice } from 'Src/utils'
import SellersContext from 'Context/sellers'
import ProductsContext, { IProduct } from 'Context/products'
import FavButton from './FavButton'

import styles from './product.module.scss'

const ProductPreview = (props: IProduct) => {
  const sellersContext = useContext(SellersContext)
  const sellerId = props.relationships.seller
  const seller = sellersContext.sellers.find((el) => el.id === sellerId)

  const productsContext = useContext(ProductsContext)
  const isFav = productsContext.favourites.includes(props.id)

  const onFavClick = () => {
    return isFav
      ? productsContext.removeProductFromFav(props.id)
      : productsContext.addProductToFav(props.id)
  }

  const renderSellerInfo = () => {
    return seller && (
      <Fragment>
        <p>{seller.name}</p>
        <span>{seller.rating}</span>
      </Fragment>
    )
  }

  return (
    <article>
      <h3>{props.title}</h3>
      <div className={styles.imgWrapper}>
        <img src={props.pictures[0]} alt={props.title} className={styles.img}/>
        <span>{props.pictures.length - 1}</span>
      </div>
      <p>{props.price && getFormattedPrice(props.price)}</p>
      <p>10 октября 10:37</p>
      {renderSellerInfo()}
      <FavButton isFav={isFav} onClick={onFavClick}/>
    </article>
  )
}

export default ProductPreview

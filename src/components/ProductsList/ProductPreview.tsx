import cn from 'classnames'
import React, { useContext, Fragment } from 'react'
import { getFormattedPrice } from 'Src/utils'
import SellersContext from 'Context/sellers'
import { IProduct } from 'Context/products'
import FavouritesContext from 'Context/favourites'
import FavButton from './FavButton'

import styles from './product.module.scss'

const ProductPreview = (props: IProduct) => {
  const sellersContext = useContext(SellersContext)
  const favouritesCtx = useContext(FavouritesContext)

  const sellerId = props.relationships.seller
  const seller = sellersContext.sellers.find((el) => el.id === sellerId)

  const isFav = favouritesCtx.favourites.includes(props.id)

  const onFavClick = () => {
    return isFav
      ? favouritesCtx.removeProductFromFav(props.id)
      : favouritesCtx.addProductToFav(props.id)
  }

  const renderSellerInfo = () => {
    return seller && (
      <Fragment>
        <p className={cn(styles.seller, styles.paragraph)}>
          <p className={styles.sellerTitle}>Продавец:</p>
          <p className={styles.paragraph}>{seller.name}</p>
          <p className={styles.paragraph}>{seller.rating}</p>
        </p>
      </Fragment>
    )
  }

  const renderPrice = () => {
    return props.price
      ? (
        <Fragment>
          <span>Стоимость:</span>
          <span>{`${getFormattedPrice(props.price)}₽`}</span>
        </Fragment>
      )
      : 'Цена отсутствует'
  }

  return (
    <article className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{props.title.slice(0, 1).toUpperCase() + props.title.slice(1)}</h3>
      </div>
      <div className={styles.imgWrapper}>
        <img src={props.pictures[0]} alt={props.title} className={styles.img}/>
        <span className={styles.imgCount}>{props.pictures.length - 1}</span>
      </div>
      <div className={styles.description}>
        <p className={cn(styles.paragraph, styles.price)}>
          {renderPrice()}
        </p>
        <p className={styles.paragraph}>10 октября 10:37</p>
        {renderSellerInfo()}
      </div>
      <div className={styles.favWrapper}>
        <FavButton isFav={isFav} onClick={onFavClick}/>
      </div>
    </article>
  )
}

export default ProductPreview

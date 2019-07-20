import React, { useContext, Fragment } from 'react'
import { getFormattedPrice } from 'Src/utils'
import SellersContext from 'Context/sellers'
import { IProduct } from 'Context/products'

const ProductPreview = (props: IProduct) => {
  const context = useContext(SellersContext)
  const sellerId = props.relationships.seller
  const seller = context.sellers.find((el) => el.id === sellerId)

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
      <div>
        <img src={props.pictures[0]} alt={props.title}/>
        <span>{props.pictures.length - 1}</span>
      </div>
      <p>{getFormattedPrice(props.price)}</p>
      <p>10 октября 10:37</p>
      {renderSellerInfo()}
    </article>
  )
}

export default ProductPreview

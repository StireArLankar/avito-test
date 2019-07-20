import React from 'react'

interface IProps {
  isFav: boolean
  onClick: () => void
}

const FavButton = (props: IProps) => {
  const { isFav, onClick } = props
  return <button type='button' onClick={onClick} style={{ backgroundColor: isFav ? 'red' : 'green' }}>fav</button>
}

export default FavButton

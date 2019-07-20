import cn from 'classnames'
import React from 'react'
import { ReactComponent as Logo } from './heart.svg'

import styles from './fav.module.scss'

interface IProps {
  isFav: boolean
  onClick: () => void
}

const FavButton = (props: IProps) => {
  const { isFav, onClick } = props
  return (
    <button type='button' onClick={onClick} className={cn(styles.button, { [styles.active]: isFav })}>
      <Logo className={styles.svg}/>
    </button>
  )
}

export default FavButton

import cn from 'classnames'
import React, { useContext } from 'react'
import SortingContext from 'Context/sorting'
import { ISorting } from 'Context/sorting/sorting-data'

import styles from './sorting.module.scss'

const SortingItem = (props: ISorting) => {
  const context = useContext(SortingContext)

  const onClick = () => {
    context.updateSorting(props.value)
  }

  const buttonClassNames = cn(styles.button, { [styles.active]: context.value === props.value })

  return (
    <div className={styles.buttonWrapper}>
      <button
        type='button'
        className={buttonClassNames}
        disabled={props.disabled}
        onClick={onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

export default SortingItem

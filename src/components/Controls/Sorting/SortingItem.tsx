import React, { useContext } from 'react'
import SortingContext from 'Context/sorting'
import { ISorting } from 'Context/sorting/sorting-data'

import styles from './sorting.module.scss'

const SortingItem = (props: ISorting) => {
  const context = useContext(SortingContext)

  const onClick = () => {
    context.updateSorting(props.value)
  }

  return (
    <div className={styles.buttonWrapper}>
      <button
        type='button'
        className={styles.button}
        disabled={props.disabled}
        onClick={onClick}
      >
        {props.title}
      </button>
    </div>
  )
}

export default SortingItem

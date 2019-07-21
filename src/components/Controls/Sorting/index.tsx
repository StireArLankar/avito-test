import cn from 'classnames'
import React, { useContext } from 'react'
import SortingItem from './SortingItem'
import SortingContext from 'Context/sorting'

import styles from './sorting.module.scss'

interface IProps {
  cn: string
}

const Sorting = (props: IProps) => {
  const context = useContext(SortingContext)

  const renderSortings = () => (
    Object.values(context.sortingData).map((item) => (
      <li key={item.value} className={styles.item}>
        <SortingItem {...item} />
      </li>
    ))
  )

  return (
    <ul className={cn(styles.list, props.cn)}>
      {renderSortings()}
    </ul>
  )
}

export default Sorting

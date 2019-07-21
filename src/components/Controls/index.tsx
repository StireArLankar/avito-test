import React from 'react'
import Filters from './Filters'
import Sorting from './Sorting'

import styles from './controls.module.scss'

const Controls = () => {
  return (
    <div className={styles.wrapper}>
      <Filters cn={styles.left}/>
      <Sorting cn={styles.right} />
    </div>
  )
}

export default Controls

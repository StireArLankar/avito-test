import React, { useContext } from 'react'
import FiltersContext from 'Context/filters'
import { ICheckFilter } from 'Context/filters-data'

import styles from '../filters.module.scss'

const Checkbox = (props: ICheckFilter) => {
  const context = useContext(FiltersContext)

  const onChange = () => {
    context.updateFilters(props.name, !context.filters[props.name])
  }

  return (
    <div className={styles.filter}>
      <p className={styles.label}>{props.title}</p>
      <label>
        <input
          type='checkbox'
          id={props.name}
          checked={context.filters[props.name]}
          onChange={onChange}
          className={styles.checkbox}
        />
        <span className={styles.checkboxIcon}/>
      </label>
    </div>
  )
}

export default Checkbox

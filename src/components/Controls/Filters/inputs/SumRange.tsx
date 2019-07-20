import React, { useContext } from 'react'
import FiltersContext from 'Context/filters'
import { ISumRangeFilter } from 'Context/filters-data'

import styles from '../filters.module.scss'

const SumRange = (props: ISumRangeFilter) => {
  const context = useContext(FiltersContext)

  const onFieldChange = (postfix: string) => (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (!isNaN(Number(value)) || !value) {
      const filterValue = { ...context.filters[props.name], [postfix]: value }
      context.updateFilters(props.name, filterValue)
    }
  }

  return (
    <div className={styles.filter}>
      <p className={styles.label}>{props.title}</p>
      <div className={styles.sumWrapper}>
        <div className={styles.sumItem}>
          <label htmlFor={`${props.name}_from`} className={styles.label}>От</label>
          <input
            type='text'
            id={`${props.name}_from`}
            value={context.filters[props.name].from}
            onChange={onFieldChange('from')}
            className={styles.input}
            autoComplete='off'
          />
        </div>
        <div className={styles.sumItem}>
          <label htmlFor={`${props.name}_to`} className={styles.label}>До</label>
          <input
            type='text'
            id={`${props.name}_to`}
            value={context.filters[props.name].to}
            onChange={onFieldChange('to')}
            className={styles.input}
            autoComplete='off'
          />
        </div>
      </div>
    </div>
  )
}

export default SumRange

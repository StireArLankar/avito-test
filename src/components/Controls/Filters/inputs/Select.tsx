import React, { useContext } from 'react'
import { ISelectFilter, selectOption } from 'Context/filters-data'
import FiltersContext from 'Context/filters'
import ReactSelect from 'react-select'

import styles from '../filters.module.scss'

const Select = (props: ISelectFilter) => {
  const context = useContext(FiltersContext)

  const onChange = (selectedOption: selectOption | null) => {
    const value = selectedOption ? selectedOption.value : null
    context.updateFilters(props.name, value)
  }

  const val = props.data.find((option) => option.value === context.filters[props.name])

  return (
    <div className={styles.filter}>
      <label className={styles.label}>{props.title}</label>
      <ReactSelect
        value={val}
        options={props.data}
        onChange={onChange}
        placeholder={props.placeholder}
        isClearable={true}
        className={styles.select}
      />
    </div>
  )
}

export default Select

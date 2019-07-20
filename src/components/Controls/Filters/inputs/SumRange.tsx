import React, { useContext } from 'react'
import FiltersContext from 'Context/filters'
import { ISumRangeFilter } from 'Context/filters-data'

const SumRange = (props: ISumRangeFilter) => {
  const context = useContext(FiltersContext)

  const onFieldChange = (postfix: string) => (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value)
    if (!isNaN(value)) {
      const filterValue = { ...context.filters[props.name], [postfix]: value }
      context.updateFilters(props.name, filterValue)
    }
  }

  return (
    <div>
      <p>{props.title}</p>
      <div>
        <label htmlFor={`${props.name}_from`}>От</label>
        <input
          type='text'
          id={`${props.name}_from`}
          value={context.filters[props.name].from}
          onChange={onFieldChange('from')}
        />
      </div>
      <div>
        <label htmlFor={`${props.name}_to`}>До</label>
        <input
          type='text'
          id={`${props.name}_to`}
          value={context.filters[props.name].to}
          onChange={onFieldChange('to')}
        />
      </div>
    </div>
  )
}

export default SumRange

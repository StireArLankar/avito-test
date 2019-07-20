import React, { useContext } from 'react'
import { ISelectFilter, selectOption } from 'Context/filters-data'
import FiltersContext from 'Context/filters'
import ReactSelect from 'react-select'

const Select = (props: ISelectFilter) => {
  const context = useContext(FiltersContext)

  const onChange = ({ value }: selectOption) => {
    context.updateFilters(props.name, value)
  }

  return (
    <div>
      <ReactSelect
        value={context.filters[props.name]}
        options={props.data}
        onChange={onChange}
        clearable={true}
      />
    </div>
  )
}

export default Select

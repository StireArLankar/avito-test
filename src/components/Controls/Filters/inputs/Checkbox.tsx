import React, { useContext } from 'react'
import FiltersContext from 'Context/filters'
import { ICheckFilter } from 'Context/filters-data'

const Checkbox = (props: ICheckFilter) => {
  const context = useContext(FiltersContext)

  const onChange = () => {
    context.updateFilters(props.name, !context.filters[props.name])
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input type='checkbox' id={props.name} checked={context.filters[props.name]} onChange={onChange}/>
    </div>
  )
}

export default Checkbox

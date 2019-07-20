import React from 'react'
import filters from 'Context/filters-data'
import Checkbox from './inputs/Checkbox'
import Select from './inputs/Select'
import SumRange from './inputs/SumRange'

const mapper = {
  select: (props: any) => <Select {...props} />,
  sum_range: (props: any) => <SumRange {...props} />,
  checkbox: (props: any) => <Checkbox {...props} />
}

const Fitlers = () => {
  const renderFilters = () => (
    filters.map((item) => (
      <li key={item.name}>
        {mapper[item.type](item)}
      </li>
    ))
  )
  return (
    <ul>
      {renderFilters()}
    </ul>
  )
}

export default Fitlers

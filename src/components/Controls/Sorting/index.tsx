import React from 'react'
import sortings from './data'
import SortingItem from './SortingItem'

const Sorting = () => {
  const renderSortings = () => (
    sortings.map((item) => (
      <li key={item.name}>
        <SortingItem />
      </li>
    ))
  )
  return (
    <ul>
      {renderSortings()}
    </ul>
  )
}

export default Sorting

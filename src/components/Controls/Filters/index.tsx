import cn from 'classnames'
import React from 'react'
import filters from 'Context/filters-data'
import Checkbox from './inputs/Checkbox'
import Select from './inputs/Select'
import SumRange from './inputs/SumRange'

import styles from './filters.module.scss'

interface IProps {
  cn: string
}

const mapper = {
  select: (props: any) => <Select {...props} />,
  sum_range: (props: any) => <SumRange {...props} />,
  checkbox: (props: any) => <Checkbox {...props} />
}

const Fitlers = (props: IProps) => {
  const renderFilters = () => (
    filters.map((item) => (
      <li key={item.name} className={styles.item}>
        {mapper[item.type](item)}
      </li>
    ))
  )
  return (
    <ul className={cn(styles.list, props.cn)}>
      {renderFilters()}
    </ul>
  )
}

export default Fitlers

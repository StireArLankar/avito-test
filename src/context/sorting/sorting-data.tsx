import { IProduct } from 'Context/products'

const popularitySorting: sortingRule = (array) => array.slice()

const priceSorting: sortingRule = (array) => (
  array.slice().sort((a, b) => {
    if (!a.price) return 1
    if (!b.price) return -1
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    return 0
  })
)

const dateSorting: sortingRule = (array) => array.slice()

const sorting: ISortingData = {
  popularity: {
    title: 'По популярности',
    value: 'popularity',
    rule: popularitySorting
  },
  price: {
    title: 'По возрастанию цены',
    value: 'price',
    rule: priceSorting
  },
  date: {
    title: 'По дате размещения объявлений',
    value: 'date',
    disabled: true,
    rule: dateSorting
  }
}

export type sortingValue = 'popularity' | 'price' | 'date'

export type ISortingData = {
  [key in sortingValue]: ISorting
}

export interface ISorting {
  title: string
  value: sortingValue
  disabled?: boolean
  rule: sortingRule
}

type sortingRule = (array: IProduct[]) => IProduct[]

export default sorting

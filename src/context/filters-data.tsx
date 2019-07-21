import { IProduct } from 'Context/products'

type sumval = {
  from: string
  to: string
}

const sumRule = (array: IProduct[], value: sumval) => (
  array.filter((item) => {
    const bottomCheck = value.from ? Number(value.from) < item.price : true
    const topCheck = value.to ? Number(value.to) > item.price : true
    return bottomCheck && topCheck
  })
)

const favRule = (array: IProduct[], showOnlyFav: boolean, favourites: string[]) => (
  showOnlyFav ? array.filter((item) => favourites.includes(item.id)) : array
)

const data: IFilter[] = [
  {
    name: 'type',
    title: 'Категория',
    type: 'select',
    default_value: null,
    placeholder: '',
    data: [
      { value: 'immovable', label: 'Недвижимость' },
      { value: 'cameras', label: 'Фотоаппараты' },
      { value: 'auto', label: 'Автомобили' },
      { value: 'laptops', label: 'Ноутбуки' }
    ],
    rule: (array: IProduct[], category: string) => category ? array.filter((item) => item.category === category) : array
  },
  {
    name: 'sum',
    title: 'Сумма',
    type: 'sum_range',
    default_value: {
      from: '',
      to: ''
    },
    rule: sumRule
  },
  {
    name: 'show_only_fav',
    title: 'Показывать только избранное',
    type: 'checkbox',
    default_value: false,
    rule: favRule
  }
]

interface IBaseFilter {
  name: string
  title: string
}

export interface ISelectFilter extends IBaseFilter {
  type: 'select'
  default_value: null
  placeholder: string
  data: selectOption[]
  rule: (array: IProduct[], category: string) => IProduct[]
}

export type selectOption = {
  value: string
  label: string
}

export interface ISumRangeFilter extends IBaseFilter {
  type: 'sum_range'
  default_value: sumval
  rule: (array: IProduct[], value: sumval) => IProduct[]
}

export interface ICheckFilter extends IBaseFilter {
  type: 'checkbox'
  default_value: boolean
  rule: (array: IProduct[], showOnlyFav: boolean, favourites: string[]) => IProduct[]
}

export type IFilter = ISelectFilter | ISumRangeFilter | ICheckFilter

export default data

const sorting: ISorting[] = [
  {
    title: 'По популярности',
    value: 'popularity'
  },
  {
    title: 'По возрастанию цены',
    value: 'price'
  },
  {
    title: 'По дате размещения объявлений',
    value: 'date',
    disabled: true
  }
]

export interface ISorting {
  title: string
  value: string
  disabled?: boolean
}

export default sorting

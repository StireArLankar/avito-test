export const getFormattedPrice = (price: number | string | undefined) => {
  // return price
  if (!price) return 'Цена отсутствует'
  return Number(price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$& ')
}

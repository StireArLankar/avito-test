export const getFormattedPrice = (price: number | string) => {
  // return price
  return Number(price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$& ')
}

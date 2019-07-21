export const getFormattedPrice = (price: number | string) => {
  return Number(price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$& ')
}

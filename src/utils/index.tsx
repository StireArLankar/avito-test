export const getFormattedPrice = (price: number) => {
  return price.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$& ')
}

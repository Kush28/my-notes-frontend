export const getFormattedDate = (date) => {
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' }).substring(0, 3)
  return `${month} ${day}`
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getFormattedDate = (dateObj, long = false) => {
  const date = dateObj.getDate()
  const month = months[dateObj.getMonth()].substring(0, 3)
  if (!long) return `${month} ${date}`
  const day = days[dateObj.getDay()]
  return `${day}, ${month} ${date}`
}

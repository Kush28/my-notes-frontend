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

export const getFormatedTime = (dateObj) => {
  let hours = dateObj.getHours()
  let minutes = dateObj.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours %= 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const strTime = `${hours}:${minutes} ${ampm}`
  const currDate = new Date()
  if (
    currDate.getDate() === dateObj.getDate() &&
    currDate.getMonth() === dateObj.getMonth() &&
    currDate.getFullYear() === dateObj.getFullYear()
  )
    return strTime
  return `${getFormattedDate(dateObj, true)}, ${strTime} `
}

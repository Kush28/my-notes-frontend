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

export const getCurrTime = () => {
  const currDate = new Date()
  let hours = currDate.getHours()
  let minutes = currDate.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours %= 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const strTime = `${hours}:${minutes} ${ampm}`
  return strTime
}

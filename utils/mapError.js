export default (errorCode) => {
  switch (errorCode) {
    case 200:
      return 'OK'
    case 403:
      return 'You do not have permission'
    case 401:
      return 'Please login again!'
    default:
      return ''
  }
}

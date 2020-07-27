import cookie from 'js-cookie'

export const setAuthCookie = (value, key = 'access_token') => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/',
    })
  }
}

export const getAuthCookie = (key = 'access_token') => {
  if (process.browser) {
    return cookie.get(key)
  }
  return null
}

export const getAuthCookieFromServer = (req, key = 'access_token') => {
  if (!req || !req.headers || !req.headers.cookie) {
    return undefined
  }
  const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${key}=`))
  if (!rawCookie) {
    return undefined
  }
  return rawCookie.split('=')[1]
}

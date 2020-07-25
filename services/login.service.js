let loginWindow

const initiateLogin = (provider = 'google') => {
  if (provider === 'google') {
    const h = 500
    const w = 500
    const y = window.top.outerHeight / 2 + window.top.screenY - h / 2
    const x = window.top.outerWidth / 2 + window.top.screenX - w / 2
    loginWindow = window.open(
      process.env.GOOGLE_LOGIN_URL,
      'Login with Google',
      `width=${w},height=${h},top=${y}, left=${x}`,
    )
  }
}

const loginListener = (callback) => {
  window.addEventListener('message', (data) => {
    callback(data)
    setTimeout(() => {
      loginWindow.close()
    }, 1000)
  })
}

module.exports = { initiateLogin, loginListener }

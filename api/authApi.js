import Axios from 'axios'

const endPointUrl = process.env.SERVER_ENDPOINT

export const googleAuthUrl = () => `${endPointUrl}/auth/google`

export const authUserWithToken = (token) =>
  Axios({
    url: `${endPointUrl}/user/auth`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

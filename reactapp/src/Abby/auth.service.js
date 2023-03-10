import axios from 'axios'

class AuthService {
  register(obj) {
    return axios.post(`${process.env.REACT_APP_API_URL}/members/register`, obj)
  }
  login(obj) {
    return axios.post(`${process.env.REACT_APP_API_URL}/members/login`, obj)
  }
  checklogin(obj) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/members/checklogin`,
      obj
    )
  }

  forgetPassword(obj) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/members/forgetPassword`,
      obj
    )
  }

  changePassword(obj) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/members/changePassword`,
      obj
    )
  }
}

export default new AuthService()

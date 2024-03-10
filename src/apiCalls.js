import axios from 'axios'
import cookies from './utility/cookie'

export const loginCall = async (userCredential, dispatch) => {
  dispatch({type: 'LOGIN_START'})
  try {
    const res = await axios.post('/auth/login', userCredential)
    cookies.set('user', res.data)
    dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
  } catch (error) {
    dispatch({type: 'LOGIN_FAILURE', payload: error})
  }
}

import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'
import cookies from '../utility/cookie'

let userCookie = ''
if (cookies.get('user')) {
  userCookie = cookies.get('user')
}
const INITIAL_STATE = {
  user: userCookie || '',

  // {
  //   _id: userCookie._id || '',
  //   username: userCookie.username || '',
  //   email: userCookie.email || '',
  //   profilePicture: userCookie.profilePicture || '',
  //   coverPicture: userCookie.coverPicture || '',
  //   isAdmin: userCookie.isAdmin || false,
  //   followers: userCookie.followers || [],
  //   followings: userCookie.followings || [],
  // },
  isFetching: false,
  error: false,
}

console.log('INITIAL_STATE.user is: ', INITIAL_STATE)
console.log('userCookie is:', userCookie)

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

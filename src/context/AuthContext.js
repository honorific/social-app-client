import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id: '65cbbda36f480c9038fbc01a',
    username: 'taha',
    email: 'taha@test.com',
    profilePicture: '',
    coverPicture: '',
    isAdmin: false,
    followers: Array(empty),
    followings: Array(empty),
  },
  isFetching: false,
  error: false,
}

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

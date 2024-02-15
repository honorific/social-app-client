import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id: '64f836eb29e79267917b7214',
    username: 'john',
    email: 'johnn@test.com',
    profilePicture: '',
    coverPicture: '',
    isAdmin: false,
    followers: ['64f847e29765bf2746f12257', '64f9b471384b1de1aabfbdf4'],
    followings: [],
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

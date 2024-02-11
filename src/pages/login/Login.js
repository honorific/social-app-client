import {useContext, useState} from 'react'
import './login.css'
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import {CircularProgress} from '@mui/material'
import {Navigate, redirect} from 'react-router-dom'

const Login = () => {
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    loginCall({email, password}, dispatch)
  }
  return (
    <>
      {user && <Navigate to='/' />}
      <div className='login'>
        <div className='loginWrapper'>
          <div className='loginLeft'>
            <h3 className='loginLogo'>Social App</h3>
            <span className='loginDesc'>
              Connect with friends and the world arround you on Social App
            </span>
          </div>
          <div className='loginRight'>
            <form className='loginBox' onSubmit={handleClick}>
              <input
                placeholder='Email'
                className='loginInput'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder='Password'
                className='loginInput'
                type='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='loginButton' disabled={isFetching}>
                {isFetching ? (
                  <CircularProgress
                    sx={{color: 'white', mt: '5px'}}
                    size={25}
                  />
                ) : (
                  'Log In'
                )}
              </button>
              <span className='loginForgot'>Forgot Password</span>
              <button className='loginRegisterButton'>
                {isFetching ? (
                  <CircularProgress
                    sx={{color: 'white', mt: '5px'}}
                    size={25}
                  />
                ) : (
                  'Create a New Account'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

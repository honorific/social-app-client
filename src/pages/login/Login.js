import {useState} from 'react'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    console.log('Email is :', email)
    console.log('Password is :', password)
  }
  return (
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
            <button className='loginButton'>Log In</button>
            <span className='loginForgot'>Forgot Password</span>
            <button className='loginRegisterButton'>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

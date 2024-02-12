import {useContext, useState} from 'react'
import './register.css'
import {AuthContext} from '../../context/AuthContext'
import {Navigate} from 'react-router-dom'

const Register = () => {
  const {user} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [error, setError] = useState([])
  const handleClick = (e) => {
    e.preventDefault()
    if (password !== passwordAgain) {
      setError((prev) => [...prev, "passwords doesn't match"])
    }
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
            <ul
              style={{
                backgroundColor: 'red',
                borderRadius: '15px',
                padding: '20px',
              }}
            >
              {error.map((er) => {
                return <li>{er}</li>
              })}
            </ul>
            <form className='loginBox' onSubmit={handleClick}>
              <input
                placeholder='Username'
                className='loginInput'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                placeholder='Email'
                className='loginInput'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                placeholder='Password'
                className='loginInput'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                placeholder='confirm Password'
                className='loginInput'
                onChange={(e) => setPasswordAgain(e.target.value)}
                type='password'
                required
              />
              <button className='loginButton' type='submit'>
                Sign up
              </button>
              <button className='loginRegisterButton'>
                Log in to your account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

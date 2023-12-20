import './register.css'

const Register = () => {
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
          <div className='loginBox'>
            <input placeholder='Username' className='loginInput' />
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <input placeholder='confirm Password' className='loginInput' />
            <button className='loginButton'>Sign up</button>
            <button className='loginRegisterButton'>
              Log in to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

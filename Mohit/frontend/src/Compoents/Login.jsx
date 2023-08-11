import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const Login = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/login', { email, password })
      if (res.data.user.user) {
        localStorage.setItem('access_token', res.data.access_token)
        toast.success(`Welcome ${res.data.user.user}`)
      }
      // window.location.reload(false)
      navigate('/plans')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='auth-back'>
      <div className='cred'>
        <h3>Login To Your Account</h3>
        <form action=''>
          <div className='email'>
            <label htmlFor=''>Email</label>

            <input
              type='email'
              name={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='password'>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              name={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <span className='remember'>
            <input type='checkbox' name='' id='' /> Remember Me
          </span>
          <br />
          <br />
          <button onClick={Login} type='submit'>
            Login
          </button>
          <br />
          <br />
          <p className='change-form'>
            <p>New to MyApp?</p> &nbsp; <a href='/register'>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

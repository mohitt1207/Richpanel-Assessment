import React, { useState } from 'react'
import axios from '../axios'
import toast from 'react-hot-toast'

const Register = () => {
  const [email, setEmail] = useState()
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const Register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/register', { user, email, password })
      toast.success('Registered')
    } catch (error) {
      toast.error('Please Try Again')
      console.log(error)
    }
  }
  return (
    <div className='auth-back'>
      <div className='cred'>
        <h3>Create Account</h3>
        <form action=''>
          <div className='name'>
            <label htmlFor=''>Name</label>
            <input
              name={user}
              onChange={e => setUser(e.target.value)}
              type='text'
            />
          </div>
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
          <br /> <br />
          <button onClick={Register} type='submit'>
            Sign Up
          </button>
          <br />
          <br />
          <p className='change-form reg'>
            <p>Already have an Account?</p> &nbsp; <a href='/login'>Login</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register

import React from 'react'
import token from '../token'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = ({ user }) => {
  const navigate = useNavigate()
  const seePlans = () => {
    token ? navigate('/plans') : toast.error('Login to see plans')
  }
  const seeSelected = () => {
    token ? navigate('/active/plans') : toast.error('Login to see selected plans')
  }
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <nav>
      <div className='left'>
        <div className='logo'>MY APP</div>
      </div>
      <div className='right'>
        <button onClick={seePlans} className='a'>
          Plans
        </button>
        <button onClick={seeSelected} className='a'>
          Accessed Plans
        </button>
        {token ? (
          <button onClick={logout}>{user}, Logout</button>
        ) : (
          <button>Login</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar

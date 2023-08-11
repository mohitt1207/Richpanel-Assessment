import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Compoents/Login'
import Register from './Compoents/Register'
import PaymentScreen from './Compoents/PaymentScreen'
import SelectedPlan from './Compoents/selectedPlan'
import Pricing from './Compoents/Pricing'
import { Toaster } from 'react-hot-toast'
import Navbar from './Compoents/Navbar'
import React from 'react'
import token from './token'
import axios from './axios'
import { useEffect, useState } from 'react'
import StripeContainer from './Compoents/StripeContainer'
import ActivePlans from './Compoents/ActivePlans'
function App () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser () {
      if (!token) {
        return
      }

      try {
        const response = await axios.get('/validate', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(response.data.validateOne.user)
      } catch (error) {
        console.log(error)
      }
    
    }

    getUser()
  }, [])

  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#FFFA67'
            },
            style: {
              background: '#F36368',
              color: 'white'
            },
            iconTheme: {
              primary: '#FFFA67',
              secondary: 'black'
            }
          }
        }}
      ></Toaster>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path='' element={<Pricing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/ck' element={<StripeContainer />} />
          <Route path='/active/plans' element={<ActivePlans />} />

          <Route path='/sp' element={<SelectedPlan />} />
          <Route path='/plans' element={<Pricing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

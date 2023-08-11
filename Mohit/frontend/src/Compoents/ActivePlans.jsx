import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import token from '../token'
import axios from '../axios'
const ActivePlans = () => {
  const [result, setResuult] = useState([])
  const navigate = useNavigate()
  if (!token) {
    navigate('/login')
    return
  }

  useEffect(() => {
    const get = async () => {
      const res = await axios.get('/active', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setResuult(res.data)
      console.log(res.data)
    }
    get()
  }, [])

  const cancelSub = async sub => {
    try {
      const res = await axios.delete(
        '/cancel',
        { sub },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='auth-back'>
      {result.map(e => {
        return (
          <>
            <div className='sp'>
              <div className='head'>
                <div>
                  <span>Current Plan Details</span> &nbsp;
                  <span className='active'>Active</span>
                </div>
                <button className='cancel' type=''>
                  Cancel
                </button>
              </div>
              <br />
              <div className='about'>
                <p className='plan'>{e.plan.planName}</p>
                <span>
                  {e.plan.devices.map((ex, i) => {
                    return (
                      <>
                        {' '}
                        <span key={ex}> {ex}</span>{' '}
                        {i !== e.plan.devices.length - 1 && <span> + </span>}{' '}
                      </>
                    )
                  })}
                </span>
                <br />
                <p className='rs'>
                  Rs {e.plan.price}/{e.plan.plans}
                </p>
                <button onClick={() => cancelSub(e._id)} className='canc-btn'>
                  Cancel Plan
                </button>
              </div>{' '}
              <br />
              <div className='desc'>
                Your sub started on July 11th, 2022 and will auto renew on Jul
                12th, 2023.
              </div>
            </div>

            <br />
          </>
        )
      })}
    </div>
  )
}

export default ActivePlans

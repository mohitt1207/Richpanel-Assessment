import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import token from '../token'
import axios from '../axios'
const SelectedPlan = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedData = location.state

  if(!token){
    navigate('/login')
    return;
  }


  return (
    <div className='auth-back'>
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
          <p className='plan'>{selectedData && selectedData.planName}</p>
          <span>
            {selectedData &&
              selectedData.devices.map((e, i) => {
                return (
                  <>
                    {' '}
                    <span key={e}> {e}</span>{' '}
                    {i !== selectedData.devices.length - 1 && <span> + </span>}{' '}
                  </>
                )
              })}
          </span>
          <br />
          <p className='rs'>
            Rs {selectedData && selectedData.price}/
            {selectedData && selectedData.plans}
          </p>
          <button className='canc-btn'>Cancel Plan</button>
        </div>{' '}
        <br />
        <div className='desc'>
          Your sub started on July 11th, 2022 and will auto renew on Jul 12th,
          2023.
        </div>
      </div>
    </div>
  )
}

export default SelectedPlan

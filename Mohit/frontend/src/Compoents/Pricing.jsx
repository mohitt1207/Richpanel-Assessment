import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Pricing = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')

  const [planType, setPlanType] = useState('Yearly')
  const [selectedData, setSelectedData] = useState({
    planName: null,
    price: null,
    videoQual: null,
    resolution: null,
    devices: []
  })

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])
  const [activePlan, setActivePlan] = useState('noplan')
  const planMapping = {
    Mobile: 'Mobile',
    Basic: 'Basic',
    Standard: 'Standard',
    Premium: 'Premium'
  }

  const handleActive = name => {
    setActivePlan(planMapping[name])

    let mobileElements = document.getElementsByClassName(planMapping[name])
    const mobileDevices = []
    let devi = []

    setTimeout(() => {
      mobileElements = document.getElementsByClassName(planMapping[name])
      console.log('mobile', mobileElements)
      for (let i = 0; i < mobileElements.length; i++) {
        mobileDevices.push(mobileElements[i].textContent)
        // console.log('curr', mobileElements[i].textContent)
      }
      console.log('hii', mobileDevices)

      for (let i = 3; i < mobileDevices.length; i++) {
        devi.push(mobileDevices[i])
      }

      setSelectedData({
        plans: planType,
        planName: planMapping[name],
        price: mobileDevices[0],
        videoQual: mobileDevices[1],
        resolution: mobileDevices[2],
        devices: devi
      })

      

    }, 1)
  }

  const checkout = () => {
    navigate('/ck', { state: selectedData })
  }

  return (
    <div
      className='auth-back'
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className='pricing'>
        {console.log(selectedData)}
        <h4 style={{ textAlign: 'center' }}>Choose the Right Plan For You</h4>
        <br />

        <table>
          <thead>
            <th className='switch'>
              <div className='container'>
                <div className='tabs'>
                  <input
                    type='radio'
                    id='radio-1'
                    name='tabs'
                    onChange={() => setPlanType('Monthly')}
                  />
                  <label class='tab' for='radio-1'>
                    Monthly
                  </label>
                  <input
                    onChange={() => setPlanType('Yearly')}
                    type='radio'
                    id='radio-2'
                    name='tabs'
                  />
                  <label class='tab' for='radio-2'>
                    Yearly
                  </label>

                  <span class='glider'></span>
                </div>
              </div>
            </th>
            <th className={`${activePlan === 'Mobile' ? 'Mobile' : 'none'}`}>
              <button onClick={() => handleActive('Mobile')}>Mobile</button>
            </th>
            <th>
              <button onClick={() => handleActive('Basic')}>Basic</button>
            </th>
            <th>
              <button onClick={() => handleActive('Standard')}>Standard</button>
            </th>
            <th>
              <button onClick={() => handleActive('Premium')}>Premium</button>
            </th>
          </thead>
          <tbody>
            <tr>
              <td className='twigs'>Monthly Price</td>
              <td className={`${activePlan === 'Mobile' ? 'Mobile' : 'none'}`}>
                100
              </td>
              <td className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                200
              </td>
              <td
                className={`${activePlan === 'Standard' ? 'Standard' : 'none'}`}
              >
                500
              </td>
              <td
                className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
              >
                700
              </td>
            </tr>
            <tr>
              <td className='twigs'>Video Quality</td>
              <td className={`${activePlan === 'Mobile' ? 'Mobile' : 'none'}`}>
                Good
              </td>
              <td className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                Good
              </td>
              <td
                className={`${activePlan === 'Standard' ? 'Standard' : 'none'}`}
              >
                Better
              </td>
              <td
                className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
              >
                Best
              </td>
            </tr>
            <tr>
              <td className='twigs'>Resolution</td>
              <td className={`${activePlan === 'Mobile' ? 'Mobile' : 'none'}`}>
                480p
              </td>
              <td className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                480p
              </td>
              <td
                className={`${activePlan === 'Standard' ? 'Standard' : 'none'}`}
              >
                1080p
              </td>
              <td
                className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
              >
                4K+HDR
              </td>
            </tr>
            <br />
            <tr>
              <td className='twigs'>Devices you can use to watch</td>
              <td className='ttt'>
                <p className={`${activePlan === 'Mobile' ? 'Mobile' : 'none'}`}>
                  Phone
                </p>
                <br />{' '}
                <p className={`${activePlan === 'Mobile' ? 'Mobile' : 'none'}`}>
                  Tablet
                </p>
              </td>
              <td className='ttt'>
                <p className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                  Phone
                </p>
                <br />{' '}
                <p className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                  Tablet
                </p>{' '}
                <br />
                <p className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                  Computer
                </p>{' '}
                <br />{' '}
                <p className={`${activePlan === 'Basic' ? 'Basic' : 'none'}`}>
                  TV
                </p>
              </td>
              <td className='ttt'>
                <p
                  className={`${
                    activePlan === 'Standard' ? 'Standard' : 'none'
                  }`}
                >
                  Phone
                </p>
                <br />{' '}
                <p
                  className={`${
                    activePlan === 'Standard' ? 'Standard' : 'none'
                  }`}
                >
                  Tablet
                </p>{' '}
                <br />
                <p
                  className={`${
                    activePlan === 'Standard' ? 'Standard' : 'none'
                  }`}
                >
                  Computer
                </p>{' '}
                <br />{' '}
                <p
                  className={`${
                    activePlan === 'Standard' ? 'Standard' : 'none'
                  }`}
                >
                  TV
                </p>
              </td>
              <td className='ttt'>
                <p
                  className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
                >
                  Phone
                </p>
                <br />{' '}
                <p
                  className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
                >
                  Tablet
                </p>{' '}
                <br />
                <p
                  className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
                >
                  Computer
                </p>{' '}
                <br />{' '}
                <p
                  className={`${activePlan === 'Premium' ? 'Premium' : 'none'}`}
                >
                  TV
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <button className='nxt-btn' onClick={checkout}>
        {' '}
        NEXT
      </button>
    </div>
  )
}

export default Pricing

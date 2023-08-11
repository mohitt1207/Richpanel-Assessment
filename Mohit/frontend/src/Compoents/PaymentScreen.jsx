import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from '../axios'
import { toast } from 'react-hot-toast'
import token from '../token'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'gray',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: 'black' },
      '::placeholder': { color: 'black' }
    },
    invalid: {
      iconColor: 'black',
      color: 'black'
    }
  }
}
const PUBLIC_KEY =
  'pk_test_51NdrnqSCviecllHOsEINgPpD5wVM5jG8yqC8c9Y1TwdvmESi7QyFQ1Ezb9What6VxyY1pVAOVUHrBQWAWfSJlSsy00JrTBZf32'

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const PaymentScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedData = location.state

  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async e => {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post('/payment', {
          amount: selectedData.price,
          id,
          selectedPlan: selectedData
        })

        if (response.data.success) {
          toast.success('Payment Successfull')
          setTimeout(() => {
            navigate('/sp', { state: selectedData })
          }, 1500)
          setSuccess(true)
        }
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log(error.message)
    }

    try {
      const res = await axios.post(
        '/subscribe',
        { selectedData },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(res.data)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <>
      <div className='payment'>
        <div className='payment-inside'>
          <div className='left'>
            <h2>Complete Payment</h2>
            <h4>Enter your credit of debit card details below</h4>
            <br />
            <form onSubmit={handleSubmit}>
              <fieldset className='FormGroup'>
                <div className='FormRow'>
                  <CardElement options={CARD_OPTIONS} />
                </div>
              </fieldset>
              <br />
              <button className='pay'>Confirm Payment</button>
            </form>
            <br />
          </div>
          <div className='right'>
            <h2>Order Summary</h2>
            <div className='plan-name'>
              <p>Plan Name</p>{' '}
              <span>{selectedData && selectedData.planName}</span>
            </div>
            <div className='cycle'>
              <p>Billing Cycle</p>{' '}
              <span>{selectedData && selectedData.plans}</span>
            </div>
            <div className='plan-price'>
              <p>Plan Price</p>{' '}
              <span>Rs {selectedData && selectedData.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentScreen

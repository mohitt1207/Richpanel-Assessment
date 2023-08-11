import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentScreen from './PaymentScreen'

const StripeContainer = () => {
  const PUBLIC_KEY =
    'pk_test_51NdrnqSCviecllHOsEINgPpD5wVM5jG8yqC8c9Y1TwdvmESi7QyFQ1Ezb9What6VxyY1pVAOVUHrBQWAWfSJlSsy00JrTBZf32'

  const stripeTestPromise = loadStripe(PUBLIC_KEY)
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentScreen />
    </Elements>
  )
}

export default StripeContainer

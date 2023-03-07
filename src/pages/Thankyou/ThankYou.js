import React from 'react'
import './thankyou.css'
import Success from '../../assets/icon/Icons/success.png'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <>
      <div className="thankyou-section">
        <div className="thankyou-box">
          <div style={{BorderRadius:'200px', Height:'400px', Width:'400px', Background: '#F8FAF5', Margin:'auto'}}>
            <img src={Success} alt="" style={{ height: '100px' }}/>
          </div>
          <p className='thankyou-heading'>Thank you for your purchase !</p>
          <p className='thankyou-dec'>You will receive an order confirmation email
                            with details of your order </p>
             <Link to='./CustomerService'>               
                <button className='continue-btn'>Continue</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default ThankYou

import React from 'react'
import './payment.css'
import Visa from '../../assets/icon/Icons/visa.png'
import Paypal from '../../assets/icon/Icons/paypal.png'
import Orange from '../../assets/icon/Icons/orange.png'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <>
      <div className="select-section">
        <div className="md-stepper-horizontal orange">
          <div className="md-step active ">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-title">Package</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right-1"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle-1">
              <span>2</span>
            </div>
            <div className="md-step-title">Number</div>
            {/* <div className="md-step-optional">Optional</div> */}
            <div className="md-step-bar-left-1"></div>
            <div className="md-step-bar-right-1"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle-1">
              <span>3</span>
            </div>
            <div className="md-step-title">Personal Details</div>
            <div className="md-step-bar-left-1"></div>
            <div className="md-step-bar-right-1"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle-1">
              <span>4</span>
            </div>
            <div className="md-step-title">Payment</div>
            <div className="md-step-bar-left-1"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9">
                <div className="payment-bg">
                    <div className="row">
                    <p className='order-heading'>Select a payment method</p>
                    <p className='heading-dec'>Choose the payment method that best for you</p>
                        <div className="col-4">
                            <button className='center my-2'>
                            <img src={ Visa } alt="" style={{ height: '35px' }} />
                                Credit Card
                            </button>
                        </div>
                        <div className="col-4">
                        <button className='center my-2'>
                            <img src={ Paypal } alt="" style={{ height: '35px' }} />
                                Paypal
                          </button>
                        </div>
                        <div className="col-4">
                        <button className='center my-2'>
                            <img src={ Orange } alt="" style={{ height: '30px' }} />
                                Orange money
                            </button>
                        </div>
                    </div>
                </div>
              {/* <div className="account-details-bg"> */}
                <div className="row">
                  <div className="col-12">
                    <div className="details-box-1">
                      <p className="card-title">Card details</p>
                      <div className="row">
                        <p className="input-title">Card holder name</p>
                        <input
                          type="text"
                          className="type-here-1"
                          placeholder="Type here..."
                        />
                        <p className="input-title">Card number</p>
                        <input
                          type="text"
                          className="type-here-1"
                          placeholder="Type here..."
                        />
                        <div className="col-6">
                          <div className="input-box-2">
                            <p className="input-title">Expiry date</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Type here.."
                            />
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="input-box-2">
                            <p className="input-title">CVV</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Type here..."
                            />
                          </div>
                        </div>
                      </div>
                            <Link to="./payment-successful">
                                <button className="pay">
                                    Pay Now
                                </button>
                            </Link>
                       
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
            <div className="col-3">
              <div className="total-amount-box">
                <p className='order-heading'>Order details</p>
                <div className="line-1"></div>
                <div className="product-total">
                  <p className="modal-name">Mega HD pack</p>
                  <p className="total-amount">£30.00</p>
                </div>
                <div className="product-total">
                  <p className="modal-name">TP-Link Archer C20</p>
                  <p className="link-total-amount">£300.00</p>
                </div>
                <div className="line-1"></div>
                <div className="total">
                  <p className="modal-name">Total</p>
                  <p className="final-amount">£330.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment

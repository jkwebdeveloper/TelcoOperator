import React from 'react'
import './selectnumber.css'
import icon from '../assets/icon/Icons/mobileplan1.png'
import icon2 from '../assets/icon/Icons/new-number.png'
import { Link } from 'react-router-dom';

const SelectNumber = () => {
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
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>3</span>
            </div>
            <div className="md-step-title">Personal Details</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>4</span>
            </div>
            <div className="md-step-title">Payment</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="select-bg"> 
                <div className="plans">
                  <div className="title">Select phone number</div>
                  <label className="plan basic-plan my-3" htmlFor="basic">
                    <input onChange type="radio" name="plan" id="basic" />
                    <div className="plan-content">
                        <div className="icon-bg-1">
                            <img src={ icon } alt="icon" style={{ height: '55px' }}/> 
                        </div>
                      <div className="plan-details">
                        <span>Keep existing number</span>
                      </div>
                    </div>
                  </label>

                  <Link to="/select-Number1">
                    <label className="plan complete-plan" htmlFor="complete">
                      <input type="radio" id="complete" name="plan" />
                      <div class="plan-content">
                          <div className="icon-bg-1">
                              <img src={ icon2 } alt="icon" style={{ height: '55px' }}/> 
                          </div>
                          <div className="plan-details">
                              <span>Select new number</span>
                          </div>
                      </div>
                    </label>
                  </Link>
                </div>

                {/* <p className="">Existing number</p> */}
                <div className="heading">
                    <span>Existing number</span>
                </div>
                <p className="type-number">Current mobile number</p>
                <input
                  type="text" className="mobile-number"
                  placeholder="ex. +1 124567894"
                />
                <div className="select-seticon">
                  <p className="type-number">Current mobile operator</p>
                  <input type="text" className="select" placeholder="Select" />
                  <p className="type-number">Current mobile operator</p>
                  <input type="text" className="select" placeholder="Select" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="total-amount-box ">
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
                <button className="next-top my-4">Next</button>
                <Link to="/mobile-plans">
                  <button className="back-top">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectNumber

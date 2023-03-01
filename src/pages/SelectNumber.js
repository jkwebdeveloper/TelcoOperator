import React from 'react'
import './selectnumber.css'
import icon from '../assets/icon/Icons/mobileplan1.png'
// import img5 from '../../assets/icon/Icons/r6.png'

const SelectNumber = () => {
  return (
    <>
      <div className="select-section">
        <div class="md-stepper-horizontal orange">
          <div class="md-step active ">
            <div class="md-step-circle">
              <span>1</span>
            </div>
            <div class="md-step-title">Package</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle">
              <span>2</span>
            </div>
            <div class="md-step-title">Number</div>
            {/* <div class="md-step-optional">Optional</div> */}
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle">
              <span>3</span>
            </div>
            <div class="md-step-title">Personal Details</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
          <div class="md-step">
            <div class="md-step-circle">
              <span>4</span>
            </div>
            <div class="md-step-title">Payment</div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="select-bg">
                <div class="plans">
                  <div class="title">Choose a pricing plan</div>
                  <label class="plan basic-plan" for="basic">
                    <input checked type="radio" name="plan" id="basic" />
                    <div class="plan-content">
                      <img
                        loading="lazy"
                        src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
                        alt=""
                      />
                      <div class="plan-details">
                        <span>Basic</span>
                        <p>
                          For smaller business, with simple salaries and pay
                          schedules.
                        </p>
                      </div>
                    </div>
                  </label>

                  <label class="plan complete-plan" for="complete">
                    <input type="radio" id="complete" name="plan" />
                    <div class="plan-content">
                      <img
                        src={ icon }
                        alt="" style={{backgroundColor: "#005DA2", width: "100px", height: "100px" }}
                      />
                        <span>Complete</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="total-amount-box">
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
                <button className="back-top">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectNumber

import React from 'react'
import './navigationmenu.css'

const NavigationMenu = () => {
  return (
    <>
    {/* // <div className="container"> */}
      <div className="row">
        <div className="col-12">
          <div className="md-stepper-horizontal orange">
            <div className="md-step active ">
              <div className="md-step-circle">
                <span>1</span>
              </div>
              <div className="md-step-title">Package</div>
              <div className="md-step-bar-left"></div>
              <div className="md-step-bar-right"></div>
            </div>
            <div className="md-step">
              <div className="md-step-circle">
                <span>2</span>
              </div>
              <div className="md-step-title">Number</div>
              {/* <div class="md-step-optional">Optional</div> */}
              <div className="md-step-bar-left"></div>
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
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default NavigationMenu

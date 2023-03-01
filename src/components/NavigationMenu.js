import React from 'react'
import './navigationmenu.css'

const NavigationMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12">
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
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu

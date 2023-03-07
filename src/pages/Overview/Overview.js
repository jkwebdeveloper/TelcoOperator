import React from 'react'
import './overview.css'

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="container">
        <p className="heading">Product overview</p>
        <div className="overview-bg">
          <div className="row">
            <div className="col-6">
              <div className="overview-heading">
                <p className="overview-left">Iphone 14 Pro Max 128GB</p>
                <p className="overview-text">Change</p>
              </div>
              <div className="row">
                <div className="col-5">
                  <div className="overview-box">
                    <p className="heading-over">Mobile plan</p>
                    <div className="plan-details">
                      <p className="data-text">Data</p>
                      <p className="data-price">2 GB</p>
                    </div>
                    <div className="plan-details">
                      <p className="data-text-1">National voice</p>
                      <p className="data-price-1">30 Min</p>
                    </div>
                    <p className="data-text-2">£30/month</p>
                  </div>
                </div>
                <div className="col-5">
                  <div className="overview-box">
                    <p className="heading-over">Data bundles</p>
                    <div className="plan-details">
                      <p className="data-text">Data</p>
                      <p className="data-price">2 GB</p>
                    </div>
                    <div className="plan-details">
                      <p className="data-text-3">Validity</p>
                      <p className="data-price-3">30 Min</p>
                    </div>
                    <p className="data-text-2">£30/month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <p className="overview-right">
                Renew contract |{' '}
                <span style={{ color: '#ED1C24' }}> Terminate contract</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview

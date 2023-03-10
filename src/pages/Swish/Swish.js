import React from 'react'
import './swish.css'
import sim from '../../assets/images/sim.png'

const Swish = () => {
  return (
    <div className="swish-section">
      {/* Mobile Plans start */}
      <p className="heading">Mobile Plans</p>
      <div className="line-1"></div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="swish-box">
            <p className="heading-swish">Swish 2</p>
            <img src={sim} alt="" style={{ height: '55px' }} />
            <div className="row">
              <div className="col-8">
                <p className="item">Data</p>
                <p className="item">National Voice</p>
                <p className="item">SMS</p>
                <p className="item">International Voice</p>
              </div>
              <div className="col-4">
                <p className="data-plan">2 GB</p>
                <p className="data-plan">30 Min</p>
                <p className="data-plan">-</p>
                <p className="data-plan">-</p>
              </div>
            </div>
            <div className="line-2"></div>

            <div className="row">
              <div className="col-6">
                <p className="price-month">£30/month</p>
              </div>
              <div className="col-6">
                <button className="add">+ Add</button>
              </div>
            </div>
          </div>
          <div className="swish-box">
            <p className="heading-swish">Swish 5</p>
            <img src={sim} alt="" style={{ height: '55px' }} />
            <div className="row">
              <div className="col-8">
                <p className="item">Data</p>
                <p className="item">National Voice</p>
                <p className="item">SMS</p>
                <p className="item">International Voice</p>
              </div>
              <div className="col-4">
                <p className="data-plan">2 GB</p>
                <p className="data-plan">30 Min</p>
                <p className="data-plan">100</p>
                <p className="data-plan">-</p>
              </div>
            </div>
            <div className="line-1"></div>

            <div className="row">
              <div className="col-6">
                <p className="price-month">£50/month</p>
              </div>
              <div className="col-6">
                <button className="add">+ Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="swish-box">
            <p className="heading-swish">Swish 3</p>
            <img src={sim} alt="" style={{ height: '55px' }} />
            <div className="row">
              <div className="col-8">
                <p className="item">Data</p>
                <p className="item">National Voice</p>
                <p className="item">SMS</p>
                <p className="item">International Voice</p>
              </div>
              <div className="col-4">
                <p className="data-plan">4 GB</p>
                <p className="data-plan">40 Min</p>
                <p className="data-plan">-</p>
                <p className="data-plan">-</p>
              </div>
            </div>
            <div className="line-1"></div>

            <div className="row">
              <div className="col-6">
                <p className="price-month">£40/month</p>
              </div>
              <div className="col-6">
                <button className="remove">Remove</button>
              </div>
            </div>
          </div>
          <div className="swish-box">
            <p className="heading-swish">Swish 6</p>
            <img src={sim} alt="" style={{ height: '55px' }} />
            <div className="row">
              <div className="col-8">
                <p className="item">Data</p>
                <p className="item">National Voice</p>
                <p className="item">SMS</p>
                <p className="item">International Voice</p>
              </div>
              <div className="col-4">
                <p className="data-plan">2 GB</p>
                <p className="data-plan">30 Min</p>
                <p className="data-plan">100</p>
                <p className="data-plan">30 Min</p>
              </div>
            </div>
            <div className="line-1"></div>

            <div className="row">
              <div className="col-6">
                <p className="price-month">£50/month</p>
              </div>
              <div className="col-6">
                <button className="add">+ Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="swish-box">
            <p className="heading-swish">Swish 4</p>
            <img src={sim} alt="" style={{ height: '55px' }} />
            <div className="row">
              <div className="col-8">
                <p className="item">Data</p>
                <p className="item">National Voice</p>
                <p className="item">SMS</p>
                <p className="item">International Voice</p>
              </div>
              <div className="col-4">
                <p className="data-plan">2 GB</p>
                <p className="data-plan">60 Min</p>
                <p className="data-plan">100</p>
                <p className="data-plan">-</p>
              </div>
            </div>
            <div className="line-1"></div>

            <div className="row">
              <div className="col-6">
                <p className="price-month">£40/month</p>
              </div>
              <div className="col-6">
                <button className="add">+ Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Plans End */}



      <div className="bundles-section">
          <p className="heading-section">Data bundles</p>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="swish-card">
                <p className="heading-swish">Swish 150</p>
                <div className="row">
                  <div className="col-4">
                    <p className="bundles-plan">50 GB</p>
                    <p className="dec">Data</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">24 Months</p>
                    <p className="dec">Duration</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">Free</p>
                    <p className="dec">Activation</p>
                  </div>
                  <div className="line-3"></div>
                  <div className="row">
                    <div className="col-6">
                      <p className="price-month">£30/month</p>
                    </div>
                    <div className="col-6">
                      <button className="add-btn">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="swish-card">
                <p className="heading-swish">Swish 200</p>
                <div className="row">
                  <div className="col-4">
                    <p className="bundles-plan">50 GB</p>
                    <p className="dec">Data</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">24 Months</p>
                    <p className="dec">Duration</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">Free</p>
                    <p className="dec">Activation</p>
                  </div>
                  <div className="line-3"></div>
                  <div className="row">
                    <div className="col-6">
                      <p className="price-month">£40/month</p>
                    </div>
                    <div className="col-6">
                      <button className="bundles-remove-btn">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="swish-card">
                <p className="heading-swish">Swish 205</p>
                <div className="row">
                  <div className="col-4">
                    <p className="bundles-plan">60 GB</p>
                    <p className="dec">Data</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">24 Months</p>
                    <p className="dec">Duration</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">Free</p>
                    <p className="dec">Activation</p>
                  </div>
                  <div className="line-3"></div>
                  <div className="row">
                    <div className="col-6">
                      <p className="price-month">£50/month</p>
                    </div>
                    <div className="col-6">
                      <button className="add-btn">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="swish-card">
                <p className="heading-swish">Swish 210</p>
                <div className="row">
                  <div className="col-4">
                    <p className="bundles-plan">65 GB</p>
                    <p className="dec">Data</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">24 Months</p>
                    <p className="dec">Duration</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">Free</p>
                    <p className="dec">Activation</p>
                  </div>
                  <div className="line-3"></div>
                  <div className="row">
                    <div className="col-6">
                      <p className="price-month">£80/month</p>
                    </div>
                    <div className="col-6">
                      <button className="add-btn">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="swish-card">
                <p className="heading-swish">Swish 300</p>
                <div className="row">
                  <div className="col-4">
                    <p className="bundles-plan">100 GB</p>
                    <p className="dec">Data</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">24 Months</p>
                    <p className="dec">Duration</p>
                  </div>
                  <div className="col-4">
                    <p className="bundles-plan">Free</p>
                    <p className="dec">Activation</p>
                  </div>
                  <div className="line-3"></div>
                  <div className="row">
                    <div className="col-6">
                      <p className="price-month">£90/month</p>
                    </div>
                    <div className="col-6">
                      <button className="add-btn">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Swish

//19 no3
//13 no2
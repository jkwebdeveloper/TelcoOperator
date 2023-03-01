import React from 'react'
import './fixedofficer.css'
import NavigationMenu from '../../components/NavigationMenu'
import { BsCheck2 } from 'react-icons/bs'
import wifi from '../../assets/icon/Icons/r1.png'
import TP from '../../assets/icon/Icons/r2.png'
import img3 from '../../assets/icon/Icons/r3.png'
import img4 from '../../assets/icon/Icons/r5.png'
import img5 from '../../assets/icon/Icons/r6.png'
import { Link } from 'react-router-dom'


const FixedOfficers = () => {
  return (
    <>
      <div className="hero-section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NavigationMenu />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="filter-section">
                <p className="heading">Filter</p>
                <div className="line-1"></div>
                <p className="heading">Payment Plan Type</p>
                <p className="highlight">
                  Prepaid
                  <BsCheck2 className="true-icon" />
                </p>
                <p className="data">Postpaid</p>
                <div className="line-1"></div>

                <p className="heading">Plan Type</p>
                <p className="highlight">
                  All Plan
                  <BsCheck2 className="true-icon" />
                </p>
                <p className="data">voice Plan</p>
                <p className="data">Data Plan</p>
                <p className="data">voice & Data Plan</p>
                <div className="line-1"></div>

                <p className="heading">Plan</p>
                <p className="highlight">
                  All Plan
                  <BsCheck2 className="true-icon" />
                </p>
                <p className="data">4G Plan</p>
                <p className="data">5G Plan</p>
              </div>
            </div>
            <div className="col-7">
              <div className="swish-section">
                {/* Mobile Plans start */}
                <p className="heading">Mobile Plans</p>
                <div className="line-1"></div>
                <p className="heading">Tv subscriptions</p>
                <div className="row">
                    <div className="col-4 md-12 sm-12">
                        <div className="subscriptions-box">
                            <p className="heading-swish">Mega HD pack</p>
                            <div className="hd-pack-details">
                                <p className='details-text'>182</p>
                                <p className='days'>30 Days</p>
                            </div>
                            <div className="channel">
                                <p className='channel-text'>Channels</p>
                                <p className='valid'>Validity</p>
                            </div>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£30.00</p>
                                <div className="remove-btn">
                                    <button>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 md-12 sm-12">
                        <div className="subscriptions-box">
                            <p className="heading-swish">HD pack</p>
                            <div className="hd-pack-details">
                                <p className='details-text'>132</p>
                                <p className='days'>30 Days</p>
                            </div>
                            <div className="channel">
                                <p className='channel-text'>Data</p>
                                <p className='valid-center'>Validity</p>
                            </div>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£20.00</p>
                                <div className="remove-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 md-12 sm-12">
                        <div className="subscriptions-box">
                            <p className="heading-swish">4k pack + Netflix (OTT)</p>
                            <div className="hd-pack-details">
                                <p className='details-text'>202</p>
                                <p className='days'>60 Days</p>
                            </div>
                            <div className="channel">
                                <p className='channel-text'>Channels</p>
                                <p className='valid'>Validity</p>
                            </div>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£50.00</p>
                                <div className="remove-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 md-12 sm-12">
                        <div className="subscriptions-box">
                            <p className="heading-swish">Sd pack + Netflix (OTT)</p>
                            <div className="hd-pack-details">
                                <p className='details-text'>232</p>
                                <p className='days'>80 Days</p>
                            </div>
                            <div className="channel">
                                <p className='channel-text'>Channels</p>
                                <p className='valid'>Validity</p>
                            </div>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£80.00</p>
                                <div className="remove-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Plans End */}
                
    {/* wi-fi section start */}
                <p className="heading">Wi-Fi routers</p>
                <div className="row">
                    <div className="col-4">
                        <div className="wifi-section-box">
                            <div className="wifi-img">
                                <img src={wifi} alt=""/>
                            </div>
                            <p className='wifi-modal'>
                                TP-Link Archer C20 AC WiFi
                                750 MBPS Wireless Router
                            </p>
                            <p className='wifi-color'>Blue, Dual Band</p>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£300.00</p>
                                <div className="remove-wifi">
                                    <button>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="wifi-section-box">
                            <div className="wifi-img">
                                <img src={TP} alt="" />
                            </div>
                            <p className='wifi-modal'>
                                TP-Link Archer C20 AC WiFi
                                750 MBPS Wireless Router
                            </p>
                            <p className='wifi-color'>White, Dual Band</p>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£320.00</p>
                                <div className="add-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="wifi-section-box">
                            <div className="wifi-img">
                                <img src={img3} alt="" />
                            </div>
                            <p className='wifi-modal'>
                                TP-LINK TL-WR841N
                                300Mbps Wireless N Router
                            </p>
                            <p className='wifi-color'>White, Single Band</p>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£320.00</p>
                                <div className="add-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="wifi-section-box">
                            <div className="wifi-img">
                                <img src={img4} alt=""/>
                            </div>
                            <p className='wifi-modal'>
                                TP-Link TL-WR840N
                                300 Mbps Wireless Router
                            </p>
                            <p className='wifi-color'>White, Single Band</p>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£250.00</p>
                                <div className="add-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="wifi-section-box">
                            <div className="wifi-img">
                                <img src={img5} alt=""/>
                            </div>
                            <p className='wifi-modal'>
                                TP-Link Archer C6U
                                1200 Mbps Wireless Router
                            </p>
                            <p className='wifi-color'>Black, Dual Band</p>
                            <div className="line-1"></div>
                            <div className="price-bottom">
                                <p className='price-text'>£500.00</p>
                                <div className="add-btn-blue">
                                    <button>+ Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-3">
                <div className="total-amount-box">
                    <div className="product-total">
                        <p className='modal-name'>Mega HD pack</p>
                        <p className='total-amount'>£30.00</p>
                    </div>
                    <div className="product-total">
                        <p className='modal-name'>TP-Link Archer C20</p>
                        <p className='link-total-amount'>£300.00</p>
                    </div>
                    <div className="line-1"></div>

                    <div className="total">
                        <p className='modal-name'>Total</p>
                        <p className='final-amount'>£330.00</p>
                    </div>
                    <Link to="/select-number">
                        <button className='next-top my-4'>Next</button>
                    </Link>
                    <button className='back-top'>Back</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FixedOfficers

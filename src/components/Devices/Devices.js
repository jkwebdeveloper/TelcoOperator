import React from 'react'
import './devices.css'
import { BsCheck2 } from 'react-icons/bs'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { HiChevronDoubleLeft } from 'react-icons/hi'
import iphoneProPurple from '../../assets/images/purple.png'
import iphoneProSilver from '../../assets/images/silver.png'
import iphoneProBlack from '../../assets/images/black.png'
import iphoneProGold from '../../assets/images/gold.png'
import iphoneProMidnight from '../../assets/images/midnight.png'
import iphoneProBlue from '../../assets/images/blue.png'
import iphoneProStarlight from '../../assets/images/starlight.png'
import { Link } from 'react-router-dom'
import NavigationMenu from '../NavigationMenu'

const Devices = () => {
  return (
    <div className="devices-section">
      <div className="container">
        <NavigationMenu />
        <div className="row">
          <div className="col-2 ">
            <div className="filter-section">
              <p className="heading">Filter</p>
              <div className="line-1"></div>
              <p className="heading">Device Type</p>
              <p className="data">All Device</p>
              <p className="data">Laptop</p>

              {/* <p className="heading">Plan Type</p> */}
              <p className="highlight">
                Mobile
                <BsCheck2 className="true-icon" />
              </p>
              <p className="data">Tablet</p>
              <div className="line-1"></div>
              <p className="heading">Brand</p>

              <div className="check-box">
                <input type="checkbox" style={{borderColor:"#DCDCDC"}}/>
                <p className="check-box-data">All</p>
              </div>

              <div className="check-box">
                <input type="checkbox" />
                <p className="check-box-data">Apple</p>
              </div>

              <div className="check-box">
                <input type="checkbox" />
                <p className="check-box-data">CAT</p>
              </div>

              <div className="check-box">
                <input type="checkbox" />
                <p className="check-box-data">Honor</p>
              </div>

              <div className="check-box">
                <input type="checkbox" />
                <p className="check-box-data">HP</p>
              </div>

              <div className="check-box">
                <input type="checkbox" />
                <p className="check-box-data">Oppo</p>
              </div>

              <div className="check-box">
                <input type="checkbox" />
                <p className="check-box-data">Samsung</p>
              </div>
              {/* <p className="data">voice & Data Plan</p>
              <div className="line-1"></div>

              <p className="heading">Plan</p>
              <p className="highlight">
                All Plan
                <BsCheck2 className="true-icon" />
              </p>
              <p className="data">4G Plan</p>
              <p className="data">5G Plan</p> */}
            </div>
          </div>

          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="devices-product">
              {/* Mobile Plans start */}
              <p className="heading">Devices</p>
              <div className="line-1"></div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProPurple}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Deep PurPle, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£310</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/device-details">
                    <button className="product-box">
                      <img
                        src={iphoneProSilver}
                        alt=""
                        style={{ height: '130px' }}
                      />
                      <p className="product-name">Apple</p>
                      <p className="device-name">Iphone 14 Pro Max</p>
                      <p className="product-name">Silver, 128GB</p>
                      <div className="line-1"></div>
                      <div className="product-price-month">
                        <p className="product-price">£250</p>
                        <p className="month">/Month </p>
                      </div>
                    </button>
                  </Link>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProBlack}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Space Black, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£240</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProGold}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Gold, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£350</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProGold}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Gold, 256GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£470</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProSilver}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Silver, 256GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£250</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProPurple}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Deep PurPle, 256GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£250</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProMidnight}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Midnight, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£250</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProBlue}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Blue, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£150</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProMidnight}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Midnight, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£250</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProStarlight}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Starlight, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£250</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <button className="product-box">
                    <img
                      src={iphoneProSilver}
                      alt=""
                      style={{ height: '130px' }}
                    />
                    <p className="product-name">Apple</p>
                    <p className="device-name">Iphone 14 Pro Max</p>
                    <p className="product-name">Silver, 128GB</p>
                    <div className="line-1"></div>
                    <div className="product-price-month">
                      <p className="product-price">£250</p>
                      <p className="month">/Month </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <p className="showing-data">Showing 12 from 46 data</p>
                </div>
                <div className="col-lg-8 col-sm-12 col-md-12">
                  <div className="pagination">
                    <ul>
                      <li className="link">
                        <HiChevronDoubleLeft />
                      </li>
                      <li className="link" value="1">
                        1
                      </li>
                      <li className="link" value="2">
                        2
                      </li>
                      <li className="link" value="3">
                        3
                      </li>
                      <li className="link" value="4">
                        4
                      </li>
                      <li className="link">
                        <HiChevronDoubleRight />
                      </li>
                    </ul>
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

export default Devices

import React from 'react'
import './customerservice.css'
import Banner from '../../assets/images/banner.png'
import User from '../../assets/icon/Icons/user.png'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CustomerService = () => {
  return (
    <div className="customer-section">
      <div className="banner">
        <img src={Banner} alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="profilebox">
              <div className="user-icon">
                <img src={User} alt="" style={{ width: '40px' }} />
                <p className="user-name">Oliver Valsovich</p>
                <br></br>
              </div>
              <p className="user-number">+1 1234567890</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row Subscription-Main-Box-Section">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="boxes">
              <p className="Sub-heading">
                Subscription
                <button className="button-new">+ Add new</button>
              </p>
              <div className="swish-boxes">
                <p className="swish-content">Swish 400</p>
              </div>
              <div className="swish-boxes">
                <p className="swish-content">Mega HD pack</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="boxes">
              <p className="Sub-heading">
                Balance
                <button className="button-Top-up">Top up</button>
              </p>
              <div className="swish-boxes-2">
                <p className="swish-content-2">£10</p>
                <p className="prepaid-content">Current prepaid balance</p>
              </div>
              <div className="swish-boxes-3">
                <div className="boxes-contant">
                  <p className="swish-content">Current unbilled amount</p>
                  <p className="swish-content-right">£0.00</p>
                </div>
              </div>
              <div className="swish-boxes-3">
                <div className="boxes-contant">
                  <p className="swish-content">Outstanding invoice amount</p>
                  <p className="swish-content-right">£2510.00</p>
                </div>
              </div>
              <div className="swish-boxes-3">
                <div className="boxes-contant">
                  <p className="swish-content">Invoice</p>
                  <p className="swish-content-right">
                    <IoIosArrowForward />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="boxes">
              <p className="Sub-heading">Notifications</p>
              {/* <div className='text-dot'></div> */}
              <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-dot"></div>
              <div className="text-dot"></div>
              <div className="text-dot"></div>
              <div className="text-dot"></div>
              <div className="text-dot-2"></div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className="Subscriptiondetail-section">
              <p className="Sub-heading">Subscription</p>
              <div className="detail-bg my-4">
          
                    <p className="left-title-1">Iphone 14 Pro</p>
                    <div className="middle-section">
                      <div className="middle-1">
                        <p className="middle-text mx-5 ">Price</p>
                        <p className="middle mx-5">£60</p>
                      </div>
                      <div className="middle-2">
                        <p className="middle-text mx-5">Valid From</p>
                        <p className="middle mx-5">12/10/2022</p>
                      </div>
                      <div className="middle-3">
                        <p className="middle-text mx-5">Valid To</p>
                        <p className="middle mx-5">12/11/2022</p>
                      </div>
                      <Link to="/overview">
                        <p className="view mx-5" >View more</p>
                      </Link>
                    </div>
                    <div className="right">
                      <button className="change-btn mx-2">Change</button>
                      <button className="addbtn mx-2">+ Add</button>
                      <button className="suspend mx-2">Suspend</button>
                    </div>
                  
              </div>
              <div className="detail-bg">
          
                    <p className="left-title-2">Mega HD pack</p>
                    <div className="middle-section">
                      <div className="middle-1">
                        <p className="middle-text mx-5 ">Price</p>
                        <p className="middle mx-5">£30</p>
                      </div>
                      <div className="middle-2">
                        <p className="middle-text mx-5">Valid From</p>
                        <p className="middle mx-5">12/10/2022</p>
                      </div>
                      <div className="middle-3">
                        <p className="middle-text mx-5">Valid To</p>
                        <p className="middle mx-5">12/11/2022</p>
                      </div>
                      <p className="view mx-5" >View more</p>
                    </div>
                    <div className="right">
                      <button className="change-btn mx-2">Change</button>
                      <button className="addbtn mx-2">+ Add</button>
                      <button className="resume mx-2">Resume</button>
                    </div>
                  
              </div>
            </div>
          </div>
          <div className="col-md-12">
          <div className="service-section my-5">
            <p className="Sub-heading">Customer service</p>
            <p className='Create-right'>Create new ticket <IoIosArrowForward /></p>
            <div className="customer-detail-bg">
                <div className="customer-detail">
                  <p className='customer-text'>Ticket No</p>
                  <p className='customer-text'>Ticket No</p>
                  <p className='customer-text'>Ticket No</p>
                  <p className='customer-text'>Ticket No</p>
                </div>
            </div>
            <div className="customer-detail-bg-1 my-3">
                <div className="customer-detail">
                  <p className=''>22198548</p>
                  <p className=''>29/01/2023 9:15 AM</p>
                  <p className='internet'>Internet slow</p>
                  <p className=''>Open</p>
                </div>
                <div className="customer-detail">
                  <p className=''>22198548</p>
                  <p className=''>30/01/2023 10:15 AM</p>
                  <p className=''>Internet down</p>
                  <p className=''>Closed</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerService

import React from 'react'
import './accountdetails.css'
import { MdFileUpload } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AccountDetails = () => {
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
              <div className="account-details-bg">
                <div className="details-box">
                  <p className="account-title">Account details</p>

                  <div className="input-box-1">
                    <p className="heading">Email</p>
                    <input
                      type="email"
                      className="type-here"
                      placeholder="Ex. johnadam12@gmail.com"
                    />
                    <p className="heading">User name</p>
                    <input
                      type="text"
                      className="type-here"
                      placeholder="Type here..."
                    />
                    <p className="heading">Customer name</p>
                    <input
                      type="text"
                      className="type-here"
                      placeholder="Type here..."
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="details-box">
                      <p className="account-title">ID details</p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="input-box-2">
                            <p className="heading">Date Of Birth</p>
                            <input
                              type="date"
                              className="type-here-1"
                              placeholder="Select"
                            />
                            <p className="heading">Country</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Select"
                            />
                            <p className="heading">ID Document Number</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Type here.."
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="input-box-2">
                            <p className="heading">Personal ID</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Personal ID"
                            />
                            <p className="heading">ID Document Type</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Select"
                            />
                            <p className="heading">Valid Until</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <p className="heading">ID Document</p>
                          <p className="file-size">
                            File size limit of: 15 MB. JPG, PDF, TIFF, PNG, DOCX
                            filesare accepted
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <button className="upload">
                            <MdFileUpload /> Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="details-box">
                      <p className="account-title">Address details</p>
                      <div className="row">
                        <p className="heading">Address</p>
                        <input
                          type="text"
                          className="type-here-Add"
                          placeholder="Type here..."
                        />
                        <div className="col-lg-6 col-md-12">
                          <div className="input-box-2">
                            <p className="heading">Country</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Select"
                            />
                            <p className="heading">City</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Select"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div className="input-box-2">
                            <p className="heading">District</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Select"
                            />
                            <p className="heading">Postal code</p>
                            <input
                              type="text"
                              className="type-here-1"
                              placeholder="Type here..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <p className="heading">Proof of address</p>
                          <p className="file-size">
                            File size limit of: 15 MB. JPG, PDF, TIFF, PNG, DOCX
                            filesare accepted
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <button className="upload">
                            <MdFileUpload /> Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
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
                <Link to="/payment-method">
                  <button className="checkout-top my-4">Checkout</button>
                </Link>
                <Link to="/select-Number1">
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

export default AccountDetails

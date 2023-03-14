import React from 'react'
import { Link } from 'react-router-dom'
import './totalamount.css'

const TotalAmount = () => {
  return (
    <div className="amount-section">
      <div className="row">
        <div className="col-6">
          <p className="data-amount">Swish 3</p>
          <p className="data-amount">Swish 200</p>
        </div>
        <div className="col-6">
          <div className="price">
            <p>£30.00</p>
            <p>£40.00</p>
          </div>
        </div>
        <div className="line-1"></div>
        <div className="col-6">
          <p className="heading">Total</p>
        </div>
        <div className="col-6">
          <div className="total-price">
            <p>£70.00</p>
          </div>
        </div>
        <Link to="/select-number">
          <button className="next-top my-4">Next</button>
        </Link>
        <Link to="/">
          <button className="back-top">Back</button>
        </Link>
        {/* <button className="back-top">Back</button> */}
      </div>
    </div>
  )
}

export default TotalAmount

import React from 'react'
import { BsCheck2 } from 'react-icons/bs'

const FIlterSection = () => {
  return (
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
  )
}

export default FIlterSection

import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="left-content">
              Contact us | About us | Terms and conditions | Policy
            </p>
          </div>
          <div className="col-6">
            <p className="right-content">
              Copyright © 2023. All Rights Reserved By Telco Opertor
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

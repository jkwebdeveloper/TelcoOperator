import React from 'react'
import './mobileplans.css'
import TotalAmount from '../../components/MobilePlans/TotalAmount'
import Swish from '../Swish/Swish'
import FIlterSection from '../../components/MobilePlans/FIlterSection'
import NavigationMenu from '../../components/NavigationMenu'

const MobilePlans = () => {
  return (
    <div className="hero-section-bg">
      <div className="container">
        <div className="row">
            <div className="col-12">
              <NavigationMenu />
            </div>
        </div>
        <div className="row">
          <div className="col-2">
            <FIlterSection />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <Swish />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <TotalAmount />
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default MobilePlans

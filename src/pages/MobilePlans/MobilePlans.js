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
          <div className="col-7">
            <Swish />
          </div>
          <div className="col-3">
            <TotalAmount />
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default MobilePlans

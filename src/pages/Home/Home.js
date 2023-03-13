import React from 'react'
import './home.css'
import mobileplan from '../../assets/icon/Icons/mobileplan1.png'
import device from '../../assets/icon/Icons/devices1.png'
import fixedline from '../../assets/icon/Icons/fixedline1.png'

// import { FaSimCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='section-bg'>
      <div className="container">
        <div className='heading'>
          <h2>Title Here</h2>
        </div>
          <div className="row">
            <div className="col-md-4">
                <Link to="mobile-plans">
                    <div className='box'>
                        <div className="icon-bg">
                            <img src={ mobileplan } alt="icon" style={{ height: '53px' }}/> 
                        </div>
                          <h2>Mobile plans</h2>
                    </div>
                </Link>
            </div>
            <div className="col-md-4">
              <Link to="devices">
              <div className='box'>
                        <div className="icon-bg">
                            <img src={ device } alt="icon" style={{ height: '53px' }}/> 
                        </div>
                          <h2>Devices</h2>
                    </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="fixed-line-service">
                <div className='box'>
                    <div className="icon-bg">
                        <img src={ fixedline } alt="icon" style={{ height: '48px' }}/> 
                    </div>
                          <h2>Fixed line service</h2>
                    </div>
              </Link>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Home

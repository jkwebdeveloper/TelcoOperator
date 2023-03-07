import React from 'react'
import './header.css'
import logo from '../../assets/images/logo.png'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-Top">
        <div className="container">
          <p className="content">
            Help Centre | +44 75 77 644 992 | info@opencloudbss.com
          </p>
        </div>
      </div>
      <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <Link to="/">
                    <img src={logo} alt="logo" style={{paddingTop:'5px'}}/>
                </Link>
                </div>
                <div className="col-md-6">
                        {/* <button className='btn-top'>Log Out</button> */}
                        <button className='btn-top'>Log In</button>
                    <div className="nav-list">
                        {/* <li><a href="#">Activate SIM</a></li> */}
                        <Link><p className='nav-item'>Shop</p></Link>
                        <Link><p className='nav-item'>Explore</p></Link>
                        <Link><p className='nav-item'>Help</p></Link>
                        <Link><p className='nav-item'><FiShoppingCart/></p></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* <nav>
        <div className='c'></div>
      </nav> */}
    </header>
  )
}

export default Header

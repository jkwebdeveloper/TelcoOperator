import React from 'react'
import './header.css'
import logo from '../../assets/images/logo.png'
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
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
                <div className="col-4">
                  <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" style={{paddingTop:'5px'}}/>
                    </Link>
                  </div>
                </div>
                <div className="col-8">
                        {/* <button className='btn-top'>Log Out</button> */}
                        <div className="toggle-menu">
                          <li><a href="#"><HiMenu/></a></li>
                        </div>
                        <button className='btn-top'>Log In</button>
                    <div className="nav-list">
                        {/* <li><a href="#">Activate SIM</a></li> */}
                        <ul>
                          <li><a href="/">Shop</a></li>
                          <li><a href="/">Explore</a></li>
                          <li><a href="/">Help</a></li>
                          <li><a href="/"><FiShoppingCart/></a></li>
                        </ul>
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

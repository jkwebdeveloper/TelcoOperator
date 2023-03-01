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
                <div className="col-6">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                </div>
                <div className="col-6">
                    <div className="nav-list">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Help</a></li>
                        <li><FiShoppingCart/></li>
                        <li><button className='btn-top'>login</button></li>
                        {/* <Link to="/search">Shop</Link>
                        <Link to="/search">Shop</Link>
                        <Link to="/search">Shop</Link> */}
                        
                         
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

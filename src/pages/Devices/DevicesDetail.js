import React from 'react'
import './devicesdetail.css'
import iphoneProSilver from '../../assets/images/Rectangle 865.png'
import showiphoneSilver from '../../assets/images/silver.png'
import showiphonePurple from '../../assets/images/purple.png'
import showiphoneBlack from '../../assets/images/black.png'
import showiphoneGold from '../../assets/images/gold.png'
import showiphoneMidnight from '../../assets/images/midnight.png'
import { Link } from 'react-router-dom'


const DevicesDetail = () => {
  return (
    <>
    <div className="iphone-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="product-img">
                  <img src={iphoneProSilver} alt="" style={{ width: '60%' }} />
                </div>
                <div className="devices-show">
                  <img src={showiphoneSilver} alt="" style={{ width: '60px' }} />
                  <img src={showiphonePurple} alt="" style={{ width: '60px' }} />
                  <img src={showiphoneBlack} alt="" style={{ width: '60px' }} />
                  <img src={showiphoneGold} alt="" style={{ width: '60px' }} />
                  <img
                    src={showiphoneMidnight}
                    alt=""
                    style={{ width: '60px' }}
                  />
                </div>

                <p className="disc-heading">Discription</p>
                <p className="disc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>

                
                  <div className="col-lg-9 col-md-12">
                    <div className="row">
                      <div className="specification-box">
                        <p className="disc-heading">Specification</p>
                        <div className="line-1"></div>
                        <div className="row">
                          <div className="col-6 md-12">
                            <p className="spec-text">Model Name</p>
                            <p className="spec-text">Color</p>
                            <p className="spec-text">SIM Type</p>
                            <p className="spec-text">Display Size</p>
                            <p className="spec-text">Resolution</p>
                            <p className="spec-text">Display Type</p>
                            <p className="spec-text">Operating System</p>
                            <p className="spec-text">Processor Type</p>
                            <p className="spec-text">Processor Core</p>
                            <p className="spec-text">Internal Storage</p>
                            <p className="spec-text">Primary Camera</p>
                            <p className="spec-text">Network Type</p>
                          </div>

                          <div className="col-6 md-12">
                            <p className="spec-size">iPhone 14 Pro Max</p>
                            <p className="spec-size">Silver</p>
                            <p className="spec-size">Dual Sim(Nano + eSIM)</p>
                            <p className="spec-size">17.02 cm (6.7 inch)</p>
                            <p className="spec-size">2796 x 1290 Pixels</p>
                            <p className="spec-size">Super Retina XDR Display</p>
                            <p className="spec-size">iOS 16</p>
                            <p className="spec-size">A16 Bionic Chip, 6 Core Processor</p>
                            <p className="spec-size">Hexa Core</p>
                            <p className="spec-size">128 GB</p>
                            <p className="spec-size">48MP + 12MP + 12MP + 12MP</p>
                            <p className="spec-size">5G, 4G VOLTE, 4G, 3G, 2G</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
              </div>
              <div className="col-lg-6 col-md-12 sm-12">
                <div className="row">
                  <div className="rightbar-heading">
                    <p className="name">Apple</p>
                    <p className="devicrs-name">Iphone 14 Pro Max</p>
                    <p className="name">Silver, 128GB</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="recurring-box">
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="text">£700 one off, no recurring </div>
                          <div className="col-12">
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="recurring-box">
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="text">£200 one off, 25 recurring </div>
                          <div className="col-12">
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="recurring-box">
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="text">£100 one off, 50 recurring </div>
                          <div className="col-12">
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="recurring-box">
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="text">No one off, 100 recurring </div>
                          <div className="col-12">
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="radio-btn col-12 md-12">
                          <div className="col-6 md-12 sm-12">
                            <Link to="/mobile-plans">
                              <button className="Add-next">Add and Next</button>
                            </Link>
                          </div>
                          <div className="col-6">
                            <button className="back my-3">Back</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-4"></div>
                <div className="row">
                  <div className="col-12 col-md-12 col-sm-6">
                    <p className="disc-heading">Color</p>
                    <div className="color-box">
                      <button className="color-change"></button>
                      <button className="color-purple"></button>
                      <button className="color-midnight"></button>
                      <button className="color-gold"></button>
                      <button className="color-black"></button>
                    </div>
                    <div className="line-4"></div>

                    <p className="disc-heading">Storage</p>
                    <div className="storage-btn">
                      <button variant="contained">128GB</button>
                      <button variant="contained">256GB</button>
                      <button variant="contained">512GB</button>
                      <button variant="contained">1TB</button>
                    </div>

                    <p className="disc-heading">Memory</p>
                    <div className="storage-btn">
                      <button variant="contained">4GB</button>
                      <button variant="contained">6GB</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DevicesDetail

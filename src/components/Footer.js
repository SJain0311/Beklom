import React from 'react'
import { Link } from "react-router-dom";
import Map from "../assets/images/footer/map.png"
import '../App.css'
import MapDirection from './pages/MapDirection';

const Footer = () => {
  return (
    <>
      <div className="img-vec2">
        <img src="images/home/vec2.png" alt="" />
      </div>
      <div className='footer-bg body'>
        <footer className='text-center text-lg-start text-muted mt-5'>

          <section className='d-flex justify-content-around p-4'>
            <div className='footer-margin'>
              <img src="images/logo.png" className='logo-media' alt="logo-here" />
            </div>

            <div className='text-white justify-content-center' style={{ marginTop: 72, marginRight: 450 }}>
              <a href='https://www.facebook.com/beklominc' className='me-6 text-white text-decoration mx-3'>
                <img src="images/footer/Facebook.png" alt="fb" />
              </a>
              <a href='' className='me-6 text-white text-decoration mx-3'>
                <img src="images/footer/Instagram.png" alt="Instagram" />
              </a>
              <a href='' className='me-6 text-white text-decoration mx-3'>
                <img src="images/footer/Twitter.png" alt="Twitter" />
              </a>
              <a href='https://www.linkedin.com/company/beklom-inc' className='me-6 text-white text-decoration mx-3'>
                <img src="images/footer/Twitter.png" alt="Linkedin" />
              </a>
            </div>

          </section>
          <section >
            <div className='fluid-container text-center text-md-start mt-1 p-1'>

              <div className='row mt-3'>
                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <div >
                    <MapDirection />
                    {/* <img src={Map} className='map-img' /> */}
                  </div>
                </div>

                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <h6 className='text-uppercase text-white fw-bold mb-4 footer-link'>Links</h6>
                  <p>
                    <a href='#!' className='text-white link-hide' >
                      Terms & Conditions
                    </a>
                  </p>
                  <p>
                    <Link to="/partnerwith" className='text-white link-hide'>
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <a href='#!' className='text-white link-hide'>
                      Partner with us
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-white link-hide'>
                      Admin Login
                    </a>
                  </p>
                </div>

                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-left'>

                  <h6 className='text-uppercase  text-white fw-bold mb-4'>Get In Touch</h6>
                  <p className='text-white'>
                    <img src="images/footer/Call.png" /> +1-647-468-7713
                    <br />
                    +1-647-954-4590

                  </p>
                  <p className='text-white'>
                    <img src="images/footer/Email.png" /> info@beklom.com

                  </p>
                  <p className='text-white'>
                    <img src="images/footer/Location.png" /> Beklom Technologies Inc.
                    4 McHugh Rd,
                    Ajax, ON - L1Z 0M8

                  </p>

                </div>

                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>

                  <h6 className='text-uppercase fw-bold mb-4 text-white'>Subscribe to Newsletter</h6>
                  <div class="col-md-9 col-12">

                    <div class="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" className="form-control search" placeholder='Email' style={{ background: "transparent" }} />
                      <button className='w-5 btn-color btn-subscribe mt-4 text-white'>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* <div
          className='text-center text-white p-4 footer-bottom-bg'
        >
          © 2021 Copyright:
          <Link className='text-reset text-decoration fw-bold  text-decoration' to="/">
            STCO@123.com
          </Link>
        </div> */}

        </footer>
      </div>
    </>
  )
}

export default Footer
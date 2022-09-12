import React from "react";
import Navbar from "../Navbar";
import '../contact/contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <Navbar />
        <section className="header-section">
          <h1 className="h1-color">
            Contact Us
          </h1>
          <p className="header-p">Let’s talk about your website or projects.
            Send us a message and we </p>
          <p className="header-p1">will be in touch within one business day</p>
        </section>
      </div>

      <div className="row rounded section-top contact-form">
        <div className="col-1"></div>
        <div className="col-5 shadow">
          <div >
            <h1 className="h1-text">Contact Information</h1>

            <div className="image-space">
              <img src="images/contactus/line.png" alt="" />
              <img src="images/contactus/down.png" className="down-img" alt="" />
              <img src="images/contactus/line.png" alt="" />
            </div>

            <div class="container my-3 d-flex justify-content-center">

              <form className=" row">
                <div className="row column-change" >
                  <input className="input-field" type="text" id="fname" name="firstname" placeholder="Name.." />
                </div>
                <div className="row column-change"  >
                  <input className="input-field" type='email' id="email" name="email" placeholder="Email.." />
                </div>
                <div className="row column-change">
                  <textarea className="form-textarea" id="Message" name="textarea" placeholder="Message" />
                </div>
                <button type="btn" className="btn contact-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-5 shadow">
          <div >
            <p className="h1-text">Get in touch</p>

            <div className="image-space space">
              <img src="images/contactus/line.png" alt="" />
              <img src="images/contactus/down.png" className="down-img" alt="" />
              <img src="images/contactus/line.png" alt="" />
            </div>

            <div className="container my-3 d-flex justify-content-center sec2">

              <div className=" row">
                <div className="row ">
                  <div className="get-touch-space">
                    <img src="images/contactus/all.png" className="all-img" />
                  </div>
                </div>
                <div className="img-btw">
                  <img src="images/contactus/map.png" className="contact-img" />
                  <p className="get-touch">Beklom Technologies Inc.
                    4 McHugh Rd,
                    <br /> Ajax, ON - L1Z 0M8</p>
                </div>
                <div className="img-btw">
                  <img src="images/contactus/phone.png" className="contact-img" />
                  <p className="get-touch">+1-647-468-7713 ,
                    +1-647-954-4590
                  </p>
                </div>
                <div className="img-btw">
                  <img src="images/contactus/email.png" className="contact-email" />
                  <p className="get-touch">info@beklom.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}
export default Contact
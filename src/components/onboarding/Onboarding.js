import React from "react";
import '../onboarding/onboarding.css'
import Navbar from "../Navbar";

const Onboarding = () => {
    return (
        <>
            <div className="bg-header">
                <Navbar />
                <section className="header-section">
                    <h1 className="h1-color">
                        Onboarding
                    </h1>
                    <p className="header-p">Let’s talk about your website or projects.
                        Send us a message and we </p>
                    <p className="header-p1">will be in touch within one business day</p>
                </section>
                <img src="images/onboarding/vector1.png" className="img-vector" />
            </div>
            <section className="form-section">
                <h3 className="header">Please fill the folowing details !</h3>
                <div >
                    <form className="form-sec">
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/name-icon.png" className="img-size" />
                            </div>
                            <div className="col-11">
                                <input className="form-input" type="text" id="fname" name="firstname" placeholder="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/phone-icon.png" className="mobile-img" />
                            </div>
                            <div className="col-11">
                                <input className="form-input" type='password' id="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/email-icon.png" className="email-img" />
                            </div>
                            <div className="col-11">
                                <input className="form-input" type="email" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/name-icon.png" className="textarea-img" />
                            </div>
                            <div className="col-11">
                                <textarea className="form-textarea" id="email" name="textarea" placeholder="Massege" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/upload-icon.png" className="upload-img" />
                            </div>

                            <div className="col-11  " >
                                <div className="drag-area">
                                    <img src="images/onboarding/drop-icon.png" className="upload-img" />
                                    <p style={{ color: 'black' }}>Drag and Drop or Browse File</p>
                                </div>
                            </div>
                        </div>


                    </form>
                    <button type="btn" className="btn btn-submit"
                    >Submit</button>
                </div>

            </section>


        </>
    )
}
export default Onboarding;

import React from "react";
import Navbar from "../Navbar";
import './getstart.css';

const Getstart = () => {
    return (
        <>
            <div className="bg-header">
                <Navbar />
                <section className="header-section">
                    <h1 className="get-header-h1">
                        Get Start
                    </h1>
                    <p className="header-p">Let’s talk about your website or projects.
                        Send us a message and we </p>
                    <p className="header-p1">will be in touch within one business day</p>
                </section>
                <img src="images/onboarding/vector1.png" className="get-vec" alt=""/>
            </div>
            <section className="form-section">
                <p className="p-text">Cloud computing is the on-demand availability of computer system resources,
                    especially data <br/> storage and computing power, without direct active management by the user.
                    Large clouds often have <br/> functions distributed over multiple locations,
                    each location being a data center.</p>
                <div >
                    <form className="form-sec">
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/name-icon.png" className="img-size" alt=""/>
                            </div>
                            <div className="col-11">
                                <input className="form-input" type="text" id="fname" name="firstname" placeholder="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/phone-icon.png" className="mobile-img" alt="" />
                            </div>
                            <div className="col-11">
                                <input className="form-input" type='password' id="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img src="images/onboarding/email-icon.png" className="email-img" alt=""/>
                            </div>
                            <div className="col-11">
                                <input className="form-input" type="email" id="email" name="email" placeholder="Email" />
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
export default Getstart
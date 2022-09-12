import React, { useState } from "react";
import '../home/home.css'
import Navbar from "../Navbar";
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-grid-carousel'
import Slider from "./Slider";
import OurServices from "../pages/OurServices";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <>
            <div className="section1-bg img-fluid">
                <Navbar />
                <div className="home" >
                    <h1 className="home-h1-color">Beklom Technologies</h1>
                   <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
                </div>
                <div className="home-img-vec1">
                    <img src="images/home/vec1.png" />
                </div>
            </div>
            <section className="home-center-content">
                <div className="home-content-Sec">
                    <p className="center-paragraph">
                        Beklom Technologies has the greatest tools
                        and people to help you grow your business.
                        Does this seem like something you're interested in?
                        <br />Start your onboarding process today!.
                    </p>
                </div>
            </section>
            <section className="home-center-content">
                <div >
                    <img src="images/home/line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/home/line.png" />
                </div>
            </section>
            <section>
                <div className="why-choose-us">
                    <div className="why-choose-div">
                        <img src='images/home/bg-airplane.png' />
                        <button type="button" className="btn mid-button mid-button-center">Ready to get onboard</button>
                        <img src="images/home/Vector-aero.png" className="vector-aero" />
                    </div>
                    <div className="choose-div">
                        <h1 className="choose-h1">Why Choose US</h1>
                        <p className="choose-p">Cloud computing is the on-demand availability of computer system resources,
                            especially data storage and computing power,
                            without direct active management by the user.
                            Large clouds often have functions distributed over multiple locations,
                            each location being a data center.</p>
                        <p className="choose-p">Cloud computing is the on-demand availability of computer system resources,
                            especially data storage and computing power,
                            without direct active management by the user.</p>
                    </div>

                </div>
                <div className="home-img-vec2">
                    <img src="images/home/vec2.png" />
                </div>
                <OurServices/>

            </section>
            <section className="home-center-content">
                <div >
                    <img src="images/home/line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/home/line.png" />
                </div>
            </section>
            <section>
                <div className="why-choose-us">
                    <div className="choose-div">
                        <h1 className="choose-h1">About US</h1>
                        <p className="choose-p">Cloud computing is the on-demand availability of computer system resources,
                            especially data storage and computing power, without direct active management by the user.
                            Large clouds often have functions distributed over multiple locations, each location being a data center.</p>
                        <p className="choose-p">Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power,
                            without direct active management by the user.</p>
                        <button type="btn" className="btn btn-read"
                        >Read More</button>
                    </div>

                    <div style={{ marginLeft: 109 }}>
                        <img src='images/home/About-img.png' />
                    </div>
                </div>
            </section>
            <Slider/>

       
            {/* <section >
                <div className="bg-about-us">
                    <img src="images/home/bg-about.png"/>       
                    <div className="arrow-content">
                        <div className="arrow-img">
                            <img src="images/home/left-arrow.png" />
                        </div>
                        <div className="div-about">
                            <h1 className="div-about-h1">Akash Singh</h1>
                            <p className="div-about-p">UI UX Designer</p>
                            <img style={{ width: 15, height: 15, marginBottom: 20, marginTop: 10 }} src="images/home/up-side.png" />
                            <p className="div-about-p">Cloud computing is the on-demand availability of computer system resources,
                                especially data storage and computing power,
                                without direct active management by the user.
                                Large clouds often have functions distributed over multiple locations,
                                each location being a data center.</p></div>
                        <div className="arrow-img">
                            <img src="images/home/right-arrow.png" />
                        </div>
                    </div>
                    <div className="div-img-content">
                        <div className="div-img">
                            <img src="images/home/img1.png" />
                        </div>
                        <div className="div-img">
                            <img src="images/home/img2.png" />
                        </div>
                        <div className="div-img">
                            <img src="images/home/img3.png" />
                        </div>
                        <div className="div-img">
                            <img src="images/home/img4.png" />
                        </div>
                    </div>
                    <div className="home-img-vec3">
                        <img src="images/home/vec3.png" />
                    </div>
                </div>
            </section> */}

        </>
    )
}
export default Home;
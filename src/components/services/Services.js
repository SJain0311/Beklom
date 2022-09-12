import React, { useState } from "react";
import Navbar from "../Navbar";
import { Modal, Button } from 'react-bootstrap';
import "../services/services.css"
import OurServices from "../pages/OurServices";

const Services = () => {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const btnClose = () => setVisible(false);
    const btnClose1 = () => setVisible1(false);
    const btnClose2 = () => setVisible2(false);
    const btnClose3 = () => setVisible3(false);
    const btnClose4 = () => setVisible4(false);

    const btnShow = () => setVisible(true);
    const btnShow1 = () => setVisible1(true);
    const btnShow2 = () => setVisible2(true);
    const btnShow3 = () => setVisible3(true);
    const btnShow4 = () => setVisible4(true);

    return (
        <>

            <div className="services-bg">
                <Navbar />
                <div className="text-center services" >
                    <h1 className="services-h1-color">Beklom Technologies</h1>
                    <button type="btn" className="btn btn-primary">Get Started</button>
                </div>
                <div className="services-img-vec1">
                    <img src="images/home/vec1.png" alt="" />
                </div>
            </div>

            <section className="services-center-content">
                <div >
                    <img src="images/dark-line.png" alt="" />
                    <img src="images/home/mid-vector.png" alt="" />
                    <img src="images/dark-line.png" alt="" />
                </div>
            </section>
            <OurServices />

            <section className="indutries-section">
                <div>
                    <h1 className="text-center indutries-h1">Industries we serve</h1>
                </div>
                <div className="indutries-text">
                    <div className=" d-flex justify-content-center">
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Healthcare</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Real Estate</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Hospitality</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Logistics</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Ecommerce</h6>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Ecommerce</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Ecommerce</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Travel & Tourism</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Social Networking</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Media</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Healthcare</h6>
                        </div>
                        <div className="hex">
                            <img src="images/services/Welcome-bro 1.png" className="hex-img" />
                            <h6 className="title">Media</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-center-content">
                <div >
                    <img src="images/dark-line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/dark-line.png" />
                </div>
            </section>

            <section className="our-client-section">
                <h1 className="text-center p-5 our-title-center">Our's Client</h1>
                <div className="our-client-bg d-flex flex-row justify-content-around card-container">

                    <div className="card-css text-white">
                            <h1 className="">G</h1>
                            <p className="card-p">Google</p>
                    </div>
                    <div className="card-css text-white">
                            <h1 className="">G</h1>
                            <p className="card-p">Google</p>
                    </div>
                    <div className="card-css text-white">
                            <h1 className="">G</h1>
                            <p className="card-p">Google</p>
                    </div>
                    <div className="card-css text-white">
                            <h1 className="">G</h1>
                            <p className="card-p">Google</p>
                    </div>
                    <div className="card-css text-white">
                            <h1 className="">G</h1>
                            <p className="card-p">Google</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services

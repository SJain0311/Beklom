import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../home/home.css'

const Slider = () => {
    return (
        <>
            <div className='container-fluid '>
                <Carousel 
                    showThumbs={true}
                    showStatus={false}
                    infiniteLoop
                    useKeyboardArrows
                    // transitionTime={1000}
                    width="auto" 
                >
                    <div className="slide-holder ">

                        <img src="images/home/about-img1.png" className="img-circle" />
                   
                        <div className="text-container ">
                            <h2>Akash Singh</h2>
                            <p >UI UX Designer</p>
                            <p>
                                Cloud computing is the on-demand availability of computer system resources,
                                especially data storage and computing power,
                                without direct active management by the user.
                                Large clouds often have functions distributed over multiple locations,
                                each location being a data center.
                            </p>
                        </div>
                    </div>
                    <div className="slide-holder">
                        <img src="images/home/about-img2.png"
                     className="img-circle"   />
                        <div className="text-container">
                            <h2>Akash Singh</h2>
                            <p>UI UX Designer</p>
                            <p>
                                Cloud computing is the on-demand availability of computer system resources,
                                especially data storage and computing power,
                                without direct active management by the user.
                                Large clouds often have functions distributed over multiple locations,
                                each location being a data center.
                            </p>
                        </div>
                    </div>
                    <div className="slide-holder">
                        <img
                            src="images/home/about-img1.png"
                       className="img-circle"  />
                        <div className="text-container">
                            <h2>Akash Singh</h2>
                            <p>UI UX Designer</p>
                            <p>
                                Cloud computing is the on-demand availability of computer system resources,
                                especially data storage and computing power,
                                without direct active management by the user.
                                Large clouds often have functions distributed over multiple locations,
                                each location being a data center.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Slider

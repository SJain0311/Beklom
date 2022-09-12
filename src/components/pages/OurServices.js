import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-grid-carousel'
import '../pages/allpage.css'

const OurServices = () => {

    const datas = [
        {
            title: "Web development",    
            description: " Ensuring that web users have a positive experience by developing a wide range of web-based applications. When it comes to developing and maintaining customer-facing and enterprise Web apps that have a high conversion and adoption rate, Beklom is the company to turn to."
        },
        {
            title: "Social Media Management",
            description: "Generate, post, and evaluate the content on social media networks such as Facebook, Instagram, and Twitter you can manage your online presence. Engaging and communicating with social media users is also a part of social media management. You can delegate the management of your social media accounts to third-party services, tools, and managers."

        },
        {
            title: "US Taxation",
            description: "Foresight and experience inspire our tax planning and compliance services. A trusted advisor is there to help you make the best decisions for your business and your employees."

        },
        {
            title: "Book-keeping",
            description: "Keeping track of your company's financial transactions. The bookkeepers will produce financial reports on a regular basis summarizing the business's activities"
        },
        {
            title: "Technical/Non-Technical recruitment",
            description:" A technical/non-technical recruitment specialist in order to interact with possible candidates online and offline for currently open roles, screen applications, assist in hiring managers and organize the entire hiring process end to end."

        },
        {
            title: "Graphic Designing",
            description: "A company in the creative digital services sector that offers expert graphic design services. Brochures, banners, flyers, business cards, e-books, and other marketing materials all benefit from our graphic design expertise. Using our graphic designs, you can leave a lasting impact on your potential customers' minds. Our specialist designers can provide your company with a strong online presence by combining professionalism with a high level of creativity."
            
        },
        {
            title: "Lead generation",
            description: "The acquisition and evaluation of fresh leads that, in theory, will turn into new clients is a common usage of lead generation services to enterprises. It is possible to hire an individual consultant or a large company to supply these services."

        },
     
    ]
    




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

            {/* <section className="bg-our-services">
                <div className="our-services-section" >
                    <h1 className="our-services-h1">Our Services</h1>
                    <p className="our-services-p">Your ideal customer profile,
                        strategic social media management, lead generation based on pain points,
                        email and cold call copy, rebuttals, etc.
                        are all built from scratch by Beklom Technologies with your input and review,
                        so we can ensure that our B2B organizations will be effective at opening up conversations with your ideal customer targets.
                    </p>
                    <div className="swap-section">
                        <div class='container-fluid' >
                            <Carousel cols={4} showDots={true} loop hideArrow dotColorActive="#E39825">
                                <Carousel.Item >
                                    <div className="swap-div flex-container" >
                                        <div className='card card-css'>
                                      
                                                <div onClick={btnShow}>
                                                    <img src="images/home/Server-bro.png" className="" alt="website" />
                                                    <p className="swap-text">Website Developement</p>
                                                </div>
                                                <Modal show={visible} onHide={btnClose}>
                                                    <Modal.Header closeButton></Modal.Header>
                                                    <Modal.Body>
                                                        <div className="popup-div">
                                                            <img src="images/home/Server-bro.png" alt=''/>
                                                        </div>
                                                        <div className="popup1-div">
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                            <img src="images/home/mid-vector.png" className="pop-mid" alt='' />
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                        </div>
                                                        <div className="popup2-div">
                                                            <p className="popup-p">Website Developement</p>
                                                            <p className="popup-p1">
                                                                Ensuring that web users have a positive experience by
                                                                developing a wide range of web-based applications.
                                                                When it comes to developing and maintaining customer-facing
                                                                and enterprise Web apps that have a high conversion and adoption rate,
                                                                Beklom is the company to turn to.</p>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                                </div>
                                          
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className="swap-div flex-container" >
                                        <div className='card card-css'>
                                        
                                                <div onClick={btnShow}>
                                                    <img src="images/home/Server-bro.png" className="" alt="website" />
                                                    <p className="swap-text">Website Developement</p>
                                                </div>
                                                <Modal show={visible} onHide={btnClose}>
                                                    <Modal.Header closeButton></Modal.Header>
                                                    <Modal.Body>
                                                        <div className="popup-div">
                                                            <img src="images/home/Server-bro.png" alt=''/>
                                                        </div>
                                                        <div className="popup1-div">
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                            <img src="images/home/mid-vector.png" className="pop-mid" alt='' />
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                        </div>
                                                        <div className="popup2-div">
                                                            <p className="popup-p">Website Developement</p>
                                                            <p className="popup-p1">
                                                                Ensuring that web users have a positive experience by
                                                                developing a wide range of web-based applications.
                                                                When it comes to developing and maintaining customer-facing
                                                                and enterprise Web apps that have a high conversion and adoption rate,
                                                                Beklom is the company to turn to.</p>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                                </div>
                                          
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className="swap-div flex-container" >
                                        <div className='card card-css'>
                                       
                                                <div onClick={btnShow}>
                                                    <img src="images/home/Server-bro.png" className="" alt="website" />
                                                    <p className="swap-text">Website Developement</p>
                                                </div>
                                                <Modal show={visible} onHide={btnClose}>
                                                    <Modal.Header closeButton></Modal.Header>
                                                    <Modal.Body>
                                                        <div className="popup-div">
                                                            <img src="images/home/Server-bro.png" alt=''/>
                                                        </div>
                                                        <div className="popup1-div">
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                            <img src="images/home/mid-vector.png" className="pop-mid" alt='' />
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                        </div>
                                                        <div className="popup2-div">
                                                            <p className="popup-p">Website Developement</p>
                                                            <p className="popup-p1">
                                                                Ensuring that web users have a positive experience by
                                                                developing a wide range of web-based applications.
                                                                When it comes to developing and maintaining customer-facing
                                                                and enterprise Web apps that have a high conversion and adoption rate,
                                                                Beklom is the company to turn to.</p>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                                </div>
                                           
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className="swap-div flex-container" >
                                        <div className='card card-css'>
                                       
                                                <div onClick={btnShow}>
                                                    <img src="images/home/Server-bro.png" className="" alt="website" />
                                                    <p className="swap-text">Website Developement</p>
                                                </div>
                                                <Modal show={visible} onHide={btnClose}>
                                                    <Modal.Header closeButton></Modal.Header>
                                                    <Modal.Body>
                                                        <div className="popup-div">
                                                            <img src="images/home/Server-bro.png" alt=''/>
                                                        </div>
                                                        <div className="popup1-div">
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                            <img src="images/home/mid-vector.png" className="pop-mid" alt='' />
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                        </div>
                                                        <div className="popup2-div">
                                                            <p className="popup-p">Website Developement</p>
                                                            <p className="popup-p1">
                                                                Ensuring that web users have a positive experience by
                                                                developing a wide range of web-based applications.
                                                                When it comes to developing and maintaining customer-facing
                                                                and enterprise Web apps that have a high conversion and adoption rate,
                                                                Beklom is the company to turn to.</p>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                                </div>
                                           
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className="swap-div flex-container" >
                                        <div className='card card-css'>
                                       
                                                <div onClick={btnShow}>
                                                    <img src="images/home/Server-bro.png" className="" alt="website" />
                                                    <p className="swap-text">Website Developement</p>
                                                </div>
                                                <Modal show={visible} onHide={btnClose}>
                                                    <Modal.Header closeButton></Modal.Header>
                                                    <Modal.Body>
                                                        <div className="popup-div">
                                                            <img src="images/home/Server-bro.png" alt=''/>
                                                        </div>
                                                        <div className="popup1-div">
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                            <img src="images/home/mid-vector.png" className="pop-mid" alt='' />
                                                            <img src="images/line.png" className="pop-line" alt=''/>
                                                        </div>
                                                        <div className="popup2-div">
                                                            <p className="popup-p">Website Developement</p>
                                                            <p className="popup-p1">
                                                                Ensuring that web users have a positive experience by
                                                                developing a wide range of web-based applications.
                                                                When it comes to developing and maintaining customer-facing
                                                                and enterprise Web apps that have a high conversion and adoption rate,
                                                                Beklom is the company to turn to.</p>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                                </div>
                                        
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="read-button">
                        <button type="btn" className="btn btn-read"
                        >Read More</button>
                    </div>
                </div>
            </section> */}

<div  style={{display:'flex',flexDirection:'row'}}>
<img src="images/home/our-service.png"/>
<div style={{display:'flex',flexDirection:'column'}}>
<div className='card'>
    
</div>
    </div>
</div>


        </>
    )
}
export default OurServices;
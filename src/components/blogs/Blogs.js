import React from "react";
import Navbar from "../Navbar"
import "../blogs/blogs.css"
import Pagination from "../pages/Pagination";

const Blogs = () => {
    return (
        <>
            <div className="blogs-bg">
                <Navbar />
                <div className="blogs-header" >
                    <h1 className="blogs-h1">Beklom Technologies</h1>
                    <button type="btn" className="btn btn-primary">Continue reading</button>
                </div>
                AboutUS
            </div>
            <section>
                <Pagination/>
                {/* <div>
                    <div className="row justify-content-evenly sec1-blogs-space">
                        <div class="col-4">
                            <img src="images/blogs/img1.png" />
                        </div>
                        <div class="col-4">
                            <p>4 July 2022</p>
                            <p className="sec1-blogs-p">Which is the Best CMS Software to Build a Website <br />for better outcomes?</p>
                            <p className="sec1-blogs-p1">Content Management Systems (CMS) is software that helps you <br /> create,
                                manage and modify the content of your website without any <br />
                                technical knowledge of coding and development.</p>
                            <button type="btn" className="btn btn-primary">Continue reading</button>

                        </div>

                    </div>
                    <div className="row justify-content-evenly sec1-blogs-space sec1-blogs-margin">
                        <div className="col-4">
                            <img src="images/blogs/img2.png" />
                            <p>4 July 2022</p>
                            <p className="sec1-blogs-p">Which is the Best CMS Software to Build a Website <br />for better outcomes?</p>
                            <p className="sec1-blogs-p1">Content Management Systems (CMS) is software that helps you <br /> create,
                                manage and modify the content of your website without any <br />
                                technical knowledge of coding and development.</p>
                            <button type="btn" className="btn btn-primary">Continue reading</button>

                        </div>
                        <div className="col-4">
                            <img src="images/blogs/img3.png" />
                            <p>4 July 2022</p>
                            <p className="sec1-blogs-p">Which is the Best CMS Software to Build a Website <br />for better outcomes?</p>
                            <p className="sec1-blogs-p1">Content Management Systems (CMS) is software that helps you <br /> create,
                                manage and modify the content of your website without any <br />
                                technical knowledge of coding and development.</p>
                            <button type="btn" className="btn btn-primary">Continue reading</button>
                        </div>
                    </div>
                </div> */}
            </section>
            <section className="sec2-blogs-center">
                <div >
                    <img src="images/home/line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/home/line.png" />
                </div>
            </section>
            <section>
                <div className="frequently-bg">
                    <div className="frequently-content">
                        <h2 className="frequently-h2">FREQUENTLY ASKED QUESTIONS</h2>
                        <img src="images/blogs/fre-line.png" />
                        <div className="frequently-p" >
                            <p>+&nbsp;&nbsp;How do I get the domain after the purchase?</p>
                        </div>
                        <div className="frequently-p">
                            <p>+&nbsp;&nbsp;What comes with the domain name?</p>
                        </div>
                        <div className="frequently-p">
                            <p>+&nbsp;&nbsp;Can I transfer my domain to another registrar after I buy it?</p>
                        </div>
                        <div className="frequently-p">
                            <p>+&nbsp;&nbsp;Do I also get the other domain extensions when I purchase a domain from HugeDomains.com?</p>
                        </div>
                        <div className="frequently-p">
                            <p>+&nbsp;&nbsp;Can I make an offer on the domain?</p>
                        </div>
                        <div className="frequently-p">
                            <p>+&nbsp;&nbsp;How long will I own my domain?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec2-blogs-center">
                <div >
                    <img src="images/home/line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/home/line.png" />
                </div>
            </section>
            <section>
                <div className="row justify-content-start">
                    <div className="col-4">
    
                       <img src="images/blogs/envelope.png"/>
                       <img src="images/blogs/env.png" className="env-img"/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4 sub-box">
                       <h3>Subscribe to our <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Newslett</h3>
                       <div className="blog-box-size">
                      <input type="text" className="form-control search" placeholder=''/>
                      <button className='btn btn-primary blogs-sub-btn'>Subscribe</button>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Blogs
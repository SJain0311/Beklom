import React, { useState } from "react";
import Navbar from "../Navbar";
import '../aboutus/aboutus.css'

const AboutUS = () => {
  const [flag, setFlag] = useState(false)
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)

  // const handlFlag = () =>{
  //   setFlag(true)
  //   setFlag1(false)
  // }

  return (
    <>
      <div className="aboutpage-bg">
        <Navbar />
        <div className="about-header" >
          <h1 className="about-h1">Beklom Technologies</h1>
          <button type="btn" className="btn btn-primary about-btn">Get Started</button>
        </div>

      </div>
      <div className="">
        <img src="images/home/vec1.png" alt="" className="about-vec" />
      </div>
      <section className="about-section">
        <p className="about-p">Call us now to check how we can help you expand your business and save money at the same time.
          (770) 400 - 0401 is our number and we are available between 9AM to 6PM, Monday - Friday. </p>
        <p className="about-p">We are a leading provider of outsourced services in the area of customer service,
          cold calling, data processing, technical and non-technical<b /> recruitment, social media marketing, digital marketing, etc. </p>
      </section>
      <section className="about-content">
        <div >
          <img src="images/dark-line.png" alt="" />
          <img src="images/home/mid-vector.png" alt="" />
          <img src="images/dark-line.png" alt="" />
        </div>
      </section>
      <section className="our-team-section">

        <h1 className="our-team-h1 ">Our Team's</h1>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-4"><img src="images/aboutus/a-img2.png" className="img-detail-img1 img-box1-swap" onClick={()=>{setFlag(true);setFlag2(false);setFlag1(false)}} alt=""/>
          {
        flag? <div className="img-position img-title img-detail-box img-box-show1">
          <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }</div>
          <div className="col-1"></div>
          <div className="col-4 "><img src="images/aboutus/a-img2.png" className="img-detail-img2 img-box1-swap" onClick={()=>{setFlag(false);setFlag2(false);setFlag1(true)}} alt=""/>
          {
        flag1?
         <div   className="img-position img-title img-detail-box img-box-show2">
          <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }</div>
          <img src="images/aboutus/our-team.png"/>
        </div>
        {/* <div className="our-team-direction">
          <div >
          <img src="images/aboutus/a-img2.png" className="img1-class img-position img1" onClick={()=>{setFlag(true);setFlag2(false);setFlag1(false)}} alt="" />
         {
        flag? <div   className="img-position text-show img-title  img-detail-box " style={{color:'#fff',textOverflow:'clip',margin:15}}>
          <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }
         
          </div> 
          <div>
          <img src="images/aboutus/a-img1.png" className="img1-class img-position img2" onClick={()=>{setFlag(false);setFlag2(false);setFlag1(true)}} alt="" />
          {
        flag1? <div   className="img-position text-show img-title img-detail">
           <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }
          </div>
            <div>
           <img src="images/aboutus/a-img2.png" className="img1-class img-position img3" alt="" onClick={()=>{setFlag(false);setFlag2(true);setFlag1(false)}} />
          {
        flag2? <div   className="img-position text-show img-title img-detail">
           <p className="img-detail-text" >Akash Singh</p>
          <p className="img-detail-text1">UI UX Designer</p>
         </div> : <></>
         }
          </div> 

        </div> */}
      </section>
      <section className="about-content">
        <div >
          <img src="images/dark-line.png" alt="" />
          <img src="images/home/mid-vector.png" alt="" />
          <img src="images/dark-line.png" alt="" />
        </div>
      </section>
      <section className="our-team-section">
        <h1 className="our-team-h1">Features</h1>
        <div className="rectangle-circle"><img src="images/aboutus/rectangle.png" alt="" /></div>
        <div className="feature-circle">
          <h2 className="box-center feature-title">Features</h2>
        </div>

        <div className="feature-box right-box1">
          <div className="box-center">
            <p>Communication</p>
          </div>
        </div>

        <div className="arrow1"><img src="images/aboutus/Arrow1.png" alt="" /></div>
        <div className="feature-box right-box2">
          <div className="box-center">
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="arrow2"><img src="images/aboutus/Arrow5.png" alt="" /></div>
        <div className="feature-box left-box1">
          <div className="box-center">
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="arrow3"><img src="images/aboutus/Arrow3.png" alt="" /></div>
        <div className="feature-box left-box2">
          <div className="box-center">
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="arrow4"><img src="images/aboutus/Arrow6.png" alt="" /></div>
        <div className="feature-box top-box">
          <div className="box-center">
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="arrow5"><img src="images/aboutus/Arrow2.png" alt="" /></div>
        <div className="feature-box down-box">
          <div className="box-center">
            <p>Inspired Design</p>
          </div>
        </div>
        <div className="arrow6"><img src="images/aboutus/Arrow4.png" alt="" /></div>
        <img src="images/aboutus/feature.png" className="feature-img" />

      </section>

      <section>
        <div className="bg-about-us">
          <div className="arrow-content">
            <div className="arrow-img">
              <img src="images/home/left-arrow.png" alt="" />
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
              <img src="images/home/right-arrow.png" alt="" />
            </div>
          </div>
          <div className="div-img-content">
            <div className="div-img">
              <img src="images/home/img1.png" alt="" />
            </div>
            <div className="div-img">
              <img src="images/home/img2.png" alt="" />
            </div>
            <div className="div-img">
              <img src="images/home/img3.png" alt="" />
            </div>
            <div className="div-img">
              <img src="images/home/img4.png" alt="" />
            </div>
          </div>
          <div className="img-vec3">
            <img src="images/home/vec3.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutUS
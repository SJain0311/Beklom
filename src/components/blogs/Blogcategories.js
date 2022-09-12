import React, { useEffect, useState } from 'react'
// import Pagination from '../pages/pagination';
import '../blogs/blogs.css'
import Navbar from "../Navbar";
import Blogs from "./Blogs";
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'

const Blogcategories = () => {
    const location = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([false])
    console.log('location ', location.pathname.split('/'[2]))

    return (
        <>
            <div className="blog-cate-bg">
                <Navbar />
            </div>
            <section className="blog-cate-content">
                <div >
                    <img src="images/dark-line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/dark-line.png" />
                </div>
            </section>
            <section>
                <div className="row justify-content-evenly sec1-blogs-space">
                    <div className="col-4">
                        <img src="images/blogs/img1.png" />
                    </div>
                    <div className="col-4">
                       <div className="sec1-blogs-p1">
                        <p className="">BigCommerce is the best CMS software because it contains built-in SEO that 
                        enables you to optimize your site to appear in more relevant search results.
                          Email integration: If you want to send promotions and content about your products,
                         BigCommerce makes it easy.</p>
                        <p className="">Content Management Systems (CMS) is software that helps you create,
                            manage and modify the content of your website without any
                            technical knowledge of coding and development.</p>
                            </div>
                    </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                    <div className="col-10 blog-cate-p">
                        <p >BigCommerce is a NASDAQ-listed ecommerce platform that provides software as a service services to retailers.
                            The company’s platform includes online store creation, search engine optimization,
                            hosting, and marketing and security from small to Enterprise sized businesses. </p>
                        <p >BigCommerce is a NASDAQ-listed ecommerce platform that provides software as a service services
                            to retailers. The company’s platform includes online store creation, search engine optimization,
                            hosting, and marketing and security from small to Enterprise sized businesses. </p>
                   <img src="images/blogs/heart.png" />
                   <img src="images/blogs/comment.png" className="blog-cate-icon"/>
                    </div>
                    <div className="col-1"></div>
                    </div>           
            </section>
            <section className="blog-cate-content">
                <div >
                    <img src="images/line.png" />
                    <img src="images/home/mid-vector.png" />
                    <img src="images/line.png" />
                </div>
            </section>
            <section>
                <h1 className="text-center blog-caterorie-h1">Categorie</h1>
                <div className="d-flex justify-content-around blog-img-footer">
                    <img src="images/blogs/image1.png"/>
                    <img src="images/blogs/image1.png"/>
                    <img src="images/blogs/image1.png"/>
                    <img src="images/blogs/image1.png"/>
                    <img src="images/blogs/image1.png"/>
                    <img src="images/blogs/image1.png"/>
                </div>
            </section>
        </>
    )
}
export default Blogcategories;
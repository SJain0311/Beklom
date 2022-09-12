import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AboutUS from "./aboutus/AboutUS";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Services from "./services/Services";
import FAQ from "./FAQ";

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-sm ">
                <div className='logo-media' style={{ marginLeft: 150 }}>
                    <Link to="/">  <img src="images/logo.png" className='logo-media'/></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid justify-content-end">
                    <ul className="navbar-nav mx-5 link-font">
                        <li className="nav-item mx-5 link-font">
                            <NavLink className="nav-link link-font" to="/aboutus" >About Us</NavLink>
                        </li>
                        <li className="nav-item mx-5 link-font">
                            <NavLink className="nav-link link-font" to="/services" >Services</NavLink>
                        </li>
                        <li className="nav-item mx-5 link-font">
                            <NavLink className="nav-link link-font" to="/faq" >FAQ</NavLink>
                        </li>
                        <li className="nav-item mx-5 link-font">
                            <NavLink className="nav-link link-font" to="/blogs" >BLogs</NavLink>
                        </li>
                        <li className="nav-item mx-5 link-font">
                            <NavLink className="nav-link link-font" to="/contact" >Contact US</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
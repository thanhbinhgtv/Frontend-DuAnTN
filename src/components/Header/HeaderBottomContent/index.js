import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const HeaderBottomContent = () => {
    return (
        <header className="header-bottom-content bg-nero hidden-xs hidden-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-10">
                        <nav id="main-nav" className="site-navigation top-navigation">
                            <div className="menu-wrapper">
                                <div className="menu-content">
                                    <ul className="menu-list">
                                       
                                    {/* <a href="#">Home</a> */}
                                        <li>
                                        <Link to="/">Home</Link>
                                            {/* <a href="#">Home</a> */}
                                            {/* <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Home Layout One</a>
                                                </li>
                                                <li>
                                                    <a href="index02.html">Home Layout Two</a>
                                                </li>
                                                <li>
                                                    <a href="index03.html">Home Layout Three</a>
                                                </li>
                                                <li>
                                                    <a href="index04.html">Home Layout Four</a>
                                                </li>
                                                <li>
                                                    <a href="index05.html">Home Layout Five</a>
                                                </li>
                                                <li>
                                                    <a href="index06.html">Home Layout Six</a>
                                                </li>
                                                <li>
                                                    <a href="index07.html">Home Layout Seven</a>
                                                </li>
                                                <li>
                                                    <a href="index08.html">Home Layout Eight</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <Link to="/booking">Booking</Link>
                                            {/* <a href="booking.html"></a> */}
                                        </li>
                                        <li>
                                            <a href="#">House</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="apartment.html">All Apartment</a>
                                                </li>
                                                <li>
                                                    <a href="apartment-single.html">Apartment Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="gallery.html">Our Gallery</a>
                                                </li>
                                                <li>
                                                    <a href="comming.html">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Single Post</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul> {/* /.menu-list */}
                                </div> {/* /.menu-content*/}
                            </div> {/* /.menu-wrapper */}
                        </nav>{/* /.site-navigation */}
                    </div>{/* /.col-md-10 */}
                    <div className="col-md-2 col-sm-2">
                        <div className="booking">
                            <span><a href="booking.html">Booking</a></span>
                        </div>{/* /.Booking */}
                    </div>{/* /.col-md-2 */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </header>
    )
}

export default HeaderBottomContent

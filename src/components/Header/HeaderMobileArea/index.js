import React from 'react'

const HeaderMobileArea = () => {
    return (
        <header className="mobile-header-area bg-nero hidden-md hidden-lg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 tb">
                        <div className="mobile-header-block">
                            <div className="menu-area tb-cell">
                                {/*Mobile Main Menu*/}
                                <div className="mobile-menu-main hidden-md hidden-lg">
                                    <div className="menucontent overlaybg" />
                                    <div className="menuexpandermain slideRight">
                                        <a id="navtoggole-main" className="animated-arrow slideLeft menuclose">
                                            <span />
                                        </a>
                                        <span id="menu-marker" />
                                    </div>{/*/.menuexpandermain*/}
                                    <div id="mobile-main-nav" className="main-navigation slideLeft">
                                        <div className="menu-wrapper">
                                            <div id="main-mobile-container" className="menu-content clearfix" />
                                            <div className="left-content">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="fa fa-phone-square" />Call Us - 01623 030020</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="cd-signin"><i className="fa fa-address-book" />Login / Register</a>
                                                    </li>
                                                </ul>
                                            </div>{/* /.left-content */}
                                        </div>
                                    </div>{/*/#mobile-main-nav*/}
                                </div>{/*/.mobile-menu-main*/}
                            </div>{/* /.menu-area */}
                            <div className="logo-area tb-cell">
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo.png" alt="site-logo" />
                                    </a>
                                </div>{/* /.site-logo */}
                            </div>{/* /.logo-area */}
                            <div className="search-block tb-cell">
                                <a href="#" className="main-search"><i className="fa fa-search" /></a>
                            </div>{/* /.search-block */}
                            <div className="additional-content tb-cell">
                                <a href="#" className="trigger-overlay"><i className="fa fa-sliders" /></a>
                            </div>{/* /.additional-content */}
                        </div>{/* /.mobile-header-block */}
                    </div>{/* /.col-md-12 */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </header>
    )
}

export default HeaderMobileArea

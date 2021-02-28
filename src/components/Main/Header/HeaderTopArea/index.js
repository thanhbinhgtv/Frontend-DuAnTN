import React from 'react'

const HeaderTopArea = () => {
    return (
        <header className="header-area bg-nero hidden-xs hidden-sm">
            <div className="container">
                <div className="header-top-content">
                    <div className="row">
                        <div className="col-md-7 col-sm-7 mobile-center">
                            <div className="site-logo">
                                <a href="index.html">
                                    <img src="assets/user/images/logo.png" alt="site-logo" />
                                </a>
                            </div>{/* /.site-logo */}
                        </div>{/* /.col-md-8 */}
                        <div className="col-md-5 col-sm-5 mobile-center">
                            <div className="left-content">
                                <ul>
                                    <li>
                                        <a href=" #"><i className="fa fa-phone-square" />Call Us - 01623 030020</a>
                                    </li>
                                    <li>
                                        <a href=" #" className="cd-signin"><i className="fa fa-address-book" />Login / Register</a>
                                    </li>
                                    <li>
                                        <a href=" #" className="main-search"><i className="fa fa-search" /></a>
                                    </li>
                                    <li>
                                        <a href=" #" className="trigger-overlay"><i className="fa fa-bars" /></a>
                                    </li>
                                </ul>
                            </div>{/* /.left-content */}
                        </div>{/* /.col-md-4 */}
                    </div>{/* /.row */}
                </div>{/* /.header-top-content */}
            </div>{/* /.container */}
        </header>

    )
}

export default HeaderTopArea

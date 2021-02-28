import React from 'react'

const ContactArea = () => {
    return (
        <div className="contact-area">
            <div className="container-large-device">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-content-two available">
                                <h2 className="title">We Are Available<br /> For You 24/7</h2>
                                <h5 className="sub-title">Our online support service is always 24 Hours</h5>
                            </div>{/* /.testimonial-heading-content */}
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                    <div className="row">
                        <div className="col-md-7">
                            <div className="map-left-content">
                                <iframe width={600} height={350} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC871wKM6aoCLSV_pT3xBVsYzNGXaDh7Pw&q=121King+St,Melbourne+VIC+3000,Australia" allowFullScreen="allowfullscreen" />
                            </div>{/* /.mapl-left-content */}
                        </div>{/* /.col-md-7 */}
                        <div className="col-md-5">
                            <div className="map-right-content">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-address-book" />Address</h4>
                                            <p>112/B - Road 121, King/St Melbourne Australia</p>
                                        </div>{/* /.contact */}
                                    </div>{/* /.col-md-6 */}
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-envelope" />Mail</h4>
                                            <p>yourmail@domain.com houserent@domain.com</p>
                                        </div>{/* /.contact */}
                                    </div>{/* /.col-md-6 */}
                                </div>{/* /.row */}
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-phone-square" />Call</h4>
                                            <p>+99 0215469875 <br />666 35874692050</p>
                                        </div>{/* /.contact */}
                                    </div>{/* /.col-md-6 */}
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-user-circle" />Social account</h4>
                                            <div className="social-icon">
                                                <a href=" #"><i className="fa fa-facebook" /></a>
                                                <a href=" #"><i className="fa fa-twitter" /></a>
                                                <a href=" #"><i className="fa fa-instagram" /></a>
                                                <a href=" #"><i className="fa fa-google-plus" /></a>
                                            </div>{/* /.Social-icon */}
                                        </div>{/* /.contact */}
                                    </div>{/* /.col-md-6 */}
                                </div>{/* /.row */}
                            </div>{/* /.map-right-content */}
                        </div>{/* /.col-md-5 */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
        </div>

    )
}

export default ContactArea

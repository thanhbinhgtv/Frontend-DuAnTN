import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* ====== Footer Area ====== */}
            <footer className="footer-area" style={{ backgroundImage: 'url(assets/user/images/footer-bg.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="widget widget_about nevy-color">
                                <div className="widget-title-area">
                                    <h3 className="widget-title">
                                        About House Rent
            </h3>{/* /.widget-title */}
                                </div>{/* /.widget-title-area */}
                                <div className="widget-about-content">
                                    <img src="assets/user/images/footer-logo.png" alt="house" />
                                    <p>We Provide Premium Word Press, Ghost and HTML template. Our Perm tritium Templates is, develop gaped in a way so that the clients find  Support. Themes are developed in a way so that the clients find.</p>
                                    <a href="#" className="button">More</a>
                                </div>{/* /.widget-content */}
                            </div>{/* /.widget widget_about */}
                        </div>{/* /.col-md-4 */}
                        <div className="col-md-4">
                            <div className="widget widget_place_category nevy-color">
                                <div className="widget-title-area">
                                    <h3 className="widget-title">Place Category</h3>{/* /.widget-title */}
                                </div>{/* /.widget-title-area */}
                                <ul>
                                    <li>Flat for Rent <a href="#">Francis</a></li>
                                    <li>Flat for Rent <a href="#">Collins St</a></li>
                                    <li>Flat for Rent <a href="#">Rose Ln</a></li>
                                    <li>Flat for Rent <a href="#">Cosgrave Ln</a></li>
                                    <li>Flat for Rent <a href="#">Bourke St</a></li>
                                    <li>Flat for Rent <a href="#">Flienders Ln</a></li>
                                </ul>
                            </div>{/* /.widget */}
                        </div>{/* /.col-md-4 */}
                        <div className="col-md-4">
                            <div className="widget widget_instagram nevy-color">
                                <div className="widget-title-area">
                                    <h3 className="widget-title">Instagram Image</h3>{/* /.widget-title */}
                                </div>{/* /.widget-title-area */}
                                <div className="instagram-image-content">
                                    <a href="#"><img src="assets/user/images/instagram/instagram-one.png" alt="" /></a>
                                    <a href="#"><img src="assets/user/images/instagram/instagram-two.png" alt="" /></a>
                                    <a href="#"><img src="assets/user/images/instagram/instagram-three.png" alt="" /></a>
                                    <a href="#"><img src="assets/user/images/instagram/instagram-four.png" alt="" /></a>
                                    <a href="#"><img src="assets/user/images/instagram/instagram-five.png" alt="" /></a>
                                    <a href="#"><img src="assets/user/images/instagram/instagram-six.png" alt="" /></a>
                                </div>{/* /.instagram-image-content */}
                            </div>{/* /.widget */}
                        </div>{/* /.col-md-4 */}
                    </div>{/* /.row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bottom-content">
                                <p>Copyright  ©2017 <a href="#">HTMLguru</a></p>
                            </div>{/* /.bottom-top-content */}
                        </div>{/* /.col-md-12 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </footer>{/* /.footer-area */}

        </div>
    )
}

export default Footer

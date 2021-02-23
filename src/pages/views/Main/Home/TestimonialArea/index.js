import React from 'react'

const TestimonialArea = () => {
    return (
        <div>
            <div className="call-to-action overlay-bg" style={{ backgroundImage: 'url(assets/user/images/contact-bg-image.png)' }}>
                <div className="container">
                    <div className="row tb">
                        <div className="col-md-6 col-sm-6 tb-cell">
                            <div className="contact-left-content">
                                <h3>Do you want to Rent your House</h3>
                                <h4>Call us and list your property here</h4>
                            </div>{/* /.contact-left-content */}
                        </div>{/* /.col-md-6 */}
                        <div className="col-md-6 col-sm-6 tb-cell">
                            <div className="contact-right-content">
                                <h4><a href="#">+880123654987<span>company@gmail.com</span></a></h4>
                                <a href="#" className="button">Contact us</a>
                            </div>{/* /.contact-right-content */}
                        </div>{/* /.col-md-6 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </div>

        </div>
    )
}

export default TestimonialArea

import React from 'react'

const AboutUsArea = () => {
    return (
        <div className="aboutus-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-content-one">
                            <h2 className="title">About Us</h2>
                            <h5 className="sub-title">Welcome to our House Rent Company</h5>
                        </div>{/* /.heading-content */}
                    </div>{/* /.col-md-12 */}
                </div>{/* /.row */}
                <div className="row">
                    <div className="col-md-2">
                        <div className="tab-list">
                            <ul className="nav nav-tabs about-tab hidden-xs hidden-sm" role="tablist">
                                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">About Company</a>
                                </li>
                                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Terms &amp; Condition</a>
                                </li>
                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Our specialty</a>
                                </li>
                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Our specialty</a>
                                </li>
                            </ul>
                            <form className="hidden-md hidden-lg">
                                <select className="about-mobile">
                                    <option value={0}>About Company</option>
                                    <option value={1}>Terms &amp; Condition</option>
                                    <option value={2}>Our specialty</option>
                                    <option value={3}>Our specialty</option>
                                </select>
                            </form>
                        </div> {/* /.tab-list */}
                    </div> {/* /.col-md-2 */}
                    <div className="col-md-10">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active row" id="home">
                                <div className="col-md-6">
                                    <div className="text-content">
                                        <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                                        <ul>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                        </ul>
                                    </div>{/* /.text-content */}
                                </div>{/* /.col-md-6 */}
                                <div className="col-md-6">
                                    <div className="image-content">
                                        <img src="assets/user/images/about-image.png" alt="about" />
                                    </div>{/* /.text-content */}
                                </div>{/* /.col-md-6 */}
                            </div> {/* /.home */}
                            <div role="tabpanel" className="tab-pane fade row" id="profile">
                                <div className="col-md-6">
                                    <div className="text-content">
                                        <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                                        <ul>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                        </ul>
                                    </div>{/* /.text-content */}
                                </div>{/* /.col-md-6 */}
                                <div className="col-md-6">
                                    <div className="image-content">
                                        <img src="assets/user/images/about-image.png" alt="about" />
                                    </div>{/* /.text-content */}
                                </div>{/* /.col-md-6 */}
                            </div> {/* /.profile */}
                            <div role="tabpanel" className="tab-pane fade row" id="messages">
                                <div className="col-md-6">
                                    <div className="text-content">
                                        <p>Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitikis mauris egeth lorem ultricies ferme is ntum a inti diam. Morbi mollis pellden tesque offs aiug ueia nec rhoncus. Nam ute ultricies. Cras etitikis mauris eget lorem ultricies ferme ntum a inti diam. Morbi mollis pellen tesque offs aiug ueia nec rhoncus. Nam ute ultricies.</p>
                                        <ul>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                            <li>Amorem ipsum dolor sit amet, consectetur </li>
                                            <li>Cras etitikis mauris egeth lorem ultricies</li>
                                        </ul>
                                    </div>{/* /.text-content */}
                                </div>{/* /.col-md-6 */}
                                <div className="col-md-6">
                                    <div className="image-content">
                                        <img src="assets/user/images/about-image.png" alt="about" />
                                    </div>{/* /.text-content */}
                                </div>{/* /.col-md-6 */}
                            </div> {/* /.messages */}
                        </div> {/* /.tab-content */}
                    </div>{/* /.col-md-10 */}
                </div>{/* /.row */}
            </div> {/* /.container */}
        </div>

    )
}

export default AboutUsArea

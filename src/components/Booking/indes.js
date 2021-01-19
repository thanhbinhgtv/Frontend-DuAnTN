import React from 'react'

const Booking = () => {
  return (
    <div>
      <div>
        {/* ====== Page Header ====== */}
        <div className="page-header default-template-gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="page-title">Choose Apartment</h2>
                <p className="page-description">Take A Apartment For Booking</p>
              </div>{/* /.col-md-12 */}
            </div>{/* /.row*/}
          </div>{/* /.container-fluid */}
        </div>{/* /.page-header */}
        {/* ====== Breadcrumbs Area======= */}
        <div className="breadcrumbs-area bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumbs">
                  <span className="first-item">
                    <a href="index01.html">Home</a></span>
                  <span className="separator">&gt;</span>
                  <span className="last-item">Apartment List For Booking</span>
                </div>
              </div>{/* /.col-md-12 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.breadcrumbs-area */}
        {/* ====== Apartments-area ====== */}
        <div className="apartments-area four bg-gray-color">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="apartment-tab-area">
                  <ul role="tablist" className="nav nav-tabs apartment-menu hidden-xs hidden-sm">
                    <li className="active">
                      <a href="#popular-apartment" role="tab" data-toggle="tab">Popular</a>
                    </li>
                    <li>
                      <a href="#newest-to-oldest" role="tab" data-toggle="tab">Date<span>Newest to oldest</span></a>
                    </li>
                    <li>
                      <a href="#oldest-to-newest" role="tab" data-toggle="tab">Date <span>Older to newest</span> </a>
                    </li>
                    <li>
                      <a href="#price-height-to-low" role="tab" data-toggle="tab">Price<span>Low to high</span></a>
                    </li>
                    <li>
                      <a href="#price-low-to-heigh" role="tab" data-toggle="tab">Price<span>high to low</span></a>
                    </li>
                    <li className="pull-right">
                      <a href="#" role="tab" className="dropdown-toggle" data-toggle="dropdown">Category<i className="fa fa-angle-down" /></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Family</a></li>
                        <li><a href="#">Apartment</a></li>
                        <li><a href="#">Sublet</a></li>
                        <li><a href="#">Bachelor Mess</a></li>
                        <li><a href="#">Office</a></li>
                      </ul>
                    </li>{/* /.pull-right */}
                  </ul>
                  <form className="hidden-md hidden-lg">
                    <select className="apartment-menu-mobile">
                      <option value={0}>Popular</option>
                      <option value={1}>Date Newest to oldest</option>
                      <option value={2}>Date Older to newest</option>
                      <option value={3}>Price Low to high </option>
                      <option value={4}>Price high to low</option>
                      <optgroup label="Category">
                        <option value="http://google.com">Family</option>
                        <option value={6}> Apartment </option>
                        <option value={7}> Contact </option>
                        <option value={8}> Sublet </option>
                        <option value={9}> Bachelor Mess </option>
                        <option value={10}> Office </option>
                      </optgroup>
                    </select>
                  </form>
                  <div className="tab-content">
                    <div role="tabpanel" id="popular-apartment" className="tab-pane fade in active">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html"><img src="assets/images/apartment/apartment-one.png" alt="apartment" /></a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3><a href="apartment-single.html">Family Apartment</a></h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html"><img src="assets/images/apartment/apartment-two.png" alt="apartment" /></a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3><a href="apartment-single.html">Family Apartment</a></h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="clearfix hidden-md hidden-lg" />
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html"><img src="assets/images/apartment/apartment-three.png" alt="apartment" /></a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3><a href="apartment-single.html">Family Apartment</a></h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="clearfix hidden-xs hidden-sm" />
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html"><img src="assets/images/apartment/apartment-four.png" alt="apartment" /></a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3><a href="apartment-single.html">Family Apartment</a></h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="clearfix hidden-md hidden-lg" />
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html"><img src="assets/images/apartment/apartment-five.png" alt="apartment" /></a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3><a href="apartment-single.html">Family Apartment</a></h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html"><img src="assets/images/apartment/apartment-six.png" alt="apartment" /></a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3><a href="apartment-single.html">Family Apartment</a></h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="clearfix hidden-md hidden-lg" />
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html">
                                <img src="assets/images/apartment/apartment-one.png" alt="apartment" />
                              </a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3>
                                  <a href="apartment-single.html">Family Apartment</a>
                                </h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html">
                                <img src="assets/images/apartment/apartment-two.png" alt="apartment" />
                              </a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3>
                                  <a href="apartment-single.html">Family Apartment</a>
                                </h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                        <div className="clearfix hidden-md hidden-lg" />
                        <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="apartments-content">
                            <div className="image-content">
                              <a href="apartment-single.html">
                                <img src="assets/images/apartment/apartment-three.png" alt="apartment" />
                              </a>
                            </div>{/* /.image-content */}
                            <div className="text-content">
                              <div className="top-content">
                                <h3>
                                  <a href="apartment-single.html">Family Apartment</a>
                                </h3>
                                <span>
                                  <i className="fa fa-map-marker" />
                            Dhanmondi, Dhaka
                          </span>
                              </div>{/* /.top-content */}
                              <div className="bottom-content clearfix">
                                <div className="meta-bed-room">
                                  <i className="fa fa-bed" /> 3 Bedrooms
                          </div>
                                <div className="meta-bath-room">
                                  <i className="fa fa-bath" />2 Bathroom
                          </div>
                                <span className="clearfix" />
                                <div className="rent-price pull-left">
                                  $200
                          </div>
                                <div className="share-meta dropup pull-right">
                                  <ul>
                                    <li className="dropup">
                                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt" /></a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                          <a href="#"><i className="fa fa-google-plus" /></a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-star-o" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{/* /.bottom-content */}
                            </div>{/* /.text-content */}
                          </div>{/* /.partments-content */}
                        </div>{/* /.col-md-4 */}
                      </div>{/* /.row */}
                      <a href="#" className="more-link default-template-gradient">Load More</a>
                    </div>{/* /.popular-apartment */}
                  </div>{/* /.tab-content */}
                </div>{/* /.apartment-tab-area */}
              </div>{/* /.col-md-12 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.Apartments-area*/}
      </div>

    </div>
  )
}

export default Booking

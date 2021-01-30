import React from 'react'

const AvailabilityArea = () => {
    return (
        <div className="availability-area bg-white-smoke">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-content-three">
                            <h2 className="title">For rates &amp; Availability</h2>
                            <h5 className="sub-title">Search your <span>House</span></h5>
                        </div>{/* /.Availability-content */}
                    </div>{/* /.col-md-12 */}
                </div>{/* /.row */}
                <div className="row">
                    <div className="col-md-12">
                        <form action="#" method="get" className="advance_search_query">
                            <div className="form-content">
                                <div className="form-group">
                                    <label>Living Aria</label>
                                    <input type="text" name="FirstName" placeholder="Where do you want to live?" />
                                </div>{/* /.form-group */}
                                <div className="form-group">
                                    <label>Type</label>
                                    <select>
                                        <option value="volvo">Apartments</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>{/* /.form-group */}
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" name="FirstName" placeholder="min" />
                                </div>{/* /.form-group */}
                                <div className="form-group">
                                    <label>Male</label>
                                    <input type="text" name="FirstName" placeholder="max" />
                                </div>{/* /.form-group */}
                                <div className="form-group">
                                    <label>For</label>
                                    <select>
                                        <option value="volvo">Family</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>{/* /.form-group */}
                            </div>{/* /.form-content */}
                            <button type="submit" className=" button nevy-button">Check Availability</button>
                        </form> {/* /.advance_search_query */}
                    </div>{/* /.col-md-12 */}
                </div>{/* /.row */}
            </div>{/* /.container  */}
        </div>

    )
}

export default AvailabilityArea

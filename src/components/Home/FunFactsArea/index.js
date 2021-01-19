import React from 'react'

const FunFactsArea = () => {
    return (
        <div>
            <div className="fun-fects-area" style={{ backgroundImage: 'url(assets/images/count-down-image.png)' }}>
                <div className="container">
                    <div className="stat">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="milestone-counter">
                                <h3 className="stat-count highlight" data-form={1} data-to={2500} data-speed={3000}>2500</h3>
                                <div className="milestone-details">Clients</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="milestone-counter">
                                <h3 className="stat-count highlight" data-form={1} data-to={3055} data-speed={3000}>3055</h3>
                                <div className="milestone-details">Booking</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="milestone-counter">
                                <h3 className="stat-count highlight" data-form={1} data-to={50} data-speed={3000}>50</h3>
                                <div className="milestone-details">Swimming</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="milestone-counter">
                                <h3 className="stat-count highlight" data-form={1} data-to={1530} data-speed={3000}>1530</h3>
                                <div className="milestone-details">Apartment</div>
                            </div>
                        </div>
                    </div>{/* stat */}
                </div>{/* /.container */}
            </div>{/* /.fun-fects-area */}

        </div>
    )
}

export default FunFactsArea

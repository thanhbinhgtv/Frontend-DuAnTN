import React from 'react'

const SliderArea = () => {
    return (

        < div className="slider-area" >
            <div className="pogoSlider">
                <div className="pogoSlider-slide" data-transition="expandReveal" data-duration={1000} style={{ backgroundImage: 'url(assets/images/slider-one.png)' }}>
                    <div className="container-slider one">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-text-content">
                                    <h3 className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration={500} data-delay={500}>Good Service is our passion</h3>
                                    <h2 className="pogoSlider-slide-element" data-in="slide-left" data-out="slideUp" data-duration={500} data-delay={500}>Awesome apartment Villa</h2>
                                    <p className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration={500} data-delay={500}>No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
                                    <a href="#" className="button pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration={500} data-delay={500}>Special Offer</a>
                                </div>{/* /.text-content */}
                            </div>{/* /.col-md-12 */}
                        </div>{/* /.row */}
                    </div>{/* /.container-slider */}
                </div>
                <div className="pogoSlider-slide" data-transition="expandReveal" data-duration={1000} style={{ backgroundImage: 'url(assets/images/slider-one.png)' }}>
                    <div className="container-slider one">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-text-content">
                                    <h3 className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration={500} data-delay={500}>Good Service is our passion</h3>
                                    <h2 className="pogoSlider-slide-element" data-in="slide-left" data-out="slideUp" data-duration={500} data-delay={500}>Awesome apartment Villa</h2>
                                    <p className="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration={500} data-delay={500}>No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
                                    <a href="#" className="button pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration={500} data-delay={500}>Special Offer</a>
                                </div>{/* /.text-content */}
                            </div>{/* /.col-md-12 */}
                        </div>{/* /.row */}
                    </div>{/* /.container-slider */}
                </div>
            </div>{/* .pogoSlider */}
        </div >

    )
}

export default SliderArea

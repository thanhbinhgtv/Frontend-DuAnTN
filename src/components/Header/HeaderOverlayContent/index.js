import React from 'react'

const HeaderOverlayContent = () => {
    return (
        <div className="header-overlay-content">
            {/* overlay-menu-item */}
            <div className="overlay overlay-hugeinc gradient-transparent overlay-menu-item">
                <button type="button" className="overlay-close">Close</button>
                <nav>
                    <ul className="overlay-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a>
                            <ul className="sub-menu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Work</a></li>
                                <li><a href="#">Clients</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Work</a></li>
                                        <li><a href="#">Clients</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div> {/* /.overlay-menu-item */}
            {/* header-search-content */}
            <div className="gradient-transparent overlay-search">
                <button type="button" className="overlay-close">Close</button>
                <div className="header-search-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="#" method="get" className="searchform">
                                    <div className="input-group" id="adv-search">
                                        <input type="text" className="form-controller" placeholder="Search for snippets" />
                                        <div className="input-group-btn">
                                            <div className="btn-group" role="group">
                                                <div className="dropdown dropdown-lg">
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                        <span className="fa fa-caret-down" />
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right" role="menu">
                                                        <div className="form-horizontal">
                                                            <div className="checkbox">
                                                                <label><input type="checkbox" /> From Blog</label>
                                                            </div>
                                                            <div className="checkbox">
                                                                <label><input type="checkbox" />Find Your Apartment</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">
                                                    <span className="fa fa-search" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* /.header-search-content */}
            {/* Registrar Or Sign In-content */}
            <div className="cd-user-modal">
                <div className="cd-user-modal-container">
                    <ul className="cd-switcher">
                        <li><a href="#0">Sign in</a></li>
                        <li><a href="#0">New account</a></li>
                    </ul>
                    {/* log in form */}
                    <div id="cd-login">
                        <form className="cd-form">
                            <p className="fieldset">
                                <label className="image-replace cd-email" htmlFor="signin-email">E-mail</label>
                                <input className="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail" />
                                <span className="cd-error-message">Error message here!</span>
                            </p>
                            <p className="fieldset">
                                <label className="image-replace cd-password" htmlFor="signin-password">Password</label>
                                <input className="full-width has-padding has-border" id="signin-password" type="text" placeholder="Password" />
                                <a href="#0" className="hide-password">Hide</a>
                                <span className="cd-error-message">Error message here!</span>
                            </p>
                            <p className="fieldset">
                                <input type="checkbox" id="remember-me" defaultChecked />
                                <label htmlFor="remember-me">Remember me</label>
                            </p>
                            <p className="fieldset">
                                <input className="full-width" type="submit" defaultValue="Login" />
                            </p>
                        </form>
                        <p className="cd-form-bottom-message">
                            <a href="#0">Forgot your password?</a>
                        </p>
                        <a href="#0" className="cd-close-form">Close</a>
                    </div> {/* cd-login */}
                    {/* sign up form */}
                    <div id="cd-signup">
                        <form className="cd-form">
                            <p className="fieldset">
                                <label className="image-replace cd-username" htmlFor="signup-username">Username</label>
                                <input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username" />
                                <span className="cd-error-message">Error message here!</span>
                            </p>
                            <p className="fieldset">
                                <label className="image-replace cd-email" htmlFor="signup-email">E-mail</label>
                                <input className="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" />
                                <span className="cd-error-message">Error message here!</span>
                            </p>
                            <p className="fieldset">
                                <label className="image-replace cd-password" htmlFor="signup-password">Password</label>
                                <input className="full-width has-padding has-border" id="signup-password" type="text" placeholder="Password" />
                                <a href="#0" className="hide-password">Hide</a>
                                <span className="cd-error-message">Error message here!</span>
                            </p>
                            <p className="fieldset">
                                <input type="checkbox" id="accept-terms" />
                                <label htmlFor="accept-terms">I agree to the <a href="#0">Terms</a></label>
                            </p>
                            <p className="fieldset">
                                <input className="full-width has-padding" type="submit" defaultValue="Create account" />
                            </p>
                        </form>
                        <a href="#0" className="cd-close-form">Close</a>
                    </div> {/* cd-signup */}
                    {/* reset password form */}
                    <div id="cd-reset-password">
                        <p className="cd-form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>
                        <form className="cd-form">
                            <p className="fieldset">
                                <label className="image-replace cd-email" htmlFor="reset-email">E-mail</label>
                                <input className="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" />
                                <span className="cd-error-message">Error message here!</span>
                            </p>
                            <p className="fieldset">
                                <input className="full-width has-padding" type="submit" defaultValue="Reset password" />
                            </p>
                        </form>
                        <p className="cd-form-bottom-message"><a href="#0">Back to log-in</a></p>
                    </div> {/* cd-reset-password */}
                    <a href="#0" className="cd-close-form">Close</a>
                </div> {/* cd-user-modal-container */}
            </div> {/* cd-user-modal */}
        </div>
    )
}

export default HeaderOverlayContent

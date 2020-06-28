import React from 'react'

const Footer = () => {
    return (
        <div class="footer-section position-relative">
            <div class="container margin-decrese">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-8 col-xl-7" data-aos="flip-down" data-aos-delay="55" data-aos-duration="2000" data-aos-once="true">
                        <div class="footer-content">
                            <span class="title-small-text">Time to take action</span>
                            <h2>Volunteer with us now</h2>
                            <div class="footer-btn"><a href="/" class="btn btn--orange btn--hover-shine">Get Started</a></div>
                        </div>
                    </div>
                    </div>
                    <span class="section-devider mt--130"></span>
                <div class="row mt--70">
                    <div class="col-lg-4 col-xl-4 col-sm-6 col-margin">
                        <span class="ft-title-sm">Help menu</span>
                        <div class="row">
                            <div class="col-lg-5 col-4">
                                <ul class="footer-list">
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Features</a></li>
                                    <li><a href="/">Works</a></li>
                                    <li><a href="/">Career</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-7 col-8">
                                <ul class="footer-list">
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Help &amp; Support</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-3 col-sm-6 col-margin">
                        <span class="ft-title-sm">Product</span>
                        <ul class="footer-list">
                            <li><a href="/">Essential Landing Page</a></li>
                            <li><a href="/">Alpha Dashboard Pro</a></li>
                            <li><a href="/">Karnel Admin Dashboard</a></li>
                            <li><a href="/">Gray UI Kit</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-xl-5 col-margin">
                        <div class="ft-newsletter-box">
                            <span class="ft-title-sm">Subscribe to our newsletter</span>
                            <p>Subscribe to get lastest offers, news and events announcements. No spam in your inbox.</p>
                            <form action="/">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter your email address" />
                                <button class="submit-btn"><i class="icon icon-tail-right" alt='icon'></i></button>
                            </div>
                            </form>
                        </div>
                    </div>
                    </div>
            </div>
            <div class="shape-holder footer-shape-1" data-aos="zoom-in-left" data-aos-once="true"><img src="/cta-shape.svg" alt="" /></div>
            <div class="shape-holder footer-shape-2" data-aos="zoom-in-right" data-aos-once="true"><img src="/footer-shape.svg" alt="" /></div>
        </div>
    )
}

export default Footer
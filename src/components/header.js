import React from 'react'
import Style from './styles'

const Header = () => {
    return (
        <>
        <Style></Style>
        <header class="site-header position-relative">
            <div class="container">
                <div class="row justify-content-center align-items-center position-relative">
                    <div class="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
                        <div class="brand-logo">
                            <a href="/"><img src="/main-logo.png" alt="logo" /></a>
                        </div>
                    </div>
                    <div class="col-sm-8 col-lg-2 col-xl-2 d-none d-sm-block order-lg-3">
                        <div class="header-btns justify-content-end">
                            <a href="/" class="btn btn-link">Sign In</a>
                        </div>
                    </div>
                    <div class="col-sm-1 col-6 col-lg-6 col-xl-6 offset-lg-2  position-static order-lg-2">
                        <div class="main-navigation">
                            <ul class="main-menu">
                                <li class="menu-item has-dropdown">
                                    <a href="#features">Free Landing Pages</a>
                                        <ul class="menu-dropdown">
                                            <li class="single-item">
                                                <a href="/">
                                                <h3>Mobile Application</h3> 
                                                <p>Best for Mobile App Presentation</p>
                                                </a>
                                            </li>
                                            <li class="single-item">
                                                <a href="/">
                                                    <h3>Web Application</h3>
                                                    <p>Best for Mobile App Presentation</p>
                                                </a> 
                                            </li>
                                            <li class="single-item">
                                                <a href="/">
                                                    <h3>SaaS Application</h3>
                                                <p>Best for Mobile App Presentation</p>
                                            </a> 
                                            </li>
                                        </ul>
                                    </li>
                                <li class="menu-item "><a href="#features">Course topics</a></li>
                        
                                <li class="menu-item"><a href="/">Student stories</a></li>
                                </ul>
                        </div>
                        <div class="mobile-menu"></div>
                    </div>
                </div>
            </div>
            <div class="shape-holder header-shape" data-aos="fade-down" data-aos-once="true"><img src="/header-shape.svg" alt="" /></div>
        </header>
        </>
    )
}

export default Header
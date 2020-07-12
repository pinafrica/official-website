import React from 'react'
import Style from './styles'
import {Link} from 'gatsby'

const ListLink = props => (
    <li class={props.class}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

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
                            <ListLink to='/' class="btn btn-link">Sign In</ListLink>
                        </div>
                    </div>
                    <div class="col-sm-1 col-6 col-lg-6 col-xl-6 offset-lg-2  position-static order-lg-2">
                        <div class="main-navigation">
                            <ul class="main-menu">
                                <ListLink to='/'>Home</ListLink>
                                <ListLink to='#features' class='menu-item has-dropdown'> What we do </ListLink>
                                <ListLink to='/projects'> Projects </ListLink>
                                <ListLink to='/volunteer'> Volunteer </ListLink>
                                <ListLink to='/team'> Team </ListLink>
                                <ListLink to='/contact'> Contact </ListLink>
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
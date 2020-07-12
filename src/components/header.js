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
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="col-sm-3 col-6 col-lg-2 col-xl-2">
                        <div class="brand-logo">
                        <a class="navbar-brand" href="/">
                            <img src="/main-logo.png" alt="logo" loading="lazy" />
                        </a>
                        </div>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-xl-6 offset-lg-2" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto main-menu">
                            <ListLink to='/' class='main-menu'>Home</ListLink>
                            <ListLink to='/about' class='main-menu'> What we do </ListLink>
                            <ListLink to='/projects'class='main-menu'> Projects </ListLink>
                            <ListLink to='/volunteer' class='main-menu'> Volunteer </ListLink>
                            <ListLink to='/team'class='main-menu'> Team </ListLink>
                            <ListLink to='/contact'class='main-menu'> Contact </ListLink>
                        </ul>
                    </div>
                </nav>
                </div>
            </div>
            <div class="shape-holder header-shape" data-aos="fade-down" data-aos-once="true"><img src="/header-shape.svg" alt="" /></div>
        </header>
        </>
    )
}

export default Header
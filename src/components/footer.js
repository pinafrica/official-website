import React from 'react'
import Button from './button'
import { Link } from 'gatsby'

const Footer = () => {
    const ListLink = props => (
        <li class={props.class}>
          <Link to={props.to}>{props.children}</Link>
        </li>
      )
    return (
        <div class="footer-section position-relative">
            
            <div class='contain'>
                <div class="container text-center text-md-left mt-5">
                    <div class="row mt-3">
                        <div class="col-md-4 col-lg-3 col-xl-4 mx-auto">
                            <h6 class="text-uppercase font-weight-bold">Pearl Impact Networks Africa</h6>
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                            <hr class="deep-purple accent-2  mt-0 d-inline-block mx-auto"/>
                            <ListLink to='/' class='main-menu'>Home</ListLink>
                            <ListLink to='/about' class='main-menu'> What we do </ListLink>
                            <ListLink to='/projects'class='main-menu'> Projects </ListLink>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <ListLink to='/contact'class='main-menu'> Contact </ListLink>
                            <ListLink to='/get-involved' class='main-menu'> Volunteer </ListLink>
                            <ListLink to='/team'class='main-menu'> Team </ListLink>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                            <i class="fas fa-envelope mr-3"> </i>
                                hello@pinafrica.org
                            </p>
                        </div>
                    </div>
                    <div class="row py-4 d-flex align-items-center social">
                        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 class="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        <div class="col-md-6 col-lg-7 text-center text-md-right">
                            <a class="fb-ic" href='/facebook'>
                                <i class="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a class="tw-ic" href='twitter'>
                                <i class="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a class="li-ic" href='linkedin'>
                                <i class="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a class="ins-ic" href='instagram'>
                                <i class="fab fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                    <div class="shape-holder footer-shape-1" data-aos="zoom-in-left" data-aos-once="true"><img src="/cta-shape.svg" alt="" /></div>
                    <div class="shape-holder footer-shape-2" data-aos="zoom-in-right" data-aos-once="true"><img src="/footer-shape.svg" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
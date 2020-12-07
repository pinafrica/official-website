import React from 'react'
import {Link} from 'gatsby'

const ListLink = props => (
    <li class={props.class}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

const Footer = () => {
    return (
        <div class = "footer">
            <div class="footer-icons">
                <ListLink to="" class="footer-social_media">
                    <img src="./facebook.svg" alt="Facebook Pinafrica" />
                </ListLink>
                <ListLink to="" class="footer-social_media">
                    <img src="./twitter.svg" alt="Facebook Pinafrica" />
                </ListLink>
                <ListLink to="" class="footer-social_media">
                    <img src="./linkedin.svg" alt="Facebook Pinafrica" />
                </ListLink>
                <ListLink to="" class="footer-social_media">
                    <img src="./instagram.svg" alt="Facebook Pinafrica" />
                </ListLink>
            </div>
            <span> &copy; PINAFRICA 2020</span>
        </div>
    )
}

export default Footer
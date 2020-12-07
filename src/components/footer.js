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
                <ListLink to="https://web.facebook.com/pinafricadotorg" class="footer-social_media">
                    <img src="./facebook.svg" alt="Facebook Pinafrica" />
                </ListLink>
                <ListLink to="https://twitter.com/pinafricadotorg" class="footer-social_media">
                    <img src="./twitter.svg" alt="Twitter Pinafrica" />
                </ListLink>
                <ListLink to="https://www.linkedin.com/company/pinafricadotorg" class="footer-social_media">
                    <img src="./linkedin.svg" alt="Linkedin Pinafrica" />
                </ListLink>
                <ListLink to="https://www.instagram.com/pinafricadotorg/" class="footer-social_media">
                    <img src="./instagram.svg" alt="Instagram Pinafrica" />
                </ListLink>
            </div>
            <span> &copy; PINAFRICA 2020</span>
        </div>
    )
}

export default Footer
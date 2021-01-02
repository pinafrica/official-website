import React from 'react'

const Footer = () => {
  return (
    <section className='page-footer'>
      <div className='footer-icons'>
        <a
          href='https://web.facebook.com/pinafricadotorg'
          className='footer-social_media'
        >
          <img src='./static/facebook.svg' alt='Facebook Pinafrica' />
        </a>
        <a
          href='https://twitter.com/pinafricadotorg'
          className='footer-social_media'
        >
          <img src='./static/twitter.svg' alt='Twitter Pinafrica' />
        </a>
        <a
          href='https://www.linkedin.com/company/pinafricadotorg'
          className='footer-social_media'
        >
          <img src='./static/linkedin.svg' alt='Linkedin Pinafrica' />
        </a>
        <a
          href='https://www.instagram.com/pinafricadotorg/'
          className='footer-social_media'
        >
          <img src='./static/instagram.svg' alt='Instagram Pinafrica' />
        </a>
      </div>
      <span> &copy; PINAFRICA 2020</span>
    </section>
  )
}

export default Footer

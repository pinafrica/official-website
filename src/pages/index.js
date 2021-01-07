import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <Layout>
      {/*   Main Section Begins here  */}
      <section className='main'>
        <div className='columns is-centered is-mobile main-intro'>
          <div className='column'>
            <h2
              id="h2-hello"
              className='is-size-4 has-text-weight-medium has-text-centered'
              style={{ fontFamily: 'Dosis' }}
            >
              HELLO <hr />
            </h2>
            <p className='has-text-centered has-text-weight-medium is-size-5 mt-3' id="we-are">
              We are in our
            </p>
            <h2
              className='is-size-1 has-text-centered'
              id="garage-phase"
              style={{ fontFamily: 'Great Vibes' }}
            >
              Garage Phase
            </h2>
          </div>
        </div>
        <div className='columns is-centered has-text-centered'>
          <div className='column main-intro-text mx-6 mt-4 px-6'>
            <p>
              We want to prepare young people for the future of work. We know it
              is a huge mission.
            </p>
            <p>
              We are in our Garage Phase. But we are excited about the amazing
              things we would be doing. And we would be sharing every moment of
              our journey. What you see here is just the beginning of that
              journey.
            </p>
            <p>
              Every time you come back here, something would have changed on the
              site.
            </p>
          </div>
        </div>

        {/* Subscription widget embed begins here */}
        <div className='columns is-centered'>
          <div className='column'>
            <data
              id='mj-w-res-data'
              data-token='b412de5e7d84f5d3b1d476b0765deac0'
              className='mj-w-data'
              data-apikey='5htx'
              data-w-id='GIU'
              data-lang='en_US'
              data-base='https://app.mailjet.com'
              data-width='760'
              data-height='600'
              data-statics='statics'
            ></data>

            <button
              className='mj-w-button mj-w-btn button widget-button'
              data-token='b412de5e7d84f5d3b1d476b0765deac0'
            >LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <Helmet>
        <script
          type='text/javascript'
          src='https://app.mailjet.com/statics/js/widget.modal.js'
        ></script>
      </Helmet>
    </Layout>
  )
}

import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <Layout>
      <main className='main'>
        <div className='main-intro'>
          <span id='main-intro-hello'>HELLO</span>
          <span id='main-intro-we_are'>We are in our</span>
          <span id='main-intro-garage'>Garage Phase</span>
          <div className='main-intro-text'>
            <span>
              We want to prepare young people for the future of work. We know it
              is a huge mission.
            </span>
            <span>
              We are in our Garage Phase. But we are excited about the amazing
              things we would be doing. And we would be sharing every moment of
              our journey. What you see here is just the beginning of that
              journey.{' '}
            </span>
            <span>
              Every time you come back here, something would have changed on the
              site.
            </span>
          </div>
          <data
            id='mj-w-res-data'
            data-token='77c2a631a38830789838537abe034582'
            className='mj-w-data'
            data-apikey='5htx'
            data-w-id='GIU'
            data-lang='en_US'
            data-base='https://app.mailjet.com'
            data-width='640'
            data-height='581'
            data-statics='statics'
          ></data>

          <div
            className='mj-w-button mj-w-btn button'
            style={{
              'fontFamily': 'Ubuntu, Helvetica',
              color: 'white',
              padding: '0px 25px',
              backgroundColor: 'rgb(115, 44, 205)',
              textAlign: 'center',
              verticalAlign: 'middle',
              display: 'inline-block',
              borderRadius: '3px'
            }}
            data-token='77c2a631a38830789838537abe034582'
          >
            <div style={{ display: 'table', height: '45px' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                <div
                  className='mj-w-button-content'
                  style={{
                    fontFamily: 'Ubuntu, Helvetica',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontSize: '13px',
                    verticalAlign: 'middle'
                  }}
                >
                  <span style={{ whiteSpace: 'pre-wrap' }}>LEARN MORE</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Helmet>
        <script
          type='text/javascript'
          src='https://app.mailjet.com/statics/js/widget.modal.js'
        ></script>
      </Helmet>
    </Layout>
  )
}

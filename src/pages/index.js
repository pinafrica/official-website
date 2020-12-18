import React from "react"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <main class="main">
        <div class="main-intro">
          <span id="main-intro-hello">HELLO</span>
          <span id="main-intro-we_are">We are in our</span>
          <span id="main-intro-garage">Garage Phase</span>
          <div class="main-intro-text">
            <span>We want to prepare young people for the future of work. We know it is a huge mission.</span>
            <span>We are in our Garage Phase. But we are excited about the amazing things we would be doing. And we would be sharing every moment of our journey. What you see here is just the beginning of that journey. </span>
            <span>Every time you come back here, something would have changed on the site.</span>
          </div>
          <button type="button" data-toggle="modal" data-target="#subscribeModal">Learn More</button>
        </div>
        {/* <div class="subscribe">
          <div class="modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <span class="modal-title" id="subscribeModalLabel">Join other amazing people to read our Garage Diary 
                  where we detail the exciting stories of our lessons, 
                  failures and successes as we build our organisation</span>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <span class="modal-body-intro">The emails are written with so much love and care. 
                  It is also spiced with some humour and wit. No third-party mailings or hidden advertising. 
                  Just useful stuff and goodies!</span>
                  <form class="subscribe-form-fields">
                    <input type="text" placeholder="Email Address" name="email" />
                    <input type="text" placeholder="First Name" name="firstname" />
                    <input type="text" placeholder="Last Name" name="lastname" />
                    <input type="text" placeholder="Country" name="country" />
                    <input type="checkbox" name="" />
                    <span>I agree to join this mailing list and know that I can easily unsubscribe at any time.</span>
                  </form>
                </div>
                <div class="modal-footer main-intro">
                  <button type="button" data-toggle="modal" data-target="#subscribeModal">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </Layout>
  )
}

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
          <button type="button" data-toggle="modal" data-target="#exampleModal">Learn More</button>
        </div>
        <div class="subscribe">
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

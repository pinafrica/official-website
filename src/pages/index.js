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
      </main>
    </Layout>
  )
}

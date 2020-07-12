import React from "react"
import Layout from './layout'
import Facts from './facts'
import About from './about'

const Main = () => {
  return (
    <Layout>
    <div class="hero-area position-relative">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-7 col-12">
          <div class="hero-content">
            <h1>Using Technology As A Tool</h1>
            <p>Creating an enabling environment for ...</p>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6 col-md-5 col-12">
          <div class="hero-media">
            <img src="/hero.png" alt="change" />
            <a class="video-play-trigger" data-fancybox href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><i class="icon icon-triangle-right-17-2"></i></a>
            <div class="media-shape animate-spin"><img src="/media-shape.png" alt="change" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-holder hero-shape" data-aos="fade-right" data-aos-once="true"><img src="/hero-orange-shape.svg" alt="change" /></div>
    </div>
    <Facts />
    <About />
    </Layout>
  )
}

export default Main

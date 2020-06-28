import React from "react"
import Layout from '../components/layout'
import Facts from '../components/facts'
import About from '../components/about'
import Faqs from '../components/faqs'

export default function Home() {
  return <Layout>
    <div class="hero-area position-relative">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-7 col-12">
          <div class="hero-content">
            <h1>Learn User Centered Design</h1>
            <p>Create custom landing pages with Shades that convert more visitors than any website—no coding required.</p>
            <div class="hero-btn"><a href="/" class="btn btn--orange btn--hover-shine">Get Started</a></div>
            <div class="rating">
              <div class="icon">
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star active"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="text">Trused by over 4,332 students</span>
            </div>
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
    <Faqs />
  </Layout>
}

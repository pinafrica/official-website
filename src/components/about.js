import React from 'react'
import Strategies from './strategies'

const About = () => {
    return (
        <section class="course-section position-relative">
            <div class="shape-holder">
                <img src="/section-2-shape-bg.svg" alt="" />
            </div>
            <div class="shape-holder" data-aos="zoom-in"  data-aos-once="true">
                <img src="/section-2-shape.svg" alt="" />
            </div>
            <div class="shape-holder course-shape-3" data-aos="zoom-in-left" data-aos-once="true">
                <img src="/course-yelloow-svg.svg" alt="" />
            </div>
            <div class="container pt-lg--85">
                <div class="accordion course-accordion" id="accordionExample" >
                    <Strategies />
                    <Strategies />
                </div>
            </div>
        </section>
    )
}

export default About
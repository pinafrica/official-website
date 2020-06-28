import React from 'react'

const Strategies = () => {
    return (
        <div class="card course-card"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div class="card-header" id="headingOne">
            <div class="row">
                <div class="col-xl-6 col-lg-7">
                    <div class="acc-left-content d-flex">
                        <div class="acc-icon">
                            <img src="/course-acc-icon.svg" alt="" />
                        </div>
                        <div class="acc-head-contents">
                            <h3>Mentorship programs</h3>
                            <p>Who are you developing for? How will they use this product? Building user personas can answer these.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5 offset-xl-2">
                    <div class="acc-right-content d-flex">
                        <div class="course-length-badge">
                            <span>6 Video Classes</span>
                            <span>3.4hrs</span>
                        </div>
                        <button class="btn acc-toggle" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i class="icon icon-minimal-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <ul class="course-inline-list">
                    <li><a href=""><i class="icon icon-check-2"></i>Persona Creation</a></li>
                    <li><a href=""><i class="icon icon-check-2"></i>Why Persona is Important</a></li>
                    <li><a href=""><i class="icon icon-check-2"></i>Data-Driven Personas</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Strategies
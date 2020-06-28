import React from 'react'

const Facts_Component = ({facts}) => {
    return (
        <div class="col-md-6 col-lg-3 mb--30" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div class="fact-card" >
                <div class="card-content">
                    <span class="number">12,382</span>
                    <p class="info">Happy Students</p>
                </div>
                <div class="card-icon">
                    <img src="/users-wm.png" alt="change" />
                </div>
            </div>
        </div>
    )
}

export default Facts_Component
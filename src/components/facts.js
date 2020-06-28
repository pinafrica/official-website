import React from 'react'
import Facts_Component from './facts-component'

const Facts = ({facts}) => {
    return (
        <section class="facts-section">
            <div class="container">
                <div class="position-relative">
                    <div class="fact-absolute">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-8 mb--35  text-center">
                                <span class="fact-text">The #1 User Experience Design course in the market</span>
                            </div>
                        </div>
                        <div class="row justify-content-center space-db--30">
                            <Facts_Component />
                            <Facts_Component />
                            <Facts_Component />
                            <Facts_Component />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts
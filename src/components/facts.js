import React from 'react'
import Facts_Component from './card-facts'

const Facts = ({facts}) => {
    return (
        <section class="facts-section">
            <div class="container">
                <div class="position-relative">
                    <div class="fact-absolute">
                        <div class="row justify-content-center space-db--30">
                            <Facts_Component />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts
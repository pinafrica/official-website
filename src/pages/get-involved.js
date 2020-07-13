import React from 'react'
import Layout from '../components/layout'
import Card from '../components/get-involved-card'

const Volunter = () => {
    return (
        <Layout>
            <div class='container'>
                <div class='intro'>
                    <h2>Get Involved</h2>
                    <span>Let's build an inclusive environment</span>
                </div>
                <div class='row margin-4m'>
                    <div class='col-xl-4 col-lg-6 col-12 about-intro'>
                        <img src='/hero.png' />
                    </div>
                    <div class='col-xl-8 col-lg-6 col-12'>
                        <h3>Become our Volunteer</h3>
                        <span>
                            Lorem Aenean nec quam efficitur, volutpat felis quis, commodo lacus. Morbi feugiat orci vel urna semper, 
                            ac tempus nunc luctus. Etiam quis placerat purus. Nulla fringilla varius lacus, eget eleifend sapien malesuada eget. 
                            Phasellus porta magna diam, ut accumsan massa semper in. Aliquam elit lectus, tincidunt eget vulputate vel, faucibus vitae elit. 
                            Donec sit amet quam facilisis, hendrerit lacus vitae, commodo dui. Nam consectetur ex nibh, id vulputate ex lacinia nec. 
                            Suspendisse nisi ante, luctus vel vestibulum in, commodo non dui. Suspendisse potenti. Nulla euismod lacus elit, vitae malesuada 
                            leo varius eu. Nam non quam posuere, facilisis augue sit amet, eleifend augue. In quis elit quis risus ornare tristique.
                        </span>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-xl-4 col-md-4 col-12 get-involved-card text-center col-md-6'>
                        <div class='svg get-involved'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        </svg>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Have a bit longer?</h5>
                            <p class="card-text">Become member today – say your word in our work. Together we are powerful.</p>
                        </div>
                    </div>
                    <div class='col-xl-4 col-md-4 col-12 get-involved-card text-center col-md-6'>
                        <div class='svg get-involved'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-watch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86A5.985 5.985 0 0 1 14 8a5.985 5.985 0 0 1-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"/>
                            <path d="M13.918 8.993A.502.502 0 0 0 14.5 8.5v-1a.5.5 0 0 0-.582-.493 6.044 6.044 0 0 1 0 1.986z"/>
                            <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Have an hour?</h5>
                            <p class="card-text">Become volunteer today – learn skills and meet
                                new friends. Help to support our goal.</p>
                        </div>
                    </div>
                    <div class='col-xl-4 col-md-4 col-12 get-involved-card text-center col-md-6'>
                        <div class='svg get-involved'>
                            <i class="fab fa-twitter white-text mr-4"> </i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Have a minute?</h5>
                            <p class="card-text">text</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Volunter
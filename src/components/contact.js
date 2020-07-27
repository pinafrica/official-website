import React from 'react'
import Button from '../components/button'
import Timer from '../components/timer'

const Contact = () => {
  return (
      <div class='container main-content'>
        <h2 class='text-center'>Pearl Impact Networks Africa</h2>
        <div class='row'>
            <div class='col-md-6 intro'>
                <Button class='btn' value='Our Site is Under Construction'/>
                <h1 class='margin-4px'>Coming soon</h1>
                <p class='margin-4px'>Pearl Impact Networks is an NGO promoting diversity and facilitating sustainable economic growth through innovation education,
                and mentorship programs. We are on a mission to prepare young people, especially females for the future of work and society, using technology as a tool for impact.
                </p>
            </div>
            <div class='col-md-6 clock-wrapper'>
                <Timer />
            </div>
        </div>
        <div class='row'>
            <div class='col-md-5'>
            <span>Subscribe to our new letters to be notified first</span>
                <form method="post" action="https://pinafrica.org/v1/api/contact-us">
                    <input type="text" class='subscribe' name="name" id="name" placeholder='Name'/>
                    <input type="text" class='subscribe' name="email" id="email" placeholder='Email' required/>
                    <Button class='btn' value='Subscribe' type="submit">Send</Button>
                </form>
            </div>
        </div>
      </div>
  )
}

export default Contact

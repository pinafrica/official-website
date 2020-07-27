import React from 'react'
import ParticlesComponent from '../components/particleComponent'
import Section from '../components/styles'

export default function Home() {
  return (
      <Section>
      <div class='page'>
        <ParticlesComponent />
        <div class='subscribed'>
            <h3>Thanks for Subscribing to Our News Letter</h3>
        </div>
      </div>
    </Section>  
  )
}

import React from 'react'
import Contact from '../components/contact'
import ParticlesComponent from '../components/particleComponent'
import Section from '../components/styles'

export default function Home() {
  return (
      <Section>
      <div class='page'>
        <ParticlesComponent />
        <Contact />
        <footer>
          <div class='text-center'>&copy; 2020 Copyright PINAFRICA</div>
        </footer>
      </div>
    </Section>  
  )
}

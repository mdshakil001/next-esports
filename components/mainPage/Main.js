import React from 'react'
import styles from '../../styles/Main.module.css'
import About from './About'
import Hero from './Hero'
import IconSlider from './IconSlider'
import Services from './Services'

const HomeComponent = () => {
  return (
    <div>
      <Hero />
      <IconSlider />
      <About />
      <Services />
    </div>
  )
}

export default HomeComponent
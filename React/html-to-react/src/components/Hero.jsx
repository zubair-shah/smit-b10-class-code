import React from 'react'
import img3 from '../assets/img/hero-300.png'
import img2 from '../assets/img/hero-838.png'
import img1 from '../assets/img/hero-1200.png'


function Hero() {
  return (
    
        <section id="hero">
        {/* <picture> */}
            {/* <source srcSet={img1} media="(min-width: 839px)" />
            <source srcSet={img2} media="(min-width: 425px)" /> */}
            <img src={img1} alt="" />
        {/* </picture> */}
    </section>

  )
}

export default Hero
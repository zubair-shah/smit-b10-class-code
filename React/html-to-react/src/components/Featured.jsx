import React from 'react'
import img1 from "../assets/img/too-cool-1200.jpg"


export default function Featured() {
  return (
    <section id="featured">
        <h2>Featured Print</h2>

        <figure className="color6">
            <img
           src={img1} alt="Closeup of woman in sunglasses showing eyes, nose, and fingers over mouth." />

 
            <figcaption><a href="#">Too Cool for School</a></figcaption>
        </figure>
    </section>

  )
}

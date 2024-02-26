import React from 'react'
import img1 from '../assets/img/pop-art.jpg'
import img2 from '../assets/img/vivid.jpg'
import img3 from '../assets/img/music.jpg'
import img4 from '../assets/img/vehicles.jpg'
import img5 from '../assets/img/abstract.jpg'
import img6 from '../assets/img/landscape.jpg'

function Collections() {
  return (
    <section id="collections">
    <h2>Collections</h2>
    <ul>
        <li>
            <figure className="color7">
                <img src={img1} alt="Pop Art: This must be the place" />
                <figcaption><a href="#">Pop Art</a></figcaption>
            </figure>
        </li>
        <li>
            <figure className="color2">
                <img src={img2} alt="Abstract: grey and green squares." />
                <figcaption><a href="#">Abstract</a></figcaption>
            </figure>
        </li>
        <li>
            <figure className="color6">
                <img src={img3} alt="Tree on island in lake with purple sunrise." />
                <figcaption><a href="#">Vivid</a></figcaption>
            </figure>
        </li>
        <li>
            <figure className="color8">
                <img src={img4} alt="Music: guitar leaning against wall." />
                <figcaption><a href="#">Music</a></figcaption>
            </figure>
        </li>
        <li>
            <figure className="color4">
                <img src={img5} alt="Vehicles: 1930's car on street." />
                <figcaption><a href="#">Vehicles</a></figcaption>
            </figure>
        </li>
        <li>
            <figure className="color3">
                <img src={img6} alt="Landscape: moonrise over tree-covered mountains." />
                <figcaption><a href="#">Landscape</a></figcaption>
            </figure>
        </li>
    </ul>
</section>
  )
}

export default Collections
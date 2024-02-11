import React from 'react'
import facebook_icon from '../assets/img/facebook-icon.svg'
import insta_icon from '../assets/img/instagram-icon.svg'
function Footer() {
  return (
    <div className="footer">
    <footer>
        <div className="social">

            <h4>Stay Connected!</h4>
            <ul>
                <li>
                    <a href="https://www.facebook.com" target="_blank"><img src={facebook_icon} alt="Visit us at Facebook." /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank"><img src={insta_icon} alt="Visit us on Instagram." /></a>
                </li>
            </ul>

        </div>
        <address>
            Wall of Wonder <br />
            RBC Plaza<br />
            60 South 6th Street<br />
            Minneapolis, MN 55402
        </address>
    </footer>
</div>
  )
}

export default Footer
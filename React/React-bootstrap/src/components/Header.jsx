import React from 'react'
import { Link } from 'react-router-dom'
import headerlogo from '../assets/img/header-logo.svg'
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap/Button';
import NavScrollExample from '../components/Navbar'
function Header() {
  return (
    <div>
      <div className="header">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={headerlogo} alt="Wall of Wonder. Click for home." /></Link>
              </li>
              <li><a href="#">Collections</a></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Donate</a></li>
              <Button variant="contained"> Login</Button>
            </ul>
          </nav>
        </header>
      </div>
      <NavScrollExample />
    </div>
  )
}

export default Header
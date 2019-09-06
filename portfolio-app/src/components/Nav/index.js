import React from 'react'
// import { Link } from 'react-router-dom'
import './Nav.css'
import { Link } from 'react-scroll'


function Nav() {
    return (
        <div className="nav-container">
            <Link 
                to="homepage-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Home
            </Link>
            <Link 
                to="about-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                About
            </Link>
            <Link 
                to="contact-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contact
            </Link>
        </div>
    )
}

export default Nav
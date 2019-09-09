import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'


function Nav() {
    return (
        <div className="nav-container">
            <Link 
                to="about-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                About
            </Link>
            <Link 
                to="project-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Projects
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
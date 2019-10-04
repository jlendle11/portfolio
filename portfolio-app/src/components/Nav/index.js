import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import useDarkMode from "use-dark-mode"


function Nav() {
    
    const darkMode = useDarkMode(false);

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
            <button onClick={darkMode.toggle} className="night-mode-stuff">Night Mode</button>
        </div>
    )
}

export default Nav
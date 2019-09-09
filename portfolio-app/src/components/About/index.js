import React from 'react'
import me from '../Pictures/me.png'
import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-filler"/>
            <div className="about-header-img">
                <img
                    className='about-avi'
                    src={me}
                    alt="profile-pic">
                </img>
            </div>
            <p className="about-info">I am a software engineer, with skills in web development and coding software.
My professional focus is creating innovative computer apps and programs that help solve modern everyday problems.</p>
        </div>
    )
}

export default About
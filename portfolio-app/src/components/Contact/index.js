import React from 'react'
import './Contact.css'
import Sky from 'react-sky'
import Gitty from '../Pictures/Gitty.png'



function Contact() {
    return (
        <div className="contact-container">
            <Sky 
                style={{'height': '200px'}}
                images={{
                    /* FORMAT AS FOLLOWS */
                    0: "https://image.flaticon.com/icons/svg/174/174848.svg",  /* You can pass as many images as you want */
                    1: "https://image.flaticon.com/icons/svg/174/174855.svg",
                    2: "https://image.flaticon.com/icons/svg/174/174879.svg",
                    3: "https://image.flaticon.com/icons/svg/174/174857.svg",
                    4: "https://image.flaticon.com/icons/svg/174/174865.svg",
                    5: Gitty
                }}
                how={50} /* Pass the number of images Sky will render chosing randomly */
                time={50} /* time of animation */
                size={'50px'} /* size of the rendered images */
                background={'palettedvioletred'} /* color of background */
            />
            <div className="contact-filler"/>
            <a className="contact-links" href="github.com/jlendle11">Github</a>
            <a className="contact-links" href="https://www.linkedin.com/in/justinlendle/">Linkedin</a>
        </div>
    )
}

export default Contact
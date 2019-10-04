import React from 'react'
import './Contact.css'
import Sky from 'react-sky'
import Gitty from '../Pictures/Gitty.png'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'




function Contact() {
    return (
        <div className="contact-container">
            <Sky 
                style={{'height': '200px'}}
                images={{
                    0: "https://image.flaticon.com/icons/svg/174/174848.svg",  
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
            <ButtonToolbar className="link-holder">
                <Button variant="outline-dark">
                    <a className="contact-links" href="github.com/jlendle11">Github</a>
                </Button>
                <Button variant="outline-dark">
                    <a className="contact-links" href="https://www.linkedin.com/in/justinlendle/">Linkedin</a>
                </Button>
            </ButtonToolbar>
            <h1 className="email">Email: lendlejustin@gmail.com</h1>
        </div>
    )
}

export default Contact
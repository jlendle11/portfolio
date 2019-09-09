import React from 'react'
import './Project.css'
import Carousel from 'react-bootstrap/Carousel'
import Game from '../Pictures/Game.png'
import apiApp from '../Pictures/apiApp.gif'

function Project() {
    return (
        <div className="project-container">
           <Carousel>
               <Carousel.Item>
                   <img className="slide" src={Game} alt="first-project-pic"/>
                   <Carousel.Caption>
                       <h3>Attack of The Slime</h3>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className="slide" src={apiApp} alt="second-project-pic"/>
                   <Carousel.Caption>
                       <h3>Marvel API App</h3>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>
    )
}

export default Project
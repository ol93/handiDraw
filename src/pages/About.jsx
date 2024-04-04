import React from 'react'
import './About.css'
import logo from '../IconsHanddrawn/logo.png';


const About = () => {

 
  return (
    <div className="a-about">
      
      <div className='a-title'><img src={logo} alt="" />
    <h1>About</h1>
    
    </div>
    <div className="a-text">
      
      <p>For my first project I wanted to be creative. There is a lot of flashy sites out there nowadays.
        I wanted to try something different. In comes Handi Draw. Everything on the site (except for text) is handdrawn by me, as you can probably tell. Anyways, the goal was to create a fully funcitonal e-commerce website with a creative twist.
        I hope you enjoy the site! Thanks for visiting! FYI, this project is purely for educational purposes. 
        
      </p>

    </div></div>
  )
}

export default About
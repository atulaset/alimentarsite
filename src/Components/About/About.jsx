import React from 'react'
import './About.css'
import about_img from '../../assets/ats-about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>WHY ATS ?</h3>
        <p>Decades of Domain expertise across industries, Analytical Prowess and the ability to drive agility and scalability into Digital Transformation journeys, make us the preferred partner to marquee brands.</p>
        <h4>Integration with impact</h4>
        <p>We work as one team, bringing the right people, technology and experies together for you.</p>
        <h4>Sevice with perspecitve</h4>
        <p>We listen more than we talk, so we can understand your needs and offer tailored solutions.</p>
        <h4>Finding the unseen edge</h4>
        <p>With creativity, hard work and vision, we help clients discover waht's on the horizon.</p>
        <h4>Access to new paths</h4>
        <p>Our data-driven research and global reach allow clients to tap new opportunities.</p>
      </div>
    </div>
  )
}

export default About

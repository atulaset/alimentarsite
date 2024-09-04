import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
//import Campus from './Components/Campus/Campus'
//import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        {/* <Title subTitle='Our Services' title='What We Offer'/> */}
        <Title newSubTitle='What We Offer'/>
        <div className='bullet-points'>
        <p>
          <ul>
            <li>Encompassing various Geographies and Technologies in collaboration with MGS Technologies.</li>
            <li>Providing an array of Digital Transformation Solutions, Enterprise Solutions and Business Process Management Solutions to an array of clientele across the globe.</li>
            <li>300+ highly qualified and experienced Business Analytics, Domain/Functional Consultants, Technical Consultants and Project Management personnel</li>
            <li>State-of-the-art facility & IT infrastucture.</li>
            <li>Global customer footprint spanning across GCC, Europe, Africa, Asia-Pacific, Australia and India.</li>
          </ul>
        </p>
        </div>
        <Programs/>
        <About setPlayState={setPlayState}/>
        {/*<Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>*/}
        {/* <Title subTitle='TESTIMONIALS' title='What Our Client Says'/>
        <Testimonials/> */}
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.jpg'
const Hero = () => {
  return (
    // <div className='Container-fluid'>
        < div className='row'>
             {/* <div className='hero'>
      <div className='hero-left'> */}
            <div className='col-md-6 d-flex justify-content-center pt-5'>
            <div className='hero'>
            <div className='hero-left'>
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hand-hand-icon'>
                        <p>New</p>
                        <i class='bx bxs-hand'></i>
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                 <div>Latest Collections</div>
                 <i class='bx bx-up-arrow-alt'></i>
                </div>
            </div></div></div>
        
   
        {/* // <div className='hero-right'> */}
        <div className='col-md-6 pt-3'>
      <img src={hero} class="img-thumbnail" alt="..."/>
      </div>
      </div>
    //   </div>
    //  </div>
     
    //  </div>
  
    
  )
}

export default Hero

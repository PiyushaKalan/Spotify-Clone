import React from 'react'
import './navbar.css'
import social from "../../assets/images/social.png"
import home from "../../assets/images/home.png"
import search from "../../assets/images/search.png"
const Navbar = () => {
  return (
    <div className='nav'>
      <div className='main1'>
      <img src={social} className='img-logo'/>
      <div className='home-round'><div><img src={home} className='img-logo1'/></div></div>
      <div className='search-bar'>
<img src={search} className='img-logo2'/>

<p>What do you want to play?</p>

      </div>
      
      </div>
      <div className='main2'>
        <div>Premium</div>
        <div>Support</div>
        <div>Download</div>
        <div className='line'></div>
        <div className='font'>Install App</div>
        <div className='font'>Sign Up</div>
        

      </div>
      <button className='button-log'>Log in</button>
    </div>
  )
}

export default Navbar
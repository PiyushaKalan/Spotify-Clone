import React from 'react'
import './navbar.css'
import social from "../../assets/images/social.png"
import home from "../../assets/images/home.png"
import search from "../../assets/images/search.png"
import ahome from "../../assets/images/andr-home.png"
import aplus from "../../assets/images/plus-andr.png"
import alib from "../../assets/images/lib-andr.png"
import asearch from "../../assets/images/search-andr.png"
import alogo from "../../assets/images/logo-andr.png"
import puser from "../../assets/images/p-user.png"
const Navbar = () => {
  return (
    <><div className='nav'>
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
    
    <div className='upside-bar'>
      <div className="user-andr"><img src={puser}className='user-andr'/></div>
      <div className="andr-upside-tab" id='all-up-andr'>All</div>
      <div className="andr-upside-tab">Music</div>
      <div className="andr-upside-tab" id='podcast-andr'>Podcasts</div>
    </div>
    <div className="android-nav">
      <div className="home-andr"><img src={ahome} className='andr-img-nav' id='android-home-img' /></div>
      <div className="search-andr"><img src={asearch} className='andr-img-nav' id='android-search-img' /></div>
      <div className="your-library-andr"><img src={alib} className='andr-img-nav' id='android-lib-img' /></div>
      <div className="premium-andr"><img src={alogo} className='andr-img-nav' id='android-preminum-img' /></div>
      <div className="create"><img src={aplus} className='andr-img-nav' id='android-create-img' /></div>
    </div>
    </>
  )
}

export default Navbar
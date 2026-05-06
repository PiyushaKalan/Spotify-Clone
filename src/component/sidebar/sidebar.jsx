import React from 'react'
import './sidebar.css'
import Cards from './Cards'
const Sidebar = () => {
  const Text = ["Legal" , "Safety & Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility" ]
  return (
    <div className="SMContainer">
      <div className="sidebar-top-sec">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sidebar-middle-sec">
         <Cards heading="Create your first Playlist" subHeading="It's easy we'll help you" button="Create playlist"/>
         <Cards heading="Let's find some podcast to follow " subHeading="we'll keep you updated on new episodes" button="Browse podcasts"/>
         
      </div>
      <div className="sidebar-bottom-sec">
        <div className="sidebar-c1">
           {
           Text.map((ele) => {
            return(
              <p>{ele}</p>
            )
           })
           }
        </div>
        <div className="sidebar-c2">
            <p>Cookies</p>
           </div>
           <div className="sidebar-c2">
            <button>English</button>
           </div>
      </div>

    </div>
  )
}

export default Sidebar
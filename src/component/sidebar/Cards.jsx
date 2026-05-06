import React from 'react'
import './sidebar.css'
const Cards = ({heading,subHeading,button}) => {
  return (
    <div className='sidebar-middle-cards'>
       <h1>{heading}</h1>
       <p>{subHeading}</p>
       <button>{button}</button>
        </div>
  )
}

export default Cards
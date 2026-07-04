import React from 'react'
import './trend.css'
import TCard from '../tCard/tCard'
const Trend = ({setCurrentEle , setCurrentPage}) => {
  return (
    <div className='trend-main-containent'>
      <span>Recommended Songs</span>
      
      <TCard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle}/>
    </div>
    
  )
}

export default Trend
import React from 'react'
import './pArtist.css'
import ACard from '../aCard/aCard'
const PArtist = ({setCurrentPage, setCurrentEle}) => {
  return (
    <div className='PAContent trend-main-containent'>
      <span>Popular artists</span>
      <ACard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle}/>
    </div>
  )
}

export default PArtist
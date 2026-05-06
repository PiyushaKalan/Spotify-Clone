import React from 'react'
import './tCard.css'
import {TrendingCardData} from '../../config/config'
const TCard = ({setCurrentPage ,setCurrentEle}) => {
  return(
    <>
    <div className='trending-cards'>
    {
      TrendingCardData.map((ele, id)=>{
        return(
          <>
          <div key={id} onClick={()=>{
              setCurrentPage("musicSpecificPage")
              setCurrentEle(ele)
            }} className="card-container">
            <img src={ele.imgSrc} alt="images" />
            <div className="card-text-container"> 
              <h2>{ele.heading}</h2>
              <p>{ele.subHeading}</p>
            </div>
          
          </div>
          
          </>
        )
      })
    }
    </div>
    </>
  )
}

export default TCard
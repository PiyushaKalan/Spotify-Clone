import React from 'react'
import './aCard.css'
import {artistList} from '../../config/config'
const ACard = ({setCurrentPage, setCurrentEle}) => {
  return (
    <div className='artist-container'>
      {
        artistList.map((ele)=>{
          return(
            <div onClick={()=>{
              setCurrentPage("artistSpecificPage")
              setCurrentEle(ele)
            }} className='ACard'>
              <img src={ele.imgA} alt="image" />
              <div className="text-container">
                <h1>{ele.name}</h1>
              <p>Artist</p>
              </div>
               <span id='playButton'>
                  <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>\
                   </svg>
              </span>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default ACard
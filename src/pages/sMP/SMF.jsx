import React from 'react'

const SMF = ({currentEle}) => {
  return (
    <div>
        <img src={currentEle.imgSrc} alt="img" />
        <h1>{currentEle.heading}</h1>
        <h1>{currentEle.subHeading}</h1>
        <audio src={currentEle.musicFile}controls></audio>
    </div>
  )
}

export default SMF
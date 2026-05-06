import React from 'react'

const SAP = ({currentEle}) => {
  return (
    <div>
        <img src={currentEle.imgA} alt="img" />
        <h1>{currentEle.name}</h1>
    </div>
  )
}

export default SAP
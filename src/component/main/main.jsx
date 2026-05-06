import React, { useState } from 'react'
import './main.css'
import Trend from '../trend/trend'
import PArtist from '../pArtist/pArtist'
import SMF from '../../pages/sMP/SMF'
import SAP from '../../pages/sAP/SAP'
const Main = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentEle,setCurrentEle] = useState(null)
  return (
    <main className="main">
      {
        currentPage === "home" ? 
        <>
        <Trend setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage}/>
    <PArtist  setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage}/>
    </> : currentPage ==="musicSpecificPage" ?
     <>
     <SMF currentEle={currentEle}/>
     </> :
    currentPage === "artistSpecificPage" ? 
    <>
    <SAP currentEle={currentEle}/>
    </> : null
      }
      
      </main>
  )
}

export default Main
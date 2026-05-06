import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/navbar'
import Sidebar from './component/sidebar/sidebar'
import MainSection from './component/main/main'

function App() {
  return (
    <>
     <div className="mainContainer">
      <Navbar />
      <div className="main-section-content-container">
        <Sidebar />
        <MainSection />
      </div>
     </div>
    </>
  )
}

export default App
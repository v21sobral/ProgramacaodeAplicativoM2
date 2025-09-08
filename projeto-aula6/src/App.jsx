import { useState } from 'react'
import InfoCliente from './Components/InfoClient'
import './App.css'
import facetruqueLogo from './assets/images/Facetruque.png'
import shivaVideo from './assets/videos/Shiva_Meditando_no_Universo.mp4'

function App() {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={shivaVideo} type="video/mp4" />
        </video>
      </div>
      
      <div className="app-content">
        <img src={facetruqueLogo} className="logo" alt="Facetruque logo" />
        <InfoCliente />
      </div>
    </>
  )
}

export default App

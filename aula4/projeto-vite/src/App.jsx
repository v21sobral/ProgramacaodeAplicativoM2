import { useState } from 'react'
import './App.css'
import Mensagens from './components/Mensagens'
import InfoAluno from './components/infoAluno'
import CursosIformation from './components/CursosInformation'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Agora o bicho vai pegar</h1>
      <Mensagens/>
      <img src="https://v21sobral.github.io/images/victortrue.png" alt="Victor Sobral" />
      <InfoAluno/>
      <CursosIformation/>
    </>
  )
}

export default App

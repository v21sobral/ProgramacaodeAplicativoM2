import { useState } from 'react'
import './App.css'
import AdicionarDados from './components/CadastrarUsuarios'
import ListarDados from './components/ListarUsuarios'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>Cadastro de usuários</h1>
      <div className="app-content">
        <AdicionarDados />
        <hr />
        <ListarDados />

      </div>
    </>
  )
}

export default App

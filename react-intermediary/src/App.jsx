import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'


function App() {

  return (
    <>
      <div className ='App'>
        <Header/>
        <main className='Container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/servicos' element={<Servicos/>}/>
            <Route path='/sobre-nos' element={<SobreNos/>}/>
            <Route path='fale-conosco' element={<FaleConosco/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
      
    </>
  )
}

export default App

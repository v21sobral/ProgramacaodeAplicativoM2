// src\components\Header\index.jsx

import { NavLink, Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/ResidentSecurity.svg'


function Header() {
  return (
    <header className="header">
      <div className="header_wrap">
        <Link to='/' className='brand'>
          <img src={logo} alt="Logo da empresa" className='logo'/>
          <span>Resident Security</span>
        </Link>

        <nav className='nav'>
          <NavLink to='/servicos' className={({ isActive }) => isActive ? 'link active' : 'link'}>
            Serviços
          </NavLink>
          <NavLink to='/sobre-nos' className={({ isActive }) => isActive ? 'link active' : 'link'}>
            Sobre Nós
          </NavLink>
          <NavLink to='/fale-conosco' className={({ isActive }) => isActive ? 'link active' : 'link'}>
            Fale Conosco
          </NavLink>
        </nav>
      </div> {/* Fechar a div header_wrap */}
    </header>
  );
}

export default Header
    